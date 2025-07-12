import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import Loginpage from './pages/Loginpage';
import ProfilePage from './pages/Userprofile'

function AppWrapper() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({ name: '', image: '' });

  const handleLogin = (name) => {
    setIsLoggedIn(true);
    setUserData({
      name,
      image: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=0D8ABC&color=fff`
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
