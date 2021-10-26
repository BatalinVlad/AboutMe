import React from 'react';

function SendMailNow({onSetToggleSendMail}) {
    return (
        <>
            <div className="send-mail-now container flex column align-center">
              <h1 className="text-center">  hey send mail now! </h1>
                <div className="send-mail-now-exit" onClick={onSetToggleSendMail}>
                <h1>X</h1>
                </div>
            </div>
        </>
    )
};

export default (SendMailNow)