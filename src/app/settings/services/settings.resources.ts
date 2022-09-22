import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ConfigureButton, HeaderModel } from "src/app/shared/models/header/headermodel";
import { IModelSetting } from "../models/settingmodel";

@Injectable()
export class SettingsResources {

    constructor(private router: Router) { }

    getHeaderSettings = (): HeaderModel => {
        return {
            titlePage: 'Settings',
            subTitle: 'Settings Application',
            buttons: []
        }
    }

    getSectionButtons = (): Array<IModelSetting> => {
        return [{
            section: 'Application',
            configureButtons: [
                {
                    description: 'Add Type Users',
                    type: 'button',
                    icon: 'add',
                    action: () => { this.router.navigate(['/typeuser']) }
                },
                {
                    description: 'Add Type Task',
                    type: 'button',
                    icon: 'add',
                    action: () => { this.router.navigate(['/typetask']) }
                },
                {
                    description: 'Add Activity Task',
                    type: 'button',
                    icon: 'add',
                    action: () => { this.router.navigate(['/activitytask']) }
                }
            ]
        }];
    }
}