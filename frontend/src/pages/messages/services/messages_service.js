import instance from "../../../features/server/axios/index";

class MessageService {
  messages() {
    return instance.get("staff/messages");
  }
  removeMessages(id) {
    return instance.delete(`staff/messages/${id}`);
  }
}

export default new MessageService();
