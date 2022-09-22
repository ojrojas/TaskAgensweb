import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ITaskApplication } from 'src/app/core/models/itaskapplication';
import { ITaskApplicationService } from '../../service/itaskapplication.service';
import { TaskApplicationService } from '../../service/taskapplication.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail-delete.component.html',
  styleUrls: ['./detail-delete.component.scss']
})
export class DetailDeleteComponent implements OnInit {

  taskApplication: ITaskApplication;
  type: string;

  constructor(public dialogRef: MatDialogRef<DetailDeleteComponent>,
    @Inject(TaskApplicationService) private service: ITaskApplicationService,
    @Inject(MAT_DIALOG_DATA) public data: any,) {
    this.type = this.data.type;
    this.taskApplication = this.data.TaskApplication;
  }

  ngOnInit(): void {
  }

  deleteTaskApplication = (): void => {
    this.service.delete({ taskApplication: this.taskApplication });
    this.dialogRef.close();
  }

  cancel = (): void => {
    this.dialogRef.close();
  }
}
