import React, {lazy} from 'react';
import Loadable from 'app/components/Loadable/Loadable';

// const = Loadable(lazy(() => import('')))
const BulkUpdateStorePage = Loadable(lazy(() => import('./store_management/BulkUpdateStorePage')));
const StoreSearchAndEditPage = Loadable(
  lazy(() => import('./store_management/StoreSearchAndEditPage'))
);
const AddNewStorePage = Loadable(lazy(() => import('./store_management/AddNewStorePage')));

const pagesRoutes = [
  {
    path: '/bulk_update_store',
    element: <BulkUpdateStorePage />,
  },
  {
    path: '/search_and_edit',
    element: <StoreSearchAndEditPage />,
  },
  {
    path: '/add_new_store',
    element: <AddNewStorePage />,
  },
];

export default pagesRoutes;
