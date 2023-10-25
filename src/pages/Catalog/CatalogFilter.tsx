import React from 'react';
import s from "./Catalog.module.css";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {setCategoryId} from "../../store/slice/filterSlice";

const CatalogFilter = () => {
    const dispatch = useAppDispatch()
    const categoryId = useAppSelector(state => state.filter.categoryId)
    return (
            <div>
                <div className={s.catalog_navmenu}>
                        <button className={s.catalog_navmenu_btn}>Car and Minivan</button>
                        <button className={s.catalog_navmenu_btn}>Trucks</button>
                        <button className={s.catalog_navmenu_btn}>Crossovers & SUVs</button>
                        <button className={s.catalog_navmenu_btn}>Electrified</button>
                </div>
            </div>
    );
};

export default CatalogFilter;