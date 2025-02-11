import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

/**
 * NavTop component that renders the top navigation bar with logo and navigation links.
 *
 * @returns {JSX.Element} The rendered NavTop component
 */

function NavTop() {
    return (
        <nav className="h-[91px] bg-black flex items-center justify-between ">
            <img src={logo} alt="SportSee" className="h-[60px] ml-[-90px]" />
            <div className="flex">
                <Link to="/" className="text-white text-2xl mr-[219px]">Accueil</Link>
                <Link to="/profile" className="text-white text-2xl mr-[219px]">Profil</Link>
                <Link to="/settings" className="text-white text-2xl mr-[219px]">Réglage</Link>
                <Link to="/community" className="text-white text-2xl mr-[88px] px-[30px]">Communauté</Link>
            </div>
        </nav>
    );
}

export default NavTop;

