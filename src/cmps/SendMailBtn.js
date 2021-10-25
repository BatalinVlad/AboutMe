import React from 'react';
import { BiMessageAltDots } from 'react-icons/bi'

function SendMailBtn({setToggleSendMail}) {
    return (
        < div className="sendmebtn-container flex align-center justify-center" 
        onClick={setToggleSendMail} >
            <div className="sendmebtn flex column align-center">
                <p className="uppercase bold">messege me : </p>
                <BiMessageAltDots />
            </div>
        </div >
    )
};

export default (SendMailBtn)
