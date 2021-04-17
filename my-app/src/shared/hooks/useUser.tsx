import { useContext } from 'react';
import { UserContext } from '../contexts/UserProvider';

export default function useUser() {
  // eslint-disable-next-line unused-imports/no-unused-vars
  const [state, updateState, resetState] = useContext(UserContext);

  const logout = () => {
    resetState();
  };

  return {
    user: state,
    logout,
  };
}
