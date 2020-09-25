import request from "../utils/axios";
const querystring = require("querystring");
import { BASE_URL } from "../config";

export function getData(data) {
  data = querystring.stringify(data);
  return request({
    url: `${BASE_URL}/app/sys/home`,
    method: "post",
    data,
  });
}

export function getPais(data) {
  data = querystring.stringify(data);
  return request({
    url: `${BASE_URL}/app/sys/paiList`,
    method: "post",
    data,
  });
}

export function paiDetail(data) {
  data = querystring.stringify(data);
  return request({
    url: `${BASE_URL}/app/sys/paiDetail`,
    method: "post",
    data,
  });
}
