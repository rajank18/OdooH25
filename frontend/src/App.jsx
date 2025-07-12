import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import Loginpage from './pages/Loginpage';
import SignupPage from './pages/Signuppage';
import YourProfile from './pages/YourProfile';
import UserProfile from './pages/User-Profile';

// Wrapper to use `useLocation` (only works inside Router)
function AppContent({ isLoggedIn, userData, handleLogin, handleSignup }) {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  // Define paths where you want a minimal header
  const isAuthPage = currentPath === '/login' || currentPath === '/signup';

  return (
    <>
      {isAuthPage ? (
        <div onClick={() => navigate('/')} className="bg-gray-900 text-white text-center py-4 text-2xl font-bold tracking-wide cursor-pointer">
          SkillSwap
        </div>
      ) : (
        <Header isLoggedIn={isLoggedIn} userData={userData} />
      )}

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Loginpage onLogin={handleLogin} />} />
        <Route path="/signup" element={<SignupPage onSignup={handleSignup} />} />
        <Route path="/yourprofile" element={<YourProfile userData={userData} />} />
        <Route path="/userprofile" element={<UserProfile userData={userData} />} />
      </Routes>
    </>
  );
}

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
  };

  return (
    <Router>
      <AppContent
        isLoggedIn={isLoggedIn}
        userData={userData}
        handleLogin={handleLogin}
        handleSignup={handleSignup}
      />
    </Router>
  );
}

export default AppWrapper;
