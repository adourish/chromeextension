import React, { useEffect } from 'react';
import { createWindow } from '../Content/modules/closeWindow';
class Feed extends React.Component {

    render() {
        createWindow("https://feedly.com/i/collection/content/user/87413ef9-a577-4f9c-92f6-d3f1cd54de9a/category/global.all", 850, 1200, 950, 15, false, 'popup', 'fullscreen')

        return (

            <div />
        );
    }
}

export default Feed;
