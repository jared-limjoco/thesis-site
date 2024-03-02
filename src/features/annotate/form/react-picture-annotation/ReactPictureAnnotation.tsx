// eslint-disable-next-line no-use-before-define
import React, { MouseEventHandler } from "react";
import Router from "next/router";

import { IAnnotation } from "./Annotation";
import { IAnnotationState } from "./annotation/AnnotationState";
import { DefaultAnnotationState } from "./annotation/DefaultAnnotationState";
import DefaultInputSection from "./DefaultInputSection";
import {
  defaultShapeStyle,
  IShape,
  IShapeBase,
  IShapeStyle,
  RectShape,
} from "./Shape";
import Transformer, { ITransformer } from "./Transformer";
import P from "ui/heading/p";
import H2 from "ui/heading/h2";
import H3 from "ui/heading/h3";

interface IReactPictureAnnotationProps {
  annotationData?: IAnnotation[];
  selectedId?: string | null;
  scrollSpeed: number;
  marginWithInput: number;
  onChange: (annotationData: IAnnotation[]) => void;
  onSelect: (id: string | null) => void;
  width: number;
  height: number;
  image: string;
  annotationStyle: IShapeStyle;
  defaultAnnotationSize?: number[];
  username: String;
  imageID: String;
  currentAnnotationCount: number;
  inputElement: (
    value: string,
    onChange: (value: string) => void,
    onDelete: () => void,
    onSelectObstruction: (value: string) => void,
    onUnselectObstruction: (value: string) => void,
    editable: boolean,
    selected: boolean
  ) => React.ReactElement;
}

interface IStageState {
  scale: number;
  originX: number;
  originY: number;
}

const defaultState: IStageState = {
  scale: 1,
  originX: 0,
  originY: 0,
};

export default class ReactPictureAnnotation extends React.Component<IReactPictureAnnotationProps> {
  public static defaultProps = {
    marginWithInput: 10,
    scrollSpeed: 0.0005,
    annotationStyle: defaultShapeStyle,
    inputElement: (
      value: string,
      onChange: (value: string) => void,
      onDelete: () => void,
      onSelectObstruction: () => void,
      onUnselectObstruction: () => void,
      editable: boolean,
      selected: boolean
    ) => (
      <DefaultInputSection
        value={value}
        onChange={onChange}
        onDelete={onDelete}
        onSelectObstruction={onSelectObstruction}
        onUnselectObstruction={onUnselectObstruction}
        editable={editable}
        selected={selected}
      />
    ),
  };

  public state = {
    inputPosition: {
      left: 0,
      top: 0,
    },
    showInput: false,
    inputComment: "",
    editable: false,
    selected: false,
    sliderValue: 5,
    pavementType: "",
  };

  set selectedId(value: string | null) {
    const { onSelect } = this.props;
    this.selectedIdTrueValue = value;
    onSelect(value);
  }

  get selectedId() {
    return this.selectedIdTrueValue;
  }

  get annotationStyle() {
    return this.props.annotationStyle;
  }

  get defaultAnnotationSize() {
    return this.props.defaultAnnotationSize;
  }

  public shapes: IShape[] = [];
  public scaleState = defaultState;
  public currentTransformer: ITransformer;

  private currentAnnotationData: IAnnotation[] = [];
  private selectedIdTrueValue: string | null;
  private canvasRef = React.createRef<HTMLCanvasElement>();
  private canvas2D?: CanvasRenderingContext2D | null;
  private imageCanvasRef = React.createRef<HTMLCanvasElement>();
  private imageCanvas2D?: CanvasRenderingContext2D | null;
  private currentImageElement?: HTMLImageElement;
  private currentAnnotationState: IAnnotationState = new DefaultAnnotationState(
    this
  );

  public componentDidMount = () => {
    const currentCanvas = this.canvasRef.current;
    const currentImageCanvas = this.imageCanvasRef.current;
    if (currentCanvas && currentImageCanvas) {
      this.setCanvasDPI();

      this.canvas2D = currentCanvas.getContext("2d");
      this.imageCanvas2D = currentImageCanvas.getContext("2d");
      this.onImageChange();
    }

    this.syncAnnotationData();
    this.syncSelectedId();
  };

