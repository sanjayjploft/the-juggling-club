"use client";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

export default function ClubInformation() {
  const [primaryColor, setPrimaryColor] = useState("#0055A4");
  const [secondaryColor, setSecondaryColor] = useState("#00A86B");

  const fileRef = useRef(null);
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected) {
      setFile(selected);
    }
  };

  const openFilePicker = () => {
    fileRef.current.click();
  };

  const getPreview = () => {
    if (!file) return null;

    if (file.type.startsWith("image/")) {
      return <img src={URL.createObjectURL(file)} alt="preview" />;
    }

    if (file.type === "application/pdf") {
      return <span className="file-icon pdf">PDF</span>;
    }

    return <span className="file-icon doc">DOC</span>;
  };
  const router = useRouter();
  return (
    <>
      {/* Steps */}
      <div className="step-progress">
        <div className="step-item active">
          <div className="step-dot active-img">
            <img src="/assets/image/steps-active-img.svg" />
          </div>
          <p>CLUB INFORMATION</p>
          <span className="step-line" />
        </div>

        <div className="step-item active">
          <div className="step-dot active-img">
            <img src="/assets/image/steps-active-img.svg" />
          </div>
          <p>CONTACT INFORMATION</p>
          <span className="step-line" />
        </div>

        <div className="step-item active">
          <div className="step-dot active-img">
            <img src="/assets/image/steps-active-img.svg" />
          </div>
          <p>SUBSCRIPTION TIER</p>
          <span className="step-line" />
        </div>

        <div className="step-item current-step">
          <div className="step-dot active-img">
            <img src="/assets/image/steps-active-img.svg" />
          </div>
          <p>BRAND IDENTITY</p>
          <span className="step-line" />
        </div>

        <div className="step-item">
          <div className="step-dot">
            <img src="/assets/image/steps-inactive-img.svg" />
          </div>
          <p>TERMS & CONFIRMATION</p>
        </div>
      </div>

      {/* Form */}
      <div className="step-form">
        <Form className="mt-5">
          <Row className="g-4">
            <Col lg={12}>
              <h3 className="clublogo-heading">Club Logo (PNG/JPG) *</h3>
              <Form.Group className={`floating-file ${file ? "has-file" : ""}`}>
                <div className="file-box" onClick={openFilePicker}>
                  <img src="/assets/image/upload-file.svg" />
                  {file ? (
                    <div className="file-preview">
                      {getPreview()}
                      <p>{file.name}</p>
                      <small>Click to change file</small>
                    </div>
                  ) : (
                    <p className="placeholder-text">
                      <h5>Click to upload or drag and drop</h5>
                      PNG, JPG up to 2MB
                    </p>
                  )}
                </div>
                <input
                  ref={fileRef}
                  type="file"
                  hidden
                  accept="image/*,.pdf,.doc,.docx"
                  onChange={handleFileChange}
                />
              </Form.Group>
            </Col>
            <Col lg={6}>
              <div
                className={`floating-color ${primaryColor ? "has-value" : ""}`}>
                <div className="color-input-wrapper">
                  <input
                    type="color"
                    value={primaryColor}
                    onChange={(e) => setPrimaryColor(e.target.value)}
                    className="color-picker"
                  />

                  <Form.Control
                    type="text"
                    value={primaryColor}
                    onChange={(e) => setPrimaryColor(e.target.value)}
                    placeholder="Primary Brand Color *"
                  />
                </div>

                <label>Primary Brand Color *</label>
              </div>
            </Col>

            {/* Secondary Brand Color */}
            <Col lg={6}>
              <div
                className={`floating-color ${
                  secondaryColor ? "has-value" : ""
                }`}>
                <div className="color-input-wrapper">
                  <input
                    type="color"
                    value={secondaryColor}
                    onChange={(e) => setSecondaryColor(e.target.value)}
                    className="color-picker"
                  />

                  <Form.Control
                    type="text"
                    value={secondaryColor}
                    onChange={(e) => setSecondaryColor(e.target.value)}
                    placeholder="Secondary Brand Color *"
                  />
                </div>

                <label>Secondary Brand Color *</label>
              </div>
            </Col>
          </Row>
        </Form>
      </div>

      {/* Buttons */}
      <div className="action-buttons mt-5">
        <Button className="btn-cancel-outline" onClick={() => router.back()}>
          Cancel
        </Button>

        <Button
          className="btn-next-bg"
          onClick={() => router.push("/terms-confirmation")}>
          Next
        </Button>
      </div>
    </>
  );
}
