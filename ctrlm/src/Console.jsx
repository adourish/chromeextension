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
    controlService.createWindow("https://todoist.com/app/project/2149072136", 750, 800, 600, 15, 'Tasks', false);
    controlService.createWindow("https://mail.google.com/mail/u/0/#inbox", 750, 430, 0, 400, 'Mail', false)
    controlService.createWindow("https://calendar.google.com/calendar/u/0/r", 750, 520, 0, 15, 'Calendar', true);
  }, []);

  return (
    <div className="popup-container">
    </div>
  );
}

export default Console;