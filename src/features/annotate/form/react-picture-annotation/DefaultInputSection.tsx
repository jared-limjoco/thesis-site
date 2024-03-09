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
          <option value="car">Car</option>
          <option value="construction_materials">Construction Materials</option>
          <option value="cracked_pavement">Cracked Pavement</option>
          <option value="garbage">Garbage</option>
          <option value="lamp_post">Lamp Post</option>
          <option value="motorcycle">Motorcycle</option>
          <option value="potted_plant">Potted Plant</option>
          <option value="street_sign">Street Sign</option>
          <option value="street_vendor_cart">Street Vendor Cart</option>
          <option value="tree">Tree</option>
          <option value="tricycle">Tricycle</option>
          <option value="utility_post">Utility Post</option>
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
    case "car":
      return "Car";
    case "construction_materials":
      return "Construction Materials";
    case "cracked_pavement":
      return "Cracked Pavement";
    case "garbage":
      return "Garbage";
    case "lamp_post":
      return "Lamp Post";
    case "motorcycle":
      return "Motorcycle";
    case "potted_plant":
      return "Potted Plant";
    case "street_sign":
      return "Street Sign";
    case "street_vendor_cart":
      return "Street Vendor Cart";
    case "tree":
      return "Tree";
    case "tricycle":
      return "Tricycle";
    case "utility_post":
      return "Utility Post";
  }
};

export default DefaultInputSection;
