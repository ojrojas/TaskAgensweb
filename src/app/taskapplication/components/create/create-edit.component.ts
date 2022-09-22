import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ITaskApplication } from 'src/app/core/models/itaskapplication';
import { IUser } from 'src/app/core/models/iuser.model';
import { ITaskApplicationService } from '../../service/itaskapplication.service';
import { TaskApplicationService } from '../../service/taskapplication.service';

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
    @Inject(TaskApplicationService) private service: ITaskApplicationService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private auth: AuthService) {
    this.type = this.data.type;
    this.service.getState().subscribe(res => this.loading = res.loading);
    this.auth.getUserInfo().subscribe(res => this.user = res)
    if (this.type === 'Create')
      this.form = this.formBuilder.group({
        taskName: ['', Validators.required],
        timeTask: ['', Validators.required],
        activityTaskId: ['', Validators.required],
        typeTaskId: ['', Validators.required],
        agentId: ['', Validators.required],
        comments: ['', Validators.required]

      });
    else
      this.form = this.formBuilder.group({
        taskName: [this.data.taskApplication.TaskName, Validators.required],
        timeTask: [this.data.taskApplication.timeTask, Validators.required],
        activityTaskId: [this.data.taskApplication.activityTaskId, Validators.required],
        typeTaskId: [this.data.taskApplication.typeTaskId, Validators.required],
        agentId: [this.data.taskApplication.agentId, Validators.required],
        comments: [this.data.taskApplication.comments, Validators.required]
      });
  }
  ngOnInit(): void { 
    console.log("load component");
  }

  add = () => {
    if (this.form.valid) {
      if (this.type === 'Create') {
        const create = {
          
          taskName: this.form.value?.TaskName,
          createdBy: this.user?.id,
          createdOn: new Date()
        } as ITaskApplication;
        this.service.add({ taskApplication: create });
      }
      else {
        const edit = {
          id: this.data.TaskApplication.id,
          taskName: this.form.value?.TaskName,
          modifiedBy: this.user?.id,
          modifiedOn: new Date(),
          createdBy: this.data.TaskApplication.createBy,
          createdOn: this.data.TaskApplication.createdOn
        } as ITaskApplication;
        this.service.update({ taskApplication: edit });
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
