import './Console.css';
import React, { useRef, useEffect, useState } from 'react';
import { ControlService } from './Services/ControlService'


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
    controlService.createWindow("https://todoist.com/app/project/2149072136", 1600, 1000, 0, 0, 'Tasks', false, true);
    controlService.createWindow("https://mail.google.com/mail/u/0/#inbox", 1600, 1000, 0, 0, 'Mail', false, true)
    controlService.createWindow("https://calendar.google.com/calendar/u/0/r", 1600, 1000, 0, 0, 'Calendar', true, true);
  }, []);

  return (
    <div className="popup-container">
    </div>
  );
}

export default Console;