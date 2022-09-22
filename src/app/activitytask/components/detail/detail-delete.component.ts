import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IActivityTaskService } from '../../service/iactivitytask.service';
import { ActivityTaskService } from '../../service/activitytask.service';
import { IActivityTask } from 'src/app/core/models/activitytask.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail-delete.component.html',
  styleUrls: ['./detail-delete.component.scss']
})
export class DetailDeleteComponent implements OnInit {

  activityTask: IActivityTask;
  type: string;

  constructor(public dialogRef: MatDialogRef<DetailDeleteComponent>,
    @Inject(ActivityTaskService) private service: IActivityTaskService,
    @Inject(MAT_DIALOG_DATA) public data: any,) {
    this.type = this.data.type;
    this.activityTask = this.data.activityTask;
  }

  ngOnInit(): void {
  }

  deleteActivityTask = (): void => {
    this.service.delete({ activityTask: this.activityTask });
    this.dialogRef.close();
  }

  cancel = (): void => {
    this.dialogRef.close();
  }
}
