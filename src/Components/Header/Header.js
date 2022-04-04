import React from 'react';
import { Link } from 'react-router-dom';
import CoustomLink from '../CoustomLink/CoustomLink';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <nav className='navber'>
                <CoustomLink to='/home'>HOME</CoustomLink>
                <CoustomLink to='/review'>REVIEW</CoustomLink>
                <CoustomLink to='/dashboard'>DASHBOARD</CoustomLink>
                <CoustomLink to='/blogs'>BLOGS</CoustomLink>
                <CoustomLink to='/about'>ABOUT</CoustomLink>
            </nav>
        </div>
    );
};

export default Header;