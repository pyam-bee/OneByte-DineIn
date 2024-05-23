import useApiQuery from "../../hooks/useApiQuery";
import ReservationTable from "./components/reservation_table";
import manage_service from "./services/manage_service";

export default function ManageReservation() {
  const { data, isLoading } = useApiQuery({
    queryKey: ["all-reservation"],
    queryFn: manage_service.getAllReservation,
  });

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <div className="flex justify-center w-full p-10">
      <div className="w-full">
        <ReservationTable messages={data.data.data} />
      </div>
    </div>
  );
}
