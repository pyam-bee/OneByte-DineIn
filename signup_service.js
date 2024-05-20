import instance from "../../../features/server/axios/index";

class SignupService {
  signup(payload) {
    return instance.post("auth/signup", payload);
  }
}

export default new SignupService();
