import { Component, Inject, OnInit } from '@angular/core';
import { ITaskApplication } from 'src/app/core/models/itaskapplication';
import { DialogSharedService } from 'src/app/shared/service/dialog-shared.service';
import { IDialogSharedService } from 'src/app/shared/service/idialog-shared.service';
import { ITaskApplicationService } from '../../service/itaskapplication.service';
import { TaskApplicationService } from '../../service/taskapplication.service';
import { CreateEditComponent } from '../create/create-edit.component';
import { DetailDeleteComponent } from '../detail/detail-delete.component';

@Component({
  selector: 'app-list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.scss']
})
export class ListTableComponent implements OnInit {

  listTaskApplications: ITaskApplication[] = [];
  namesColumns: string[] = ['name', 'createdOn', 'actions'];
  constructor(@Inject(TaskApplicationService) private service: ITaskApplicationService,
    @Inject(DialogSharedService) private dialog: IDialogSharedService) {
    this.service.getState().subscribe(response => {
      if (response) {
        this.listTaskApplications = response.getAllTaskApplicationResponse?.taskApplications as ITaskApplication[];
      }
    });
  }

  ngOnInit(): void {
  }

  deleteTypeUser(TaskApplication: ITaskApplication) {
    this.dialog.openDialog(DetailDeleteComponent, '250px', '420px', { type: "Delete", TaskApplication })
  }

  updateTypeUser(TaskApplication: ITaskApplication): void {
    this.dialog.openDialog(CreateEditComponent, '320px', '300px', { type: "Edit", TaskApplication });
  }

  detailTypeUser(TaskApplication: ITaskApplication): void {
    this.dialog.openDialog(DetailDeleteComponent, '250px', '420px', { type: "Detail", TaskApplication })
  }

}
