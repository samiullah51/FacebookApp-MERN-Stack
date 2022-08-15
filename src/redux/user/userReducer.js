import { LOG_IN } from "./userActions";

const initialState = {
  user: null,
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
