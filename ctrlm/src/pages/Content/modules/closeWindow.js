
export const createWindow = (url, width, height, left, top, focused, type, state) => {
  if (!type) {
    type = 'popup';
  }
  chrome.windows.getAll({ populate: true }, function (windows) {
    console.log("createWindow getAll", windows)
    // Check if the window already exists
    let existingWindow = null;
    for (let i = 0; i < windows.length; i++) {
      const window = windows[i];
      for (let j = 0; j < window.tabs.length; j++) {
        const tab = window.tabs[j];
        if (tab && tab.url) {
          console.log("createWindow getAll looking", tab.url)
        }
        if (tab.url === url) {
          existingWindow = window;
          break;
        }
      }
    }

    if (existingWindow) {
      console.log("createWindow update", url)
      // Update the existing window's URL
      chrome.tabs.update(existingWindow.tabs[0].id, { url: url });

      // Bring the existing window to the foreground
      chrome.windows.update(existingWindow.id, { focused: focused });
    } else {
      // Create a new window
      console.log("createWindow create", url)
      if (type === 'popup') {
        chrome.windows.create({
          url: url,
          type: type,
          focused: focused,
          width: width,
          height: height,
          left: left,
          top: top,
          state: 'normal'
        });
      } else {
        chrome.windows.create({
          url: url,
          type: type

        });
      }
    }
  });

};

export const runScriptOnWindow = (name, url, code) => {
  chrome.windows.getAll({ populate: true }, function (windows) {
    console.log("runScriptOnWindow getAll", windows)
    // Check if the window already exists
    let existingWindow = null;
    let existingTab = null;
    for (let i = 0; i < windows.length; i++) {
      const window = windows[i];
      for (let j = 0; j < window.tabs.length; j++) {
        const tab = window.tabs[j];
        if (tab && tab.url) {
          console.log("runScriptOnWindow getAll looking", tab.url)
        }
        if (tab.url === url) {
          existingWindow = window;
          existingTab = tab;
          break;
        }
      }
    }
    if (existingWindow && existingTab) {
      console.log("runScriptOnWindow found", url)
      const scriptDetails = {
        code: code,
      };
      chrome.scripting
        .executeScript({
          target: { tabId: existingTab.id, allFrames: false },
          func: code,
        })
        .then((results) => {
          if (results) {
            localStorage.setItem(name, results[0].result);

          }
          console.log("Script injected in all frames");
          console.log("Script results:", results[0].result);
        });
    }
  });

};

