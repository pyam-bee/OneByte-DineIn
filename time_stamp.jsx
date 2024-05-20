import { useEffect } from "react";
import useApiQuery from "../../../hooks/useApiQuery";
import reservation_service from "../services/reservation_service";
import { cn } from "../../../utils/cn";

export default function TimeStamp({
  handleTimeClick,
  date,
  table_id,
  timestamp,
}) {
  const user = JSON.parse(localStorage.getItem("user"));
  const {
    data: response,
    isLoading,
    refetch,
  } = useApiQuery({
    queryFn: () => reservation_service.reservation(date, table_id, user._id),
    queryKey: ["time_stamp"],
  });

  useEffect(() => {
    refetch();
  }, [date, table_id]);

  if (isLoading) {
    return <>Loading.... </>;
  }
  return (
    <div className="max-w-lg mx-auto p-4">
      <div className="grid flex-grow grid-cols-4 gap-2">
        {response.data.data.slots.map((time, index) => (
          <button
            type="button"
            key={index}
            className={cn(
              "flex border bg-gray-100 justify-center flex-grow border-gray-300 rounded py-2 px-4 text-center cursor-pointer",
              { "bg-green-300 text-white border-green-500 border-[2px]": time.isApproved },
              { "bg-red-300 text-white border-red-500 border-[2px]": time.isDeclined },
              {
                "bg-gray-200 text-gray-700 cursor-not-allowed":
                  !time.isApproved && !time.isDeclined && time.isDisabled,
              },
              {
                "bg-blue-600 text-white": timestamp === time.time,
              },
            )}
            onClick={() => handleTimeClick(time.time)}
            disabled={time.isDisabled}
          >
            {time.time}
          </button>
        ))}
      </div>
    </div>
  );
}
