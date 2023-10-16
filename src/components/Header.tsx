import React from 'react';
import s from './Header.module.css'
import HeaderNavbar from "./HeaderNavbar";
import Slider from "./Slider";

const Header = () => {
    const test = true
    return (
        <div className={s.wrapper}>
            {test ?
                <div className={s.header}>
                    <HeaderNavbar/>
                </div>
                :
                <div className={s.header__main}>
                    <HeaderNavbar />
                    <Slider />
                </div>
            }
        </div>
    );

};

export default Header;