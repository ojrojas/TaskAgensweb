import { IActivityTask } from "./activitytask.model";
import { IBaseEntity } from "./ibaseentity";
import { ITypeTask } from "./itypetask.model";

export interface ITaskApplication extends IBaseEntity {
    taskName:string;
    timeTask:Date;
    comments:string;
    activityTaskId:string;
    activityTask?: IActivityTask;
    typeTaskId:string;
    typeTask?: ITypeTask;
    agentId:string;
    agentFullName:string;
}