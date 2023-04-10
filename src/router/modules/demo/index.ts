export default {
  path: "/demo",
  name: "demo",
  meta: {
    title: "一些例子",
    icon: "Menu",
    isLink: "",
    isHide: false,
    isFull: false,
    isAffix: false,
    isKeepAlive: true,
  },
  redirect: "/demo/ripple",
  children: [
    {
      path: "/demo/ripple",
      name: "ripple",
      component: "/demo/ripple/index",
      // component: () => import("@/views/car/index.vue"),
      meta: {
        title: "水波纹",
        icon: "Apple",
        isLink: "",
        isHide: false,
        isFull: false,
        isAffix: false,
        isKeepAlive: true,
      },
    },
    {
      path: "/demo/currentLocationInfo",
      name: "currentLocationInfo",
      component: "/demo/locationInfo/index",
      // component: () => import("@/views/car/index.vue"),
      meta: {
        title: "获取位置信息",
        icon: "Aim",
        isLink: "",
        isHide: false,
        isFull: false,
        isAffix: false,
        isKeepAlive: true,
      },
    },
    {
      path: "/demo/learnTS",
      name: "lesson1",
      redirect: "/demo/learnTS/lesson1",
      meta: {
        icon: "Menu",
        title: "TypeScript学习",
        isLink: "",
        isHide: false,
        isFull: false,
        isAffix: false,
        isKeepAlive: true,
      },
      children: [
        {
          path: "/demo/learnTS/lesson1",
          name: "leson1",
          component: "/demo/tsLearn/lesson1",
          meta: {
            icon: "Menu",
            title: "第一节-基础类型",
            isLink: "",
            isHide: false,
            isFull: false,
            isAffix: false,
            isKeepAlive: true,
          },
        },
        {
          path: "/demo/learnTS/lesson2",
          name: "leson2",
          component: "/demo/tsLearn/lesson2",
          meta: {
            icon: "Menu",
            title: "第二节-基础类型",
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
    //   path: "/car/detail",
    //   name: "carDetail",
    //   component: "/car/CarDetail",
    //   // component: () => import("@/views/car/CarDetail.vue"),
    //   meta: {
    //     title: "车辆管理-详情",
    //     icon: "Apple",
    //     isLink: "",
    //     isHide: false,
    //     isFull: false,
    //     isAffix: false,
    //     isKeepAlive: true,
    //   },
    // },
  ],
};
