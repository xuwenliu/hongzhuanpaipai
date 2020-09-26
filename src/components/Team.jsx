import Taro from "@tarojs/taro";
import React from "react";

import { View, Text } from "@tarojs/components";
import "./Team.scss";

function Team({ item }) {
  const goDetail = () => {
    Taro.navigateTo({
      url: "pages/teamDetail/index?id=" + item.id,
    });
  };
  return (
    <View className="wrapper">
      <View className="tn-row header">
        <View className="title">
          <Text className="h5">{item.name}</Text>
          <View className="more" onClick={goDetail}>
            <Text className="text">查看</Text>
          </View>
        </View>
      </View>
      <View className="line"></View>
      <View className="tn-row content">
        <View className="lable">
          <Text className="text">价格区间</Text>
        </View>
        {item.minPrice > 0 && item.maxPrice > 0 && (
          <View className="price">
            {item.priceRange}
            <Text className="span">元</Text>
          </View>
        )}
        {(item.minPrice <= 0 || item.maxPrice <= 0) && (
          <View className="price">暂不接活</View>
        )}
      </View>
      <View className="line"></View>
      <View className="tn-row tags">
        <View className=" tag">
          {item.tagList && item.tagList.length >= 1 && (
            <Text>{item.tagList[0]}</Text>
          )}
        </View>
        <View className=" tag">
          <View className="v-line-left"></View>
          {item.tagList && item.tagList.length >= 2 && (
            <Text className="tag2">{item.tagList[1]}</Text>
          )}

          <View className="v-line-right"></View>
        </View>
        <View className=" tag">
          {item.tagList && item.tagList.length == 3 && (
            <Text>{item.tagList[2]}</Text>
          )}
        </View>
      </View>
      <View className="tn-row footer">
        <View className=" desc">
          <Text>经验：{item.years}年</Text>
        </View>
        <View className=" desc">
          <Text>浏览：{item.views}</Text>
        </View>
        <View className=" desc">
          <Text>命中率：{item.hitPoint}</Text>
        </View>
      </View>
    </View>
  );
}

export default Team;
