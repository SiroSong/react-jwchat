import React from 'react';
import style from "./style.module.css";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default function ChatHeader(props) {
  return /*#__PURE__*/_jsxs("div", {
    className: style.content,
    children: [/*#__PURE__*/_jsx("img", {
      className: style.avatar,
      src: props.data.avatar
    }), /*#__PURE__*/_jsxs("div", {
      className: style.desc_area,
      children: [/*#__PURE__*/_jsx("span", {
        className: style.nickname,
        children: props.data.nickname
      }), /*#__PURE__*/_jsx("span", {
        className: style.sologan,
        children: props.data.desc
      })]
    })]
  });
}
ChatHeader.propTypes = {};