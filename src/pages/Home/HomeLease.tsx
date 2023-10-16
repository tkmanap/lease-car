import React from 'react';
import s from './Home.module.css'
import dealer from '../../img/dealer.svg'
import payment from '../../img/payment.svg'
import price from '../../img/price.svg'
import upgrade from '../../img/upgrade.svg'

const Home = () => {
    return (
        <div className={s.home}>
            <div className="container">
                <div className={s.lease}>
                    <h2 className={s.lease__title}>
                        Why Lease with D&M?
                    </h2>
                    <ul className={s.lease__list}>
                        <li className={s.lease__item}>
                            <img className={s.lease__item_img} src={dealer} alt="dealer"/>
                            <h3 className={s.lease__item_title}>Top Dealers</h3>
                            <p className={s.lease__item_text}>
                                TrueCar Certified Dealers compete for your business by providing discounted pricing on
                                in-stock inventory.
                            </p>
                        </li>
                        <li className={s.lease__item}>
                            <img className={s.lease__item_img} src={price} alt="price"/>
                            <h3 className={s.lease__item_title}>Discounted Pricing</h3>
                            <p className={s.lease__item_text}>
                                View local inventory from the comfort of home and get access to guaranteed savings on
                                the
                                car
                                of your choice.
                            </p>
                        </li>
                        <li className={s.lease__item}>
                            <img className={s.lease__item_img} src={payment} alt="payment"/>
                            <h3 className={s.lease__item_title}>Lower Payments</h3>
                            <p className={s.lease__item_text}>
                                Get discounted pricing when you shop for a car or truck using TrueCar and save on your
                                lease
                                payment.
                            </p>
                        </li>
                        <li className={s.lease__item}>
                            <img className={s.lease__item_img} src={upgrade} alt="upgrade"/>
                            <h3 className={s.lease__item_title}>Easy Upgrade</h3>
                            <p className={s.lease__item_text}>
                                Easy to upgrade to the newest vehicle model every few years if you would like to be
                                modern
                                and comfortable
                            </p>
                        </li>
                    </ul>
                </div>

                <div>

                </div>
            </div>
        </div>
    );
};

export default Home;