import React, { useRef } from 'react';
import style from "./style.module.css";
import { jsx as _jsx } from "react/jsx-runtime";
export default function ImgPopover(_ref) {
  var onImage = _ref.onImage;
  var fileSelector = useRef(null);

  var selectImg = function selectImg() {
    if (fileSelector.current) {
      fileSelector.current.click();
    }
  };

  var fileHandle = function fileHandle(event) {
    var files = event.target.files;
    onImage(files);
  };

  return /*#__PURE__*/_jsx("div", {
    className: style.content,
    onClick: selectImg,
    children: /*#__PURE__*/_jsx("input", {
      type: "file",
      accept: "image/*",
      ref: fileSelector,
      onChange: fileHandle
    })
  });
}