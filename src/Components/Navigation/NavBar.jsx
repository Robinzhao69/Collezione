import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import {useRef} from 'react'
import './NavBar.css'

import './NavBar.css'

function NavBar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive-nav");
    }

    const navItems = [
        {
            name: 'Over'
        },
        {
            name: 'Collectie'
        },
        {
            name: 'Features'
        },
        {
            name: 'Prijs'
        },
        {
            name: 'Contact'
        },
    ];

    let navItemsToBeRendered = navItems.map(Item => {
        return(
            <li key={Item.name} className='nav-items'>
                <a href="#" className='nav-links'>{Item.name}</a>
            </li>
        )
    })

    return (
        <>
            <header>
                <figure className='navbar-logo'>
                    <SportsEsportsIcon />
                </figure>
                <nav ref={navRef}>
                    {navItemsToBeRendered}
                    <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                        <CloseIcon />
                    </button>
                    <button className='login'>Login</button>
                </nav>  
                <button className='nav-btn' onClick={showNavbar}>
                    <MenuIcon />
                </button>
            </header>

        </>    
    )
}

export default NavBar