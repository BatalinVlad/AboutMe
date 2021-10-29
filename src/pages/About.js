
import React from 'react';
import MainNavBar from '../cmps/MainNavBar';
import SendMail from '../cmps/SendMail';

function about() {
    return (
        <div className="about-page">
            <MainNavBar />
            <SendMail />
        </div>
    )
}

export default about