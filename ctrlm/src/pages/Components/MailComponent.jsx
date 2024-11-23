import React, { useEffect } from 'react';
import { createWindow } from '../Content/modules/closeWindow';
class Mail extends React.Component {

    render() {
        createWindow("https://mail.google.com/mail/u/0/#inbox", 750, 430, 0, 400, true, 'popup', 'fullscreen')

        return (

            <div />
        );
    }
}

export default Mail;
