import { Component, OnInit } from '@angular/core';
import { ConfigureButton, HeaderModel } from 'src/app/shared/models/header/headermodel';
import { IModelSetting } from '../models/settingmodel';
import { SettingsResources } from '../services/settings.resources';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  headerSettings: HeaderModel | undefined;
  buttonsScreen: Array<IModelSetting>;
  constructor(private settingResources: SettingsResources) {
    this.headerSettings = this.settingResources.getHeaderSettings();
    this.buttonsScreen = this.settingResources.getSectionButtons();
  }

  ngOnInit(): void {
  }
}
