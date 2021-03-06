import React from 'react';
import s from './styles.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Inkscape.logo.svg/390px-Inkscape.logo.svg.png"
                alt=""
                className={s.logo}
            />
        </header>
    );
};

export default Header;
