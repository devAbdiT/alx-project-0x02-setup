import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  id,
  name,
  email,
  address,
  phone,
  website,
  company,
  className = "",
}) => {
  const formatPhone = (phoneNumber: string) => {
    return phoneNumber
      .replace(/\D/g, "")
      .replace(/(\d{1})(\d{3})(\d{3})(\d{4})/, "$1-$2-$3-$4");
  };

  const getInitials = (userName: string) => {
    return userName
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className={`user-card ${className}`}>
      <div className="user-card-header">
        <div className="user-avatar">{getInitials(name)}</div>
        <div className="user-basic-info">
          <h3 className="user-name">{name}</h3>
          <p className="user-email">{email}</p>
          <span className="user-id">ID: {id}</span>
        </div>
      </div>

      <div className="user-details">
        <div className="detail-section">
          <h4 className="section-title">Contact Information</h4>
          <div className="detail-item">
            <span className="detail-label">Phone:</span>
            <span className="detail-value">{formatPhone(phone)}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Website:</span>
            <a
              href={`http://${website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="detail-link"
            >
              {website}
            </a>
          </div>
        </div>

        <div className="detail-section">
          <h4 className="section-title">Address</h4>
          <div className="address-info">
            <p>{address.street}</p>
            <p>{address.suite}</p>
            <p>
              {address.city}, {address.zipcode}
            </p>
          </div>
        </div>

        <div className="detail-section">
          <h4 className="section-title">Company</h4>
          <div className="company-info">
            <p className="company-name">{company.name}</p>
          </div>
        </div>
      </div>

      <div className="user-card-actions">
        <button className="action-btn primary">View Profile</button>
        <button className="action-btn secondary">Send Message</button>
      </div>
    </div>
  );
};

export default UserCard;