  public componentDidUpdate = (preProps: IReactPictureAnnotationProps) => {
    const { width, height, image } = this.props;
    if (preProps.width !== width || preProps.height !== height) {
      this.setCanvasDPI();
      this.onShapeChange();
      this.onImageChange();
    }
    if (preProps.image !== image) {
      this.cleanImage();
      if (this.currentImageElement) {
        this.currentImageElement.src = image;
      } else {
        this.onImageChange();
      }
    }

    // this.syncAnnotationData();
    this.syncSelectedId();
  };

  public calculateMousePosition = (positionX: number, positionY: number) => {
    const { originX, originY, scale } = this.scaleState;
    return {
      positionX: (positionX - originX) / scale,
      positionY: (positionY - originY) / scale,
    };
  };

  public calculateShapePosition = (shapeData: IShapeBase): IShapeBase => {
    const { originX, originY, scale } = this.scaleState;
    const { x, y, width, height } = shapeData;
    return {
      x: x * scale + originX,
      y: y * scale + originY,
      width: width * scale,
      height: height * scale,
    };
  };

  public render() {
    const { width, height, inputElement } = this.props;
    const {
      showInput,
      inputPosition,
      inputComment,
      editable,
      selected,
      sliderValue,
    } = this.state;

    return (
      <section className="annotation-container">
        <H2 className="my-4 annotation-step-text">
          {" "}
          <span>Step 1: Identify Obstruction</span>
        </H2>
        <P className="my-4 mx-5">
          In this step, we want to identify objects{" "}
          <span className="font-bold">only on the sidewalk surface. </span>
          Please{" "}
          <span className="font-bold">
            click on the white boxes and select &quot;Yes&quot;{" "}
          </span>
          if the object {" "}
          <span className="font-bold">
            blocks the pathway {" "}
          </span>
          for a pedestrian to easily walk along the sidewalk. If there are other objects
          in the sidewalk that you think are an obstruction,{" "}
          <span className="font-bold">draw a box and label the object </span>by
          clicking and dragging your mouse from the top left to the bottom
          right.{" "}
          <span className="font-bold">
            If there are no obstructions on the sidewalk, or if there are no sidewalks found on the image, feel free to move
            forward to the next step.
          </span>
        </P>
        {/* Annotation Tool */}
        <div className="rp-container">
          <div className="rp-stage">
            <canvas
              style={{ width, height }}
              className="rp-image"
              ref={this.imageCanvasRef}
              width={width * 2}
              height={height * 2}
            />
            <canvas
              className="rp-shapes"
              style={{ width, height }}
              ref={this.canvasRef}
              width={width * 2}
              height={height * 2}
              onMouseDown={this.onMouseDown}
              onMouseMove={this.onMouseMove}
              onMouseUp={this.onMouseUp}
              onMouseLeave={this.onMouseLeave}
            />
            {showInput && (
              <div className="rp-selected-input" style={inputPosition}>
                {inputElement(
                  inputComment,
                  this.onInputCommentChange,
                  this.onDelete,
                  this.onSelectObstruction,
                  this.onUnSelectObstruction,
                  editable,
                  selected
                )}
              </div>
            )}
          </div>
          <div className="rp-annotations">
            <div className="rp-annotations-list">
              <H3 className>
                <span className="text-2xl">Selected Obstructions</span>
              </H3>
              <div className="annotation-instruction">
                <p>
                  These are the objects you identified to be a sidewalk
                  obstruction.
                </p>
              </div>
              <ul>
                {this.currentAnnotationData
                  .sort((a, b) => a.id.localeCompare(b.id))
                  .map((data) => {
                    if (!data.editable && data.selected) {
                      return (
                        <li className="flex flex-row ml-5" key={data.id}>
                          <p>
                            <a
                              className="cursor-pointer transition ease-in-out duration-300 hover:bg-red-700 px-2 py-1 "
                              onClick={() => {
                                this.selectedId = data.id;
                                this.onUnSelectObstruction();
                              }}
                            >
                              x
                            </a>
                            <span
                              className="uppercase"
                              onClick={(e) => {
                                this.currentAnnotationState.onMouseDown(
                                  data.mark.x + 1,
                                  data.mark.y + 1
                                );
                                this.currentAnnotationState.onMouseUp();
                              }}
                            >
                              {data.comment.replaceAll("_", " ")}
                            </span>
                          </p>
                        </li>
                      );
                    } else {
                      return <div />;
                    }
                  })}
              </ul>
            </div>
            <div className="rp-annotations-list">
              <H3 className>
                {" "}
                <span className="text-2xl">New Obstructions</span>
              </H3>
              <div className="annotation-instruction">
                <p>These are the objects that you have drawn yourself.</p>
              </div>
              <ul>
                {this.currentAnnotationData
                  .sort((a, b) => a.id.localeCompare(b.id))
                  .map((data) => {
                    if (data.editable) {
                      return (
                        <li
                          className="flex flex-row ml-5"
                          onClick={(e) => {
                            this.currentAnnotationState.onMouseUp();
                            this.currentAnnotationState.onMouseDown(
                              data.mark.x + 1,
                              data.mark.y + 1
                            );
                            this.currentAnnotationState.onMouseUp();
                          }}
                          key={data.id}
                        >
                          <p>
                            <a
                              className="cursor-pointer transition ease-in-out duration-300 hover:bg-red-700 px-2 py-1 "
                              onClick={() => {
                                this.selectedId = data.id;
                                this.onDelete();
                              }}
                            >
                              x
                            </a>
                            <span
                              className="uppercase"
                              onClick={(e) => {
                                this.currentAnnotationState.onMouseDown(
                                  data.mark.x + 1,
                                  data.mark.y + 1
                                );
                                this.currentAnnotationState.onMouseUp();
                              }}
                            >
                              {data.comment !== undefined
                                ? data.comment.replaceAll("_", " ")
                                : "Select Option"}
                            </span>
                          </p>
                        </li>
                      );
                    } else {
                      return <div />;
                    }
                  })}
              </ul>
            </div>
          </div>
        </div>

        {/* RP Form */}
        <div className="rp-form my-10">
          {/* Slider Form */}
          <H2 className="annotation-step-text">
            <span>Step 2: Rate Sidewalk Accessibility</span>
          </H2>
          <P className="my-4 mx-5">
            In this step, please rate the sidewalk accessibility based on your
            understanding of sidewalk accessibility. A score of 1 means that {" "}
            <span className="font-bold">
              there is no sidewalk,
            </span>
            {" "}or {" "}
            <span className="font-bold">
              the sidewalk on the image is completely
              unsafe and inaccessible for both abled pedestrians and persons with
              physical disabilities (PWPDs).{" "}
            </span>
            On the other hand, a score of 10
            means that {" "}
            <span className="font-bold">
              the sidewalk is safe and accessible for
              both abled pedestrians and PWPDs.{" "}
            </span>

          </P>
          <div className="slider-forms">
            <div className="slider-div">
              <fieldset>
                <div className="rp-slider">
                  <span className="range-slider-value" id="slider-value">
                    Your accessibility rating: {sliderValue}
                  </span>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    step="1"
                    defaultValue={sliderValue}
                    list="sliderValueList"
                    id="accessibilityScore"
                    onChange={(e) => {
                      this.setState({
                        ...this.state,
                        sliderValue: e.target.valueAsNumber,
                      });
                    }}
                  />

                  <datalist id="sliderValueList">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </datalist>
                </div>
              </fieldset>
            </div>
            <div className="slider-description">
              <p className="text-xl">Dangerous and inaccessible</p>
              <p className="text-xl">Safe and accessible even for PWD&apos;s</p>
            </div>
          </div>
          {/* Radio Form */}

          <div className="radio-forms">
            <H2 className="annotation-step-text">
              <span>Step 3: Choose the Surface Type</span>
            </H2>
            <P className="my-4 mx-5">
              Lastly, please choose the surface type that <b>best describes the
                sidewalk </b> found in the image.
            </P>
            <fieldset className="grouped_radio">
              <label className="radio-control" htmlFor="smooth_paving">
                <p className="radio-label">Smooth Surface</p>
                <input
                  type="radio"
                  name="radio1"
                  id="smooth_paving"
                  value="smooth_paving"
                  onChange={(e) => {
                    this.setState({
                      ...this.state,
                      pavementType: e.target.value,
                    });
                  }}
                />
                <img src="/images/annotationTool/smooth_paving.png"></img>
              </label>
              <label className="radio-control" htmlFor="rough_paving">
                <p className="radio-label">Rough Surface</p>
                <input
                  type="radio"
                  name="radio1"
                  id="rough_paving"
                  value="rough_paving"
                  onChange={(e) => {
                    this.setState({
                      ...this.state,
                      pavementType: e.target.value,
                    });
                  }}
                />
                <img src="/images/annotationTool/rough_paving.jpg"></img>
              </label>
              <label className="radio-control" htmlFor="slippery_paving">
                <p className="radio-label">Tile/Slippery Surface</p>
                <input
                  type="radio"
                  name="radio1"
                  id="slippery_paving"
                  value="slippery_paving"
                  onChange={(e) => {
                    this.setState({
                      ...this.state,
                      pavementType: e.target.value,
                    });
                  }}
                />
                <img src="/images/annotationTool/tile_slippery_sidewalk.jpg"></img>
              </label>
              <label className="radio-control" htmlFor="no_sidewalk">
                <p className="radio-label">No Sidewalk</p>
                <input
                  type="radio"
                  name="radio1"
                  id="no_sidewalk"
                  value="no_sidewalk"
                  onChange={(e) => {
                    this.setState({
                      ...this.state,
                      pavementType: e.target.value,
                    });
                  }}
                />
                <img src="/images/annotationTool/no_sidewalk.png"></img>
              </label>
            </fieldset>
            <p className="text-center mt-10">
              {this.surfaceTypeText(this.state.pavementType)}
            </p>
          </div>

          <div className="flex justify-center my-12">
            <button
              className="annotation-submit-btn border duration-100 transition-all ease-in-out shadow-lg hover:shadow-sm"
              type="submit"
              onClick={this.submit}
            >
              Submit
            </button>
          </div>
        </div>
      </section>
    );
  }

