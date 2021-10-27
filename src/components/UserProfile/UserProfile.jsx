import React from 'react';
import { useLocation } from 'react-router-dom';
import ProfileImage from './user-profile.style';

function UserProfile() {
  const location = useLocation();
  const userInfo = location.state.author;
  return (
    <div>
      <h1>
        username:
        {userInfo.username}
      </h1>
      <ProfileImage src={userInfo.image} alt="personal" />
      <p>
        Bio:
        {userInfo.bio}
      </p>

      <div> HEre we will display posts created by this user</div>
    </div>
  );
}

export default UserProfile;
