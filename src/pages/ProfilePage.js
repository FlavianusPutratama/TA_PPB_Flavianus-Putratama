import React from 'react';
import './ProfilePage.css';

function ProfilePage({ user }) {
  if (!user) {
    return <p>You need to login to view your profile.</p>;  // Menampilkan pesan jika belum login
  }

  return (
    <div className="profile-page">
      <h1></h1>
      <div className="profile-details">
        <img src={user.avatar} alt={user.first_name} className="profile-avatar" />
        <p><strong>Name:</strong> {user.first_name} {user.last_name}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>
    </div>
  );
}

export default ProfilePage;
