import React, { useState, useEffect } from 'react'
import './infoUser.css'
import Logout from '../Logout/Logout'

function ProfilePage({ handleLogout }) {
  const [userData, setUserData] = useState(null);

  const updateUserData = () => {
    const user = localStorage.getItem('user');
    if (user) {
      setUserData(JSON.parse(user));
    }
  };

  // Llamar a la función updateUserData cuando el componente se monte
  useEffect(() => {
    updateUserData();
  }, []);

  // Actualizar el estado de userData cuando el usuario inicie sesión
  const handleLogin = () => {
    updateUserData();
  };

  return (
    <div className='userInfoContainer'>
      {userData ? (
        <div className='userInfo'>
          <h1>Welcome, <span>{userData.name}</span>!</h1>
          <img src={userData.photo} alt="User Avatar" />
          <p>Email: {userData.mail}</p>
          <Logout onClick={handleLogout}/>
        </div>
      ) : (
        <p className='loginText'>Please log in to view your profile</p>
      )}
    </div>
  );
}

export default ProfilePage;