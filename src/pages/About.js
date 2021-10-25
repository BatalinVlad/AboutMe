
import React from 'react';
import SendMailBtn from '../cmps/SendMailBtn';
import MainNavBar from '../cmps/MainNavBar';


function about() {
    return (
        <div className="about-page">
            <MainNavBar />
            <SendMailBtn />
        </div>
    )
}

export default about