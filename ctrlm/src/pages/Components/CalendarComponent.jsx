import React, { useEffect } from 'react';
import { createWindow } from '../Content/modules/closeWindow';
class Calendar extends React.Component {

    render() {
        createWindow("https://calendar.google.com/calendar/u/0/r", 750, 520, 0, 15, true, 'popup', 'fullscreen')

        return (

            <div />
        );
    }
}

export default Calendar;
