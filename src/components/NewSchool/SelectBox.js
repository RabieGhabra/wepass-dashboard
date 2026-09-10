import { Card } from "reactstrap";
import iconRight from "../../assets/icons/Vector (3).png";
function SelectBox({ label, placeholder, onClick }) {
  return (
    <div>
      {/* LABEL */}
      <p className="mt-3 text-white fw-semibold">
        {label}
      </p>
      {/* CARD */}
      <Card
        className="px-3"
        style={{
          background: "#1A1A1A",
          height: "50px",
          borderRadius: "16px",
        }}
      >
        <div className="d-flex align-items-center justify-content-between h-100">
          {/* LEFT */}
          <span style={{ color: "#818181" }}>
            {placeholder}
          </span>
          {/* RIGHT ICON (ONLY CLICKABLE) */}
          <img
            src={iconRight}
            alt=""
            style={{ cursor: "pointer" }}
            onClick={onClick}
          />
        </div>
      </Card>
    </div>
  );
}
export default SelectBox;