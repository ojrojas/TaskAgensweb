import { Injectable } from '@angular/core';
import { HeaderModel } from 'src/app/shared/models/header/headermodel';
import { ITypeTaskResourceService } from './itypetask.resource';

@Injectable({
  providedIn: 'root'
})
export class TypeTaskResourceService implements ITypeTaskResourceService {
  getHeaderTypeTaskResource = (): HeaderModel => {
    return {
      titlePage: 'Type Task',
      subTitle: 'List Type Tasks'
    }
  }

}
