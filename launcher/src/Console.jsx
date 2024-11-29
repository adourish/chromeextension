import './Console.css';
import React, { useRef, useEffect, useState } from 'react';
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
const formatService = new RobodogLib.FormatService();
const laucherService = new LauncherService();
const providerService = new RobodogLib.ProviderService();
const ConsoleContentComponent = RobodogLib.ConsoleContentComponent;
const SettingsComponent = RobodogLib.SettingsComponent;
console.debug(ConsoleContentComponent)
function Console() {

  const [content, setContent] = useState([]);
  const [showSettings, setShowSettings] = useState(false);
  const [yamlConfig, setYamlConfig] = useState('')
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    console.log('Component has mounted!');
    if (!isLoaded) {
      setContent([...content, formatService.getMessageWithTimestamp(build, 'experiment')]);
      let data = laucherService.getData();
      print(data, setContent);
      launch(data);
      setIsLoaded(true);
      controlService.saveWindowsToLocalStorage();
    }
  }, [isLoaded, setIsLoaded, content, setContent]);

  function print(data, setContent) {
    var _cc = [
      ...content,
      formatService.getMessageWithTimestamp('Launcher', 'assistent')
    ];
    setContent(_cc);
    data.forEach(d => {
      _cc.push(formatService.getMessageWithTimestamp(d.name, 'popup', d.url))
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

  const handleSetModel = (event) => {
    var message = 'Model is set to ' + event;
    console.debug('handleSetModel', message);
  }
  function copyToClipboard(text) {
    console.debug('copyToClipboard', text);
  }

  return (

    <div className="console">
      <span className="char-count">
        <button type="button" onClick={handleSettingsToggle} aria-label="settings" className="button-uploader" title="Settings">⚙️</button>
      </span>
      <SettingsComponent
        showSettings={showSettings}
        yamlConfig={yamlConfig}
        handleYamlConfigKeyChange={handleYamlConfigKeyChange}
      />
      <ConsoleContentComponent
        content={content}
        handleCopyToClipboard={copyToClipboard}
        handleSetModel={handleSetModel}
        handleLaunch={handleLaunch}
      />
    </div>
  );
}

export default Console;