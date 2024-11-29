import './Console.css';
import React, { useRef, useEffect, useState } from 'react';

import { FormatService } from './Services/FormatService'
import { LauncherService } from './Services/LauncherService'
import RobodogLib from '../node_modules/robodoglib/dist/robodoglib.bundle';
var build = '';
if (window) {
  const version = window.version;
  const buildNumber = window.buildNumber;
  const buildInfo = window.buildInfo;
  build = version + " - " + buildNumber + " - " + buildInfo;
}

const controlService = new RobodogLib.ControlService();
const formatService = new FormatService();
const laucherService = new LauncherService();
const providerService = new RobodogLib.ProviderService();

function Console() {

  const [content, setContent] = useState([]);
  const [showSettings, setShowSettings] = useState(false);
  const [yamlConfig, setYamlConfig] = useState('')

  const [isLoaded, setIsLoaded] = useState(false);


  useEffect(() => {
    console.log('Component has mounted!');
    if (!isLoaded) {
      let data = laucherService.getData();
      print(data, setContent);
      launch(data);
      setIsLoaded(true);
    }
  }, [isLoaded, setIsLoaded, content, setContent, formatService]);





 

  function print(data, setContent){

    var _cc = [
      ...content,
      formatService.getMessageWithTimestamp('Launcher', 'popup')
    ];
    setContent(_cc);
    data.forEach(d => {
      _cc.push(formatService.getMessageWithTimestamp(d.name, 'user'))
      setContent(_cc);

    });

  }

  function launch(data) {

    console.debug('console.constrolservice', controlService, providerService, laucherService, formatService, build)

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
    });
    //controlService.resizeWindow('🛸', 150, 200);
    return data;
  }

  const handleSettingsToggle = () => {
    console.debug('handleSettingsToggle', showSettings)
    setShowSettings(!showSettings);
  };
  const handleYamlConfigKeyChange = (key) => {
    console.debug('handleYamlConfigKeyChange', key);
    providerService.setYaml(key);
    setYamlConfig(key);
  };
  //handleLauch
  function handleLaunch(name, url) {
    console.debug('handleLaunch', name, url)
    controlService.focus(name, url)
  }

  return (

    <div className="console">
      <span className="char-count">
        <button type="button" onClick={handleSettingsToggle} aria-label="settings" className="button-uploader" title="Settings">⚙️</button>
      </span>
      <div className={`settings-content ${showSettings ? 'visible' : 'hidden'}`}>
        <label htmlFor="yamlConfig">Config:</label>
        <textarea
          id="yamlConfig"
          rows="30"
          className="input-field"
          value={yamlConfig}
          onChange={(e) => handleYamlConfigKeyChange(e.target.value)}
        />
      </div>
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
          } else if (item.role === 'popup') {
            return (
              <pre class='console-text' key={index} focus={item.focus} onClick={() => handleLaunch(item.command, item.url)}>
             <code>{`${item.datetime} ${item.roleEmoji}:${item.command}`}</code>
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
              <pre class='console-text' key={index} focus={item.focus} >
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