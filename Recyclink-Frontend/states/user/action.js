import api from "../../utils/api";

const ActionType = {
  REGISTER: "REGISTER",
  VERIFICATION_REGISTER: "VERIFICATION_REGISTER",
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
};

const registerAction = (data) => {
  return {
    type: ActionType.REGISTER,
    payload: {
      user: {
        ...data,
      },
    },
  };
};

const verificationRegisterAction = (message) => {
  return {
    type: ActionType.VERIFICATION_REGISTER,
    payload: null,
  };
};

const asyncRegisterUser = ({ fullName, email, phone_number, password }) => {
  return async (dispatch) => {
    try {
      const res = await api.register({
        fullName,
        email,
        phone_number,
        password,
      });

      dispatch(registerAction(res));
    } catch (error) {
      return error;
    }
  };
};

const asyncVerificationRegister = ({ email, otp_code }) => {
  return async () => {
    try {
      const res = await api.verificationRegister({
        email,
        otp_code,
      });
      console.log(res);
    } catch (error) {}
  };
};
export {
  ActionType,
  registerAction,
  asyncRegisterUser,
  verificationRegisterAction,
  asyncVerificationRegister,
};
