import { Container, Table, Badge } from "reactstrap";
import school1 from "../../assets/icons/Rectangle 139307.png";
import school2 from "../../assets/icons/Rectangle 139307 (1).png";
import school3 from "../../assets/icons/Rectangle 139307 (2).png";
import outlineType from "../../assets/icons/Frame (1).png";
function SchoolsCard() {
  const rows = [
    { type: "14k", textLeft: "Al Noor School", impact: "84%", icon: school1, typeIcon: outlineType },
    { type: "10k", textLeft: "Bright Future School", impact: "60%", icon: school2, typeIcon: outlineType },
    { type: "5k", textLeft: "Foundation School", impact: "50%", icon: school3, typeIcon: outlineType },
  ];
  return (
    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <Container
        fluid
        className="schools-card-container d-flex flex-column p-3 text-white"
        style={{
          background: `linear-gradient(#100C0C, #100C0C) padding-box,
                 linear-gradient(171.44deg, #FFFFFF 12.84%, #121212 77.61%) border-box`,
          border: "1px solid transparent",
          borderRadius: "20px",
          overflow: "hidden",
        }}
      >
        <h4
          className="schools-card-title my-3"
          style={{ color: "#fff", fontSize: "18px" }}
        >
          Top Consuming Schools
        </h4>

        <div className="d-flex flex-column flex-grow-1">
          <Table
            borderless
            responsive
            className="mb-0"
            style={{
              borderCollapse: "separate",
              borderSpacing: "0 12px",
              backgroundColor: "transparent",
            }}
          >
            <tbody>
              {rows.map((row, index) => (
                <tr key={index}>
                  <td
                    colSpan="4"
                    className="p-0"
                    style={{ border: "none", backgroundColor: "transparent" }}
                  >
                    <div
                      className="school-row d-flex justify-content-end align-items-center flex-wrap"
                      style={{
                        backgroundColor: "#161616",
                        color: "#fff",
                        borderRadius: "16px",
                        padding: "20px 10px",
                        width: "100%",
                      }}
                    >
                      {/* LEFT SIDE */}
                      <div
                        className="school-left d-flex align-items-center flex-grow-1"
                        style={{ gap: "10px", minWidth: "120px" }}
                      >
                        <img
                          src={row.icon}
                          alt="icon"
                          style={{ objectFit: "contain", width: "40px", height: "40px" }}
                        />
                        <span className="fw-semibold" style={{ fontSize: "14px" }}>
                          {row.textLeft}
                        </span>
                      </div>
                      {/* RIGHT SIDE */}
                      <div className="school-right d-flex align-items-center flex-wrap" style={{ gap: "10px" }}>
                        {/* BADGE WITH GRADIENT */}
                        <Badge
                          className="d-flex justify-content-center align-items-center"
                          style={{
                            background:
                              "radial-gradient(72.41% 173.78% at 57.59% 65.52%, #117B98 0%, #062832 100%)",
                            width: "59px",
                            height: "29px",
                            borderRadius: "20px",
                            fontSize: "0.75rem",
                            padding: 0,
                            border: "none",
                          }}
                        >
                          {row.impact}
                        </Badge>
                        {/* OUTLINE BOX WITH FIXED ROUNDED BORDER */}
                        <div
                          className="d-flex align-items-center justify-content-center"
                          style={{
                            width: "70px",
                            height: "29px",
                            borderRadius: "20px",
                            padding: "0 10px",
                            background: "#121212",
                            border: "1px solid transparent",
                            backgroundImage: `
                              linear-gradient(#121212, #121212),
                              linear-gradient(115.81deg, #117B98 24.54%, #121212 56.63%)
                            `,
                            backgroundOrigin: "border-box",
                            backgroundClip: "padding-box, border-box",
                            gap: "6px",
                            fontSize: "12px",
                          }}
                        >
                          <img
                            src={row.typeIcon}
                            alt="type icon"
                            width="14"
                            height="14"
                            style={{ objectFit: "contain" }}
                          />
                          {row.type}
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  );
}
export default SchoolsCard;