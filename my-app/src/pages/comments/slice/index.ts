import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../shared/redux/rootReducer";

import { comments as initComments } from "../../../shared/data";
import { Comment } from "../../../shared/models";

export interface CommentsState {
  comments: Comment[];
}

// Slice

const commentsInitState: CommentsState = {
  comments: initComments,
};

const comments = createSlice({
  name: "comments",
  initialState: commentsInitState,
  reducers: {
    setComments: (state, { payload }: PayloadAction<Comment[]>) => {
      state.comments = payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { actions } = comments;

export default comments.reducer;

export const selectComments = (state: RootState) => state.comments.comments;
