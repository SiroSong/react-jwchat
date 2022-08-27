function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import style from "./style.module.css";
import ChatInput from "../ChatInput";
import ChatRecordList from "../ChatRecordList";
import ScrollWrapper from "../ScrollWrapper";
import ChatHeader from "../ChatHeader";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var textHeight = 150;
var WrappedChatRecordList = ScrollWrapper(ChatRecordList);
var defaultChatProps = {
  style: {
    width: 600,
    height: 500
  },
  contact: {},
  me: {},
  chatList: [],
  onSend: function onSend(msg) {
    return console.warn('传入onSend属性，用于接收输入框内容', msg);
  }
};
Chat.defaultProps = defaultChatProps;
export default function Chat(props) {
  var sendHandle = function sendHandle(msgData) {
    props.onSend(msgData);
  };

  var listHeight = props.style.height - textHeight - 60;
  return /*#__PURE__*/_jsxs("div", {
    className: style.content,
    style: props.style,
    children: [/*#__PURE__*/_jsx(ChatHeader, {
      data: props.contact
    }), /*#__PURE__*/_jsx(WrappedChatRecordList, _objectSpread(_objectSpread({}, props), {}, {
      data: props.chatList,
      style: {
        height: listHeight
      },
      scrollToBottom: true
    })), /*#__PURE__*/_jsx(ChatInput, _objectSpread(_objectSpread({}, props), {}, {
      height: textHeight,
      onSend: sendHandle,
      onImage: props.onImage
    }))]
  });
}