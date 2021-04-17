import { useContext } from "react";
import { UserContext } from "../contexts/UserProvider";

export default function useUser() {
  // eslint-disable-next-line unused-imports/no-unused-vars
  const [state, updateState, resetState] = useContext(UserContext);

  const logout = () => {
    resetState();
  };

  // async function createUser(data: ) {
  //   const response = await fetch(`/api/user`, {
  //       method: 'POST',
  //       headers: {'Content-Type': 'application/json'},
  //       body: JSON.stringify({user: data})
  //     })
  //   return await response.json();
  // }

  return {
    user: state,
    logout,
  };
}
