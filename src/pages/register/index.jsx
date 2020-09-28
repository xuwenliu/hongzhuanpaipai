import React, { useState, useCallback } from "react";
import Taro from "@tarojs/taro";
import { View, Text, Image, Input, Button } from "@tarojs/components";
import "./index.scss";
import classNames from "classnames";

import backIcon from "../../style/images/login/back@2x.png";
import phoneIcon from "../../style/images/login/phone@2x.png";
import codeIcon from "../../style/images/login/code@2x.png";
import pwdIcon from "../../style/images/login/pwd@2x.png";
import rePwd from "../../style/images/login/re-pwd@2x.png";
import pwdHidden from "../../style/images/login/pwd-hidden.png";
import pwdShow from "../../style/images/login/pwd-show.png";

function Register() {
  const [isShowPwd, setIsShowPwd] = useState(false);
  const [mobile, setMobile] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [pwd, setPwd] = useState("");
  
  const onInputChange = (field, e) => {
    const { value } = e.detail;
    console.log(field)
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
                <Button className="cu-btn round line-orange">获取验证码</Button>
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
            <Button className="btn cu-btn">立即注册</Button>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Register;