  private submit = async () => {
    // isLoading(true);

    const username = this.props.username;
    const selectedObjects = this.currentAnnotationData.filter(
      (element) => !element.editable && element.selected
    );
    const selectedObjectsID = [];
    for (let i = 0; i < selectedObjects.length; i++) {
      selectedObjectsID.push(selectedObjects[i].id);
    }
    const newObjects = this.currentAnnotationData.filter(
      (element) => element.editable
    );

    const body = {
      username: username,
      imageID: this.props.imageID,
      accessibilityRating: this.state.sliderValue,
      pavementType: this.state.pavementType,
      selectedObjectsID: selectedObjectsID,
      newObjects: newObjects,
    };
    const res = await fetch("/api/annotationSubmit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (res.status === 200) {
      const newCount =
        parseInt(localStorage.getItem("annotationCurrentCount")) + 1;
      window.localStorage.setItem(
        "annotationCurrentCount",
        JSON.stringify(newCount)
      );
      Router.reload();
      window.scrollTo(0, 0);
      // Add ui to indicate sucessful submission
    } else {
      // isLoading(false);
      // Insert Error stuff
    }
  };

  public setAnnotationState = (annotationState: IAnnotationState) => {
    this.currentAnnotationState = annotationState;
  };

  public selectAnnotation = (data) => {
    for (const item of this.shapes) {
      const isSelected = item.getAnnotationData().id === data.id;
      const { x, y, height } = item.paint(
        this.canvas2D,
        this.calculateShapePosition,
        isSelected
      );

      if (isSelected) {
        if (!this.currentTransformer) {
          this.currentTransformer = new Transformer(
            item,
            this.scaleState.scale
          );
        }

        this.currentTransformer.paint(
          this.canvas2D,
          this.calculateShapePosition,
          this.scaleState.scale
        );

        this.setState({
          showInput: true,
          inputPosition: {
            left: x,
            top: y + height + this.props.marginWithInput,
          },
          inputComment: item.getAnnotationData().comment || "",
          editable: false,
          selected: item.getAnnotationData().selected,
        });
      }
    }
    this.currentAnnotationData = this.shapes.map((item) =>
      item.getAnnotationData()
    );
    const { onChange } = this.props;
    onChange(this.currentAnnotationData);
  };

