import { createContext } from "react";
import { ADD_FUNDS, ADD_FUND } from "./types";

export default createContext({ funds: [], fund: [{}] });

export function fundsReducer(state, { type, payload }) {
  switch (type) {
    case ADD_FUNDS:
      return { ...state, funds: payload };
    case ADD_FUND:
      return { ...state, fund: payload };
    default:
      return state;
  }
}
