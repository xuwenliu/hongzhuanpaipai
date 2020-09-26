import React, { useState, useEffect } from "react";
import Taro, { usePullDownRefresh, useReachBottom } from "@tarojs/taro";
import { View, Text, Button } from "@tarojs/components";
import "./index.scss";
import Team from "../../components/Team";
import { getPais, getData } from "../../api/home";
let para = {
  offset: 1,
  limit: 10,
};

function Teams() {
  const [info, setInfo] = useState({});

  const getData = () => {
    getPais(para).then((res) => {
      console.log(res);
      if (para.offset === 1) {
        setInfo(res);
      } else {
        setInfo({
          ...res,
          records: info.records
            ? info.records.concat(res.records)
            : res.records,
        });
      }
    });
  };

  usePullDownRefresh(() => {
    para.offset = 1;
    getData();
    setTimeout(() => {
      Taro.stopPullDownRefresh();
    }, 1500);
  });

  useReachBottom(() => {
    para.offset += 1;
    getData();
  });
  useEffect(() => {
    getData();
  }, []);

  return (
    <View className="index">
      {info.records &&
        info.records.map((item) => <Team key={item.id} item={item} />)}
    </View>
  );
}

export default Teams;
