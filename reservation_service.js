import instance from "../../../features/server/axios/index";

class ReservationService {
  reservation(date, table_id, customer_id) {
    return instance.get(
      `/customer/getReservationInfo/${date}/${table_id}/${customer_id}`,
    );
  }
  tables() {
    return instance.get(`/customer/getTables`);
  }
  reserve(payload) {
    return instance.post("/customer/reserve", payload);
  }
}

export default new ReservationService();
