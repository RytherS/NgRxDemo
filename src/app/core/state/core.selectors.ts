import { createFeatureSelector } from "@ngrx/store";
import { CoreState, CORE_FEATURE_KEY } from "./core.state";

export const getCoreState = createFeatureSelector<CoreState>(CORE_FEATURE_KEY);
