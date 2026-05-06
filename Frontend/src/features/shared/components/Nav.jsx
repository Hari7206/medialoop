import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "../../shared/button.scss";

function Nav() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMenuClick = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    setIsMenuOpen(false);
    navigate("/login"); 
  };

  return (
    <nav className='nav-bar'>
      <p className='logo' onClick={() => navigate("/")} style={{cursor: 'pointer'}}>Insta</p>
      
      <div className='nav-right-side'>
        <button 
          className='button'
          style={{ background: 'transparent', color: '#fff' }}
          onClick={() => navigate("/")}
        >
          Home
        </button>

        <button 
          className='button primary'
          onClick={() => navigate("/create-post")}
        >
          New Post
        </button>

        <div className="menu-container" ref={menuRef}>
          <button 
            className="menu-trigger" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            &#8942;
          </button>

          {isMenuOpen && (
            <div className="dropdown-menu">
              <div 
                className="dropdown-item" 
                onClick={() => handleMenuClick("/profile")}
              >
                Profile
              </div>
              <div 
                className="dropdown-item" 
                onClick={() => handleMenuClick("saved-post")}
              >
                Saved Posts
              </div>
              <div 
                className="dropdown-item logout-text" 
                onClick={handleLogout}
              >
                Log Out
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Nav;