import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ITypeUser } from 'src/app/core/models/itypeuser.model';
import { IUser } from 'src/app/core/models/iuser.model';
import { ITypeUserService } from '../../service/itypeuser.service';
import { TypeUserService } from '../../service/typeuser.service';

@Component({
  selector: 'app-create',
  templateUrl: './create-edit.component.html',
  styleUrls: ['./create-edit.component.scss']
})
export class CreateEditComponent implements OnInit {

  type: string;
  form: UntypedFormGroup;
  loading: boolean = false;
  user: IUser | undefined;
  constructor(
    public dialogRef: MatDialogRef<CreateEditComponent>,
    private formBuilder: UntypedFormBuilder,
    @Inject(TypeUserService) private service: ITypeUserService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private auth: AuthService) {
    this.type = this.data.type;
    this.service.getState().subscribe(res => this.loading = res.loading);
    this.auth.getUserInfo().subscribe(res => this.user = res)
    if (this.type === 'Create')
      this.form = this.formBuilder.group({
        typeName: ['', Validators.required]
      });
    else
      this.form = this.formBuilder.group({
        typeName: [this.data.typeUser.typeName, Validators.required]
      });
  }
  ngOnInit(): void { 
    console.log("load component");
  }

  add = () => {
    if (this.form.valid) {
      if (this.type === 'Create') {
        const create = {
          typeName: this.form.value?.typeName,
          createdBy: this.user?.id,
          createdOn: new Date()
        } as ITypeUser;
        this.service.add({ typeUser: create });
      }
      else {
        const edit = {
          id: this.data.typeUser.id,
          typeName: this.form.value?.typeName,
          modifiedBy: this.user?.id,
          modifiedOn: new Date(),
          createdBy: this.data.typeUser.createBy,
          createdOn: this.data.typeUser.createdOn
        } as ITypeUser;
        this.service.update({ typeUser: edit });
      }
      this.dialogRef.close();
    }
    else
      this.markValidityForm();
  }

  cancel = () => {
    this.dialogRef.close();
  }

  markValidityForm(): void {
    for (const control in this.form.controls) {
      this.form.controls[control].markAsDirty();
      this.form.controls[control].markAsTouched();
    }
  }
}
