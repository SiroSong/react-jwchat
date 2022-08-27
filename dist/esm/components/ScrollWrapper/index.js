function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import cns from "../../utils/toClass";
import styles from "./style.module.css";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var ScrollWrapper = function ScrollWrapper(Comp) {
  return function (props) {
    var scrollView = useRef(null);
    var thumb = useRef(null);

    var _useState = useState(1),
        _useState2 = _slicedToArray(_useState, 2),
        viewPortH = _useState2[0],
        setViewPortH = _useState2[1];

    var _useState3 = useState(1),
        _useState4 = _slicedToArray(_useState3, 2),
        scrollH = _useState4[0],
        setScrollH = _useState4[1];

    var _useState5 = useState(0),
        _useState6 = _slicedToArray(_useState5, 2),
        scrollT = _useState6[0],
        setScrollT = _useState6[1];

    var _useState7 = useState(1),
        _useState8 = _slicedToArray(_useState7, 2),
        scrollR = _useState8[0],
        setScrollR = _useState8[1];

    var _useState9 = useState(false),
        _useState10 = _slicedToArray(_useState9, 2),
        isPressing = _useState10[0],
        setIsPressing = _useState10[1];

    var _useState11 = useState(false),
        _useState12 = _slicedToArray(_useState11, 2),
        showScrollBar = _useState12[0],
        setShowScrollBar = _useState12[1];

    var _useState13 = useState(''),
        _useState14 = _slicedToArray(_useState13, 2),
        shadowStyle = _useState14[0],
        setShadowStyle = _useState14[1];

    var scrollHandle = function scrollHandle() {
      if (scrollView.current) {
        setScrollT(scrollView.current.scrollTop);
      }
    };

    var mouseUpHandle = function mouseUpHandle(e) {
      setIsPressing(false);
    };

    var mouseDownHandle = function mouseDownHandle(e) {
      setIsPressing(true);
    };

    var mouseMovingHandle = function mouseMovingHandle(e) {
      if (isPressing !== true) return;

      if (scrollT < 0) {
        setScrollT(0);
      } else if (scrollT > scrollH - viewPortH) {
        setScrollT(scrollH - viewPortH);
      } else {
        var movementY = e.nativeEvent.movementY;
        setScrollT(function (preScrollT) {
          return preScrollT + movementY / scrollR;
        });
      }
    };

    var thumbHeight = function thumbHeight() {
      return viewPortH * scrollR;
    };

    var transH = function transH() {
      return scrollT * scrollR;
    };

    useEffect(function () {
      addEventListener('mouseup', mouseUpHandle);
      return function () {
        removeEventListener('mouseup', mouseUpHandle);
      };
    }, []);
    useEffect(function () {
      if (scrollView.current) {
        setViewPortH(scrollView.current.clientHeight);
        setScrollH(scrollView.current.scrollHeight);
      }
    }, [props.data]);
    useLayoutEffect(function () {
      if (scrollView.current) {
        scrollView.current.scrollTop = scrollT;
      }

      if (showScrollBar !== true) return;

      if (scrollT <= 0) {
        setShadowStyle(styles.shadow_bottom);
      } else if (scrollT >= scrollH - viewPortH) {
        setShadowStyle(styles.shadow_top);
      } else {
        setShadowStyle(styles.shadow_vertical);
      }
    }, [scrollT]);
    useEffect(function () {
      var sr = viewPortH / scrollH;
      setScrollR(sr);

      if (viewPortH < scrollH) {
        setShowScrollBar(true);
      } else {
        setShowScrollBar(false);
      }
    }, [scrollH]);
    useEffect(function () {
      if (props.scrollToBottom) {
        setScrollT(scrollH - viewPortH);
      }
    }, [scrollR]);
    return /*#__PURE__*/_jsxs("section", {
      style: props.style,
      className: cns([styles.wrapper_content, shadowStyle]),
      children: [/*#__PURE__*/_jsx("div", {
        className: styles.list_block,
        ref: scrollView,
        onScroll: scrollHandle,
        children: /*#__PURE__*/_jsx(Comp, _objectSpread({}, props))
      }), /*#__PURE__*/_jsx("aside", {
        className: cns([styles.scroll_bar_block]),
        style: {
          width: showScrollBar ? 8 : 0
        },
        children: /*#__PURE__*/_jsx("span", {
          ref: thumb,
          className: cns([styles.scroll_thumb]),
          onMouseDown: mouseDownHandle,
          onMouseMove: mouseMovingHandle,
          style: {
            height: thumbHeight(),
            transform: "translateY(".concat(transH(), "px)")
          }
        })
      })]
    });
  };
};

export default ScrollWrapper;