  public onShapeChange = () => {
    if (this.canvas2D && this.canvasRef.current) {
      this.canvas2D.clearRect(
        0,
        0,
        this.canvasRef.current.width,
        this.canvasRef.current.height
      );

      let hasSelectedItem = false;

      for (const item of this.shapes) {
        const isSelected = item.getAnnotationData().id === this.selectedId;
        const { x, y, height } = item.paint(
          this.canvas2D,
          this.calculateShapePosition,
          isSelected
        );

        if (isSelected) {
          if (!this.currentTransformer) {
            this.currentTransformer = new Transformer(
              item,
              this.scaleState.scale
            );
          }

          hasSelectedItem = true;

          this.currentTransformer.paint(
            this.canvas2D,
            this.calculateShapePosition,
            this.scaleState.scale
          );

          this.setState({
            showInput: true,
            inputPosition: {
              left: x,
              top: y + height + this.props.marginWithInput,
            },
            inputComment: item.getAnnotationData().comment || "",
            editable: item.getAnnotationData().editable || false,
            selected: item.getAnnotationData().selected || false,
          });
        }
      }

      if (!hasSelectedItem) {
        this.setState({
          showInput: false,
          inputComment: "",
          editable: false,
          selected: false,
        });
      }
    }
    this.currentAnnotationData = this.shapes.map((item) =>
      item.getAnnotationData()
    );
    const { onChange } = this.props;
    onChange(this.currentAnnotationData);
  };

