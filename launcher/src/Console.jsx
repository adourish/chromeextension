import './Console.css';
import React, { useRef, useEffect, useState } from 'react';
import { ControlService } from './Services/ControlService'
import { ConsoleService } from './Services/ConsoleService'
import { FormatService } from './Services/FormatService'
import { LauncherService } from './Services/LauncherService'

var build = '';
if (window) {
  const version = window.version;
  const buildNumber = window.buildNumber;
  const buildInfo = window.buildInfo;
  build = version + " - " + buildNumber + " - " + buildInfo;
}

function Console() {

  const [content, setContent] = useState([]);
  var controlService = new ControlService();
  var formatService = new FormatService();
  var laucherService = new LauncherService();
  var data = laucherService.getData();
  console.debug('console.constrolservice', controlService, build)
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
      
      const formattedItem = formatService.getMessageWithTimestamp(windowData.name, windowData.name, windowData.url);
      setContent(prevContent => [...prevContent, formattedItem]);
    })
  }, []);

  return (
    <div className="console">
      <div id="consoleContent" className="console-content">
        {content.map((item, index) => {
          if (item.role === 'image') {
            return (
              <div key="{index}"><img src={item.command} alt={item.role} className='image-size-50' /></div>
            );
          } else if (item.role === 'ufo') {
            return (
              <pre class='ufo-text' key={index} focus={item.focus} alt="{item.datetime}{item.roleEmoji}">
                <code>{item.command}</code>
              </pre>
            );
          } else if (item.role === 'search') {
            return (
              <div key="{index}">{`${item.command}`}<a href={item.url} rel="noreferrer" target="_blank" alt={item.role}>🔗</a></div>
            );
          } else if (item.role === 'model') {
            return (
              <pre class='console-text' key={index} focus={item.focus} onClick={() => handleSetModel(item.command)}>
                <code>{`/model ${item.command}`}</code>
              </pre>
            );
          } else if (item.role === 'setting' || item.role === 'help') {
            return (
              <pre class='setting-text' key="{index}" focus="{item.focus}" alt="{item.datetime}{item.roleEmoji}">
                <code>{item.command}</code>
              </pre>
            );
          } else {
            return (
              <pre class='console-text' key={index} focus={item.focus} onClick={() => copyToClipboard(item.command)}>
                <code>{`${item.datetime} ${item.roleEmoji}:${item.command}`}</code>
              </pre>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Console;