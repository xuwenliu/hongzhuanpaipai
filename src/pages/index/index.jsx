import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  Text,
  Button,
  Swiper,
  SwiperItem,
} from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./index.scss";
import Header from "../../components/Header";
import { getData } from "../../api/home";
import { IMAGE_PREFIX } from "../../config";
import classNames from "classnames";
import notice from "../../style/images/notice.png";

const Index = () => {
  const [info, setInfo] = useState({});
  useEffect(() => {
    getData({
      uuid: "",
    }).then((res) => {
      console.log(res);
      const packages = res.packages;
      let result = [];
      for (let i = 0; i < packages.length; i += 3) {
        result.push(packages.slice(i, i + 3));
      }
      console.log(result);
      setInfo({
        ...res,
        packages: result,
      });
    });
  }, []);

  const makeOrder = (item) => {
    Taro.navigateTo({
      url: "/pages/order/index?id=" + item.id,
    });
  };

  const teamDetail = (item) => {
    Taro.navigateTo({
      url: "/pages/teamDetail/index?id=" + item.id,
    });
  };

  const moreTeam = () => {
    Taro.switchTab({
      url: "/pages/teams/index",
    });
  };
  const companyOrder = () => {
    Taro.navigateTo({
      url: "/pages/order/index?id=39",
    });
  };
  const goHelp = (id) => {
    Taro.navigateTo({
      url: "/pages/help/index?id=" + id,
    });
  };

  return (
    <View className="index">
      <Swiper className="screen-swiper" circular={true} autoplay={true}>
        {info.ads &&
          info.ads.map((item) => {
            return (
              <SwiperItem key={item.title}>
                <Image
                  src={IMAGE_PREFIX + item.image}
                  mode="aspectFill"
                ></Image>
              </SwiperItem>
            );
          })}
      </Swiper>

      {/* 首页公告 */}
      <View className="notice-item">
        <View>
          <Image className="notice-img" src={notice}></Image>
        </View>
        <Swiper
          className="notice"
          circular={true}
          autoplay={true}
          vertical={true}
        >
          {info.notices &&
            info.notices.map((item) => {
              return (
                <SwiperItem key={item.id}>
                  <Text className="text text-cut">{item.title}</Text>
                </SwiperItem>
              );
            })}
        </Swiper>
        <View>
          <Text className="more">更多</Text>
        </View>
      </View>
      <View className="pai-package">
        <Swiper
          className="screen-swiper"
          circular={true}
          indicator-dots={true}
          indicator-color="#ccc"
          indicator-active-color="#ff7c1a"
        >
          {info.packages &&
            info.packages.map((subArr, index) => {
              return (
                <SwiperItem className="swiper-item" key={index}>
                  {subArr.map((item) => {
                    return (
                      <View className="package-item">
                        <View className="name">
                          <Text className="text">{item.name}</Text>
                        </View>
                        <View className="money">
                          {item.price}
                          <Text className="yuan">元</Text>
                        </View>
                        <View className="desc">
                          {item.times}次不中赔
                          <Text className="compensate">{item.damages}</Text>元
                        </View>
                        <View className="btn">
                          <Button
                            className="order-btn cu-btn round"
                            onClick={() => makeOrder(item)}
                          >
                            直接下单
                          </Button>
                        </View>
                      </View>
                    );
                  })}
                </SwiperItem>
              );
            })}
        </Swiper>
      </View>

      <View className="team">
        <View className="title">
          <Text className="title-text">拍手团队</Text>
          <Text className="title-more" onClick={moreTeam}>
            更多
          </Text>
        </View>

        <View className="items">
          {info.pais &&
            info.pais.slice(0, 3).map((item, index) => {
              return (
                <View key={index}>
                  <View className="item">
                    <View className="team-item name text-cut">{item.name}</View>
                    <View className="team-item text-cut">
                      {item.minPrice > 0 && item.maxPrice > 0 && (
                        <View className="range">
                          {item.priceRange}
                          <Text className="unit">元</Text>
                        </View>
                      )}
                      {(item.minPrice <= 0 || item.maxPrice <= 0) && (
                        <View className="range">暂不接活</View>
                      )}
                    </View>
                    <View
                      className="team-item"
                      onClick={() => teamDetail(item)}
                    >
                      <Text className="detail">查看团队</Text>
                    </View>
                  </View>
                </View>
              );
            })}
        </View>
      </View>
      {info.company > 0 && (
        <View className="company">
          <View className="title">
            <Text className="text">企业牌照下单</Text>
            <View className="more" onClick={companyOrder}>
              <Text className="span"></Text>
            </View>
          </View>
        </View>
      )}

      <View className="help">
        <View className="title">
          <Text className="title-text">操作指南</Text>
        </View>

        <View className="items">
          <View className="item unbuy" onClick={() => goHelp(1)}>
            <Text className="name">未买标书用户</Text>
            <Text className="icon"></Text>
          </View>
          <View className="item buy" onClick={() => goHelp(2)}>
            <Text className="name">已买标书用户</Text>
            <Text className="icon"></Text>
          </View>
        </View>
        <View className="items">
          <View className="item expired" onClick={() => goHelp(3)}>
            <Text className="name">标书到期用户</Text>
            <Text className="icon"></Text>
          </View>
          <View className="item win" onClick={() => goHelp(4)}>
            <Text className="name">成功中标用户</Text>
            <Text className="icon"></Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Index;
