import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../shared/redux/rootReducer";

export interface SquadsState {
  activeSquadId: string | undefined;
}

// Slice

const squadInitState: SquadsState = {
  activeSquadId: undefined,
};

const squad = createSlice({
  name: "squad",
  initialState: squadInitState,
  reducers: {
    setActiveSquadId: (
      state,
      { payload }: PayloadAction<string | undefined>
    ) => {
      state.activeSquadId = payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { actions } = squad;

export default squad.reducer;

export const selectActiveSquad = (state: RootState) =>
  state.squads.activeSquadId;
