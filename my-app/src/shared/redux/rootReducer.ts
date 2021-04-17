import { combineReducers } from "@reduxjs/toolkit";
import squadReducer from "../../pages/squads/slice";

const rootReducer = combineReducers({
  squads: squadReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
