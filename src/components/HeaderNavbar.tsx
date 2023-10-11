import React from 'react';
import s from './Header.module.css'
import logo from '../img/logo.svg'
import {Link} from "react-router-dom";
import {CATALOG_ROUTE, CONTACT_ROUTE, HOME_ROUTE} from "./RouterApp";

const Header: React.FC = () => {
    return (
                <div className={s.container}>
                    <div className={s.header__navbar}>
                        <Link to={HOME_ROUTE} className={s.logo}>
                            <img className={s.logo__img} src={logo} alt="logo"/>
                        </Link>
                        <nav className={s.menu}>
                            <ul className={s.menu__list}>
                                <li className={s.menu__list_item}>
                                    <Link to={CATALOG_ROUTE} className={s.menu__list_link}>NEW CARS</Link>
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
                                    <Link to={CONTACT_ROUTE} className={s.menu__list_link}>CONTACT US</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
    );
};

export default Header;