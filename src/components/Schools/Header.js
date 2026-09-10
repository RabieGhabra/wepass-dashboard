import { useState } from "react";
import searchIcon from "../../assets/icons/Frame (11).png";
import iconFilter from "../../assets/icons/Frame (14).png";
import iconExport from "../../assets/icons/Frame (15).png";
import iconAdd from "../../assets/icons/Frame (16).png";
function Header({ setPage }) {
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = () => console.log("Search:", searchValue);
  const handleFilter = () => console.log("Filter clicked");
  const handleExport = () => console.log("Export clicked");
  const handleAdd = () => setPage("newSchool");
  const ActionButton = ({ label, icon, onClick, className }) => (
    <button
      onClick={onClick}
      className={`btn rounded-pill shadow d-flex align-items-center justify-content-evenly flex-nowrap gap-2 ${className}`}
      style={{
        height: "50px",
        border: "1px solid transparent",
        background:
          "linear-gradient(#1D1D1D) padding-box, linear-gradient(180deg, #117B98 -7%, #121414 65%) border-box",
        boxShadow: "0px 0px 20px #0000008C",
      }}
    >
      <img src={icon} alt={label} />
      <span className="fw-medium text-white fs-6">{label}</span>
    </button>
  );
  return (
    <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 m-3">
      <div className="d-flex align-items-center flex-wrap gap-2 flex-grow-1">
        <div
          className="d-flex align-items-center justify-content-between rounded-pill px-3 bg-black flex-grow-1"
          style={{
            maxWidth: "350px",
            height: "50px",
            border: "1px solid #818181",
          }}
        >
          <img src={searchIcon} alt="search" />
          <input
            type="text"
            placeholder="Search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="w-100 bg-transparent text-white border-0"
            style={{ outline: "none", fontSize: "16px" }}
          />
        </div>
        <ActionButton label="Filters" icon={iconFilter} onClick={handleFilter} className="px-4" />
        <ActionButton label="Export" icon={iconExport} onClick={handleExport} className="px-4" />
      </div>
      <ActionButton
        label="Add New School"
        icon={iconAdd}
        onClick={handleAdd}
        className="px-4"
      />
    </div>
  );
}
export default Header;