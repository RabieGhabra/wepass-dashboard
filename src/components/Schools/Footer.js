import iconRight from "../../assets/icons/Vector (3).png";
function Footer() {
  const ActionItem = ({ text, icon, width }) => (
    <div
      className={`d-flex align-items-center w-100 flex-nowrap rounded-pill justify-content-${icon ? "between" : "center"
        }`}
      style={{
        maxWidth: width,
        height: "50px",
        padding: "0 14px",
        border: "1px solid transparent",
        background:
          "linear-gradient(#1D1D1D) padding-box, linear-gradient(180deg, #117B98 -7%, #121414 65%) border-box",
        boxShadow: "0px 0px 20px #0000008C",
        cursor: icon ? "default" : "pointer",
      }}
    >
      <span className="fw-medium text-white fs-6">
        {text}
      </span>
      {icon && (
        <img
          src={icon}
          alt="icon"
          style={{ width: "12px", height: "6px", cursor: "pointer" }}
        />
      )}
    </div>
  );
  return (
    <div
      className="d-flex justify-content-between align-items-center flex-wrap gap-3 m-3"
      style={{ rowGap: "16px" }}
    >
      {/* Left: Per Page */}
      <ActionItem text="10 per page" icon={iconRight} width="174px" />
      {/* Pagination */}
      <div className="d-flex align-items-center gap-2 flex-wrap">
        {/* Active */}
        <div
          className="d-flex align-items-center justify-content-center text-white fw-medium rounded-circle"
          style={{
            width: "50px",
            height: "50px",
            fontSize: "14px",
            border: "1px solid transparent",
            background:
              "linear-gradient(#1D1D1D) padding-box, linear-gradient(180deg, #117B98 -7%, #121414 65%) border-box",
            boxShadow: "0px 0px 20px #0000008C",
            cursor: "pointer",
          }}
        >
          1
        </div>
        {[2, 3, 4, 5, 6].map((num) => (
          <div
            key={num}
            className="d-flex align-items-center justify-content-center text-white fw-medium rounded-circle"
            style={{
              width: "50px",
              height: "50px",
              background: "#070707",
              fontSize: "14px",
              cursor: "pointer",
            }}
          >
            {num}
          </div>
        ))}
      </div>
      {/* Right: Next */}
      <ActionItem text="Next" width="91px" />
    </div>
  );
}
export default Footer;