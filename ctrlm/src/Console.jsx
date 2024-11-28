import './Console.css';
import React, { useRef, useEffect, useState } from 'react';
import { ControlService } from './Services/ControlService'
import data from './data.json';

var build = '';
if (window) {
  const version = window.version;
  const buildNumber = window.buildNumber;
  const buildInfo = window.buildInfo;
  build = version + " - " + buildNumber + " - " + buildInfo;
}
var controlService = new ControlService();

console.debug('console.constrolservice', controlService)
function Console() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    data.forEach(windowData => {
      controlService.createWindow(
        windowData.url,
        windowData.width,
        windowData.height,
        windowData.left,
        windowData.top,
        windowData.name,
        windowData.focused,
        windowData.fullscreen
      );
    })
  }, []);

  return (
    <div className="popup-container">
    </div>
  );
}

export default Console;