  private syncAnnotationData = () => {
    const { annotationData } = this.props;
    const refreshShapesWithAnnotationData = () => {
      this.selectedId = null;
      this.shapes = annotationData.map(
        (eachAnnotationData) =>
          new RectShape(
            eachAnnotationData,
            this.onShapeChange,
            this.annotationStyle
          )
      );
      this.onShapeChange();
    };
    for (const annotationDataItem of annotationData) {
      const targetShape = this.shapes.find(
        (item) => item.getAnnotationData().id === annotationDataItem.id
      );
      if (targetShape && targetShape.equal(annotationDataItem)) {
        continue;
      } else {
        refreshShapesWithAnnotationData();
        break;
      }
    }
  };

  private syncSelectedId = () => {
    const { selectedId } = this.props;

    if (selectedId && selectedId !== this.selectedId) {
      this.selectedId = selectedId;
      this.onShapeChange();
    }
  };

  private onDelete = () => {
    const deleteTarget = this.shapes.findIndex(
      (shape) => shape.getAnnotationData().id === this.selectedId
    );

    if (deleteTarget >= 0) {
      if (this.shapes[deleteTarget].getAnnotationData().editable) {
        this.shapes.splice(deleteTarget, 1);
        this.onShapeChange();
      }
    }
  };

  private onSelectObstruction = () => {
    const selectTarget = this.shapes.findIndex(
      (shape) => shape.getAnnotationData().id === this.selectedId
    );

    if (selectTarget >= 0) {
      if (!this.shapes[selectTarget].getAnnotationData().editable) {
        this.shapes[selectTarget].getAnnotationData().selected = true;
        this.onShapeChange();
      }
    }
    this.currentAnnotationState.onMouseDown(-1, -1);
    this.currentAnnotationState.onMouseUp();
  };

  private onUnSelectObstruction = () => {
    const selectTarget = this.shapes.findIndex(
      (shape) => shape.getAnnotationData().id === this.selectedId
    );

    if (selectTarget >= 0) {
      if (!this.shapes[selectTarget].getAnnotationData().editable) {
        this.shapes[selectTarget].getAnnotationData().selected = false;
        this.onShapeChange();
      }
    }

    this.currentAnnotationState.onMouseDown(-1, -1);
    this.currentAnnotationState.onMouseUp();
  };

  private setCanvasDPI = () => {
    const currentCanvas = this.canvasRef.current;
    const currentImageCanvas = this.imageCanvasRef.current;
    if (currentCanvas && currentImageCanvas) {
      const currentCanvas2D = currentCanvas.getContext("2d");
      const currentImageCanvas2D = currentImageCanvas.getContext("2d");
      if (currentCanvas2D && currentImageCanvas2D) {
        currentCanvas2D.scale(2, 2);
        currentImageCanvas2D.scale(2, 2);
      }
    }
  };

  private onInputCommentChange = (comment: string) => {
    const selectedShapeIndex = this.shapes.findIndex(
      (item) => item.getAnnotationData().id === this.selectedId
    );
    this.shapes[selectedShapeIndex].setComment(comment);
    this.setState({ inputComment: comment });
  };

  private cleanImage = () => {
    if (this.imageCanvas2D && this.imageCanvasRef.current) {
      this.imageCanvas2D.clearRect(
        0,
        0,
        this.imageCanvasRef.current.width,
        this.imageCanvasRef.current.height
      );
    }
  };

