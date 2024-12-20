import picture from "../assets/Misc/logo.png";
import mag from "../assets/Misc/search.png";
import "./NavBar.css";
import { useEffect, useState } from "react";


function NavBar() {

  const handleLogout = ()=> {
    // Remove token from localStorage
    localStorage.removeItem('token');
  
    // Optionally, perform other logout-related actions such as redirecting to the login page
    window.location.href = '/log-in'; // Redirect to the login page
  }

  const token = useState(localStorage.getItem('token'));

  console.log(token[0])
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  //check if token already have in localstorage
  const checkToken = () =>{
    if(token[0]===null){
      setIsLoggedIn(false);
    }else{
      setIsLoggedIn(true);
    }
  }

  const toggleLoggedIn = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  useEffect(() => {
    checkToken();
  }, []);
  
  return (
    <>
      <nav className="nav1">
        {!isLoggedIn ? <a href="log-in">Log in</a>: <a onClick={handleLogout}>Log out</a>}

      </nav>
      <switch className="nav2">
        <a href="/">
          <img src={picture} alt="Logo" className="logosize"></img>
        </a>
        <div className="nav-button">
          <a href="/">Home</a>
          <a href="/#game-zone">Games</a>
          {isLoggedIn && <a href="/admin-management">User Management</a>}
          {isLoggedIn && <a href="/product-management">Product Management</a>}
        </div>
        <div className="search">
          <a href="/advanced-search">
            <div>
              <p className="search-text">Search...</p>
              <img src={mag}></img>
              </div>
          </a>
        </div>
      </switch>
    </>
  );
}

export default NavBar;
