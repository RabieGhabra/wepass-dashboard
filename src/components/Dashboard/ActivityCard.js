import { Container, Table } from "reactstrap";
import approvedIcon from "../../assets/icons/Rectangle 139313.png";
import uploadIcon from "../../assets/icons/Rectangle 139314.png";
import rejectedIcon from "../../assets/icons/Rectangle 139314 (1).png";
import arrowRight from "../../assets/icons/Frame (12).png";
import topImage1 from "../../assets/icons/qlementine-icons_check-tick-16.png";
import topImage2 from "../../assets/icons/Vector (2).png";
import topImage3 from "../../assets/icons/Frame (13).png";
function ActivityCard() {
  const rows = [
    {
      rightText: "2 hrs ago",
      leftTop: "Competition Approved",
      leftBottom: "Al Noor",
      leftIcon: approvedIcon,
      topIcon: topImage1,
    },
    {
      rightText: "3 hrs ago",
      leftTop: "Students points uploaded",
      leftBottom: "Future Leaders",
      leftIcon: uploadIcon,
      topIcon: topImage2,
    },
    {
      rightText: "3 hrs ago",
      leftTop: "Voucher request rejected",
      leftBottom: "Bright Horizon",
      leftIcon: rejectedIcon,
      topIcon: topImage3,
    },
  ];
  return (
    <Container
      fluid
      className="w-100 h-100 text-white d-flex flex-column rounded-4 overflow-hidden p-0 border border-transparent"
      style={{
        background: `linear-gradient(#100C0C, #100C0C) padding-box,
                 linear-gradient(171.44deg, #FFFFFF 12.84%, #121212 77.61%) border-box`,
      }}
    >
      <h3 className="m-3 text-white">Recent Activity</h3>
      <div className="overflow-auto mx-3 mb-3 flex-grow-1 d-flex flex-column">
        <Table
          borderless
          responsive
          className="align-middle mb-0 flex-grow-1"
          style={{
            borderCollapse: "separate",
            borderSpacing: "0 15px",
          }}
        >
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td colSpan="5" className="p-0 border-0 bg-transparent">
                  <div
                    className="text-white rounded-4 p-3 px-4 d-flex justify-content-between align-items-center w-100 flex-wrap gap-2"
                    style={{ backgroundColor: "#161616" }}
                  >
                    {/* LEFT SIDE */}
                    <div className="d-flex align-items-center">
                      <div
                        className="position-relative me-3"
                        style={{ width: "40px", height: "40px" }}
                      >
                        <img
                          src={row.leftIcon}
                          alt="left icon"
                          className="w-100 h-100"
                          style={{ borderRadius: "10px", objectFit: "cover" }}
                        />
                        <img
                          src={row.topIcon}
                          alt="top icon"
                          className="position-absolute top-50 start-50 translate-middle"
                        />
                      </div>
                      <div className="d-flex gap-4">
                        <span className="fw-semibold" style={{ fontSize: "15px" }}>
                          {row.leftTop}
                        </span>
                        <span style={{ fontSize: "14px", opacity: 0.7 }}>
                          {row.leftBottom}
                        </span>
                      </div>
                    </div>
                    {/* RIGHT SIDE */}
                    <div className="d-flex align-items-center gap-2 flex-shrink-0">
                      <img
                        src={arrowRight}
                        alt="right icon"
                        style={{ width: "26px", height: "26px" }}
                      />
                      <span className="fw-semibold" style={{ fontSize: "15px" }}>
                        {row.rightText}
                      </span>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
}
export default ActivityCard;