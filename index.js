import { useContext } from "react";
import { ReactReduxContext } from "react-redux";

export const useReduxStore = () => {
  const { store } = useContext(ReactReduxContext);
  return store;
};
