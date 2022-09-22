import { Component, Inject } from "@angular/core";
import { UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { ILoginService } from "../core/interfaces/login.interface";
import { LoginService } from "./services/login.service";

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss']
})
export class LoginComponent {
    form: UntypedFormGroup;
    constructor(@Inject(LoginService) private loginService: ILoginService,
        private formBuilder: UntypedFormBuilder,
    ) {
        this.form = this.formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        })
    }

    submit(): void {
        if (this.form.valid)
            this.loginService.Login(this.form.value);
        else
            this.markValidityForm();
    }

    markValidityForm(): void {
        for (const control in this.form.controls) {
            this.form.controls[control].markAsDirty();
            this.form.controls[control].markAsTouched();
        }
    }
}
