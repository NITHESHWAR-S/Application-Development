// src/components/AdminPanel.js
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import "../Assets/css/AdminPanel.css";

function AdminPanel() {
  return (
    <div className="admin-panel">
      <div className="sidebar">
        <ul>
          <br></br>
          <li><Link to="/admin/dashboard">Dashboard</Link></li>
          <li><Link to="/admin/profile">Profile</Link></li>
          <li><Link to="/admin/user-info">User Info</Link></li>
        </ul>
      </div>
      <div className="main-content">
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="user-info" element={<UserInfo />} />
        </Routes>
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="dashboard">
      <br></br>
      <h1>Dashboard</h1>
      <div className="stats">
        <div className="card">
          <h2>Total Bookings</h2>
          <p>120</p>
        </div>
        <div className="card">
          <h2>Pending Approvals</h2>
          <p>5</p>
        </div>
        <div className="card">
          <h2>Upcoming Events</h2>
          <p>3</p>
        </div>
      </div>
      <div className="recent-activity">
        <h2>Recent Activity</h2>
        <ul>
          <li>Roshan booked Hall A</li>
          <li>Lakshana booked Hall B</li>
          <li>Naveena booked Hall C</li>
        </ul>
      </div>
    </div>
  );
}

function Profile() {
  return (
    <div className="profile">
      <br></br>
      <h1><b>Profile</b></h1>
      <div className="profile-info">
        <p><strong>Name:</strong> Admin</p>
        <p><strong>Email:</strong> admin@example.com</p>
        <p><strong>Role:</strong> Administrator</p>
      </div>
      <div className="profile-actions">
        <button>Edit Profile</button>
        <button>Change Password</button>
      </div>
    </div>
  );
}

function UserInfo() {
  return (
    <div className="user-info">
      <br></br>
      <h1>User Info</h1>
      <div className="user-list">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Bookings</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Roshan Rahul Ram C</td>
              <td>rose@example.com</td>
              <td>3</td>
              <td><button>View Details</button></td>
            </tr>
            <tr>
              <td>Lakshana</td>
              <td>lakshana@example.com</td>
              <td>2</td>
              <td><button>View Details</button></td>
            </tr>
            <tr>
              <td>Naveena</td>
              <td>naveena@example.com</td>
              <td>5</td>
              <td><button>View Details</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminPanel;
