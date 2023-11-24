import { toast } from "react-toastify";

export default function toastUtils(status, message) {
  if (status === "success") {
    console.log("Success");
    toast.success(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      progress: undefined,
      theme: "light",
    });
  } else if (status === "error") {
    console.log("Error");
    toast.error(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      progress: undefined,
      theme: "light",
    });
  } else {
    console.error(
      'La fonction toastUtils n\'acccepte que "success" ou "error" comme argument'
    );
  }
}