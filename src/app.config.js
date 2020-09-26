export default {
  pages: ["pages/index/index", "pages/teams/index", "pages/mine/index"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "代拍之家",
    navigationBarTextStyle: "black",
    // navigationStyle: "custom",
  },
  tabBar: {
    list: [
      {
        pagePath: "pages/index/index",
        text: "主页",
        // iconPath: "cuIcon-home",
        // selectedIconPath: "",
      },
      {
        pagePath: "pages/teams/index",
        text: "下单委托",
        // iconPath: "cu-home",
        // selectedIconPath: "",
      },
      {
        pagePath: "pages/mine/index",
        text: "我的",
        // iconPath: "cu-home",
        // selectedIconPath: "",
      },
    ],
  },
};
