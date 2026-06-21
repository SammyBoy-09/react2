import React, { useState } from 'react';
import './App.css'; 

const ProfileCard = ({ name, bio, profilePicture }) => {
  // State to manage the dynamic background color
  const [bgColor, setBgColor] = useState('#ffffff');

  return (
    <div
      className="profile-card" // External CSS for static structure
      style={{ backgroundColor: bgColor }} // Inline CSS for dynamic changes
      onMouseEnter={() => setBgColor('#e0f7fa')} // Light blue on hover
      onMouseLeave={() => setBgColor('#ffffff')} // White when mouse leaves
    >
      <img 
        src={profilePicture} 
        alt={`${name}'s profile`} 
        className="profile-picture" 
      />
      <h2>{name}</h2>
      <p>{bio}</p>
    </div>
  );
};

export default ProfileCard;