"use strict";(self.webpackChunkreact_jwchat=self.webpackChunkreact_jwchat||[]).push([[812],{14898:function(o,t,a){var n;a.r(t),a.d(t,{demos:function(){return I}});var u=a(15009),d=a.n(u),p=a(99289),_=a.n(p),r=a(67294),m=a(95306),c=a(99912),s=a(70971),I={"contactlist-demo-democontactlist":{component:r.memo(r.lazy(function(){return a.e(154).then(a.bind(a,98206))})),asset:{type:"BLOCK",id:"contactlist-demo-democontactlist",refAtomIds:["ContactList"],dependencies:{"index.tsx":{type:"FILE",value:a(83725).Z},react:{type:"NPM",value:"18.3.1"},"react-jwchat":{type:"NPM",value:"1.5.2"},"./DisplayWrapper.tsx":{type:"FILE",value:a(95301).Z},"./displayData.ts":{type:"FILE",value:a(81146).Z}},entry:"index.tsx"},routeId:"components/ContactList/index",context:{"./DisplayWrapper.tsx":c,"./displayData.ts":s,react:n||(n=a.t(r,2)),"react-jwchat":m,"/home/runner/work/react-jwchat/react-jwchat/demo/DisplayWrapper.tsx":c,"/home/runner/work/react-jwchat/react-jwchat/demo/displayData.ts":s},renderOpts:{compile:function(){var i=_()(d()().mark(function v(){var l,y=arguments;return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.e(250).then(a.bind(a,90250));case 2:return e.abrupt("return",(l=e.sent).default.apply(l,y));case 3:case"end":return e.stop()}},v)}));function h(){return i.apply(this,arguments)}return h}()}}}},80101:function(o,t,a){a.r(t),a.d(t,{texts:function(){return n}});const n=[{value:"key",paraId:0,tocIndex:2},{value:"type",paraId:0,tocIndex:2},{value:"desc",paraId:0,tocIndex:2},{value:"required",paraId:0,tocIndex:2},{value:"data",paraId:0,tocIndex:2},{value:"contact[]",paraId:0,tocIndex:2},{value:"\u8054\u7CFB\u4EBA\u5217\u8868\uFF0C\u6570\u7EC4\u4E2D\u7684\u6BCF\u4E2A\u5143\u7D20\u90FD\u4E3A contact \u7C7B\u578B",paraId:0,tocIndex:2},{value:"true",paraId:0,tocIndex:2},{value:"style",paraId:0,tocIndex:2},{value:"style",paraId:0,tocIndex:2},{value:"\u5BB9\u5668\u6837\u5F0F(",paraId:0,tocIndex:2},{value:"\u4F7F\u7528\u65F6\u9700\u8981\u6307\u5B9A\u9AD8\u5EA6",paraId:0,tocIndex:2},{value:")",paraId:0,tocIndex:2},{value:"false",paraId:0,tocIndex:2},{value:"key",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"desc",paraId:1,tocIndex:3},{value:"required",paraId:1,tocIndex:3},{value:"onSelect",paraId:1,tocIndex:3},{value:"func",paraId:1,tocIndex:3},{value:"\u9009\u4E2D\u8054\u7CFB\u4EBA\u89E6\u53D1\u56DE\u8C03\uFF0C\u53C2\u6570\u4E3A\u5F53\u524D\u9009\u4E2D\u8054\u7CFB\u4EBA\u5BF9\u8C61",paraId:1,tocIndex:3},{value:"false",paraId:1,tocIndex:3}]},83725:function(o,t){t.Z=`import React from "react"
import { ContactList } from "react-jwchat"

import { contactList } from "./displayData"
import DisplayWrapper from "./DisplayWrapper"

export default function DemoContactList() {
  return (
    <DisplayWrapper>
      <ContactList
        data={contactList}
        style={{
          marginRight: 10,
          height: 500,
          borderRadius: 5,
          width: 240,
          border: "1px solid rgb(226, 226, 226)",
        }}
      />
    </DisplayWrapper>
  )
}
`}}]);
