import { Container, Row, Col } from "reactstrap";
import CardItem from "../components/Dashboard/CardItem";
import ApprovalsCard from "../components/Dashboard/ApprovalsCard";
import VoucherChart from "../components/Dashboard/VoucherChart";
import ActivityCard from "../components/Dashboard/ActivityCard";
import SchoolsCard from "../components/Dashboard/SchoolsCard";
import schoolIcon from "../assets/icons/fi_7984527.png";
import trophyIcon from "../assets/icons/fi_7903475.png";
import voucherIcon from "../assets/icons/fi_7815697.png";
import rateIcon from "../assets/icons/Group 77892.png";
function DashboardPage() {
  const stats = [
    { title: "Total Schools", value: "14,000", icon: schoolIcon, type: "first" },
    { title: "Active Competitions", value: "12,000", icon: trophyIcon, type: "second" },
    { title: "Vouchers Issued", value: "3,023", icon: voucherIcon, type: "third" },
    { title: "Redemption Rate", value: "68%", icon: rateIcon, type: "fourth" },
  ];
  return (
    <Container fluid>
      {/* ====== Stats Cards ====== */}
      <Row className="g-3">
        {stats.map((stat, i) => (
          <Col key={i} xs="12" sm="6" md="6" lg="3">
            <CardItem
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
              type={stat.type}
            />
          </Col>
        ))}
      </Row>
      {/* ====== Approvals + Chart ====== */}
      <Row className="g-2 mt-1 align-items-stretch">
        <Col xs="12" lg="8" className="d-flex">
          <ApprovalsCard className="flex-fill" />
        </Col>

        <Col xs="12" lg="4" className="d-flex">
          <VoucherChart className="flex-fill" />
        </Col>
      </Row>
      {/* ====== Activity + Schools ====== */}
      <Row className="g-2 mt-1 align-items-stretch">
        <Col xs="12" lg="8" className="d-flex">
          <ActivityCard className="flex-fill" />
        </Col>

        <Col xs="12" lg="4" className="d-flex">
          <SchoolsCard className="flex-fill" />
        </Col>
      </Row>
    </Container>
  );
}
export default DashboardPage;