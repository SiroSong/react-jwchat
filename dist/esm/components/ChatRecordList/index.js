function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import style from "./style.module.css";
import MsgItem from "../MsgItem";
import cns from "../../utils/toClass";
import { jsx as _jsx } from "react/jsx-runtime";
import { createElement as _createElement } from "react";
import { jsxs as _jsxs } from "react/jsx-runtime";

var ChatRecordList = function ChatRecordList(props) {
  return /*#__PURE__*/_jsxs("div", {
    className: cns([style.list_area]),
    children: [/*#__PURE__*/_jsx("div", {
      children: /*#__PURE__*/_jsx("button", {
        className: style.load_more,
        onClick: props.onEarlier,
        children: "\u52A0\u8F7D\u66F4\u591A\xB7\xB7\xB7"
      })
    }), props.data.map(function (bubble) {
      return /*#__PURE__*/_createElement(MsgItem, _objectSpread(_objectSpread({}, props), {}, {
        data: bubble,
        key: bubble._id
      }));
    })]
  });
};

export default ChatRecordList;