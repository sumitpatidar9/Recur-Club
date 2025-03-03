

import React from 'react'
import './header.css'
import Logo from './Logo';
import SearchBar from './SearchBar';
import Nav from './Nav/Nav';


function Header({role}) {
  return (
    <header id ="header" className="header fixed-top d-flex align-items-center" >
           
            {/* {logo} */}
            <Logo></Logo>
            {/* {Search} */}
            <SearchBar></SearchBar>
            {/* {nav} */}

            <Nav role={role}></Nav>
    </header>
  )
}

export default Header;