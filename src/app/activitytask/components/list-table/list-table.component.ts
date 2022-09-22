import { Component, Inject, OnInit } from '@angular/core';
import { DialogSharedService } from 'src/app/shared/service/dialog-shared.service';
import { IDialogSharedService } from 'src/app/shared/service/idialog-shared.service';
import { IActivityTaskService } from '../../service/iactivitytask.service';
import { ActivityTaskService } from '../../service/activitytask.service';
import { CreateEditComponent } from '../create/create-edit.component';
import { DetailDeleteComponent } from '../detail/detail-delete.component';
import { IActivityTask } from 'src/app/core/models/activitytask.model';

@Component({
  selector: 'app-list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.scss']
})
export class ListTableComponent implements OnInit {

  listActivityTasks: IActivityTask[] = [];
  namesColumns: string[] = ['name', 'createdOn', 'actions'];
  constructor(@Inject(ActivityTaskService) private service: IActivityTaskService,
    @Inject(DialogSharedService) private dialog: IDialogSharedService) {
    this.service.getState().subscribe(response => {
      if (response) {
        this.listActivityTasks = response.getAllActivityTaskResponse?.activityTasks as IActivityTask[];
      }
    });
  }

  ngOnInit(): void {
  }

  deleteActivityTask(activityTask: IActivityTask) {
    this.dialog.openDialog(DetailDeleteComponent, '250px', '420px', { type: "Delete", activityTask })
  }

  updateActivityTask(activityTask: IActivityTask): void {
    this.dialog.openDialog(CreateEditComponent, '320px', '300px', { type: "Edit", activityTask });
  }

  detailActivityTask(activityTask: IActivityTask): void {
    this.dialog.openDialog(DetailDeleteComponent, '250px', '420px', { type: "Detail", activityTask })
  }

}
