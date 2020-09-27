import React from "react";
import Taro from "@tarojs/taro";
import { View, Text, Image, Input, Button } from "@tarojs/components";
import "./index.scss";
import back from "../../style/images/login/back@2x.png";
import phone from "../../style/images/login/phone@2x.png";
import code from "../../style/images/login/code@2x.png";
import pwd from "../../style/images/login/pwd@2x.png";
import rePwd from "../../style/images/login/re-pwd@2x.png";
import pwdHidden from "../../style/images/login/pwd-hidden.png";

function Register() {
  return (
    <View className="index">
      <View className="back">
        <Image className="img" src={back} />
      </View>
      <View className="form">
        <View className="cu-list menu card-menu">
          <View className="cu-item">
            <View className="content">
              <Image className="img" src={phone} />
              <View class="cu-form-group">
                <Input className="input" placeholder="请输入手机号码"></Input>
              </View>
            </View>
          </View>
          <View className="cu-item">
            <View className="content">
              <Image className="img" src={code} />
              <View class="cu-form-group">
                <Input className="input" placeholder="请输入手机验证码"></Input>
              </View>
            </View>
          </View>
          <View className="cu-item">
            <View className="content">
              <Image className="img" src={pwd} />
              <View class="cu-form-group">
                <Input
                  className="input"
                  placeholder="请输入6-16位登录密码"
                ></Input>
              </View>
            </View>
          </View>
          <View className="register-btn">
            <Button className="btn cu-btn">立即注册</Button>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Register;
