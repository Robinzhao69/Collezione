import React from 'react'
import {Link} from "react-router-dom"
import Collectionpage from '../../Pages/Collectionpage/Collectionpage';
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
            name: 'Over',
            link: '/Over'
        },
        {
            name: 'Collectie',
            link: '/Collection'
        },
        {
            name: 'Features',
            link: '/Features'
        },
        {
            name: 'Prijs',
            link: '/Prijs'
        },
        {
            name: 'Contact',
            link: '/Contact'
        },
    ];

    let navItemsToBeRendered = navItems.map(Item => {
        return(
            <li key={Item.name} className='nav-items'>
                <Link to={Item.link} className='nav-links'>{Item.name}</Link>
            </li>
        )
    })

    return (
        <>
            

            <header>
                <figure className='navbar-logo'>
                    <Link to="/"><SportsEsportsIcon /></Link>
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