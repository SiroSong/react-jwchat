import React from 'react';
import style from "./style.module.css";
import MsgBubble from "../MsgBubble";
import dayjs from 'dayjs';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default function MsgItem(_ref) {
  var data = _ref.data,
      me = _ref.me;
  var isMe = data.user.id === me.id;
  return /*#__PURE__*/_jsxs("div", {
    className: style.content,
    style: {
      flexDirection: isMe ? 'row-reverse' : 'row'
    },
    children: [/*#__PURE__*/_jsx("div", {
      className: style.avatar,
      children: /*#__PURE__*/_jsx("img", {
        src: data.user.avatar
      })
    }), /*#__PURE__*/_jsxs("div", {
      className: style.text_area,
      style: {
        alignItems: isMe ? 'flex-end' : 'flex-start'
      },
      children: [/*#__PURE__*/_jsxs("div", {
        className: style.comment_area,
        children: [/*#__PURE__*/_jsx("span", {
          className: style.nickname_text,
          children: data.user.nickname
        }), /*#__PURE__*/_jsx("span", {
          className: style.date_text,
          children: dayjs.unix(data.date).format('MM-DD HH:mm:ss')
        })]
      }), /*#__PURE__*/_jsx(MsgBubble, {
        isMe: isMe,
        data: data.message
      })]
    })]
  });
}