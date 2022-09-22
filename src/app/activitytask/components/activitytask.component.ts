import { Component, Inject, OnInit } from '@angular/core';
import { HeaderModel } from 'src/app/shared/models/header/headermodel';
import { DialogSharedService } from 'src/app/shared/service/dialog-shared.service';
import { IDialogSharedService } from 'src/app/shared/service/idialog-shared.service';
import { IActivityTaskResourceService } from '../service/iactivitytask.resource';
import { IActivityTaskService } from '../service/iactivitytask.service';
import { ActivityTaskResourceService } from '../service/activitytask.resource';
import { ActivityTaskService } from '../service/activitytask.service';
import { CreateEditComponent } from './create/create-edit.component';

@Component({
  selector: 'app-activitytask',
  templateUrl: './activitytask.component.html',
  styleUrls: ['./activitytask.component.scss']
})
export class ActivityTaskComponent implements OnInit {

  headerModel: HeaderModel;
  constructor(@Inject(ActivityTaskResourceService) private resource: IActivityTaskResourceService,
    @Inject(DialogSharedService) private dialog: IDialogSharedService,
    @Inject(ActivityTaskService) private service: IActivityTaskService) {
    this.headerModel = this.resource.getHeaderActivityTaskResource();
    this.service.getAllActivityTasks();
  }

  ngOnInit(): void {
  }

  addActivityTask = () => {
    this.dialog.openDialog(CreateEditComponent, '400px', '320px', { type: 'Create' });
  }

}
