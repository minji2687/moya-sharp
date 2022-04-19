import { createSlice } from "@reduxjs/toolkit";

interface State {
  newsSortState: "top" | "latest" | "popular";
}

const initialState: State = {
  newsSortState: "top"
};
const newsSortSlice = createSlice({
  name: "NewsSort",
  initialState,
  reducers: {
    changeNewsOption: (state, action) => {
      state.newsSortState = action.payload;
    }
  }
});

export const { changeNewsOption } = newsSortSlice.actions;

export default newsSortSlice.reducer;
