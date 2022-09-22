import { Injectable } from '@angular/core';
import { HeaderModel } from 'src/app/shared/models/header/headermodel';
import { ITypeUserResourceService } from './itypeuser.resource';

@Injectable({
  providedIn: 'root'
})
export class TypeuserResourceService implements ITypeUserResourceService {

  constructor() { }

  getHeaderTypeUserResource = (): HeaderModel => {
    return {
        titlePage:'Type User', 
        subTitle: 'List Users'
    }
}

}
