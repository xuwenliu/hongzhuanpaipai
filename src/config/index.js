export const BASE_URL = process.env.NODE_ENV === "production" ? "/api" : "/api";
export const IMAGE_PREFIX =
  process.env.NODE_ENV === "production"
    ? "http://m.hongzhuanpaipai.com/resources/"
    : "http://m.hongzhuanpaipai.com/resources/";

export const REQUEST_BASE_URL = "http://m.hongzhuanpaipai.com/";
