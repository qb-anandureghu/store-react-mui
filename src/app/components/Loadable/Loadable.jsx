import React, {Suspense} from 'react';
import Loading from '../MatxLoading/MatxLoading';

// eslint-disable-next-line react/display-name
const Loadable = (Component) => (props) =>
  (
    <Suspense fallback={<Loading />}>
      <Component {...props} />
    </Suspense>
  );

export default Loadable;
