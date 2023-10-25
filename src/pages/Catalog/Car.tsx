import React from 'react';
import s from "./Catalog.module.css"
import {Link} from "react-router-dom";
import {HOME_ROUTE} from "../../components/RouterApp";
import forSale1 from "../../img/forSale1.jpg"
const Car = () => {
    return (
        <div className={s.car_wrapper}>
            <div className={s.car_card}>
                <img className={s.car_img} src={forSale1} alt="image car"/>
                <h4 className={s.car_title}>Toyota Crown 2023</h4>
                <p className={s.car_text}>starting from $ 39900</p>
                <p className={s.car_price}>$ 650/mo</p>
                <Link  className={s.car_link} to={HOME_ROUTE}>see details</Link>
            </div>
        </div>
    );
};

export default Car;