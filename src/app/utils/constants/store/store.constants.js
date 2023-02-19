export const bulkUpdateSearchConditions = [
  {
    name: "announcement",
    isShown: false,
  },
  {
    name: "business_status",
    isShown: true,
  },
  {
    name: "store_name",
    isShown: true,
  },
  {
    name: "display_code",
    isShown: true,
  },
  {
    name: "bus_access",
    isShown: false,
  },
];

export const stores = [
  {
    international_id: '0001',
    store_name: 'UNIQLO',
    display_code: '0001',
    business_status: 'OPEN',
    bus_access: true,
    announcement: 'announcement 1'
  },
  {
    international_id: '0002',
    store_name: 'UNIQLO',
    display_code: '0002',
    business_status: 'COMING_SOON',
    bus_access: false,
    announcement: 'announcement 2'
  },
  {
    international_id: '0003',
    store_name: 'UNIQLO',
    display_code: '0003',
    business_status: 'SUSPENDED',
    bus_access: true,
    announcement: 'announcement 3'
  },
  {
    international_id: '0004',
    store_name: 'UNIQLO',
    display_code: '0004',
    business_status: 'DISCONTINUED',
    bus_access: false,
    announcement: 'announcement 4'
  },
  {
    international_id: '0005',
    store_name: 'UNIQLO',
    display_code: '0005',
    business_status: 'OPEN',
    bus_access: true,
    announcement: 'announcement 5'
  },
]
