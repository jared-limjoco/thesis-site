import DeleteButton from "./DeleteButton";

export interface IDefaultInputSection {
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
  onDelete: () => void;
  onSelectObstruction: () => void;
  onUnselectObstruction: () => void;
  editable: boolean;
  selected: boolean;
}

const DefaultInputSection = ({
  value,
  onChange,
  onDelete,
  onSelectObstruction,
  onUnselectObstruction,
  editable,
  selected,
}: IDefaultInputSection) => (
  <>
    {editable ? (
      <div className="rp-default-input-section">
        <select
          name="cars"
          id="cars"
          className="rp-default-input-section_input"
          value={value || "---"}
          onChange={(e) => onChange(e.target.value)}
        >
          <option value="---" disabled>
            Select your option
          </option>
          <option value="bench">Bench</option>
          <option value="bicycle">Bicycle</option>
          <option value="car">Car</option>
          <option value="construction_materials">Construction Materials</option>
          <option value="curb_ramp">Curb Ramp</option>
          <option value="cracked_pavement">Cracked Pavement</option>
          <option value="fire_hydrant">Fire Hydrant</option>
          <option value="lamp_post">Lamp Post</option>
          <option value="motorcycle">Motorcycle</option>
          <option value="parking_meter">Parking Meter</option>
          <option value="stop_sign">Stop Sign</option>
          <option value="street_sign">Street Sign</option>
          <option value="street_vendor_stand">Street Vendor Stand</option>
          <option value="traffic_light">Traffic Light</option>
          <option value="tree">Tree</option>
          <option value="tricycle">Tricycle</option>
          <option value="utility_post">Utility Post</option>
          <option value="others">Others</option>
        </select>
        <a
          className="rp-default-input-section_select yes"
          onClick={() => onSelectObstruction()}
        >
          ✓
        </a>
        <a
          className="rp-default-input-section_delete"
          onClick={() => onDelete()}
        >
          <DeleteButton />
        </a>
      </div>
    ) : (
      <div className="rp-default-select-section">
        {selected ? (
          <>
            <p>You selected {translateValue(value)} as an obstruction.</p>
            <div>
              <a
                className={
                  selected
                    ? "rp-default-input-section_select no"
                    : "rp-default-input-section_select no"
                }
                onClick={() => onUnselectObstruction()}
              >
                Remove
              </a>
            </div>
          </>
        ) : (
          <>
            <p>Is {translateValue(value)} an obstruction?</p>
            <div>
              <a
                className={
                  selected
                    ? "rp-default-input-section_select yes"
                    : "rp-default-input-section_select yes"
                }
                onClick={() => onSelectObstruction()}
              >
                {/* <DeleteButton /> */}
                Yes
              </a>
              <a
                className={
                  selected
                    ? "rp-default-input-section_select no"
                    : "rp-default-input-section_select no"
                }
                onClick={() => onUnselectObstruction()}
              >
                No
              </a>
            </div>
          </>
        )}
      </div>
    )}
  </>
);

const translateValue = (value) => {
  switch (value) {
    case "bench":
      return "Bench";
    case "bicycle":
      return "Bicycle";
    case "car":
      return "Car";
    case "construction_materials":
      return "Construction Materials";
    case "curb_ramp":
      return "Curb Ramp";
    case "cracked_pavement":
      return "Cracked Pavement";
    case "fire_hydrant":
      return "Fire Hydrant";
    case "lamp_post":
      return "Lamp Post";
    case "motorcycle":
      return "Motorcycle";
    case "parking_meter":
      return "Parking Meter";
    case "stop_sign":
      return "Stop Sign";
    case "street_sign":
      return "Street Sign";
    case "street_vendor_stand":
      return "Street Vendor Stand";
    case "traffic_light":
      return "Traffic Light";
    case "tree":
      return "Tree";
    case "tricycle":
      return "Tricycle";
    case "utility_post":
      return "Utility Post";
  }
};

export default DefaultInputSection;
