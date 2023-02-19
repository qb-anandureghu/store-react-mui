export const navigations = [
  {
    name: 'Dashboard',
    path: '/dashboard/default',
    icon: 'store',
  },
  {
    label: 'STORE MANAGEMENT',
    type: 'label',
  },
  {
    name: 'Store Search & Edit',
    path: '/search_and_edit',
    icon: 'search',
  },
  {
    name: 'Bulk Update Store',
    path: '/bulk_update_store',
    icon: 'layers',
  },
  {
    name: 'Add New Store',
    path: '/add_new_store',
    icon: 'add_to_photos',
  },
  {
    label: 'DOWNLOAD FILE',
    type: 'label',
  },
  {
    name: 'Store Information List',
    path: '/store_information_list',
    icon: 'file_download',
  },
  {
    label: 'REGION MASTER',
    type: 'label',
  },
  {
    name: 'Holiday Master',
    path: '/holiday_master',
    icon: 'notifications_active',
  },
  {
    name: 'Add New Stores by File',
    path: '/add_new_stores_by_file',
    icon: 'note_add',
  },
  {
    name: 'Timer Schedule',
    path: '/timer_info',
    icon: 'av_timer',
  },
  {
    label: 'SYSTEM MASTER',
    type: 'label',
  },
  {
    name: 'Store Type Master',
    path: '/store_type_master',
    icon: 'location_city',
  },
  {
    name: 'Product Type Master',
    path: '/product_type_master',
    icon: 'shopping_cart',
  },
  {
    name: 'Flag Master',
    path: '/flag_master',
    icon: 'flag',
  },
  {
    name: 'Region Language Master',
    path: '/region_language_master',
    icon: 'location_on',
  },
  {
    name: 'Global Language Master',
    path: '/global_language_master',
    icon: 'public',
  },
];

export const getfilteredNavigations = (navList = [], role) => {
  return navList.reduce((array, nav) => {
    if (nav.auth) {
      if (nav.auth.includes(role)) {
        array.push(nav);
      }
    } else {
      if (nav.children) {
        nav.children = getfilteredNavigations(nav.children, role);
        array.push(nav);
      } else {
        array.push(nav);
      }
    }
    return array;
  }, []);
};
