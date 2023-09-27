import React from 'react';
import s from './Header.module.css'
import logo from '../img/logo.svg'

const Header: React.FC = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.header}>
                <div className={s.container}>
                    <div className={s.header__inner}>
                        <a href="" className={s.logo}>
                            <img className={s.logo__img} src={logo} alt="logo"/>
                        </a>
                        <nav className={s.menu}>
                            <ul className={s.menu__list}>
                                <li className={s.menu__list_item}>
                                    <a href="" className={s.menu__list_link}>NEW CARS</a>
                                </li>
                                <li className={s.menu__list_item}>
                                    <a href="" className={s.menu__list_link}>PRE-OWNED CARS</a>
                                </li>
                                <li className={s.menu__list_item}>
                                    <a href="" className={s.menu__list_link}>FINANCE</a>
                                </li>
                                <li className={s.menu__list_item}>
                                    <a href="" className={s.menu__list_link}>LEASE VS BUY</a>
                                </li>
                                <li className={s.menu__list_item}>
                                    <a href="" className={s.menu__list_link}>CONTACT US</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;