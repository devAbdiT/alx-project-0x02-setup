import React from "react";
import Button from "@/components/common/Button";

const AboutPage: React.FC = () => {
  const handleButtonClick = (message: string) => {
    alert(message);
  };

  return (
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

      <div className="button-demo-section">
        <h2>Button Shape Variations</h2>
        <div className="button-group">
          <Button
            size="medium"
            shape="rounded-sm"
            onClick={() =>
              handleButtonClick("Slightly rounded button clicked!")
            }
          >
            Slightly Rounded
          </Button>

          <Button
            size="medium"
            shape="rounded-md"
            onClick={() => handleButtonClick("Medium rounded button clicked!")}
          >
            Medium Rounded
          </Button>

          <Button
            size="medium"
            shape="rounded-full"
            onClick={() => handleButtonClick("Fully rounded button clicked!")}
          >
            Fully Rounded
          </Button>
        </div>
      </div>

      <div className="button-demo-section">
        <h2>Combined Variations</h2>
        <div className="button-group">
          <Button
            size="small"
            shape="rounded-full"
            onClick={() => handleButtonClick("Small pill button clicked!")}
          >
            Small Pill
          </Button>

          <Button
            size="large"
            shape="rounded-sm"
            onClick={() => handleButtonClick("Large square button clicked!")}
          >
            Large Square
          </Button>

          <Button
            size="medium"
            shape="rounded-full"
            onClick={() => handleButtonClick("Medium pill button clicked!")}
            className="bg-green-600 hover:bg-green-700"
          >
            Custom Color
          </Button>
        </div>
      </div>

      <div className="button-demo-section">
        <h2>Disabled State</h2>
        <div className="button-group">
          <Button size="medium" shape="rounded-md" disabled>
            Disabled Button
          </Button>

          <Button size="large" shape="rounded-full" disabled>
            Disabled Pill
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
