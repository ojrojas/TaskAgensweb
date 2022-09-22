import { IActivityTask } from "../../models/activitytask.model";

export interface IGetAllActivityTasksResponse {
    activityTasks : IActivityTask[];
}