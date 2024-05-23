import { useForm } from "react-hook-form";
import {
  CustomDate,
  CustomInput,
  CustomTextArea,
} from "../../components/inputs/custom_input";
import Table from "../../components/table/table";
import { CustomOptions } from "../../components/inputs/custom_options";
import CustomButton from "../../components/inputs/custom_button";
import useApiQuery from "../../hooks/useApiQuery";
import reservation_service from "./services/reservation_service";
import useApiMutation from "../../hooks/useApiMutation";
import useToastify from "../../hooks/useToastify";
import { useEffect } from "react";
import TimeStamp from "./components/time_stamp";

export default function Reservation() {
  const { success, error } = useToastify();
  const form = useForm({
    defaultValues: {
      customer_no: "",
      date: new Date().toISOString().split("T")[0],
    },
  });

  const {
    data: response,
    isLoading,
    refetch,
  } = useApiQuery({
    queryKey: ["tables-data"],
    queryFn: () => reservation_service.tables(),
  });

  const { mutate } = useApiMutation({
    mutationKey: ["reservation"],
    mutationFn: reservation_service.reserve,
    invalidate: ["time_stamp"],
    onSuccess: () => {
      success("Reservation request has been sent");
    },
    onError: (data) => {
      if (data.response.status === 400) {
        error("Reservation request has been made already");
      }
    },
  });

  if (isLoading) {
    return <>Loading...</>;
  }

  const handleTimeClick = (time) => {
    form.setValue("timestamp", time);
  };

  function submitHandler(data) {
    if (data.customer_no <= 0) {
      error("Customer should not be zero");
    } else {
      const user = JSON.parse(localStorage.getItem("user"));
      const [year, month, day] = data.date.split("-").map(Number);
      const [hours, minutes] = data.timestamp.split(":").map(Number);
      const date = new Date(year, month - 1, day, hours, minutes);

      mutate({
        customer_id: user._id,
        table_id: data.table,
        reserved_date: date,
        message: data.message,
        customer_no: data.customer_no,
      });
    }
  }

  return (
    <div className="flex w-full h-full flex-grow">
      <div className="flex flex-col md:flex-row flex-wrap items-center justify-center md:justify-between gap-12 md:gap-5 w-3/5 bg-blue-200 h-full px-10 py-10 overflow-y-auto">
        {response.data.data.tables.map((item) => {
          return <Table title={`${item.table_name} (${item.capacity})`} />;
        })}
      </div>
      <div className="flex justify-start flex-col flex-grow">
        <div className="flex px-5 py-2 h-16 border-b w-full items-center justify-between">
          <p>Book Table</p>
          <CustomDate
            className="border p-2 rounded-[0.5rem]"
            control={form.control}
            name={"date"}
            min="yyyy-mm-dd"
          />
        </div>
        <div></div>
        <form
          className=" flex flex-col gap-2"
          onSubmit={form.handleSubmit(submitHandler)}
        >
          <div className="flex gap-2 p-4">
            <CustomInput
              className={
                "border w-full p-2 text-[0.9rem] rounded-[0.25rem] focus:outline-none"
              }
              control={form.control}
              name={"customer_no"}
              placeholder={"Total Customer"}
            />
            <CustomOptions
              className={
                "bg-white border w-full p-2 text-[0.9rem] rounded-[0.25rem] focus:outline-none"
              }
              name={"table"}
              control={form.control}
              data={response.data.data.tables.filter(
                (item) => item.capacity >= form.watch("customer_no"),
              )}
            />
          </div>
          <div>
            <div className="flex px-5 py-2 h-16 border-y w-full items-center justify-between">
              <p>Available Time</p>
            </div>
            <TimeStamp
              handleTimeClick={handleTimeClick}
              date={form.watch("date")}
              table_id={form.watch("table")}
              timestamp={form.watch("timestamp")}
            />

            <div className="px-4">
              <CustomTextArea
                className={
                  "border w-full p-2 h-36 text-[0.9rem] rounded-[0.25rem] focus:outline-none"
                }
                control={form.control}
                name={"message"}
                placeholder={"Additonal Message"}
              />
            </div>
          </div>

          <div className="p-4">
            <CustomButton
              className="bg-blue-500 py-2 w-full text-white text-[0.9rem] rounded-[0.25rem]"
              title={"Send Book Request"}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
