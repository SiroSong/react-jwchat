function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState } from 'react';
import style from "./style.module.css";
import ScrollWrapper from "../ScrollWrapper";
import ContactItem from "../ContactItem";
import { jsx as _jsx } from "react/jsx-runtime";

var ContactList = function ContactList(props) {
  var _props$data;

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      selectId = _useState2[0],
      setSelectId = _useState2[1];

  var selectContactHandle = function selectContactHandle(con) {
    setSelectId(con.id);
    props.onSelect && props.onSelect(con);
  };

  return /*#__PURE__*/_jsx("div", {
    className: style.list_area,
    onScroll: props.onScroll,
    children: props === null || props === void 0 ? void 0 : (_props$data = props.data) === null || _props$data === void 0 ? void 0 : _props$data.map(function (contact, index) {
      return /*#__PURE__*/_jsx(ContactItem, {
        contact: contact,
        border: index + 1 !== props.data.length,
        selected: selectId === contact.id,
        onClick: selectContactHandle.bind(null, contact)
      }, contact.id);
    })
  });
};

export default ScrollWrapper(ContactList);