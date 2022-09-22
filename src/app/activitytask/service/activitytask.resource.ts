import { Injectable } from '@angular/core';
import { HeaderModel } from 'src/app/shared/models/header/headermodel';
import { IActivityTaskResourceService } from './iactivitytask.resource';

@Injectable({
  providedIn: 'root'
})
export class ActivityTaskResourceService implements IActivityTaskResourceService {

  constructor() { }

  getHeaderActivityTaskResource = (): HeaderModel => {
    return {
        titlePage:'Activity Task', 
        subTitle: 'List Activities Task'
    }
}

}
