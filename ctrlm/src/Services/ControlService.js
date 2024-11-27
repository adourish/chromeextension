class ControlService {

  constructor() {
    this.windows = new Map();
  }

  createWindow(url = '', width, height, left, top, name = 'Popup', focused=true) {
    try {
      const existingWindow = this.windows.get(name);
      if (existingWindow) {
        console.debug('createWindow existing', existingWindow, url, name, width, height, left, focused)
        existingWindow.location.href = url;
        existingWindow.focus();
      } else {
        console.debug('createWindow existing', url, name, width, height, left, focused)
        const features = `width=${width},height=${height},left=${left},top=${top}`;
        const newWindow = window.open(url, name, features);
        if (newWindow === null) {
          throw new Error('Failed to create a new window');
        }
        this.windows.set(name, newWindow);
        newWindow.location.href = url;
        if (focused) {
          newWindow.focus();
        }
      }
    } catch (error) {
      console.error('Failed to create or focus on the window', error);
    }
  }

  runScriptOnWindow(name, code) {
    try {
      const existingWindow = this.windows.get(name);
      if (existingWindow) {
        const script = document.createElement('script');
        script.textContent = code;
        existingWindow.document.body.appendChild(script);
      }
    } catch (error) {
      console.error('Failed to run the script on the window', error);
    }
  }
}

export { ControlService };