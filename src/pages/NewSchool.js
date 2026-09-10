import { Container, Row, Col, Button } from "reactstrap";
import UploadBox from "../components/NewSchool/UploadBox";
import SelectBox from "../components/NewSchool/SelectBox";
function NewSchoolPage() {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log(file);
    }
  };
  return (
    <Container className="text-white py-4">
      <h2 className="fw-bold">Add New School</h2>
      {/* Upload */}
      <p className="mt-3 fw-semibold">School Logo</p>
      <UploadBox onFileChange={handleFileChange} />
      {/* School Type */}
      <SelectBox label="School Type" placeholder="Select School Type" />
      {/* City + Country */}
      <Row>
        <Col md={6}>
          <SelectBox label="City" placeholder="Select City" />
        </Col>
        <Col md={6}>
          <SelectBox label="Country" placeholder="Select Country" />
        </Col>
      </Row>
      {/* Address */}
      <p className="mt-4 fw-semibold">Address</p>
      <textarea
        placeholder="Enter Full Address"
        className="w-100 p-3 text-white border-0"
        style={{
          background: "#1A1A1A",
          borderRadius: "16px",
          outline: "none",
          minHeight: "110px",
          resize: "none" 
        }}
      />
      {/* Button */}
      <div className="d-flex justify-content-end mt-4">
        <Button
          className="fw-semibold"
          style={{
            width: "231px",
            height: "54px",
            borderRadius: "16px",
            background:
              "radial-gradient(124.96% 706.59% at 92% 529.63%, #117B98 55.77%, #AADBCE 100%)",
          }}
        >
          Add New School
        </Button>
      </div>
    </Container>
  );
}
export default NewSchoolPage;