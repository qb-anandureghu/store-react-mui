import React, {lazy} from 'react';
import Loadable from 'app/components/Loadable/Loadable';

const NotFound = Loadable(lazy(() => import('./NotFound')));
const FirebaseLogin = Loadable(lazy(() => import('./login/FirebaseLogin')));
// const JwtLogin = Loadable(lazy(() => import('./login/JwtLogin')))
// const Auth0Login = Loadable(lazy(() => import('./login/Auth0Login')))

const sessionRoutes = [
  {
    path: '/session/signin',
    element: <FirebaseLogin />,
  },
  {
    path: '/session/404',
    element: <NotFound />,
  },
];

export default sessionRoutes;
