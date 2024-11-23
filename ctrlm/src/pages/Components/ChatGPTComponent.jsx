import React, { useEffect } from 'react';
import { createWindow } from '../Content/modules/closeWindow';
class ChatGPT extends React.Component {

    render() {
        createWindow("https://chat.openai.com/", 500, 1200, 1250, 15, true, 'popup', 'fullscreen')

        return (
            <div />
        );
    }

}

export default ChatGPT;

