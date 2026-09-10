import { Card, CardBody, CardTitle } from "reactstrap";
import iconBlue from "../../assets/icons/Group (1).png";
import iconRed from "../../assets/icons/Group.png";
function CardItem({ title, value, type, icon }) {
  const outlineConfig = {
    first: {
      borderImage: "linear-gradient(115.81deg, #02AC55 24.54%, #121212 56.63%)",
      icon: iconBlue,
      text: "+2 this term",
      color: "#02AC55",
    },
    second: {
      borderImage: "linear-gradient(115.81deg, #FF6867 24.54%, #121212 56.63%)",
      icon: iconRed,
      text: "-2 this term",
      color: "#FF6867",
    },
    third: {
      borderImage: "linear-gradient(115.81deg, #02AC55 24.54%, #121212 56.63%)",
      icon: iconBlue,
      text: "+2 this term",
      color: "#02AC55",
    },
    fourth: {
      borderImage: "linear-gradient(115.81deg, #02AC55 24.54%, #121212 56.63%)",
      icon: iconBlue,
      text: "+6 vs last term",
      color: "#02AC55",
    },
  };
  const config = outlineConfig[type] || outlineConfig.first;
  return (
    <Card
      className="mb-4 w-100 h-100 text-white"
      style={{
        background: `
      linear-gradient(#100C0C, #100C0C) padding-box,
      linear-gradient(180deg, #1FC7ED 0%, #117B98 40%, #121212 100%) border-box
    `,
        border: "1px solid transparent",
        borderRadius: "20px",
      }}
    >
      <CardBody className="d-flex flex-column">
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
          <img
            src={icon}
            alt="main icon"
            style={{ height: "54px", width: "54px" }}
          />
          <div
            style={{
              width: "129px",
              height: "35px",
              borderRadius: "24px",
              padding: "1.5px",
              background: config.borderImage,
            }}
          >
            <div
              className="d-flex align-items-center justify-content-start"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "24px",
                background: "#100C0C",
                gap: "5px",
                padding: "0 10px",
              }}
            >
              <img
                src={config.icon}
                alt="outline icon"
                style={{ objectFit: "contain" }}
              />
              <span
                className="fw-bold text-nowrap"
                style={{
                  color: config.color,
                  fontSize: "14px",
                }}
              >
                {config.text}
              </span>
            </div>
          </div>
        </div>
        <CardTitle
          tag="h5"
          className="fw-medium mb-0"
          style={{ fontSize: "16px", marginTop: "5px" }}
        >
          {title}
        </CardTitle>
        <h2
          className="fw-bold mb-0"
          style={{ fontSize: "28px", marginTop: "2px" }}
        >
          {value}
        </h2>
      </CardBody>
    </Card>
  );
}
export default CardItem;