import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

export const PublicRoute = ({ auth, ...props }) => {
  const isAuth = useSelector((state) => state.user.isAuth);

  return isAuth ? <Redirect to="/dashboard" /> : <Route {...props} />;
};

export const ProtectedRoute = ({ auth, ...props }) => {
  const isAUth = useSelector((state) => state.user.isAuth);

  return isAUth ? <Route {...props} /> : <Redirect to="/" />;
};
