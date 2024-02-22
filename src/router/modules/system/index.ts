export default {
  path: "/system",
  name: "system",
  redirect: "/system/accountManage",
  meta: {
    icon: "Tools",
    title: "系统管理",
    isLink: "",
    isHide: false,
    isFull: false,
    isAffix: false,
    isKeepAlive: true,
  },
  children: [
    // {
    //   path: "/system/accountManage",
    //   name: "accountManage",
    //   component: "/system/accountManage/index",
    //   meta: {
    //     icon: "Menu",
    //     title: "账号管理",
    //     isLink: "",
    //     isHide: false,
    //     isFull: false,
    //     isAffix: false,
    //     isKeepAlive: true,
    //   },
    // },
    // {
    //   path: "/system/roleManage",
    //   name: "roleManage",
    //   component: "/system/roleManage/index",
    //   meta: {
    //     icon: "Menu",
    //     title: "角色管理",
    //     isLink: "",
    //     isHide: false,
    //     isFull: false,
    //     isAffix: false,
    //     isKeepAlive: true,
    //   },
    // },
    // {
    //   path: "/system/menuMange",
    //   name: "menuMange",
    //   component: "/system/menuMange/index",
    //   meta: {
    //     icon: "Menu",
    //     title: "菜单管理",
    //     isLink: "",
    //     isHide: false,
    //     isFull: false,
    //     isAffix: false,
    //     isKeepAlive: true,
    //   },
    // },
    // {
    //   path: "/system/departmentManage",
    //   name: "departmentManage",
    //   component: "/system/departmentManage/index",
    //   meta: {
    //     icon: "Menu",
    //     title: "部门管理",
    //     isLink: "",
    //     isHide: false,
    //     isFull: false,
    //     isAffix: false,
    //     isKeepAlive: true,
    //   },
    // },
    {
      path: "/system/dictManage",
      name: "dictManage",
      redirect: "/system/dictManage/defaultDictManage",
      meta: {
        icon: "Menu",
        title: "字典管理",
        isLink: "",
        isHide: false,
        isFull: false,
        isAffix: false,
        isKeepAlive: true,
      },
      children: [
        {
          path: "/system/dictManage/defaultDictManage",
          name: "carDict",
          component: "/system/dictManage/default/index",
          meta: {
            icon: "Operation",
            title: "默认字典管理",
            isLink: "",
            isHide: false,
            isFull: false,
            isAffix: false,
            isKeepAlive: true,
          },
        },
      ],
    },
    // {
    //   path: "/system/timingTask",
    //   name: "timingTask",
    //   component: "/system/timingTask/index",
    //   meta: {
    //     icon: "Menu",
    //     title: "定时任务",
    //     isLink: "",
    //     isHide: false,
    //     isFull: false,
    //     isAffix: false,
    //     isKeepAlive: true,
    //   },
    // },
    // {
    //   path: "/system/systemLog",
    //   name: "systemLog",
    //   component: "/system/systemLog/index",
    //   meta: {
    //     icon: "Menu",
    //     title: "系统日志",
    //     isLink: "",
    //     isHide: false,
    //     isFull: false,
    //     isAffix: false,
    //     isKeepAlive: true,
    //   },
    // },
  ],
};