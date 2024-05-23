import React from "react";
import CustomButton from "../../../components/inputs/custom_button";
import useToastify from "../../../hooks/useToastify";
import useApiMutation from "../../../hooks/useApiMutation";
import manage_service from "../services/manage_service";

const ReservationTable = ({ messages }) => {
  const { success, error } = useToastify();
  const { mutate } = useApiMutation({
    mutationKey: ["update-status-reservation"],
    mutationFn: manage_service.updateStatus,
    invalidate: ["all-reservation"],
    onSuccess: () => {
      success("Reservation status updated");
    },
    onError: (err) => {
      console.log(err);
      error("Failed to update reservation");
    },
  });

  return (
    <table className="w-full border-collapse border">
      <thead>
        <tr>
          <th className="border bg-gray-200 p-2 w-1/6 text-left">S.N</th>
          <th className="border bg-gray-200 p-2 w-1/4 text-left">Name</th>
          <th className="border bg-gray-200 p-2 w-1/6 text-left">Phone</th>
          <th className="border bg-gray-200 p-2 w-1/6 text-left">Table Name</th>
          <th className="border bg-gray-200 p-2 w-1/2 text-left">
            Reserved Date
          </th>
          <th className="border bg-gray-200 p-2 w-1/2 text-left">Status</th>
          <th className="border bg-gray-200 p-2 w-1/2 text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        {messages.map((message, index) => (
          <tr key={message._id} className="border">
            <td className="border p-2">{index + 1}</td>
            <td className="border p-2">{message.customer.name}</td>
            <td className="border p-2">{message.customer.phone}</td>
            <td className="border p-2">{message.table.name}</td>
            <td className="border p-2">
              {new Date(message.reserved_date).toString()}
            </td>
            <td className="border p-2">{message.status}</td>
            <td className="text-center p-2 gap-2">
              {message.status === "PENDING" && (
                <CustomButton
                  className="bg-green-500 w-20 text-white px-2 py-1 text-[0.8rem] rounded-[0.5rem] mb-1"
                  title={"Accept"}
                  onClick={() =>
                    mutate({
                      id: message._id,
                      status: "APPROVED",
                    })
                  }
                />
              )}
              {message.status === "APPROVED" && (
                <CustomButton
                  className="bg-green-500 w-20 text-white px-2 py-1 text-[0.8rem] rounded-[0.5rem] mb-1"
                  title={"Cashed"}
                  onClick={() =>
                    mutate({
                      id: message._id,
                      status: "CASHED",
                    })
                  }
                />
              )}
              {message.status === "PENDING" && (
                <CustomButton
                  className="bg-red-500 w-20 text-white px-2 py-1 text-[0.8rem] rounded-[0.5rem]"
                  title={"Decline"}
                  onClick={() =>
                    mutate({
                      id: message._id,
                      status: "DECLINED",
                    })
                  }
                />
              )}

              {(message.status === "DECLINED" || message.status === "CASHED") &&
                "N/A"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ReservationTable;
