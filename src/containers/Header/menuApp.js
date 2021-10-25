export const adminMenu = [
    { //hệ thống quan li nguoi dung
        name: 'menu.system.header', menus: [
            {
                name: 'menu.system.system-administrator.header',
                subMenus: [
                    { name: 'menu.system.menu-admin.doctor-management', link: '/system/user-manage' },
                    { name: 'menu.system.menu-admin.patient-management', link: '/system/user-redux' },

                ]
            },


        ],


    },
    { //hệ thống phong kham
        name: 'menu.system.menu-admin.specialized-management', menus: [
            {
                name: 'menu.system.system-administrator.header',



            },


        ]

    },
    { //hệ thống Quản lý đặt lịch
        name: 'menu.system.menu-admin.booking-management', menus: [
            {
                name: 'menu.system.system-administrator.header',



            },



        ]

    },
    { //hệ thống Quản lý phong kham 
        name: 'menu.system.menu-admin.clinic-management', menus: [
            {
                name: 'menu.system.system-administrator.header',
            },



        ]

    },

    { //hệ thống Quản lý co so y te 
        name: 'menu.system.menu-admin.medical-facility-management', menus: [
            {
                name: 'menu.system.system-administrator.header',
            },



        ]

    },



];