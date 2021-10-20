
import React from 'react';

import MainNavBar from '../cmps/MainNavBar';

import { BiMessageAltDots } from 'react-icons/bi'

function about() {
    return (
        <div className="about-page">
            <MainNavBar />
            <h1>
                ABOUT ME
            </h1>
            <div className="sendmebtn-container flex align-center justify-center">
                <div className="sendmebtn flex column align-center">
                    <p className="uppercase bold">messege me</p>
                    <BiMessageAltDots />
                </div>
            </div>
        </div>
    )
}

export default about