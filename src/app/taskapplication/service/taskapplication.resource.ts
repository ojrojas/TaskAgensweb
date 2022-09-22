import { Injectable } from '@angular/core';
import { HeaderModel } from 'src/app/shared/models/header/headermodel';
import { ITaskApplicationResourceService } from './itaskapplication.resource';

@Injectable({
  providedIn: 'root'
})
export class TaskApplicationResourceService implements ITaskApplicationResourceService {
  getHeaderTaskApplicationResource = (): HeaderModel => {
    return {
      titlePage: 'Task Applications',
      subTitle: 'List Tasks Applications'
    }
  }

}
