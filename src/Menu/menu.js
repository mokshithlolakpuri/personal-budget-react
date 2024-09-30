import React from 'react';
import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav 
    role='navigation'
    aria-label='Main menu'
    itemScope
    itemType='https://schema.org/SiteNavigationElement'
    >
      <div className="menu">
        <ul>
          <li><Link itemProp="url" to="/">Homepage</Link></li>
          <li><Link itemProp="url" to="/about" aria-label="About the developer of application">About</Link></li>
          <li><Link itemProp="url" to="/login">Login</Link></li>
          {/* <li><Link itemProp="url" to="#main-content">Skip to charts</Link></li> */}
        </ul>
      </div>
    </nav> 
  );
}

export default Menu;
