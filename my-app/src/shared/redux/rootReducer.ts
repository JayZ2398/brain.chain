import { combineReducers } from "@reduxjs/toolkit";
import squadReducer from "../../pages/squads/slice";
import commentReducer from "../../pages/comments/slice";

const rootReducer = combineReducers({
  squads: squadReducer,
  comments: commentReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
