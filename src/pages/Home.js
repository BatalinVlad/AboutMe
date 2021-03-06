
import React from 'react';

import MainNavBar from '../cmps/MainNavBar';
import SendMail from '../cmps/SendMail';

function Home() {
    return (
        <div className="home-page flex column">
            <MainNavBar />
            <div className="home-page-header fill-height container flex">
                <div className="home-page-meimg">
                </div>
                <div className="home-page-header-getstart flex column fill-height">
                    <h1 className="text-center bold">fitness coach and healthy life advisor for any goal!</h1>
                    <p className="capitalize bold">train with me to get the best reasults in least amount of time as possible!
                        together with my speciel meal plans and training routin we will get your goal in easy and fun way!
                    </p>
                    <div className="get-srtat-btn-container flex justify-items align-center">
                        <button className="get-start-btn btn1 uppercase">get start now!</button>
                    </div>
                </div>
            </div>
            <SendMail />
        </div>
    );
}

export default Home