import { Component, Inject, OnInit } from '@angular/core';
import { HeaderModel } from 'src/app/shared/models/header/headermodel';
import { DialogSharedService } from 'src/app/shared/service/dialog-shared.service';
import { IDialogSharedService } from 'src/app/shared/service/idialog-shared.service';
import { ITaskApplicationResourceService } from '../service/itaskapplication.resource';
import { ITaskApplicationService } from '../service/itaskapplication.service';
import { TaskApplicationResourceService } from '../service/taskapplication.resource';
import { TaskApplicationService } from '../service/taskapplication.service';
import { CreateEditComponent } from './create/create-edit.component';

@Component({
  selector: 'app-taskapplication',
  templateUrl: './taskapplication.component.html',
  styleUrls: ['./taskapplication.component.scss']
})
export class TaskApplicationComponent implements OnInit {

  headerModel: HeaderModel;
  constructor(@Inject(TaskApplicationResourceService) private resource: ITaskApplicationResourceService,
    @Inject(DialogSharedService) private dialog: IDialogSharedService,
    @Inject(TaskApplicationService) private service: ITaskApplicationService) {
    this.headerModel = this.resource.getHeaderTaskApplicationResource();
    this.service.getAllTaskApplications();
  }

  ngOnInit(): void {
  }

  addTaskApplication = () => {
    this.dialog.openDialog(CreateEditComponent, '530px', '620px', { type: 'Create' });
  }
}