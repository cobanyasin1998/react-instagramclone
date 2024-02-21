import axios from "axios";
import { toast } from "react-toastify";

export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post(
      "http://localhost:5000/auth/login",
      userCredential
    );
    toast.success("Login Success");
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (err) {
    toast.error("Login Failure");
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};
