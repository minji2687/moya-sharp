import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface Props {
  NewsFormats: "Image" | "Text";
}

const initialState: Props = {
  NewsFormats: "Image"
};

const newsformatSlice = createSlice({
  name: "format",
  initialState,
  reducers: {
    album: state => {
      state.NewsFormats = "Image";
    },
    text: state => {
      state.NewsFormats = "Text";
    }
  }
});

export const { album, text } = newsformatSlice.actions;
export const selectFormat = (state: RootState) => state.formats.NewsFormats;
export default newsformatSlice.reducer;
