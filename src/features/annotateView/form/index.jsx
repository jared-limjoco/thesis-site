import { ReactPictureAnnotation } from "./react-picture-annotation/index";

export default function AnnotateForm({
  selectedObjects,
  newObjects,
  detectedObjects,
  url,
  id,
}) {
  const onSelect = (selectedId) => {};
  const onChange = (data) => {};

  const annotObjects = newObjects;
  for (let i = 0; i < detectedObjects.length; i++) {
    for (let x = 0; x < selectedObjects.length; x++) {
      if (selectedObjects[x] === detectedObjects[i].id) {
        annotObjects.push(detectedObjects[i]);
      }
    }
  }

  return (
    <div className="px-5">
      <ReactPictureAnnotation
        image={url}
        onSelect={onSelect}
        onChange={onChange}
        width={640 * 1.5}
        height={400 * 1.5}
        annotationData={annotObjects}
        imageID={id}
        city={city}
        currentAnnotationCount={0}
        username={"test"}
      />
    </div>
  );
}
