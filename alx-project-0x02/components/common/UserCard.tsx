import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  id,
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 shadow-sm bg-white">
      {/* User Basic Info */}
      <div className="mb-4">
        <h3 className="text-lg font-bold text-gray-800">{name}</h3>
        <p className="text-gray-600">@{username}</p>
        <p className="text-blue-600">
          <a href={`mailto:${email}`}>{email}</a>
        </p>
        <p className="text-sm text-gray-500">ID: {id}</p>
      </div>

      {/* Contact Info */}
      <div className="mb-4">
        <h4 className="font-semibold text-gray-700 mb-1">Contact</h4>
        <p className="text-sm">📞 {phone}</p>
        <p className="text-sm">
          🌐{" "}
          <a
            href={`http://${website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            {website}
          </a>
        </p>
      </div>

      {/* Address Details */}
      <div className="mb-4">
        <h4 className="font-semibold text-gray-700 mb-1">Address</h4>
        <p className="text-sm">{address.street}</p>
        <p className="text-sm">{address.suite}</p>
        <p className="text-sm">
          {address.city}, {address.zipcode}
        </p>
        <p className="text-xs text-gray-500 mt-1">
          📍 {address.geo.lat}, {address.geo.lng}
        </p>
      </div>

      {/* Company Info */}
      <div>
        <h4 className="font-semibold text-gray-700 mb-1">Company</h4>
        <p className="text-sm font-medium">{company.name}</p>
        <p className="text-sm text-gray-600 italic">"{company.catchPhrase}"</p>
        <p className="text-xs text-gray-500 mt-1">{company.bs}</p>
      </div>
    </div>
  );
};

export default UserCard;
