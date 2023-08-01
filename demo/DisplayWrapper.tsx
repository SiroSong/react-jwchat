import React from "react";

export default function DisplayWrapper(props: any) {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>{props.children}</div>
  )
}