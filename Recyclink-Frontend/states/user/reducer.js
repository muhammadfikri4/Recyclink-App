import { ActionType } from "./action";

const userReducer = (user = {}, action = {}) => {
  switch (action.type) {
    case ActionType.REGISTER:
      return action.payload;
    case ActionType.VERIFICATION_REGISTER:
      return action.payload;
    default:
      return user;
  }
};

export default userReducer;
