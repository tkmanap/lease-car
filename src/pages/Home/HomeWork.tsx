import React from 'react';
import s from './Home.module.css'
import HomeLease from "./HomeLease";

const Home = () => {
    return (
        <div className={s.home}>
            <div className="container">
                <HomeLease/>


                <div className={s.how_work}>
                    <div className={s.how_work_inner}>
                        <h3 className={s.how_work_title}>
                            How Does Leasing Work?
                        </h3>
                        <p className={s.how_work_text}>
                            Leasing a vehicle is essentially entering into a long term rental agreement for that
                            vehicle. Unlike a traditional car purchase, you don’t actually own the vehicle. Instead, a
                            leasing company purchases the vehicle from the dealer on your behalf and then you make
                            monthly payments to the leasing company for the duration of your lease. Some leases however,
                            do provide the option to purchase the vehicle at the end of the lease.
                        </p>
                        <h4 className={s.how_work_subtitle}>
                            Similar to a short term car rental, there are rules that define:
                        </h4>
                        <ol className={s.how_work_list}>
                            <li className={s.how_work_item}>
                                How much you can drive, stated as annual miles (excess
                                miles are charged at a specified rate)
                            </li>
                            <li className={s.how_work_item}>
                                Types of damage that you may be liable for at the end of
                                your lease
                            </li>
                            <li className={s.how_work_item}>
                                The procedures and costs when you return the vehicle at
                                the end of your lease
                            </li>
                        </ol>
                        <p className={s.how_work_text}>
                            Lease contracts are a commitment and ending them early can be difficult and expensive so it
                            is important to consider your circumstances carefully before you decide.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;