
import React, { useState } from 'react';
import MainNavBar from '../cmps/MainNavBar';
import SendMailBtn from '../cmps/SendMailBtn';
import SendMailNow from '../cmps/SendMailNow';



function Home() {
    const [toggleSendMailBtn, setToggleSendMailBtn] = useState(false);

    function onSetToggleSendMail() {
        setToggleSendMailBtn(!toggleSendMailBtn)
    }

    return (
        <div className="home-page flex column">
            <MainNavBar />
            <div className="home-page-header fill-height container flex">
                <div className="home-page-meimg">
                </div>
                <div className="home-page-header-getstart flex column fill-height">
                    <h1 className="text-center bold">fitness coach and healthy life advisor for any goal!</h1>
                    <p><span className="capitalize">train</span> with me to get the best reasults in least amount of time as possible!
                        together with my speciel meal plans and training routin we will get your goal in easy and fun way!
                    </p>
                    <div className="get-srtat-btn-container flex justify-items align-center">
                        <button className="get-start-btn uppercase">get start now!</button>
                    </div>
                </div>
            </div>
            <SendMailBtn setToggleSendMail={onSetToggleSendMail} />
            {toggleSendMailBtn ? <SendMailNow onSetToggleSendMail={onSetToggleSendMail} /> : ''}
        </div>
    );
}

export default Home