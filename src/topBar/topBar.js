import React from 'react';
import styleClasses from './topBar.module.css';
import logo from '../images/amazon-logo.png';

const topBar = () => {
    return (
        <header className={styleClasses.topBar}>
            <nav>
                <img src={logo} alt="logo" />
            </nav>
        </header>
    );
};

export default topBar;