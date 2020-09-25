import React, { Component, useEffect } from "react";
import { View, Text, Button } from "@tarojs/components";
import "./index.scss";
import Header from "../../components/Header";
import { getData } from "../../api/home";

const Index = () => {
  useEffect(() => {
    getData({
      uuid:''
    }).then((res) => {
      console.log(res);
    });
  }, []);
  return (
    <View classNameName="index">
      <View>Index</View>
    </View>
  );
};

export default Index;
