// comment
import React, { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { ApiUser } from "@/interfaces";

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<ApiUser[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Fetch users from JSONPlaceholder API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data: ApiUser[] = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Refresh users function
  const refreshUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const data: ApiUser[] = await response.json();
      setUsers(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  // Filter users based on search term
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.company.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="app">
        <Header />
        <div className="users-page">
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Loading users...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app">
        <Header />
        <div className="users-page">
          <div className="error-container">
            <h2>Error Loading Users</h2>
            <p>{error}</p>
            <button onClick={refreshUsers} className="retry-button">
              Try Again
            </button>
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
            <button onClick={refreshUsers} className="refresh-button">
              Refresh Users
            </button>
          </div>

          <div className="search-container">
            <input
              type="text"
              placeholder="Search users by name, email, or company..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <div className="users-stats">
              <span>
                Showing {filteredUsers.length} of {users.length} users
              </span>
            </div>
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
