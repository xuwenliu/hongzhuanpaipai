import React, { useState, useCallback } from "react";
import Taro from "@tarojs/taro";
import { View, Text, Image, Input, Button } from "@tarojs/components";
import "./index.scss";
import classNames from "classnames";
import { codev1, register } from "../../api/comm";

import backIcon from "../../style/images/login/back@2x.png";
import phoneIcon from "../../style/images/login/phone@2x.png";
import codeIcon from "../../style/images/login/code@2x.png";
import pwdIcon from "../../style/images/login/pwd@2x.png";
import rePwd from "../../style/images/login/re-pwd@2x.png";
import pwdHidden from "../../style/images/login/pwd-hidden.png";
import pwdShow from "../../style/images/login/pwd-show.png";
let timer = null;
let countdown = 60;
function Register() {
  const [isShowPwd, setIsShowPwd] = useState(false);
  const [mobile, setMobile] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [pwd, setPwd] = useState("");
  const [codeDisabled, setCodeDisabled] = useState(false);
  const [codeMsg, setCodeMsg] = useState("获取验证码");

  const onInputChange = (field, e) => {
    const { value } = e.detail;
    console.log(field);
    switch (field) {
      case "mobile":
        setMobile(value);
        break;
      case "captcha":
        setCaptcha(value);
        break;
      case "pwd":
        setPwd(value);
        break;
    }
  };
  const blockCode = () => {
    setCodeDisabled(true);
    if (!timer) {
      timer = setInterval(() => {
        if (countdown > 0 && countdown <= 60) {
          countdown--;
          if (countdown !== 0) {
            setCodeMsg("重新发送(" + countdown + ")");
          } else {
            clearInterval(timer);
            setCodeMsg("获取验证码");
            countdown = 60;
            timer = null;
            setCodeDisabled(false);
          }
        }
      }, 1000);
    }
  };

  const getCode = () => {
    Taro.showLoading();
    codev1({
      mobile,
    }).then((res) => {
      Taro.showToast({
        icon: "none",
        title: res.message,
      });
      if (res.code === 0) {
        blockCode();
      }
      Taro.hideLoading();
    });
  };

  const getSmsCode = () => {
    if (!codeDisabled) {
      let reg = 11 && /^1[3-9]\d{9}$/;
      if (mobile.length === 0 || mobile === "") {
        Taro.showToast({
          icon: "none",
          title: "请输入手机号码",
        });
      } else if (!reg.test(mobile)) {
        Taro.showToast({
          icon: "none",
          title: "手机格式不正确",
        });
      } else {
        getCode();
      }
    }
  };
  const toRegister = () => {
    if (mobile.length === 0 || mobile === "") {
      Taro.showToast({
        icon: "none",
        title: "请输入手机号",
      });
      return;
    }

    if (pwd.length === 0 || pwd === "") {
      Taro.showToast({
        icon: "none",
        title: "请输入密码",
      });
      return;
    }

    if (captcha.length === 0 || captcha === "") {
      Taro.showToast({
        icon: "none",
        title: "请输入短信验证码",
      });
      return;
    }
    let para = {
      mobile: mobile,
      code: captcha,
      pwd: pwd,
    };
    Taro.showLoading();
    register(para).then((res) => {
      Taro.hideLoading();
      if (res.code === 0) {
        // util.cookies.set("uuid", mobile);
        // util.cookies.set("token", res.data);
        Taro.showToast({
          icon: "none",
          title: res.message,
        });
        Taro.navigateTo({
          url: "/pages/register/rsuccess",
        });
      } else {
        Taro.showToast({
          icon: "none",
          title: res.message,
        });
      }
    });
  };

  const onPolicy = () => {
    Taro.navigateTo({
      url: "/pages/policy/index",
    });
  };
  const toLogin = () => {
    Taro.navigateTo({
      url: "/pages/login/index",
    });
  };
  const toFindPwd = () => {
    Taro.navigateTo({
      url: "/pages/findPwd/index",
    });
  };

  return (
    <View className="index">
      <View className="back">
        <Image className="img" src={backIcon} />
      </View>
      <View className="form">
        <View className="cu-list menu card-menu">
          <View className="cu-item">
            <View className="content">
              <Image className="img" src={phoneIcon} />
              <View class="cu-form-group">
                <Input
                  onInput={(e) => onInputChange("mobile", e)}
                  value={mobile}
                  className="input"
                  placeholder="请输入手机号码"
                ></Input>
              </View>
            </View>
          </View>
          <View className="cu-item">
            <View className="content">
              <Image className="img code" src={codeIcon} />
              <View class="cu-form-group">
                <Input
                  onInput={(e) => onInputChange("captcha", e)}
                  value={captcha}
                  className="input"
                  placeholder="请输入手机验证码"
                ></Input>
                <Button
                  onClick={getSmsCode}
                  className="cu-btn round line-orange"
                >
                  {codeMsg}
                </Button>
              </View>
            </View>
          </View>
          <View className="cu-item">
            <View className="content">
              <Image className="img pwd" src={pwdIcon} />
              <View class="cu-form-group">
                <Input
                  onInput={(e) => onInputChange("pwd", e)}
                  value={pwd}
                  password={!isShowPwd}
                  className="input"
                  placeholder="请输入6-16位登录密码"
                ></Input>
                <View
                  onClick={() => setIsShowPwd(!isShowPwd)}
                  className={classNames({
                    "pwd-show": isShowPwd,
                    "pwd-hidden": !isShowPwd,
                  })}
                ></View>
              </View>
            </View>
          </View>
          <View className="register-btn">
            <Button onClick={toRegister} className="btn cu-btn">
              立即注册
            </Button>
          </View>
          <View className="register-extra">
            <Text onClick={toLogin}>已有账号？</Text>
            <Text onClick={toFindPwd}>忘记密码</Text>
          </View>
          <View className="policy">
            注册代表同意
            <Text className="cyan" onClick={onPolicy}>
              《红砖拍牌注册协议》
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Register;
