import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Homepage from './pages/Homepage';
import Loginpage from './pages/Loginpage';
import ProfilePage from './pages/Userprofile';

function AppWrapper() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // Dummy user data
  const [userData, setUserData] = useState({
    name: 'Rajan Sharma',
    image: 'https://ui-avatars.com/api/?name=Rajan+Sharma&background=0D8ABC&color=fff',
    email: 'rajan.sharma@example.com',
    location: 'Ahmedabad, India',
    availability: 'WEEKENDS',
    isPublic: true,
  });

  const handleLogin = (name) => {
    setIsLoggedIn(true);
    setUserData({
      ...userData,
      name,
      image: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=0D8ABC&color=fff`,
    });
  };

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} userData={userData} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Loginpage onLogin={handleLogin} />} />
        <Route path="/profile" element={<ProfilePage userData={userData} />} />
      </Routes>
    </Router>
  );
}

export default AppWrapper;
