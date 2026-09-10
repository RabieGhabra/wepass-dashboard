import { Container, Table, Badge } from "reactstrap";
function ApprovalsCard() {
  const rows = [
    { type: "Competition", name: "Term 2 Rewards", school: "Al Noor School", impact: "+120 vouchers" },
    { type: "Allocation", name: "Starbucks Offer", school: "Greenwood", impact: "+50 seats" },
    { type: "Ad-hoc Voucher", name: "Teacher Request", school: "Horizon", impact: "3 vouchers" },
    { type: "Allocation", name: "Starbucks Offer", school: "Greenwood", impact: "+50 seats" },
  ];
  return (
    <>
      <style>
        {`
        .approvals-table,
        .approvals-table td,
        .approvals-table th,
        .approvals-table tr {
          color: #FFFFFF !important;
        }
        .approval-badge {
          background-color: #C98C4F !important;
        }
        .approval-cell {
          padding: 18px 24px !important;
          font-size: 15px;
        }
        .view-btn-wrapper{
          width:155px;
          height:39px;
          border-radius:20px;
          padding:1px;
          background:linear-gradient(115.81deg,#117B98 24.54%,#121212 56.63%);
        }
        .view-btn-inner{
          width:100%;
          height:100%;
          border-radius:20px;
          font-size:14px;
          background:#100C0C; 
        }
        /* Tablet */
        @media (max-width: 992px) {
          .approval-cell{
            padding:14px 16px !important;
            font-size:14px;
          }
          .approval-badge{
            width:70px;
            height:32px;
            font-size:13px;
          }
        }
        /* Mobile */
        @media (max-width: 576px) {
          .approval-header{
            flex-direction:column;
            align-items:flex-start;
          }
          .view-btn-wrapper{
            width:100%;
            max-width:220px;
          }
          .approval-cell{
            padding:12px !important;
            font-size:13px;
            white-space:nowrap;
          }
          .approval-badge{
            width:65px;
            height:30px;
            font-size:12px;
          }
        }
        `}
      </style>
      <Container
        fluid
        className="rounded-4 d-flex flex-column"
        style={{
          background: `linear-gradient(#100C0C, #100C0C) padding-box,
                       linear-gradient(171.44deg, #FFFFFF 12.84%, #121212 77.61%) border-box`,
          border: "1px solid transparent",
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 m-3">
          <h3 className="text-white m-0">Pending Approvals</h3>
          <div className="d-flex align-items-center justify-content-center view-btn-wrapper">
            <div className="d-flex align-items-center justify-content-center fw-semibold text-white view-btn-inner">View all approvals</div>
          </div>
        </div>
        {/* Table */}
        <div className="mx-3 mb-3" style={{ overflowX: "auto" }}>
          <Table borderless responsive className="align-middle mb-0 approvals-table">
            <tbody>
              {/* Header Row */}
              <tr style={{ height: "70px" }}>
                <td
                  className="approval-cell text-white"
                  style={{
                    backgroundColor: "#161616",
                    borderTopLeftRadius: "20px",
                    borderBottomLeftRadius: "20px",
                  }}
                >
                  Type
                </td>
                <td className="approval-cell text-white" style={{ backgroundColor: "#161616" }}>
                  Name
                </td>
                <td className="approval-cell text-white" style={{ backgroundColor: "#161616" }}>
                  School
                </td>
                <td className="approval-cell text-white" style={{ backgroundColor: "#161616" }}>
                  Impact
                </td>
                <td
                  className="approval-cell text-white"
                  style={{
                    backgroundColor: "#161616",
                    borderTopRightRadius: "20px",
                    borderBottomRightRadius: "20px",
                  }}
                >
                  Status
                </td>
              </tr>
              {/* Data Rows */}
              {rows.map((row, index) => {
                const rowColor = index % 2 === 0 ? "#070707" : "#161616";
                return (
                  <tr key={index} style={{ height: "70px" }}>
                    <td
                      className="approval-cell text-white"
                      style={{
                        backgroundColor: rowColor,
                        borderTopLeftRadius: "20px",
                        borderBottomLeftRadius: "20px",
                      }}
                    >
                      {row.type}
                    </td>
                    <td className="approval-cell text-white" style={{ backgroundColor: rowColor }}>
                      {row.name}
                    </td>
                    <td className="approval-cell text-white" style={{ backgroundColor: rowColor }}>
                      {row.school}
                    </td>
                    <td className="approval-cell text-white" style={{ backgroundColor: rowColor }}>
                      {row.impact}
                    </td>
                    <td
                      className="approval-cell text-white"
                      style={{
                        backgroundColor: rowColor,
                        borderTopRightRadius: "20px",
                        borderBottomRightRadius: "20px",
                      }}
                    >
                      <Badge
                        pill
                        className="d-flex align-items-center justify-content-center fw-semibold text-white approval-badge"
                        style={{
                          border: "none",
                          width: "79px",
                          height: "35px",
                          borderRadius: "20px",
                          fontSize: "14px",
                        }}
                      >
                        Review
                      </Badge>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </Container>
    </>
  );
}
export default ApprovalsCard;