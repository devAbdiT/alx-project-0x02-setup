import React from "react";
import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";

const AboutPage: React.FC = () => {
  const handleButtonClick = (message: string) => {
    alert(message);
  };

  return (
    <div className="app">
      <Header />
      <div className="about-page">
        <div className="page-header">
          <h1>About Our Application</h1>
          <p>
            This page demonstrates the reusable Button component with different
            sizes and shapes.
          </p>
        </div>

        <div className="button-demo-section">
          <h2>Button Size Variations</h2>
          <div className="button-group">
            <Button
              size="small"
              shape="rounded-md"
              onClick={() => handleButtonClick("Small button clicked!")}
            >
              Small Button
            </Button>

            <Button
              size="medium"
              shape="rounded-md"
              onClick={() => handleButtonClick("Medium button clicked!")}
            >
              Medium Button
            </Button>

            <Button
              size="large"
              shape="rounded-md"
              onClick={() => handleButtonClick("Large button clicked!")}
            >
              Large Button
            </Button>
          </div>
        </div>

        {/* ... rest of the button demo sections ... */}
      </div>
    </div>
  );
};

export default AboutPage;
