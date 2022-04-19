// import axios from "axios";
import { loginReqType } from "../redux/user/auth";
import api from "./Api";

var params = new URLSearchParams();
const USER_API_URL = "/auth/login";

export default class UserService {
  public static async login(reqData: loginReqType) {
    params.append("userId", reqData.userId);
    params.append("password", reqData.password);

    await api.post(USER_API_URL, params);
    
  }
  public static async logout(session: string): Promise<void> {
    await api.delete(USER_API_URL, {
      headers: { Authorization: `Bearer ${session}` }
    });
  }
}
