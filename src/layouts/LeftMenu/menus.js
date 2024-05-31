export const menus = [
  {
    key: `/home/dashboard`,
    label: `首页概览`
  },
  {
    key: `/home/setting`,
    label: `系统管理`,
    children: [
      {
        key: '/home/setting/user',
        label: '用户管理'
      }
    ]
  }
];
