import instance from "../../../features/server/axios";

class ManageService {
  getAllReservation() {
    return instance.get("staff/allReservations");
  }
  updateStatus({ id, status }) {
    return instance.patch(`staff/updateReservation/${id}`, { status });
  }
}

export default new ManageService();