  private onImageChange = () => {
    this.cleanImage();
    if (this.imageCanvas2D && this.imageCanvasRef.current) {
      if (this.currentImageElement) {
        const { originX, originY, scale } = this.scaleState;
        this.imageCanvas2D.drawImage(
          this.currentImageElement,
          originX,
          originY,
          this.currentImageElement.width * scale,
          this.currentImageElement.height * scale
        );
      } else {
        const nextImageNode = document.createElement("img");
        nextImageNode.addEventListener("load", () => {
          this.currentImageElement = nextImageNode;
          const { width, height } = nextImageNode;
          const imageNodeRatio = height / width;
          const { width: canvasWidth, height: canvasHeight } = this.props;
          const canvasNodeRatio = canvasHeight / canvasWidth;
          if (!isNaN(imageNodeRatio) && !isNaN(canvasNodeRatio)) {
            if (imageNodeRatio < canvasNodeRatio) {
              const scale = canvasWidth / width;
              this.scaleState = {
                originX: 0,
                originY: (canvasHeight - scale * height) / 2,
                scale,
              };
            } else {
              const scale = canvasHeight / height;
              this.scaleState = {
                originX: (canvasWidth - scale * width) / 2,
                originY: 0,
                scale,
              };
            }
          }
          this.onImageChange();
          this.onShapeChange();
        });
        nextImageNode.alt = "";
        nextImageNode.src = this.props.image;
      }
    }
  };

  private onMouseDown: MouseEventHandler<HTMLCanvasElement> = (event) => {
    const { offsetX, offsetY } = event.nativeEvent;
    const { positionX, positionY } = this.calculateMousePosition(
      offsetX,
      offsetY
    );
    this.currentAnnotationState.onMouseDown(positionX, positionY);
  };

  private onMouseMove: MouseEventHandler<HTMLCanvasElement> = (event) => {
    const { offsetX, offsetY } = event.nativeEvent;
    const { positionX, positionY } = this.calculateMousePosition(
      offsetX,
      offsetY
    );
    this.currentAnnotationState.onMouseMove(positionX, positionY);
  };

  private onMouseUp: MouseEventHandler<HTMLCanvasElement> = () => {
    this.currentAnnotationState.onMouseUp();
  };

  private onMouseLeave: MouseEventHandler<HTMLCanvasElement> = () => {
    this.currentAnnotationState.onMouseLeave();
  };

  public onMouseDownHack(positionX, positionY) {
    console.log("simulate click");
    this.currentAnnotationState.onMouseUp();
    this.currentAnnotationState.onMouseDown(positionX, positionY);
    this.currentAnnotationState.onMouseUp();
  }

  private surfaceTypeText = (surfaceType) => {
    switch (surfaceType) {
      case "no_sidewalk":
        return "There is no sidewalk found in the image.";
      case "rough_paving":
        return "Rough surfaces are craggy, irregular, and are usually broken in various spots on the surface";
      case "smooth_paving":
        return "Smooth surfaces are evenly balanced, made of solid material, and do not contain any cracks or irregularities";
      case "slippery_paving":
        return "Tiled/Slippery surfaces are put together using different segments of flooring and become hazardous and slippery when wet.";
    }
    return "";
  };

  private sliderValueText = (sliderValue) => {
    //   switch (sliderValue) {
    //     case 1:
    //       return "This sidewalk is completely unsafe and inaccessible for both abled pedestrians and PWPDs";
    //     case 2:
    //       return "This sidewalk is very unsafe for all pedestrians";
    //     case 3:
    //       return "This sidewalk is inconvenient for all pedestrians";
    //     case 4:
    //       return "This sidewalk is nearly acceptable for all pedestrians";
    //     case 5:
    //       return "This sidewalk is adequate for all pedestrians ";
    //     case 6:
    //       return "This sidewalk is unsafe for PWPDs ";
    //     case 7:
    //       return "This sidewalk is inconvenient for PWPDs";
    //     case 8:
    //       return "This sidewalk is accessible and safe for PWPDs";
    //     case 9:
    //       return "This sidewalk only has minor issues for PWPDs";
    //     case 10:
    //       return "This sidewalk has no accessibility nor safety issues for both abled pedestrians and PWPDs";
    //     default:
    //       return "Sidewalk Accessibility is inclusive to people with disabilities. ";
    //   }
    // };
    // Rate the sidewalk found on the image based on your understanding of sidewalk accessibility.
    // A score of 1 means that there is no sidewalk or the sidewalk in the image is completely unsafe
    // and inaccessible for both abled pedestrians and persons with physical disabilities. On the other
    // hand, a score of 10 means that the sidewalk has no accessibility nor safety issues for both abled pedestrians and PWPDs
    const message =
      "Rate the sidewalk found on the image based on your understanding of sidewalk accessibility. A score of 1 means that there is no sidewalk or the sidewalk in the image is completely unsafe and inaccessible for both abled pedestrians and persons with physical disabilities (PWPDs). On the other hand, a score of 10 means that the sidewalk has no accessibility nor safety issues for both abled pedestrians and PWPDs";
    return message;
  };
}
