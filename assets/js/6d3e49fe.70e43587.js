"use strict";(self.webpackChunkbasil_docs=self.webpackChunkbasil_docs||[]).push([[6200],{2785:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var n=l(5893),s=l(1151);const r={title:"Cancel Order Lines",slug:"cancel-order-lines",includeInPublic:!0},i=void 0,d={id:"fulfilment/messages/cancel-order-lines",title:"Cancel Order Lines",description:"Sample Upload File",source:"@site/docs/fulfilment/messages/cancel-order-lines.md",sourceDirName:"fulfilment/messages",slug:"/fulfilment/messages/cancel-order-lines",permalink:"/PublicDocs/docs/fulfilment/messages/cancel-order-lines",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Cancel Order Lines",slug:"cancel-order-lines",includeInPublic:!0},sidebar:"tutorialSidebar",previous:{title:"Cancel Order Lines Response",permalink:"/PublicDocs/docs/fulfilment/messages/cancel-order-lines-resp"},next:{title:"Dispatched Message",permalink:"/PublicDocs/docs/fulfilment/messages/dispatched"}},c={},o=[{value:"Sample Upload File",id:"sample-upload-file",level:3},{value:"<code>customerCancelOrderLines</code>",id:"customercancelorderlines",level:3},{value:"<code>item</code>",id:"item",level:3}];function a(e){const t={code:"code",h3:"h3",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h3,{id:"sample-upload-file",children:"Sample Upload File"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-xml",metastring:'title="sample.xml.done" ',children:'<?xml version="1.0"?>\r\n<customerCancelOrderLines>\r\n <StoreorderID>$$$$$</StoreorderID>\r\n <StoreCustomerId>$$$$$</StoreCustomerId>\r\n  <storeId>#####</storeId>\r\n  <Auth>ABCDEF012345678900000000000000000123456789ABCDEF0000000000000000</Auth>\r\n <orderItems>\r\n  <item>\r\n   <lineID>$$$$$</lineID>\r\n  </item>\r\n    <item>\r\n   <lineID>$$$$$</lineID>\r\n  </item>\r\n  </orderItems>\r\n</customerCancelOrderLines>\r\n\n'})}),"\n",(0,n.jsx)(t.h3,{id:"customercancelorderlines",children:(0,n.jsx)(t.code,{children:"customerCancelOrderLines"})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Value"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Format"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"StoreorderID"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"string(32)"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"The client's order identifier"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"StoreCustomerId"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"string(32)"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"The client's customer identifier"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"storeId"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"integer"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"The client identifier (assigned by Proper)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Auth"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"string(64)"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:'The client\'s "Auth" string, must match the one recorded against the account'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"orderItems"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"array[item]"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"A list of the order lines to be cancelled"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"item",children:(0,n.jsx)(t.code,{children:"item"})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Value"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Format"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"lineID"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"string(32)"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"The client's line identifer to cancel"})]})})]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},1151:(e,t,l)=>{l.d(t,{Z:()=>d,a:()=>i});var n=l(7294);const s={},r=n.createContext(s);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);