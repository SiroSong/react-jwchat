import React from 'react';
import style from "./style.module.css";
import cns from "../../utils/toClass";
import { jsx as _jsx } from "react/jsx-runtime";
export default function MsgBubble(_ref) {
  var data = _ref.data,
      isMe = _ref.isMe;

  var renderContent = function renderContent(message) {
    switch (message.type) {
      case 'text':
        return message.content;

      case 'image':
        return /*#__PURE__*/_jsx("img", {
          className: cns([style.img_content]),
          src: message.content
        });

      default:
        break;
    }
  };

  return /*#__PURE__*/_jsx("div", {
    className: cns([style.text_content, style.arrow, isMe ? style.arrow_right : style.arrow_left]),
    children: renderContent(data)
  });
}