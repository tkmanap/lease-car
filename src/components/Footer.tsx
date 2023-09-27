import React from 'react';
import s from './Footer.module.css'
import appStore from '../img/appStore.svg'
import playMarket from '../img/playMarket.svg'

const Footer: React.FC = () => {
    return (
        <div className={s.footer}>
            <div className="container">
                <nav className={s.footer__menu}>

                    <ul className={s.footer__menu_list}>
                        <li className={s.footer__menu_item}>
                            <p className={s.footer__menu_title}>Products</p>
                        </li>
                        <li className={s.footer__menu_item}>
                            <a className={s.footer__menu_link} href="">Used</a>
                        </li>
                        <li className={s.footer__menu_item}>
                            <a className={s.footer__menu_link} href="">New</a>
                        </li>
                        <li className={s.footer__menu_item}>
                            <a className={s.footer__menu_link} href="">Sell your car</a>
                        </li>
                    </ul>

                    <ul className={s.footer__menu_list}>
                        <li className={s.footer__menu_item}>
                            <p className={s.footer__menu_title}>Resources</p>
                        </li>
                        <li className={s.footer__menu_item}>
                            <a className={s.footer__menu_link} href="">Blog</a>
                        </li>
                        <li className={s.footer__menu_item}>
                            <a className={s.footer__menu_link} href="">FAQ</a>
                        </li>
                        <li className={s.footer__menu_item}>
                            <a className={s.footer__menu_link} href="">Contact us</a>
                        </li>
                    </ul>

                    <ul className={s.footer__menu_list}>
                        <li className={s.footer__menu_item}>
                            <p className={s.footer__menu_title}>Work With TrueCar</p>
                        </li>
                        <li className={s.footer__menu_item}>
                            <a className={s.footer__menu_link} href="">Dealers</a>
                        </li>
                        <li className={s.footer__menu_item}>
                            <a className={s.footer__menu_link} href="">Partners</a>
                        </li>
                    </ul>

                    <ul className={s.footer__menu_list}>
                        <li className={s.footer__menu_item}>
                            <p className={s.footer__menu_title}>About</p>
                        </li>
                        <li className={s.footer__menu_item}>
                            <a className={s.footer__menu_link} href="">About us</a>
                        </li>
                        <li className={s.footer__menu_item}>
                            <a className={s.footer__menu_link} href="">Team</a>
                        </li>
                        <li className={s.footer__menu_item}>
                            <a className={s.footer__menu_link} href="">Careers</a>
                        </li>
                    </ul>
                </nav>
                <ul className={s.app}>
                    <li className={s.app__item}>
                        <a className={s.app__item_link} href="">
                            <img className={s.app_links_img} src={appStore} alt="appStore"/>
                        </a>
                    </li>
                    <li className={s.app__item}>
                        <a className={s.app__item_link} href="">
                            <img className={s.app_links_img} src={playMarket} alt="playMarket"/>
                        </a>
                    </li>
                </ul>
                <div className={s.footer__copy}>
                    <p className={s.footer__copy_text}>
                        For questions about the TrueCar Auto Buying Service please call 1-888-878-3227.
                        Certified Dealers are contractually obligated by TrueCar to meet certain customer service
                        requirements and complete the TrueCar Dealer Certification Program.
                    </p>
                    <p className={s.footer__copy_text}>
                        TrueCar does not broker, sell, or lease motor vehicles. Unless otherwise noted, all vehicles
                        shown
                        on this website are offered for sale by licensed motor vehicle dealers. All vehicles are subject
                        to
                        prior sale. By accessing this website, you agree to the TrueCar Terms of Service and Privacy
                        Policy.
                    </p>
                </div>
                <div className={s.copy__nav}>
                    <ul className={s.copy__nav_list}>
                        <li>
                            <a href="">Terms of Service</a>
                        </li>
                        <li>
                            <a href="">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="">Do Not Sell My Personal Information</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;