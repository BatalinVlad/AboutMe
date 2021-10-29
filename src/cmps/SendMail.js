import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { CSSTransition } from 'react-transition-group';

import { VscChromeMinimize } from 'react-icons/vsc'
import { BiMessageAltDots } from 'react-icons/bi'

function SendMail() {
    const [showSendMailBtn, setShowMailBtn] = useState(true);
    const [showMailForm, setShowMailForm] = useState(false);

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_7nje94c', 'template_0xruass', e.target, 'user_SkozIqo4hqkjis8FWw2Lx')
            .then(res => {
                console.log(res);
            }).catch(err => console.log(err));
    }

    return (
        <>
            {showSendMailBtn && (
                < div className="sendmebtn-container flex align-center justify-center"
                    onClick={() => setShowMailForm(true)} >
                    <div className="sendmebtn flex column align-center">
                        <p className="uppercase bold">messege me : </p>
                        <BiMessageAltDots />
                    </div>
                </div >
            )}

            <CSSTransition
                in={showMailForm}
                timeout={200}
                classNames="alert"
                unmountOnExit
                onEnter={() => setShowMailBtn(false)}
                onExited={() => setShowMailBtn(true)}
            >
                <div className="send-mail-now container flex column align-center">
                    <h1 className="text-center uppercase">send me an e-mail</h1>
                    <form className="contact-form" onSubmit={sendEmail}>
                        <input type="hidden" name="contact_number" />
                        <label className="capitalize">name</label>
                        <input type="text" name="name" />

                        <label className="capitalize">e-mail</label>
                        <input type="email" name="user_email" />

                        <label className="capitalize">subject</label>
                        <input type="text" name="subject" />

                        <label className="capitalize">message</label>
                        <textarea name="message" rows="4" />
                        <input type="submit" className="get-start-btn btn2" value="Send Now" />
                    </form>
                    <div className="send-mail-now-exit" onClick={() => setShowMailForm(false)}>
                        <VscChromeMinimize />
                    </div>
                </div>
            </CSSTransition>
        </>
    );
}

export default SendMail
