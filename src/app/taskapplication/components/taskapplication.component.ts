import { Component, Inject, OnInit } from '@angular/core';
import { ActivityTaskService } from 'src/app/activitytask/service/activitytask.service';
import { IActivityTaskService } from 'src/app/activitytask/service/iactivitytask.service';
import { HeaderModel } from 'src/app/shared/models/header/headermodel';
import { DialogSharedService } from 'src/app/shared/service/dialog-shared.service';
import { IDialogSharedService } from 'src/app/shared/service/idialog-shared.service';
import { ITypeTaskService } from 'src/app/typetask/service/itypetask.service';
import { TypeTaskService } from 'src/app/typetask/service/typetask.service';
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
    @Inject(TaskApplicationService) private service: ITaskApplicationService,
    @Inject(TypeTaskService) private typeTaskService: ITypeTaskService,
    @Inject(ActivityTaskService) private activityTaskService: IActivityTaskService) {
    this.headerModel = this.resource.getHeaderTaskApplicationResource();
    this.service.getAllTaskApplications();
    this.typeTaskService.getAllTypeTasks();
    this.activityTaskService.getAllActivityTasks();
  }

  ngOnInit(): void {
  }

  addTaskApplication = () => {
    this.dialog.openDialog(CreateEditComponent, '530px', '620px', { type: 'Create' });
  }
}