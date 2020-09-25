import request from "../utils/axios";
const querystring = require("querystring");
import { BASE_URL } from "../config";

export function codev1(data) {
  data = querystring.stringify(data);
  return request({
    url: `${BASE_URL}/app/code/v1`,
    method: "post",
    data,
  });
}

export function codev2(data) {
  data = querystring.stringify(data);
  return request({
    url: `${BASE_URL}/app/code/v2`,
    method: "post",
    data,
  });
}

export function codev3(data) {
  data = querystring.stringify(data);
  return request({
    url: `${BASE_URL}/app/code/v3`,
    method: "post",
    data,
  });
}

export function register(data) {
  data = querystring.stringify(data);
  return request({
    url: `${BASE_URL}/app/register`,
    method: "post",
    data,
  });
}

export function pwd(data) {
  data = querystring.stringify(data);
  return request({
    url: `${BASE_URL}/app/pwd`,
    method: "post",
    data,
  });
}

export function login(data) {
  return request({
    url: `${BASE_URL}/app/login`,
    method: "post",
    data,
  });
}

export function packageDetail(data) {
  data = querystring.stringify(data);
  return request({
    url: `${BASE_URL}/app/sys/packageDetail`,
    method: "post",
    data,
  });
}

export function makeOrderV1(data) {
  return request({
    url: `${BASE_URL}/app/pai/order/v3`,
    method: "post",
    data,
  });
}

export function makeOrderV2(data) {
  return request({
    url: `${BASE_URL}/app/pai/order/v4`,
    method: "post",
    data,
  });
}

export function makeDoubleOrder(data) {
  data = querystring.stringify(data);
  return request({
    url: `${BASE_URL}/app/pai/order/double`,
    method: "post",
    data,
  });
}

export function books(data) {
  data = querystring.stringify(data);
  return request({
    url: `${BASE_URL}/app/book/list`,
    method: "post",
    data,
  });
}

export function listBooks(data) {
  data = querystring.stringify(data);
  return request({
    url: `${BASE_URL}/app/book/listAll`,
    method: "post",
    data,
  });
}

export function feedback(data) {
  return request({
    url: `${BASE_URL}/app/feedback/edit`,
    method: "post",
    data,
  });
}

export function apply(data) {
  return request({
    url: `${BASE_URL}/app/pai/apply`,
    method: "post",
    data,
  });
}

export function editBank(data) {
  return request({
    url: `${BASE_URL}/app/bank/edit`,
    method: "post",
    data,
  });
}

export function listBank(data) {
  data = querystring.stringify(data);
  return request({
    url: `${BASE_URL}/app/bank/list`,
    method: "post",
    data,
  });
}

export function deleteBank(data) {
  data = querystring.stringify(data);
  return request({
    url: `${BASE_URL}/app/bank/delete`,
    method: "post",
    data,
  });
}

export function setDefaultBank(data) {
  data = querystring.stringify(data);
  return request({
    url: `${BASE_URL}/app/bank/default`,
    method: "post",
    data,
  });
}

export function myAddress(data) {
  data = querystring.stringify(data);
  return request({
    url: `${BASE_URL}/app/address/one`,
    method: "post",
    data,
  });
}

export function updateAddress(data) {
  data = querystring.stringify(data);
  return request({
    url: `${BASE_URL}/app/address/update`,
    method: "post",
    data,
  });
}

export function detailBook(data) {
  data = querystring.stringify(data);
  return request({
    url: `${BASE_URL}/app/book/detail`,
    method: "post",
    data,
  });
}

export function detailBookByOrderId(data) {
  data = querystring.stringify(data);
  return request({
    url: `${BASE_URL}/app/book/detailByOrderId`,
    method: "post",
    data,
  });
}

export function editBook(data) {
  return request({
    url: `${BASE_URL}/app/book/edit/v2`,
    method: "post",
    data,
  });
}

export function myOrders(data) {
  data = querystring.stringify(data);
  return request({
    url: `${BASE_URL}/app/pai/order/list`,
    method: "post",
    data,
  });
}

export function contractOrder(data) {
  data = querystring.stringify(data);
  return request({
    url: `${BASE_URL}/app/pai/order/contract`,
    method: "post",
    data,
  });
}

export function orderDetail(data) {
  data = querystring.stringify(data);
  return request({
    url: `${BASE_URL}/app/pai/order/detail`,
    method: "post",
    data,
  });
}

export function billRate(data) {
  data = querystring.stringify(data);
  return request({
    url: `${BASE_URL}/app/sys/billRate`,
    method: "post",
    data,
  });
}

export function doubleBill(data) {
  data = querystring.stringify(data);
  return request({
    url: `${BASE_URL}/app/sys/doubleBill`,
    method: "post",
    data,
  });
}

export function alipay(data) {
  data = querystring.stringify(data);
  return request({
    url: `${BASE_URL}/app/pai/order/pay`,
    method: "post",
    data,
  });
}

export function contractDetail(data) {
  data = querystring.stringify(data);
  return request({
    url: `${BASE_URL}/app/pai/contractDetail`,
    method: "post",
    data,
  });
}
