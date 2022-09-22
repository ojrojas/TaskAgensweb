import { createFeatureSelector } from "@ngrx/store";
import * as fromReducer from './activitytask.reducer';

export const getStateActivityTask = createFeatureSelector<fromReducer.State>(fromReducer.ActivityTaskFeatureKey);
