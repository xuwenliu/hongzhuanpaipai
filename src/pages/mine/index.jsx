import React from "react";
import Taro from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import "./index.scss";
import pai from "../../style/images/pai.jpg";
import books from "../../style/images/books.png";
import orders from "../../style/images/orders.png";
import banks from "../../style/images/banks.png";
import address from "../../style/images/address.png";
import lock from "../../style/images/lock.png";
import feedback from "../../style/images/feedback.png";
import back from "../../style/images/login/back@2x.png";

function Mine() {
  const isLogin = false;
  // || util.cookies.get('uuid') && util.cookies.get('uuid').length > 0;
  const userName = "xxx";
  // || util.cookies.get('uuid')

  const ok = () => {
    this.showAlert = false;
    this.isLogin = false;
    util.cookies.remove("uuid");
    util.cookies.remove("token");
  };
  const exit = () => {
    this.showAlert = true;
    this.message = "确定退出系统?";
  };
  const toRegister = () => {
    Taro.navigateTo({
      url: "/pages/register/index",
    });
  };
  const toLogin = () => {
    Taro.navigateTo({
      url: "/pages/login/index",
    });
  };
  const goOrder = () => {
    Taro.navigateTo({
      url: "/pages/myorder/index",
    });
  };
  const goBooks = () => {
    Taro.navigateTo({
      url: "/pages/book/index",
    });
  };
  const goAddress = () => {
    Taro.navigateTo({
      url: "/pages/address/index",
    });
  };
  const goBank = () => {
    Taro.navigateTo({
      url: "/pages/bank/index",
    });
  };
  const goResetPwd = () => {
    Taro.navigateTo({
      url: "/pages/changePwd/index",
    });
  };
  const goFeedback = () => {
    Taro.navigateTo({
      url: "/pages/feedback/index",
    });
  };

  return (
    <View className="index">
      <View className="main-content">
        <View className="back">

        </View>
        <View className="info-form">
          {isLogin && (
            <View className="form">
              <View className="avatar">
                <Image className="img" src={pai} />
                <Text className="text">{userName}</Text>
              </View>
              <View className="tools">
                <View className="ul">
                  <View className="li" onClick={goBooks}>
                    <Image className="img" src={books} />
                    <Text className="text">我的标书</Text>
                  </View>
                  <View className="li" onClick={goOrder}>
                    <View className="v-line-left"></View>
                    <Image className="img" src={orders} />
                    <Text className="text">我的订单</Text>
                  </View>
                </View>
              </View>
            </View>
          )}

          {!isLogin && (
            <View className="user-info">
              <View className="no-login">您还未登录</View>
              <View className="login-register-wrap">
                <View className="to-login" onClick={toLogin}>
                  登录
                </View>{" "}
                <View onClick={toRegister} className="to-register">
                  注册
                </View>
              </View>
            </View>
          )}
        </View>
        <View className="cu-list menu card-menu">
          <View class="cu-item arrow" onClick={goBank}>
            <View className="content">
              <Image src={banks} className="img" mode="aspectFit"></Image>
              <Text>我的银行卡</Text>
            </View>
          </View>
          <View class="cu-item arrow" onClick={goAddress}>
            <View className="content">
              <Image src={address} className="img" mode="aspectFit"></Image>
              <Text>我的地址</Text>
            </View>
          </View>

          <View class="cu-item arrow" onClick={goResetPwd}>
            <View className="content">
              <Image src={lock} className="img" mode="aspectFit"></Image>
              <Text>重置密码</Text>
            </View>
          </View>

          <View class="cu-item arrow no-border" onClick={goFeedback}>
            <View className="content">
              <Image src={feedback} className="img" mode="aspectFit"></Image>
              <Text>意见反馈</Text>
            </View>
          </View>

          {/* {isLogin && (
            <View className="btn-box">
              <View className="order" onClick={exit}>
                退出登录
              </View>
            </View>
          )} */}
        </View>
      </View>
    </View>
  );
}

export default Mine;
