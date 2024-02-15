"use strict";(self.webpackChunkbasil_docs=self.webpackChunkbasil_docs||[]).push([[1889],{7328:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>m,default:()=>d,frontMatter:()=>l,metadata:()=>x,toc:()=>i});var t=n(5893),r=n(1151);const l={public:!0},m="Dispatched.xsd",x={id:"fulfilment/samples/dispatched",title:"Dispatched.xsd",description:"",source:"@site/docs/fulfilment/samples/dispatched.md",sourceDirName:"fulfilment/samples",slug:"/fulfilment/samples/dispatched",permalink:"/PublicDocs/docs/fulfilment/samples/dispatched",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{public:!0},sidebar:"tutorialSidebar",previous:{title:"Order Response Message",permalink:"/PublicDocs/docs/fulfilment/messages/order-responses"},next:{title:"OrderRequest.xsd",permalink:"/PublicDocs/docs/fulfilment/samples/orderRequest"}},c={},i=[];function a(e){const s={code:"code",h1:"h1",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"dispatchedxsd",children:"Dispatched.xsd"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-xml",metastring:'title="dispatched.xsd"',children:'<?xml version="1.0" encoding="UTF-8"?>\r\n   <xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema" elementFormDefault="qualified" attributeFormDefault="unqualified">\r\n         \x3c!-- XML Schema Generated from XML Document on Mon Nov 28 2016 16:35:12 GMT+0000 (GMT Standard Time) --\x3e\r\n         \x3c!-- with XmlGrid.net Free Online Service http://xmlgrid.net --\x3e\r\n         <xs:element name="dispatchedRequest">\r\n               <xs:complexType>\r\n                     <xs:sequence>\r\n                           <xs:element name="dispatched" maxOccurs="unbounded">\r\n                                 <xs:complexType>\r\n                                       <xs:sequence>\r\n                                             <xs:element name="customerId" type="xs:int"></xs:element>\r\n                                             <xs:element name="orderID" type="xs:int"></xs:element>\r\n                                             <xs:element name="storeCustomerId" type="xs:int"></xs:element>\r\n                                             <xs:element name="storeOrderID" type="xs:int"></xs:element>\r\n                                             <xs:element name="orderItems">\r\n                                                   <xs:complexType>\r\n                                                         <xs:sequence>\r\n                                                               <xs:element name="item">\r\n                                                                     <xs:complexType>\r\n                                                                           <xs:sequence>\r\n                                                                                 <xs:element name="lineID" type="xs:int"></xs:element>\r\n                                                                                 <xs:element name="storeLineId" type="xs:int"></xs:element>\r\n                                                                                 <xs:element name="storeProductCode" type="xs:string"></xs:element>\r\n                                                                                 <xs:element name="qtyOrdered" type="xs:int"></xs:element>\r\n                                                                                 <xs:element name="qtyDespatched" type="xs:int"></xs:element>\r\n                                                                           </xs:sequence>\r\n                                                                     </xs:complexType>\r\n                                                               </xs:element>\r\n                                                         </xs:sequence>\r\n                                                   </xs:complexType>\r\n                                             </xs:element>\r\n                                       </xs:sequence>\r\n                                 </xs:complexType>\r\n                           </xs:element>\r\n                     </xs:sequence>\r\n               </xs:complexType>\r\n         </xs:element>\r\n   </xs:schema>\n'})})]})}function d(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}}}]);