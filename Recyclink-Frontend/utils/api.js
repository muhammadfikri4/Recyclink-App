import { url } from "../local";
import axios from "axios";

const api = (() => {
  const register = async ({ fullName, email, phone_number, password }) => {
    try {
      const res = await axios.post(
        `${url.url}/register`,
        { fullName, email, phone_number, password },
        {
          withCredentials: true,
        }
      );

      return res;
    } catch (error) {
      return error;
    }
  };

  const verificationRegister = async ({ email, otp_code }) => {
    try {
      const res = await axios(
        {
          method: "put",
          url: `${url.url}/register`,
          data: {
            email,
            otp_code,
          },
        },
        { withCredentials: true }
      );

      return res.data.data;
    } catch (error) {
      return error;
    }
  };

  return { register, verificationRegister };
})();

export default api;
