import React from 'react';
import ProfileCard from './ProfileCard';
import './App.css';

const App = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
      <ProfileCard
        name="VTU Circle"
        bio="Providing the best notes and previous year papers for engineering students."
        profilePicture="https://picsum.photos/150"
      />
    </div>
  );
};

export default App;