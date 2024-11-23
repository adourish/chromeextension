import React, { useEffect } from 'react';
import { createWindow } from '../Content/modules/closeWindow';
class Chat extends React.Component {

    render() {
        createWindow("https://mail.google.com/chat/u/0/#chat/dm/vt8gbgAAAAE", 750, 800, 600, 15, false, 'popup', 'fullscreen')
        createWindow("https://messages.google.com/web/conversations/925", 750, 900, 600, 15, false, 'popup', 'fullscreen')
        createWindow("https://web.whatsapp.com/", 750, 900, 600, 15, false, 'popup', 'fullscreen')
        return (

            <div />
        );
    }
}

export default Chat;
