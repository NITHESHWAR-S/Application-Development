import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import '../Assets/css/AdminPanel.css';

function UserPanel() {
  return (
    <div className="admin-panel">
      <div className="sidebar">
        <ul>
            <br></br>
          <li><Link to="/user/dashboard">Dashboard</Link></li>
          <li><Link to="/user/profile">Profile</Link></li>
          <li><Link to="/user/bookings">My Bookings</Link></li>
        </ul>
      </div>
      <div className="main-content">
        <Routes>
          <Route path="dashboard" element={<UserDashboard />} />
          <Route path="profile" element={<UserProfile />} />
          <Route path="bookings" element={<UserBookings />} />
        </Routes>
      </div>
    </div>
  );
}

function UserDashboard() {
  return (
    <div className="dashboard">
        <br></br>
      <h1>Dashboard</h1>
      <div className="stats">
        <div className="card">
          <h2>Total Bookings</h2>
          <p>5</p>
        </div>
        <div className="card">
          <h2>Upcoming Events</h2>
          <p>2</p>
        </div>
      </div>
      <div className="recent-activity">
        <h2>Recent Activity</h2>
        <ul>
          <li>Booked Seminar on AI</li>
          <li>Booked Workshop on Web Development</li>
        </ul>
      </div>
    </div>
  );
}

function UserProfile() {
  return (
    <div className="profile">
        <br></br>
      <h1>Profile</h1>
      <div className="profile-info">
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Email:</strong> john@example.com</p>
      </div>
      <div className="profile-actions">
        <button>Edit Profile</button>
        <button>Change Password</button>
      </div>
    </div>
  );
}

function UserBookings() {
  return (
    <div className="user-info">
        <br></br>
      <h1>My Bookings</h1>
      <div className="user-list">
        <table>
          <thead>
            <tr>
              <th>Event</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Seminar on AI</td>
              <td>August 1, 2024</td>
              <td>Confirmed</td>
            </tr>
            <tr>
              <td>Workshop on Web Development</td>
              <td>August 5, 2024</td>
              <td>Pending</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserPanel;