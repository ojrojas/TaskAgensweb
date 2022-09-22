import { Injectable } from "@angular/core"
import { HeaderModel } from "../shared/models/header/headermodel"

@Injectable()
export class HomeResourcesService {

    getHomeHeader = (): HeaderModel => {
        return {
            titlePage: "Home",
            subTitle: "Dashboard"
        }

    }
}