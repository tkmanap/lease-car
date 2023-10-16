import React from 'react';
import s from './Home.module.css'
import HomeLease from "./HomeLease";
import HomeWork from "./HomeWork";
import car1 from "../../img/car1.jpg"
import car2 from "../../img/car2.jpg"
import car3 from "../../img/car3.jpg"
import car4 from "../../img/car4.jpg"

const Home = () => {
    return (
        <div className={s.home}>
            <div className="container">
                <HomeLease/>
                <HomeWork/>

                <div className={s.video}>
                    <h1 className={s.video_title}>WELCOME TO D&M LEASING</h1>
                    <h3 className={s.video_subtitle}>Find out how easy it is to lease from D&M</h3>
                    <iframe className={s.video_content} width="1000" height="500"
                            src="https://www.youtube.com/embed/WL2juWE-fD0?si=eCQ5liRZ0Cw_YG8a"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                </div>

                <div className={s.consider}>
                    <h1 className={s.consider_title}>Important Things to Consider</h1>
                    <p className={s.consider_text}>
                        Depending on your circumstances and what is important to you, a lease could be a great option
                        for your next vehicle. Below are some important factors that may influence your decision.
                    </p>
                    <ul className={s.consider_list}>
                        <li className={s.consider_list_item}>
                            <img className={s.consider_list_img} src={car1} alt="car1"/>
                            <p className={s.consider_list_text}>
                                Monthly payments on leases are generally 20% - 30% cheaper than loans
                            </p>
                        </li>
                        <li className={s.consider_list_item}>
                            <img className={s.consider_list_img} src={car2} alt="car2"/>
                            <p className={s.consider_list_text}>
                                You may be eligible for a tax break if you use the leased vehicle for business purposes
                            </p>
                        </li>
                        <li className={s.consider_list_item}>
                            <img className={s.consider_list_img} src={car3} alt="car3"/>
                            <p className={s.consider_list_text}>
                                Easy to upgrade to the newest vehicle model every few years
                            </p>
                        </li>
                        <li className={s.consider_list_item}>
                            <img className={s.consider_list_img} src={car4} alt="car4"/>
                            <p className={s.consider_list_text}>
                                There are often fees charged if you drive more than your lease's mileage allowance
                            </p>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Home;