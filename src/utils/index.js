import db from "./db";
import cookies from "./cookies";
import moment from "moment";

const util = {
  db,
  cookies
};

/**
 * @description 更新标题
 * @param {String} title 标题
 */
util.title = function(titleText) {
  const processTitle = process.env.VUE_APP_TITLE || "IMS";
  window.document.title = `${processTitle}${
    titleText ? ` | ${titleText}` : ""
  }`;
};

util.isAccessTokenWillOrExpired = function() {
  const expired_at = parseInt(sessionStorage.getItem("expired_at"));
  const current_at = moment().unix();
  const time_difference = expired_at - current_at;
  console.info("time-diff", time_difference);
  if (time_difference <= 0) {
    return "expired";
  }
  if (time_difference <= 110 && time_difference > 0) {
    return "will_expired";
  }
};

/**
 * checkLogin
 * 检查是否登录
 * @return access_token |false
 */
util.checkLogin = function() {
  const currrent_access_token = sessionStorage.getItem("access_token");
  // console.info('currrent_access_token:', currrent_access_token);
  return currrent_access_token ? true : false;
};

util.inArray = function(needle, haystack, argStrict) {
  console.info(needle);
  let key = "";
  const strict = !!argStrict;

  // we prevent the double check (strict && arr[key] === ndl) || (!strict && arr[key] === ndl)
  // in just one for, in order to improve the performance
  // deciding wich type of comparation will do before walk array
  if (strict) {
    for (key in haystack) {
      if (haystack[key] === needle) {
        return true;
      }
    }
  } else {
    for (key in haystack) {
      if (haystack[key] == needle) {
        // eslint-disable-line eqeqeq
        return true;
      }
    }
  }

  return false;
};

export default util;
