import React from "react";
import { jsx as _jsx } from "react/jsx-runtime";
export default function DisplayWrapper(props) {
  return /*#__PURE__*/_jsx("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    },
    children: props.children
  });
}