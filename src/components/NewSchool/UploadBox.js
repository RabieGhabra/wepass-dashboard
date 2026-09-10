import { useRef } from "react";
import { Card } from "reactstrap";
import uploadImage from "../../assets/images/upload-image.png";
function UploadBox({ onFileChange }) {
    const fileInputRef = useRef(null);
    const handleClick = () => {
        fileInputRef.current.click();
    };
    return (
        <Card
            onClick={handleClick}
            className="d-flex position-relative overflow-hidden align-items-center justify-content-center text-center"
            style={{
                background: "#1A1A1A",
                minHeight: "215px",
                borderRadius: "16px",
                cursor: "pointer",
            }}
        >
            <svg className="position-absolute top-0 start-0 w-100 h-100">
                <rect
                    x="1"
                    y="1"
                    width="calc(100% - 2px)"
                    height="calc(100% - 2px)"
                    rx="16"
                    ry="16"
                    fill="none"
                    stroke="#117B98"
                    strokeWidth="1"
                    strokeDasharray="12 12"
                />
            </svg>
            <div className="position-relative z-1">
                <img src={uploadImage} alt="upload" width={67} height={67} />
                <p className="mt-2 mb-0 text-white">Drag & drop your image or</p>
                <p
                    className="fw-semibold text-decoration-underline"
                    style={{
                        color: "#117B98",
                    }}
                >
                    Select Files
                </p>
            </div>
            <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={onFileChange}
                hidden
            />
        </Card>
    );
}
export default UploadBox;