import React from 'react';
import s from './Contact.module.css'
import blog1 from '../../img/blog-1.jpg'
import blog2 from '../../img/blog-2.jpg'
import {Link} from "react-router-dom";
import {CATALOG_ROUTE} from "../../components/RouterApp";

const Blog = () => {
    return (
        <div className={"container"}>
            <div className={s.blog}>
                <div className={s.blog_items}>
                    <div className={s.blog_item}>
                        <img className={s.blog_item_img} src={blog1} alt="blog-img"/>
                        <Link className={s.blog_item_link} to={CATALOG_ROUTE}>
                            <h4 className={s.blog_title}>An easier way to buy your next Toyota</h4>
                            <button className={s.blog_item_button}>more</button>
                        </Link>
                    </div>
                    <div className={s.blog_item}>
                        <img className={s.blog_item_img} src={blog2} alt="blog-img"/>
                        <Link className={s.blog_item_link} to={CATALOG_ROUTE}>
                            <h4 className={s.blog_title}>A Guide to Road-Tripping With Pets</h4>
                            <button className={s.blog_item_button}>more</button>
                        </Link>
                    </div>
                </div>
                <Link to={CATALOG_ROUTE} className={s.blog_link}>SHOW MORE</Link>
            </div>
        </div>
    );
};

export default Blog;