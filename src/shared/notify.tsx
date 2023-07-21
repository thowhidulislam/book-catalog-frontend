import { Theme, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type ToastType = "success" | "error" | "warn" | "info";

const notify = (message: string, type: ToastType) => {
  const toastOptions = {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 5000,
    hideProgressBar: false,
    newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: false,
    pauseOnHover: true,
    theme: "light" as Theme,
  };

  switch (type) {
    case "success":
      return toast.success(message, toastOptions);
    case "error":
      return toast.error(message, toastOptions);
    case "warn":
      return toast.warning(message, toastOptions);
    case "info":
      return toast.info(message, toastOptions);
    default:
      return toast(message, toastOptions);
  }
};

export default notify;
