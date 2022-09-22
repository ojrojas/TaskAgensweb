import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ITypeTask } from 'src/app/core/models/itypetask.model';
import { IUser } from 'src/app/core/models/iuser.model';
import { ITypeTaskService } from '../../service/itypetask.service';
import { TypeTaskService } from '../../service/typetask.service';

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
    @Inject(TypeTaskService) private service: ITypeTaskService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private auth: AuthService) {
    this.type = this.data.type;
    this.service.getState().subscribe(res => this.loading = res.loading);
    this.auth.getUserInfo().subscribe(res => this.user = res)
    if (this.type === 'Create')
      this.form = this.formBuilder.group({
        typeTaskName: ['', Validators.required]
      });
    else
      this.form = this.formBuilder.group({
        typeTaskName: [this.data.typeTask.typeTaskName, Validators.required]
      });
  }
  ngOnInit(): void { 
    console.log("load component");
  }

  add = () => {
    if (this.form.valid) {
      if (this.type === 'Create') {
        const create = {
          
          typeTaskName: this.form.value?.typeTaskName,
          createdBy: this.user?.id,
          createdOn: new Date()
        } as ITypeTask;
        this.service.add({ typeTask: create });
      }
      else {
        const edit = {
          id: this.data.typeTask.id,
          typeTaskName: this.form.value?.typeTaskName,
          modifiedBy: this.user?.id,
          modifiedOn: new Date(),
          createdBy: this.data.typeTask.createBy,
          createdOn: this.data.typeTask.createdOn
        } as ITypeTask;
        this.service.update({ typeTask: edit });
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
