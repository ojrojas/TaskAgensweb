import { Component, Inject, OnInit } from '@angular/core';
import { ITypeTask } from 'src/app/core/models/itypetask.model';
import { ITypeUser } from 'src/app/core/models/itypeuser.model';
import { DialogSharedService } from 'src/app/shared/service/dialog-shared.service';
import { IDialogSharedService } from 'src/app/shared/service/idialog-shared.service';
import { ITypeTaskService } from '../../service/itypetask.service';
import { TypeTaskService } from '../../service/typetask.service';
import { CreateEditComponent } from '../create/create-edit.component';
import { DetailDeleteComponent } from '../detail/detail-delete.component';

@Component({
  selector: 'app-list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.scss']
})
export class ListTableComponent implements OnInit {

  listTypeTasks: ITypeTask[] = [];
  namesColumns: string[] = ['name', 'createdOn', 'actions'];
  constructor(@Inject(TypeTaskService) private service: ITypeTaskService,
    @Inject(DialogSharedService) private dialog: IDialogSharedService) {
    this.service.getState().subscribe(response => {
      if (response) {
        this.listTypeTasks = response.getAllTypeTaskResponse?.typeTasks as ITypeTask[];
      }
    });
  }

  ngOnInit(): void {
  }

  deleteTypeUser(typeTask: ITypeTask) {
    this.dialog.openDialog(DetailDeleteComponent, '250px', '420px', { type: "Delete", typeTask })
  }

  updateTypeUser(typeTask: ITypeTask): void {
    this.dialog.openDialog(CreateEditComponent, '320px', '300px', { type: "Edit", typeTask });
  }

  detailTypeUser(typeTask: ITypeTask): void {
    this.dialog.openDialog(DetailDeleteComponent, '250px', '420px', { type: "Detail", typeTask })
  }

}
