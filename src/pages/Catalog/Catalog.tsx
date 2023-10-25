import React from 'react';
import s from './Catalog.module.css'
import Blog from "../Contact/Blog";
import CatalogFilter from "./CatalogFilter";
import Car from "./Car";

const Catalog = () => {
    return (
        <div className={s.catalog}>
            <div className={"container"}>
                <h1 className={s.catalog_title}>Choose your car</h1>
                <CatalogFilter/>
                <div className={s.car}>
                    <div className={s.car_item}>
                        <Car/>
                    </div>
                </div>
                <Blog/>
            </div>

        </div>
    );
};

export default Catalog;