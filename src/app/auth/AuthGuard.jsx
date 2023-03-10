import useAuth from 'app/hooks/useAuth';
import {flat} from 'app/utils/utils';
import React, {useState, useEffect} from 'react';
import {Navigate, useLocation} from 'react-router-dom';
import {AllPages} from '../routes/routes';

const {REACT_APP_SKIP_AUTH} = process.env

const getUserRoleAuthStatus = (pathname, user, routes) => {
  if (!user) {
    if(REACT_APP_SKIP_AUTH === "true") return true
    return false;
  }
  const matched = routes.find((r) => r.path === pathname);

  const authenticated =
    matched && matched.auth && matched.auth.length
      ? matched.auth.includes(user.role)
      : true;
  return authenticated;
};

const AuthGuard = ({children}) => {
  const {isAuthenticated, user} = useAuth();
  const [previouseRoute, setPreviousRoute] = useState(null);
  const {pathname} = useLocation();
  const routes = flat(AllPages());

  console.log(user)
  const isUserRoleAuthenticated = getUserRoleAuthStatus(pathname, user, routes);
  const skip_auth = REACT_APP_SKIP_AUTH === 'true'
  let authenticated = skip_auth || (isAuthenticated && isUserRoleAuthenticated);

  // IF YOU NEED ROLE BASED AUTHENTICATION,
  // UNCOMMENT ABOVE TWO LINES, getUserRoleAuthStatus METHOD AND user VARIABLE
  // AND COMMENT OUT BELOW LINE

  // let authenticated = isAuthenticated

  useEffect(() => {
    if (previouseRoute !== null) setPreviousRoute(pathname);
  }, [pathname, previouseRoute]);

  if (authenticated) return <>{children}</>;
  else {
    return (
      <Navigate to="/session/signin" state={{redirectUrl: previouseRoute}} />
    );
  }
};

export default AuthGuard;
