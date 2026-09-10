import { Table, Badge } from "reactstrap";
import saudiIcon from "../../assets/icons/image 28.png";
import voucherIcon from "../../assets/icons/Frame (1).png";
import viewIcon from "../../assets/icons/Frame (17).png";
import editIcon from "../../assets/icons/Frame (18).png";
import deleteIcon from "../../assets/icons/Frame (19).png";
import school1 from "../../assets/icons/Rectangle 139307.png";
import school2 from "../../assets/icons/Rectangle 139307 (1).png";
import school3 from "../../assets/icons/Rectangle 139307 (2).png";
function SchoolsTable() {
  const rows = [
    { school: "Al Noor School", city: "Riyadh", students: "10,900" },
    { school: "Future Leaders", city: "Jeddah", students: "11,929" },
    { school: "Bright Horizon", city: "Dammam", students: "8,277" },
    { school: "Al Falah Modern", city: "Riyadh", students: "25,000" },
    { school: "Knowledge Gate", city: "Khobar", students: "12,000" },
    { school: "Global Vision", city: "Jeddah", students: "10,900" },
    { school: "Aspire Scholars", city: "Riyadh", students: "6,900" },
    { school: "Pioneers International", city: "Riyadh", students: "5,500" },
    { school: "Elite Pathways", city: "Riyadh", students: "8,000" },
  ];
  const cellBase = { color: "#fff" };
  const iconStyle = { cursor: "pointer" };
  const outlineBadge = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "73px",
    height: "35px",
    borderRadius: "20px",
    fontWeight: 700,
    fontSize: "14px",
    color: "#02AC55",
    background:
      "linear-gradient(#121212, #121212) padding-box, linear-gradient(115.81deg, #02AC55 24.54%, #121212 56.63%) border-box",
    border: "1px solid transparent",
  };
  const voucherBadge = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    height: "35px",
    borderRadius: "20px",
    fontWeight: 700,
    fontSize: "14px",
    color: "#fff",
    background:
      "radial-gradient(72.41% 173.78% at 57.59% 65.52%, #117B98 0%, #062832 100%)",
  };
  const getCellPadding = (index) => {
    if (index === 0) return { padding: "10px 0 10px 20px" };
    if (index === 7) return { padding: "10px 20px 10px 0" };
    return { padding: "10px 0" };
  };
  const centerCols = [4, 5, 6];
  return (
    <div className="w-100 px-2 px-md-3 mb-3">
      <div className="w-100 overflow-auto">
        <Table
          borderless
          className="align-middle mb-0 w-100"
          style={{
            borderCollapse: "separate",
            borderSpacing: "0 6px",
            minWidth: "1000px",
          }}
        >
          <colgroup>
            <col style={{ width: "280px" }} />
            <col style={{ width: "140px" }} />
            <col style={{ width: "200px" }} />
            <col style={{ width: "140px" }} />
            <col style={{ width: "160px" }} />
            <col style={{ width: "220px" }} />
            <col style={{ width: "110px" }} />
            <col style={{ width: "90px" }} />
          </colgroup>
          <tbody>
            {/* HEADER */}
            <tr style={{ height: "60px" }}>
              {[
                "School Name",
                "City",
                "Country",
                "Students",
                "Subscription",
                "Vouchers",
                "Status",
                "Actions",
              ].map((head, i) => {
                const isFirst = i === 0;
                const isLast = i === 7;
                const isCenter = centerCols.includes(i);
                return (
                  <td
                    key={i}
                    className="text-white fw-semibold"
                    style={{
                      backgroundColor: "#161616",
                      fontSize: "16px",
                      borderTop: "1px solid #818181",
                      borderBottom: "1px solid #818181",
                      borderLeft: isFirst ? "1px solid #818181" : "none",
                      borderRight: isLast ? "1px solid #818181" : "none",
                      borderTopLeftRadius: isFirst ? "20px" : "0",
                      borderBottomLeftRadius: isFirst ? "20px" : "0",
                      borderTopRightRadius: isLast ? "20px" : "0",
                      borderBottomRightRadius: isLast ? "20px" : "0",
                      textAlign: isCenter ? "center" : "left",
                      ...getCellPadding(i),
                    }}
                  >
                    {head}
                  </td>
                );
              })}
            </tr>
            {/* ROWS */}
            {rows.map((row, index) => {
              const rowColor = index % 2 === 0 ? "#070707" : "#161616";
              let img = school1;
              if (index === 1) img = school2;
              if (index === 2) img = school3;
              return (
                <tr key={index} style={{ height: "60px" }}>  
                  <td
                    style={{
                      ...cellBase,
                      backgroundColor: rowColor,
                      borderTopLeftRadius: "20px",
                      borderBottomLeftRadius: "20px",
                      ...getCellPadding(0),
                    }}
                  >
                    <div className="d-flex align-items-center gap-2">
                      <img src={img} alt="school" style={{ width: "50px", height: "35px" }} />
                      {row.school}
                    </div>
                  </td>
                  <td style={{ ...cellBase, backgroundColor: rowColor }}>
                    {row.city}
                  </td>
                  <td style={{ ...cellBase, backgroundColor: rowColor }}>
                    <div className="d-flex align-items-center gap-1">
                      <img src={saudiIcon} alt="Saudi Arabia" />
                      Saudi Arabia
                    </div>
                  </td>
                  <td style={{ ...cellBase, backgroundColor: rowColor }}>
                    {row.students}
                  </td>
                  <td style={{ ...cellBase, backgroundColor: rowColor, textAlign: "center" }}>
                    <Badge style={outlineBadge}>Paid</Badge>
                  </td>
                  <td style={{ ...cellBase, backgroundColor: rowColor, textAlign: "center" }}>
                    <Badge style={voucherBadge}>
                      <img src={voucherIcon} alt="voucher" />
                      9,000
                    </Badge>
                  </td>
                  <td style={{ ...cellBase, backgroundColor: rowColor, textAlign: "center" }}>
                    <Badge style={outlineBadge}>Active</Badge>
                  </td>
                  <td
                    style={{
                      ...cellBase,
                      backgroundColor: rowColor,
                      borderTopRightRadius: "20px",
                      borderBottomRightRadius: "20px",
                    }}
                  >
                    <div className="d-flex align-items-center gap-3">
                      <img src={viewIcon} alt="view" style={iconStyle} />
                      <img src={editIcon} alt="edit" style={iconStyle} />
                      <img src={deleteIcon} alt="delete" style={iconStyle} />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
export default SchoolsTable;