import waveformImg from "../../assets/images/waveform.png";
import topIcon from "../../assets/icons/Vector (1).png";
function VoucherChart() {
  const stats = [
    { label: "Total Allocated", value: "4000" },
    { label: "Used", value: "3023" },
    { label: "Remaining", value: "977" },
  ];
  return (
    <div
      className="d-flex flex-column flex-fill overflow-hidden h-100 rounded-4"
      style={{
        background: "linear-gradient(to top, #121212 40%, #117B98 100%)",
        padding: "2px",
      }}
    >
      {/* Header */}
      <div className="w-100 d-flex flex-wrap justify-content-between align-items-center pt-4 px-3 gap-2">
        <span className="fw-semibold text-white fs-4">
          Voucher Allocation
        </span>
        {/* Top Partner Button */}
        <div
          className="d-flex rounded-pill"
          style={{
            padding: "1px",
            background: "linear-gradient(115.81deg, #FFFFFF 24.54%, #121212 56.63%)",
            width: "fit-content",
          }}
        >
          <div
            className="d-flex align-items-center rounded-pill"
            style={{
              gap: "6px",
              background: "#100C0C",
              padding: "6px 12px",
              width: "fit-content",
            }}
          >
            <span className="text-white fw-semibold text-nowrap fs-6">
              Top Partner
            </span>
            <img src={topIcon} alt="icon" style={{ width: "8px", height: "4px", cursor: "pointer" }} />
          </div>
        </div>
      </div>
      {/* Chart */}
      <div className="d-flex justify-content-center px-3" style={{ padding: "10px 0" }}>
        <img
          src={waveformImg}
          alt="Voucher Chart"
          className="w-100"
          style={{
            height: "300px",
            objectFit: "contain",
          }}
        />
      </div>
      {/* Stats */}
<div className="d-flex flex-wrap justify-content-center row g-2 px-3 pb-4 text-center stats-row">
  <style>{`
    .stats-row .col-12 {
      flex: 0 0 100%;
      max-width: 100%;
    }
    @media (min-width: 768px) and (max-width: 1490px) {
      .stats-row .col-md-custom {
        flex: 0 0 50%;
        max-width: 100%;
      }
    }
    @media (min-width: 1491px) {
      .stats-row .col-lg-custom {
        flex: 0 0 33.3333%;
        max-width: 33.3333%;
      }
    }
  `}</style>
  {stats.map((item, idx) => (
    <div
      key={idx}
      className="col-12 col-md-custom col-lg-custom"
    >
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{
          height: "60px",
          borderRadius: "10px",
          background: "#0D1A20",
        }}
      >
        <span className="fw-medium text-white fs-6">{item.label}</span>
        <span className="fw-bold text-white fs-5">{item.value}</span>
      </div>
    </div>
  ))}
</div>
    </div>
  );
}
export default VoucherChart;