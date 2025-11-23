import React from "react";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { ApiUser } from "@/interfaces";

// This function runs at build time on the server
export async function getStaticProps() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    const users: ApiUser[] = await response.json();

    return {
      props: {
        users,
      },
      // Re-generate the page at most once every 60 seconds
      revalidate: 60,
    };
  } catch (error) {
    return {
      props: {
        users: [],
        error: error instanceof Error ? error.message : "An error occurred",
      },
    };
  }
}

interface UsersPageProps {
  users: ApiUser[];
  error?: string;
}

const UsersPage: React.FC<UsersPageProps> = ({ users, error }) => {
  const [searchTerm, setSearchTerm] = React.useState<string>("");

  // Filter users based on search term
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.company.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (error) {
    return (
      <div className="app">
        <Header />
        <div className="users-page">
          <div className="error-container">
            <h2>Error Loading Users</h2>
            <p>{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <Header />
      <div className="users-page">
        <div className="page-header">
          <div className="header-content">
            <div>
              <h1>Users Directory</h1>
              <p>Manage and explore all users in the system</p>
            </div>
            <div className="users-stats">
              <span>
                Showing {filteredUsers.length} of {users.length} users
              </span>
            </div>
          </div>

          <div className="search-container">
            <input
              type="text"
              placeholder="Search users by name, email, or company..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        </div>

        <div className="users-grid">
          {filteredUsers.map((user) => (
            <UserCard
              key={user.id}
              id={user.id}
              name={user.name}
              email={user.email}
              address={user.address}
              phone={user.phone}
              website={user.website}
              company={user.company}
              className={`user-card-${user.id % 6}`}
            />
          ))}
        </div>

        {filteredUsers.length === 0 && searchTerm && (
          <div className="no-results">
            <h3>No users found</h3>
            <p>Try adjusting your search terms</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UsersPage;
