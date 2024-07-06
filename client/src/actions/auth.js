import * as api from "../api";
import { setCurrentUser, fetchCurrentUser } from "./currentUser";

export const login = (authData) => async (dispatch) => {
  try {
    const { data } = await api.login(authData);
    dispatch({ type: "AUTH", payload: data });
    dispatch(fetchCurrentUser());
  } catch (error) {
    console.error(error);
    // Display a user-friendly error message
    dispatch({ type: "AUTH_ERROR", payload: error.message });
  }
};