import React from "react";
import CustomButton from "../../../components/inputs/custom_button";
import useApiMutation from "../../../hooks/useApiMutation";
import messages_service from "../services/messages_service";
import useToastify from "../../../hooks/useToastify";

const MessageTable = ({ messages }) => {
  const { success, error } = useToastify();

  const { mutate } = useApiMutation({
    mutationKey: ["delete-message"],
    mutationFn: messages_service.removeMessages,
    invalidate: ["messages"],
    onSuccess: () => {
      success("Message has been deleted");
    },
    onError: () => {
      error("Failed to delete message");
    },
  });

  return (
    <table className="w-full border-collapse border">
      <thead>
        <tr>
          <th className="border bg-gray-200 p-2 w-1/4 text-left">Email</th>
          <th className="border bg-gray-200 p-2 w-1/4 text-left">Username</th>
          <th className="border bg-gray-200 p-2 w-1/2 text-left">Message</th>
          <th className="border bg-gray-200 p-2 w-1/2 text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        {messages.map((message) => (
          <tr key={message._id} className="border">
            <td className="border p-2">{message.email}</td>
            <td className="border p-2">{message.username}</td>
            <td className="border p-2">{message.message}</td>
            <td className="border p-2">
              <CustomButton
                className="bg-red-500 text-white px-2 py-1 text-[0.8rem] rounded-[0.5rem]"
                title={"Remove"}
                onClick={() => mutate(message._id)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MessageTable;
