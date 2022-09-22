import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ITypeTask } from 'src/app/core/models/itypetask.model';
import { ITypeTaskService } from '../../service/itypetask.service';
import { TypeTaskService } from '../../service/typetask.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail-delete.component.html',
  styleUrls: ['./detail-delete.component.scss']
})
export class DetailDeleteComponent implements OnInit {

  typeTask: ITypeTask;
  type: string;

  constructor(public dialogRef: MatDialogRef<DetailDeleteComponent>,
    @Inject(TypeTaskService) private service: ITypeTaskService,
    @Inject(MAT_DIALOG_DATA) public data: any,) {
    this.type = this.data.type;
    this.typeTask = this.data.typeTask;
  }

  ngOnInit(): void {
  }

  deleteTypeTask = (): void => {
    this.service.delete({ typeTask: this.typeTask });
    this.dialogRef.close();
  }

  cancel = (): void => {
    this.dialogRef.close();
  }
}
