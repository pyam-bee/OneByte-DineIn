import { toast } from "react-toastify";

export default function useToastify() {
  const props = {
    toastId: "toastodesu",
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    style: {
      fontSize: "0.8rem",
      background: "#fff",
      fontFamily: "inherit",
      borderRadius: 2,
    },
  };
  function success(message) {
    toast.success(message, props);
  }

  function error(message) {
    toast.error(message, props);
  }

  function info(message) {
    toast.info(message, props);
  }

  return { success, error, info };
}
