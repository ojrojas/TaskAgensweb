import { Component, Inject, OnInit } from '@angular/core';
import { HeaderModel } from 'src/app/shared/models/header/headermodel';
import { DialogSharedService } from 'src/app/shared/service/dialog-shared.service';
import { IDialogSharedService } from 'src/app/shared/service/idialog-shared.service';
import { ITypeTaskResourceService } from '../service/itypetask.resource';
import { ITypeTaskService } from '../service/itypetask.service';
import { TypeTaskResourceService } from '../service/typetask.resource';
import { TypeTaskService } from '../service/typetask.service';
import { CreateEditComponent } from './create/create-edit.component';

@Component({
  selector: 'app-typetask',
  templateUrl: './typetask.component.html',
  styleUrls: ['./typetask.component.scss']
})
export class TypeTaskComponent implements OnInit {

  headerModel: HeaderModel;
  constructor(@Inject(TypeTaskResourceService) private resource: ITypeTaskResourceService,
    @Inject(DialogSharedService) private dialog: IDialogSharedService,
    @Inject(TypeTaskService) private service: ITypeTaskService) {
    this.headerModel = this.resource.getHeaderTypeTaskResource();
    this.service.getAllTypeTasks();
  }

  ngOnInit(): void {
  }

  addTypeTask = () => {
    this.dialog.openDialog(CreateEditComponent, '400px', '320px', { type: 'Create' });
  }
}
