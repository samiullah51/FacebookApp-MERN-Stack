import { LOG_IN } from "./userActions";

const initialState = {
  user: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        user: action.payload,
      };
  }
};