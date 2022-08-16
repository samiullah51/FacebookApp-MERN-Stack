import { LOG_IN } from "./userActions";

const getUserFromLocalStorage = () => {
  const getUser = localStorage.getItem("user");
  const existUser = JSON.parse(getUser);
  return existUser;
};
const initialState = {
  user: getUserFromLocalStorage(),
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
