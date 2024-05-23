import React from "react";
import MessageTable from "./components/message_table";
import useApiQuery from "../../hooks/useApiQuery";
import messages_service from "./services/messages_service";
("./components/MessageTable");

export default function Messages() {
  const { data, isLoading } = useApiQuery({
    queryKey: ["messages"],
    queryFn: messages_service.messages,
  });

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <div className="flex justify-center w-full p-10">
      <div className="w-full">
        <MessageTable messages={data.data.data} />
      </div>
    </div>
  );
}
