import { Component, Inject, OnInit } from '@angular/core';
import { ITypeUser } from 'src/app/core/models/itypeuser.model';
import { DialogSharedService } from 'src/app/shared/service/dialog-shared.service';
import { IDialogSharedService } from 'src/app/shared/service/idialog-shared.service';
import { ITypeUserService } from '../../service/itypeuser.service';
import { TypeUserService } from '../../service/typeuser.service';
import { CreateEditComponent } from '../create/create-edit.component';
import { DetailDeleteComponent } from '../detail/detail-delete.component';

@Component({
  selector: 'app-list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.scss']
})
export class ListTableComponent implements OnInit {

  listTypeUsers: ITypeUser[] = [];
  namesColumns: string[] = ['name', 'createdOn', 'actions'];
  constructor(@Inject(TypeUserService) private service: ITypeUserService,
    @Inject(DialogSharedService) private dialog: IDialogSharedService) {
    this.service.getState().subscribe(response => {
      if (response) {
        this.listTypeUsers = response.getAllTypeUserResponse?.typeUsers as ITypeUser[];
      }
    });
  }

  ngOnInit(): void {
  }

  deleteTypeUser(typeUser: ITypeUser) {
    this.dialog.openDialog(DetailDeleteComponent, '250px', '420px', { type: "Delete", typeUser: typeUser })
  }

  updateTypeUser(typeUser: ITypeUser): void {
    this.dialog.openDialog(CreateEditComponent, '320px', '300px', { type: "Edit", typeUser: typeUser });
  }

  detailTypeUser(typeUser: ITypeUser): void {
    this.dialog.openDialog(DetailDeleteComponent, '250px', '420px', { type: "Detail", typeUser: typeUser })
  }

}
