import { Component, Inject, OnInit } from '@angular/core';
import { HeaderModel } from 'src/app/shared/models/header/headermodel';
import { DialogSharedService } from 'src/app/shared/service/dialog-shared.service';
import { IDialogSharedService } from 'src/app/shared/service/idialog-shared.service';
import { ITypeUserResourceService } from '../service/itypeuser.resource';
import { ITypeUserService } from '../service/itypeuser.service';
import { TypeuserResourceService } from '../service/typeuser.resource';
import { TypeUserService } from '../service/typeuser.service';
import { CreateEditComponent } from './create/create-edit.component';

@Component({
  selector: 'app-typeuser',
  templateUrl: './typeuser.component.html',
  styleUrls: ['./typeuser.component.scss']
})
export class TypeuserComponent implements OnInit {

  headerModel: HeaderModel;
  constructor(@Inject(TypeuserResourceService) private resource: ITypeUserResourceService,
    @Inject(DialogSharedService) private dialog: IDialogSharedService,
    @Inject(TypeUserService) private service: ITypeUserService) {
    this.headerModel = this.resource.getHeaderTypeUserResource();
    this.service.getAllTypeUsers();
  }

  ngOnInit(): void {
  }

  addTypeUser = () => {
    this.dialog.openDialog(CreateEditComponent, '400px', '320px', { type: 'Create' });
  }

}
