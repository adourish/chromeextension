import React, { useEffect } from 'react';
import { createWindow } from '../Content/modules/closeWindow';
class Tasks extends React.Component {

    render() {
        createWindow("https://todoist.com/app/project/2149072136", 750, 800, 600, 15, true, 'popup', 'fullscreen')

        return (

            <div />
        );
    }
}

export default Tasks;
