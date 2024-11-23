import React, { useEffect } from 'react';
import { createWindow } from '../Content/modules/closeWindow';
class TerminalPopup extends React.Component {

    render() {
        var url = "chrome-extension://" + chrome.runtime.id + "/terminal.html";
        console.log("TerminalPopup", url)
        createWindow(url, 750, 430, 0, 550, false, 'popup')

        return (

            <div />
        );
    }
}

export default TerminalPopup;
