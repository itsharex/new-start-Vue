export default {
  path: "/fifty",
  name: "FiftyDays",
  redirect: "/fifty/day01",
  meta: {
    icon: "Apple",
    title: "五十天",
    isLink: "",
    isHide: false,
    isFull: false,
    isAffix: false,
    isKeepAlive: true,
  },
  children: [
    {
      path: "/fifty/day01",
      name: "FiftyDay01",
      component: "/fifty/day01/index",
      meta: {
        icon: "Stamp",
        title: "第一天 卡片展开",
        isLink: "",
        isHide: false,
        isFull: false,
        isAffix: false,
        isKeepAlive: true,
      },
    },
    {
      path: "/fifty/day02",
      name: "FiftyDay02",
      component: "/fifty/day02/index",
      meta: {
        icon: "Step",
        title: "第二天 进度展示",
        isLink: "",
        isHide: false,
        isFull: false,
        isAffix: false,
        isKeepAlive: true,
      },
    },
  ],
};
