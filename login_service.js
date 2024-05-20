import instance from "../../../features/server/axios/index";

class LoginService {
  login(payload) {
    return instance.post("auth/signin", payload);
  }
}

export default new LoginService();
