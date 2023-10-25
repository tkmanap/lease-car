import React from 'react';
import s from './Contact.module.css'
import Blog from "./Blog";

const Contact = () => {
    return (
        <div className={"container"}>
            <div>
                <h1 className={s.contact_title}>Contact Us</h1>
                <h3 className={s.contact_subtitle}>Feel free to contact us with questions, potencial partnerships or media inquiries</h3>
                <form className={s.form}>
                    <input className={s.form_input} type="text" placeholder={"Name"}/>
                    <input className={s.form_input} type="email" placeholder={"E-mail"}/>
                    <textarea className={s.form_textarea} placeholder={"Your text"}></textarea>
                    <button className={s.form_button} type={"submit"}>SUBMIT</button>
                </form>
            </div>
            <Blog />
        </div>
    );
};

export default Contact;