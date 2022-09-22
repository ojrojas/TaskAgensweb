import { HeaderModel } from "src/app/shared/models/header/headermodel";

export interface IActivityTaskResourceService {
    getHeaderActivityTaskResource(): HeaderModel
}