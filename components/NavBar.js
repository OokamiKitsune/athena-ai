import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/NavBar.module.css';


const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleUsernameClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    
    <nav className={styles.navbar}>
      <ul className={styles.nav}>
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" About>
            
          </Link>
        </li>
        <li>
          <Link href="/contact">
            
          </Link>
        </li>
      </ul>
      <div className={styles.dropdown}>
        <button onClick={handleUsernameClick} className="dropdown-toggle">
          Username
        </button>
        {showDropdown && (
          <div className=''>
            <Link href="/profile">
              Profile
            </Link>
            <Link href="/settings">
              Settings
            </Link>
            <Link href="/logout">
              Logout
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
