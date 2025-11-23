import React from "react";
import Card from "../components/common/Card";

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <h1>Welcome to Our Application</h1>
      <div className="cards-container">
        <Card
          title="Feature One"
          content="This is the first feature of our amazing application. It provides great value to our users."
          className="feature-card"
        />

        <Card
          title="Getting Started"
          content="Learn how to use our platform with our comprehensive documentation and tutorials."
          className="info-card"
        />

        <Card
          title="Latest Updates"
          content="We've recently launched new features including enhanced security and improved performance."
          className="update-card"
        />

        <Card
          title="Support"
          content="Our support team is available 24/7 to help you with any questions or issues you might have."
          className="support-card"
        />
      </div>
    </div>
  );
};

export default HomePage;
