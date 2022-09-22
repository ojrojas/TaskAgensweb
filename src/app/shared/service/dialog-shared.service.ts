import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { IDialogSharedService } from './idialog-shared.service';

@Injectable({
  providedIn: 'root'
})
export class DialogSharedService implements IDialogSharedService {

  constructor( public dialog: MatDialog) { }

  openDialog = (component:any, height:string, width:string, data: any | undefined) =>  this.dialog.open(component, {height:height, width:width, data:data}); 
  closeDialog = ()=> this.dialog.closeAll();
    
}
