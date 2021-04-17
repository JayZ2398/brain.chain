import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import useAPI from "./useAPI";

export default function useUser() {
  const API = useAPI();

  const [state, updateState, resetState] = useContext(UserContext);

  const logout = () => {
    resetState();
  };

  async function login(email: string, password: string) {
    try {
      const user = await API.login(email, password);
      if (user) {
        updateState({ ...user, isAuthenticated: true });
        console.log("Logged in user: ", user);
      }
    } catch (error) {
      throw error;
    }
  }

  return {
    user: state,
    login,
    logout,
  };
}
