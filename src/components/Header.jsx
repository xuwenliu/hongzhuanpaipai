import Taro from "@tarojs/taro";
import React, { useEffect, useState } from "react";
import { View, Text } from "@tarojs/components";
import classNames from "classnames";

function Header(props) {
  console.log(classNames);
  const {
    backText = "",
    content = "",
    right = "",
    isBack = false,
    isCustom = false,
    bgColor = "bg-white",
    bgImage = "",
  } = props;
  const globalData = Taro.getStorageSync("globalData");
  const [base, setBase] = useState(globalData);
  const BackPage = () => {
    Taro.navigateBack({
      delta: 1,
    });
  };
  const toHome = () => {
    baidu.reLaunch({
      url: "/pages/index/index",
    });
  };
  return (
    <View
      className="cu-custom"
      style={{
        height: base.CustomBar + "px",
      }}
    >
      <View
        className={classNames("cu-bar fixed", bgColor, {
          "none-bg Text-white bg-img": bgImage != "",
        })}
        style={{
          height: base.CustomBar + "px",
          paddingTop: base.StatusBar + "px",
          backgroundImage: bgImage ? "url(" + bgImage + ")" : "",
        }}
      >
        {isBack && (
          <View className="action" onClick={BackPage}>
            <Text className="cuIcon-back"></Text>
            {backText}
          </View>
        )}
        {isCustom && (
          <View
            className="action border-custom"
            style={{
              width: base.Custom.width + "px",
              height: base.Custom.height + "px",
              marginLeft: `calc(750rpx - ${base.Custom.right}px)`,
            }}
          >
            <Text className="cuIcon-back" onClick={BackPage}></Text>
            <Text className="cuIcon-homefill" onClick={toHome}></Text>
          </View>
        )}

        <View
          className="content"
          style={{
            top: base.StatusBar + "px",
          }}
        >
          {content}
        </View>
        {right}
      </View>
    </View>
  );
}

export default Header;
