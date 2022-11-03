import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {useRef} from 'react'
import './NavBar.css'

const NavItem = () => {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

    const navItems = [
        {
            name: 'Over'
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
            <li key={Item.name} className='nav-item'>
                <a href="#" className='nav-links'>{Item.name}</a>
            </li>
        )
    })
    return(
        <>
            <ul ref={navRef} className='navbar-nav'>
                {navItemsToBeRendered}
                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                    <CloseIcon />
                </button>
            </ul>  
            <button className='nav-btn' onClick={showNavbar}>
                <MenuIcon />
            </button>
        </>
    )
}

export default NavItem;