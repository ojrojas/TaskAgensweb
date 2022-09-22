import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ITypeUser } from 'src/app/core/models/itypeuser.model';
import { ITypeUserService } from '../../service/itypeuser.service';
import { TypeUserService } from '../../service/typeuser.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail-delete.component.html',
  styleUrls: ['./detail-delete.component.scss']
})
export class DetailDeleteComponent implements OnInit {

  typeUser: ITypeUser;
  type: string;

  constructor(public dialogRef: MatDialogRef<DetailDeleteComponent>,
    @Inject(TypeUserService) private service: ITypeUserService,
    @Inject(MAT_DIALOG_DATA) public data: any,) {
    this.type = this.data.type;
    this.typeUser = this.data.typeUser;
  }

  ngOnInit(): void {
  }

  deleteTypeUser = (): void => {
    this.service.delete({ typeUser: this.typeUser });
    this.dialogRef.close();
  }

  cancel = (): void => {
    this.dialogRef.close();
  }
}
