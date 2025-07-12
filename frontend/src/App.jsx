// App.jsx
import './App.css'; // Ensure this is imported for the custom styles
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; // Assuming Header exists
import Homepage from './pages/Homepage'; // Assuming Homepage exists
import Loginpage from './pages/Loginpage';
import SignupPage from './pages/Signuppage';
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

  const handleSignup = (email) => {
    console.log(`User signed up with email: ${email}`);
    // The SignupPage component handles navigation back to the login page
  };

  return (
    <Router>
      {/* Header is assumed to be outside the main content area */}
      <Header isLoggedIn={isLoggedIn} userData={userData} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Loginpage onLogin={handleLogin} />} />
        <Route path="/signup" element={<SignupPage onSignup={handleSignup} />} />
        <Route path="/profile" element={<ProfilePage userData={userData} />} />
      </Routes>
    </Router>
  );
}

export default AppWrapper;
