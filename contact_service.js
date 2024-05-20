import instance from "../../../features/server/axios/index";

class ContactService {
  contact(payload) {
    return instance.post("customer/send-message", payload);
  }
}

export default new ContactService();
