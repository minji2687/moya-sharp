import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface State {
  isLogin: boolean;
  loginAuth: any;
}

const initialState: State = {
  isLogin: false,
  loginAuth: null
};
const loginSlice = createSlice({
  name: "userLogin",
  initialState,
  reducers: {
    loginSucess: state => {
      state.isLogin = true;
    },
    logOutSucess: state => {
      state.isLogin = false;
    }
  }
});
export const { loginSucess, logOutSucess} = loginSlice.actions;
export const selectCount = (state: RootState) => state.userLogin;
export default loginSlice.reducer;
