import React from "react";
import { Nav, NavItem } from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/images/Group 77004.png";
import IconDashboard from "../../assets/icons/Vector.png";
import IconCompetitions from "../../assets/icons/Frame.png";
import IconRewards from "../../assets/icons/Frame (1).png";
import IconExperience from "../../assets/icons/Frame (2).png";
import IconLeaderboard from "../../assets/icons/Frame (3).png";
import IconPartners from "../../assets/icons/Frame (4).png";
import IconSchools from "../../assets/icons/Frame (5).png";
import IconUsers from "../../assets/icons/Frame (6).png";
import IconApprovals from "../../assets/icons/Frame (7).png";
import IconReports from "../../assets/icons/Frame (8).png";
import IconSettings from "../../assets/icons/Frame (9).png";
import IconLogout from "../../assets/icons/Frame (10).png";
function Sidebar({ toggleSidebar }) {
  const location = useLocation();
  const links = [
    { path: "/", label: "Dashboard", icon: IconDashboard },
    { path: "#", label: "Competitions", icon: IconCompetitions },
    { path: "#", label: "Rewards & Vouchers", icon: IconRewards },
    { path: "#", label: "Experience Offers", icon: IconExperience },
    { path: "#", label: "Leaderboards", icon: IconLeaderboard },
    { path: "#", label: "Partners & Stores", icon: IconPartners },
    { path: "/schools", label: "Schools", icon: IconSchools },
    { path: "#", label: "Users & Roles", icon: IconUsers },
    { path: "#", label: "Approvals", icon: IconApprovals },
    { path: "#", label: "Reports", icon: IconReports },
    { path: "#", label: "Settings", icon: IconSettings },
  ];
  const textStyle = {
    fontWeight: 600,
    fontSize: "16px",
    color: "#FFFFFF",
  };
  const handleLinkClick = (link) => {
    if (link.path && link.path !== "#") {
      if (link.path === "/schools") {
        window.dispatchEvent(new Event("goToSchoolsMain"));
      }
      if (toggleSidebar) toggleSidebar();
    }
  };
  return (
    <div
      className="bg-dark border border-info rounded-4 p-3 m-2 d-flex flex-column"
      style={{ height: "98%", width: "260px" }}
    >
      {toggleSidebar && (
        <div className="d-md-none text-end mb-2">
          <button
            onClick={toggleSidebar}
            style={{
              background: "none",
              border: "none",
              color: "#fff",
              fontSize: "24px",
              cursor: "pointer",
            }}
          >
            ✕
          </button>
        </div>
      )}
      <div className="text-center mb-4 mt-2">
        <img src={Logo} alt="Logo" className="img-fluid" style={{ width: "120px" }} />
      </div>
      <Nav vertical className="flex-grow-1">
        {links.map((link, index) => {
          const isActive = location.pathname === link.path;
          return (
            <NavItem key={index} className="mb-2">
              {link.path && link.path !== "#" ? (
                <Link
                  to={link.path}
                  onClick={() => handleLinkClick(link)}
                  className="d-flex align-items-center text-decoration-none text-white px-3"
                  style={{
                    height: "54px",
                    borderRadius: "16px",
                    gap: "12px",
                    transition: "0.3s",
                    ...(isActive && {
                      background:
                        "radial-gradient(124.96% 706.59% at 92% 529.63%, #117B98 55.77%, #AADBCE 100%)",
                      backdropFilter: "blur(150px)",
                    }),
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "radial-gradient(124.96% 706.59% at 92% 529.63%, #117B98 55.77%, #AADBCE 100%)";
                    e.currentTarget.style.backdropFilter = "blur(150px)";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.backdropFilter = "none";
                    }
                  }}
                >
                  <img
                    src={link.icon}
                    alt=""
                    style={{ width: "22px", height: "22px", objectFit: "contain" }}
                  />
                  <span style={textStyle}>{link.label}</span>
                </Link>
              ) : (
                <div
                  className="d-flex align-items-center text-white px-3"
                  style={{
                    height: "54px",
                    borderRadius: "16px",
                    gap: "12px",
                    cursor: "pointer",
                    transition: "0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "radial-gradient(124.96% 706.59% at 92% 529.63%, #117B98 55.77%, #AADBCE 100%)";
                    e.currentTarget.style.backdropFilter = "blur(150px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.backdropFilter = "none";
                  }}
                  onClick={() => console.log(`${link.label} clicked`)}
                >
                  <img
                    src={link.icon}
                    alt=""
                    style={{ width: "22px", height: "22px", objectFit: "contain" }}
                  />
                  <span style={textStyle}>{link.label}</span>
                </div>
              )}
            </NavItem>
          );
        })}
        <div className="mt-auto">
          <NavItem className="mt-4">
            <div
              className="d-flex align-items-center text-white px-3"
              style={{
                height: "54px",
                borderRadius: "16px",
                cursor: "pointer",
                gap: "12px",
                transition: "0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  "radial-gradient(124.96% 706.59% at 92% 529.63%, #117B98 55.77%, #AADBCE 100%)";
                e.currentTarget.style.backdropFilter = "blur(150px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.backdropFilter = "none";
              }}
              onClick={() => console.log("Logout clicked")}
            >
              <img
                src={IconLogout}
                alt="logout"
                style={{ width: "22px", height: "22px", objectFit: "contain" }}
              />
              <span style={textStyle}>Log Out</span>
            </div>
          </NavItem>
        </div>
      </Nav>
    </div>
  );
}
export default Sidebar;