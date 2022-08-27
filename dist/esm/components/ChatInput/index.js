function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState } from 'react';
import style from "./style.module.css";
import md5 from 'md5';
import dayjs from 'dayjs';
import ChatToolBar from "../ChatToolsBar";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default function ChatInput(_ref) {
  var me = _ref.me,
      _ref$onSend = _ref.onSend,
      onSend = _ref$onSend === void 0 ? function () {} : _ref$onSend,
      onImage = _ref.onImage,
      height = _ref.height;

  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      text = _useState2[0],
      setText = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isShift = _useState4[0],
      setIsShift = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isAllowSend = _useState6[0],
      setIsAllowSend = _useState6[1];

  var textChangeHandle = function textChangeHandle(e) {
    var isAllowSend = !!e.target.value.trim();
    var text = e.target.value;
    setText(text);
    setIsAllowSend(isAllowSend);
  };

  var sendHandle = function sendHandle() {
    if (!isAllowSend) {
      return;
    }

    var randomNum = Math.floor(Math.random() * 1000);
    var date = dayjs().unix();
    var msgData = {
      _id: md5("".concat(text).concat(date).concat(randomNum)),
      date: date,
      user: me,
      message: {
        type: 'text',
        content: text
      }
    };
    onSend(msgData);
    resetText();
  };

  var resetText = function resetText() {
    setText('');
    setIsAllowSend(false);
  };

  var keyDownHandle = function keyDownHandle(e) {
    if (e.keyCode === 16) {
      setIsShift(true);
    }

    if (e.keyCode === 13 && !isShift) {
      e.preventDefault();
      sendHandle();
    }
  };

  var keyUpHandle = function keyUpHandle(e) {
    if (e.keyCode === 16) {
      setIsShift(false);
    }
  };

  var emojiSelectHandle = function emojiSelectHandle(emoji) {
    setText(text + emoji);
    setIsAllowSend(true);
  };

  return /*#__PURE__*/_jsxs("div", {
    className: style.content,
    style: {
      height: height
    },
    children: [/*#__PURE__*/_jsx(ChatToolBar, {
      onEmojiSelect: emojiSelectHandle,
      onImage: onImage
    }), /*#__PURE__*/_jsx("textarea", {
      className: style.input_area,
      onKeyUp: keyUpHandle,
      onKeyDown: keyDownHandle,
      onChange: textChangeHandle,
      value: text,
      placeholder: "\u8BF7\u8F93\u5165..."
    }), /*#__PURE__*/_jsx("div", {
      className: style.but_area,
      children: /*#__PURE__*/_jsx("button", {
        className: style.but,
        onClick: sendHandle,
        disabled: !isAllowSend,
        children: "\u53D1\u9001"
      })
    })]
  });
}