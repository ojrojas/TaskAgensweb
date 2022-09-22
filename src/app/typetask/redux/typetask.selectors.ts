import { createFeatureSelector } from "@ngrx/store";
import * as fromReducer from './typetask.reducer'

export const getStateTypeTask = createFeatureSelector<fromReducer.State>(fromReducer.typeTaskFeatureKey);
