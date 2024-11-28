import { FormatService } from './FormatService';
import data from '../Data/data.json';
const formatService = new FormatService();

class LauncherService {
  constructor() {

  }

 getData(){
    console.debug('LauncherService.getdata', data);
    return data;
 }



}

export { LauncherService };