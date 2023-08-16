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
      path: "/demo/seamlessScroll",
      name: "seamlessScroll",
      component: "/demo/seamlessScroll/index",
      // component: () => import("@/views/car/index.vue"),
      meta: {
        title: "无缝滚动",
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
      path: "/demo/loading",
      name: "loading",
      component: "/demo/loading/index",
      // component: () => import("@/views/car/index.vue"),
      meta: {
        title: "加载中",
        icon: "Apple",
        isLink: "",
        isHide: false,
        isFull: false,
        isAffix: false,
        isKeepAlive: true,
      },
    },
    {
      path: "/demo/countTo",
      name: "countTo",
      component: "/demo/countTo/index",
      // component: () => import("@/views/car/index.vue"),
      meta: {
        title: "数字动画",
        icon: "Apple",
        isLink: "",
        isHide: false,
        isFull: false,
        isAffix: false,
        isKeepAlive: true,
      },
    },
    {
      path: "/demo/download",
      name: "download",
      component: "/demo/download/index",
      meta: {
        title: "下载测试",
        icon: "Download",
        isLink: "",
        isHide: false,
        isFull: false,
        isAffix: false,
        isKeepAlive: true,
      },
    },
    {
      path: "/demo/cropper",
      name: "cropper",
      component: "/demo/cropper/index",
      meta: {
        title: "图片裁剪",
        icon: "Crop",
        isLink: "",
        isHide: false,
        isFull: false,
        isAffix: false,
        isKeepAlive: true,
      },
    },
    {
      path: "/demo/luckyDraw",
      name: "luckyDraw",
      component: "/demo/luckyDraw/index",
      meta: {
        title: "抽奖",
        icon: "Bicycle",
        isLink: "",
        isHide: false,
        isFull: false,
        isAffix: false,
        isKeepAlive: true,
      },
    },
    {
      path: "/demo/stitchMonster",
      name: "stitchMonster",
      component: "/demo/stitchMonster/index",
      meta: {
        title: "究极缝合怪",
        icon: "Bicycle",
        isLink: "",
        isHide: false,
        isFull: false,
        isAffix: false,
        isKeepAlive: true,
      },
    },
    {
      path: "/demo/floatingVue ",
      name: "floating-vue",
      component: "/demo/floatingVue/index",
      meta: {
        title: "FloatingVue",
        icon: "Bicycle",
        isLink: "",
        isHide: false,
        isFull: false,
        isAffix: false,
        isKeepAlive: true,
      },
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
