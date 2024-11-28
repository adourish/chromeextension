
import  RobodogLib from '../../node_modules/robodoglib/dist/robodoglib.bundle';
const providerService = new RobodogLib.ProviderService();

class LauncherService {

   getData() {
      let launcherYaml = providerService.getJson('launcherYaml', this.getDefault());
      console.debug('LauncherService.getdata', launcherYaml);
      return launcherYaml;
   }

   getDefault() {
      let yaml = `
- url: https://todoist.com/app/project/2149072136
  width: 1600
  height: 1000
  left: 0
  top: 0
  name: Tasks
  focused: false
  fullscreen: true
- url: https://mail.google.com/mail/u/0/#inbox
  width: 1600
  height: 1000
  left: 0
  top: 0
  name: Mail
  focused: false
  fullscreen: true
- url: https://calendar.google.com/calendar/u/0/r
  width: 1600
  height: 1000
  left: 0
  top: 0
  name: Calendar
  focused: true
  fullscreen: true
- url: https://chat.google.com/
  width: 1600
  height: 1000
  left: 0
  top: 0
  name: Google Chat
  focused: false
  fullscreen: true
- url: https://web.whatsapp.com/
  width: 1600
  height: 1000
  left: 0
  top: 0
  name: Whatsapp
  focused: false
  fullscreen: true
`;
      return yaml;
   }

}

export { LauncherService };