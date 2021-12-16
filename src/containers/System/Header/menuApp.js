export const adminMenu = [
  {
    //hệ thống quan li nguoi dung
    name: "menu.system.header",
    menus: [
      {
        name: "menu.system.system-administrator.header",
        subMenus: [
          {
            name: "menu.system.menu-admin.user-managementAPI",
            link: "/system/user-API",
          },
          {
            name: "menu.system.menu-admin.user-managementREDUCER",
            link: "/system/user-redux",
          },
          {
            name: "menu.system.menu-admin.doctor-management",
            link: "/system/doctor",
          },
          {
            name: "menu.system.menu-admin.medical-plan",
            link: "/system/medical",
          },
        ],
      },
    ],
  },
  {
    //hệ thống phong kham
    name: "menu.system.menu-admin.specialized-management",
  },
  {
    //hệ thống Quản lý đặt lịch
    name: "menu.system.menu-admin.booking-management",
  },
  {
    //hệ thống Quản lý phong kham
    name: "menu.system.menu-admin.clinic-management",
  },

  {
    //hệ thống Quản lý co so y te
    name: "menu.system.menu-admin.medical-facility-management",
  },
];
export const doctorMenu = [
  {
    name: "menu.system.header",
    menus: [
      {
        name: "menu.system.system-administrator.header",
        subMenus: [
          {
            name: "menu.system.menu-admin.medical-plan",
            link: "/system/medical",
          },
        ],
      },
    ],
  },
  {
    //hệ thống phong kham
    name: "menu.system.menu-admin.specialized-management",
  },
  {
    //hệ thống Quản lý đặt lịch
    name: "menu.system.menu-admin.booking-management",
  },
  {
    //hệ thống Quản lý phong kham
    name: "menu.system.menu-admin.clinic-management",
  },

  {
    //hệ thống Quản lý co so y te
    name: "menu.system.menu-admin.medical-facility-management",
  },
];
