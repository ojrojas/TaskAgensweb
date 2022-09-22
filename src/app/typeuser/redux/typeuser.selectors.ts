import { createFeatureSelector } from "@ngrx/store";
import * as fromReducer from './typeuser.reducer';

export const getStateTypeUser = createFeatureSelector<fromReducer.State>(fromReducer.typeUserFeatureKey);
