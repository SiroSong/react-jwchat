import React from 'react';
import style from "./style.module.css";
import EmojiPopover from "../EmojiPopover";
import ImgPopover from "../ImgPopover";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default function ChatToolBar(_ref) {
  var _ref$tools = _ref.tools,
      tools = _ref$tools === void 0 ? [] : _ref$tools,
      onEmojiSelect = _ref.onEmojiSelect,
      onImage = _ref.onImage;
  return /*#__PURE__*/_jsxs("div", {
    className: style.content,
    children: [typeof onEmojiSelect === 'function' && /*#__PURE__*/_jsx(EmojiPopover, {
      onSelect: onEmojiSelect
    }), typeof onImage === 'function' && /*#__PURE__*/_jsx(ImgPopover, {
      onImage: onImage
    }), tools.map(function (tool) {
      return tool;
    })]
  });
}