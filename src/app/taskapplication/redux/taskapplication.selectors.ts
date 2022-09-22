import { createFeatureSelector } from "@ngrx/store";
import * as fromReducer from './taskapplication.reducer'

export const getStateTaskApplication = createFeatureSelector<fromReducer.State>(fromReducer.TaskApplicationFeatureKey);
