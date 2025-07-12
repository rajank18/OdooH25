import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import Loginpage from './pages/Loginpage'; 

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({
    name: '',
    image: ''
  });

  const handleLogin = (name) => {
    setIsLoggedIn(true);
    setUserData({
      name: name,
      image: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=0D8ABC&color=fff`
    });
    setShowLogin(false);
  };

  return (
    <>
      <Header
        onLoginClick={() => setShowLogin(true)}
        isLoggedIn={isLoggedIn}
        userData={userData}
      />

      {showLogin ? (
        <Loginpage onLogin={handleLogin} />
      ) : (
        <Homepage />
      )}
    </>
  );
}

export default App;
