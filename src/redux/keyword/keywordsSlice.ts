import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Keywords = {
  data: string;
};

type KeywordsState = Keywords[];

const initialState: KeywordsState = [];

const keywordList = createSlice({
  name: "test",
  initialState,
  reducers: {
    addKeyword: (state, action: PayloadAction<string>) => {
      state.push({ data: action.payload });
    },
    deleteKeyword: (state, action: PayloadAction<string>) => {
      return state.filter(keyword => keyword.data !== action.payload);
    },
    updatedKeyword: (state, action: any) => {
      const newTabList = [...action.payload];
      return newTabList;
    }
  }
});

export const { addKeyword, deleteKeyword,updatedKeyword} = keywordList.actions;
export default keywordList.reducer;


