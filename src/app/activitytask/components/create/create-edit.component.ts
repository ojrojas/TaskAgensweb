import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'src/app/auth/services/auth.service';
import { IActivityTask } from 'src/app/core/models/activitytask.model';
import { IUser } from 'src/app/core/models/iuser.model';
import { ActivityTaskService } from '../../service/activitytask.service';
import { IActivityTaskService } from '../../service/iactivitytask.service';

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
    @Inject(ActivityTaskService) private service: IActivityTaskService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private auth: AuthService) {
    this.type = this.data.type;
    this.service.getState().subscribe(res => this.loading = res.loading);
    this.auth.getUserInfo().subscribe(res => this.user = res)
    if (this.type === 'Create')
      this.form = this.formBuilder.group({
        nameActivity: ['', Validators.required]
      });
    else
      this.form = this.formBuilder.group({
        nameActivity: [this.data.activityTask.nameActivity, Validators.required]
      });
  }
  ngOnInit(): void { 
    console.log("load component");
  }

  add = () => {
    if (this.form.valid) {
      if (this.type === 'Create') {
        const create = {
          nameActivity: this.form.value?.nameActivity,
          createdBy: this.user?.id,
          createdOn: new Date()
        } as IActivityTask;
        this.service.add({ activityTask: create });
      }
      else {
        const edit = {
          id: this.data.activityTask.id,
          nameActivity: this.form.value?.nameActivity,
          modifiedBy: this.user?.id,
          modifiedOn: new Date(),
          createdBy: this.data.activityTask.createBy,
          createdOn: this.data.activityTask.createdOn
        } as IActivityTask;
        this.service.update({ activityTask: edit });
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
