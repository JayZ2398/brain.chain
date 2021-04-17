import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useUser from '../hooks/useUser';

function PrivateRoute({ children, ...rest }: {children: React.ReactNode}) {
  const { user } = useUser();
  return (
    <Route
      {...rest}
      render={() => (user.isAuthenticated === true
        ? children
        : <Redirect to="/login" />)}
    />
  );
}
