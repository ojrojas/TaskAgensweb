import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { HeaderModel } from "../shared/models/header/headermodel";
import { HomeResourcesService } from "./home.resources";
import { HomeService } from "./services/home.service";

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss']
})
export class HomeComponent {
    headerHome: HeaderModel;
    constructor(
        private route: Router,
        private resources: HomeResourcesService,      
        private service: HomeService) {
        this.headerHome = this.resources.getHomeHeader();
    }
}