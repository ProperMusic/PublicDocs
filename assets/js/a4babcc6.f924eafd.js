"use strict";(self.webpackChunkbasil_docs=self.webpackChunkbasil_docs||[]).push([[6296],{2739:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>x,default:()=>d,frontMatter:()=>m,metadata:()=>l,toc:()=>i});var t=s(5893),r=s(1151);const m={public:!0},x="OrderRequest.xsd",l={id:"fulfilment/samples/orderRequest",title:"OrderRequest.xsd",description:"",source:"@site/docs/fulfilment/samples/orderRequest.md",sourceDirName:"fulfilment/samples",slug:"/fulfilment/samples/orderRequest",permalink:"/docs/fulfilment/samples/orderRequest",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{public:!0},sidebar:"tutorialSidebar",previous:{title:"Dispatched.xsd",permalink:"/docs/fulfilment/samples/dispatched"},next:{title:"Order Response Sample",permalink:"/docs/fulfilment/samples/orderResponse-sample"}},a={},i=[];function c(e){const n={code:"code",h1:"h1",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"orderrequestxsd",children:"OrderRequest.xsd"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",metastring:'title="orderRequest.xsd"',children:'<?xml version="1.0" encoding="UTF-8"?>\r\n   <xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema" elementFormDefault="qualified" attributeFormDefault="unqualified">\r\n         \x3c!-- XML Schema Generated from XML Document on Mon Nov 28 2016 16:01:02 GMT+0000 (GMT Standard Time) --\x3e\r\n         \x3c!-- with XmlGrid.net Free Online Service http://xmlgrid.net --\x3e\r\n         <xs:element name="Orders">\r\n               <xs:complexType>\r\n                     <xs:sequence>\r\n                           <xs:element name="orderRequest" minOccurs="1" maxOccurs="unbounded">\r\n                                 <xs:complexType>\r\n                                       <xs:sequence>\r\n                                             <xs:element name="customerID" type="xs:int"></xs:element>\r\n                                             <xs:element name="orderID" type="xs:int"></xs:element>\r\n                                             <xs:element name="orderDate" type="xs:date"></xs:element>\r\n                                             <xs:element name="deliveryAddress" minOccurs="1" maxOccurs="1">\r\n                                                   <xs:complexType>\r\n                                                         <xs:sequence>\r\n                                                               <xs:element name="customerName" type="xs:string"></xs:element>\r\n                                                               <xs:element name="organisation" type="xs:string"></xs:element>\r\n                                                               <xs:element name="address1" type="xs:string"></xs:element>\r\n                                                               <xs:element name="address2"></xs:element>\r\n                                                               <xs:element name="address3"></xs:element>\r\n                                                               <xs:element name="address4" type="xs:string"></xs:element>\r\n                                                               <xs:element name="county"></xs:element>\r\n                                                               <xs:element name="country" type="xs:string"></xs:element>\r\n                                                               <xs:element name="postCode" type="xs:string"></xs:element>\r\n                                                               <xs:element name="phone"></xs:element>\r\n                                                         </xs:sequence>\r\n                                                   </xs:complexType>\r\n                                             </xs:element>\r\n                                             <xs:element name="billingAddress" minOccurs="1" maxOccurs="1">\r\n                                                   <xs:complexType>\r\n                                                         <xs:sequence>\r\n                                                               <xs:element name="customerName" type="xs:string"></xs:element>\r\n                                                               <xs:element name="address1" type="xs:string"></xs:element>\r\n                                                               <xs:element name="address2"></xs:element>\r\n                                                               <xs:element name="address3"></xs:element>\r\n                                                               <xs:element name="address4" type="xs:string"></xs:element>\r\n                                                               <xs:element name="county"></xs:element>\r\n                                                               <xs:element name="country" type="xs:string"></xs:element>\r\n                                                               <xs:element name="postCode" type="xs:string"></xs:element>\r\n                                                               <xs:element name="phone" type="xs:string"></xs:element>\r\n                                                               <xs:element name="email" type="xs:string"></xs:element>\r\n                                                         </xs:sequence>\r\n                                                   </xs:complexType>\r\n                                             </xs:element>\r\n                                             <xs:element name="orderItems">\r\n                                                   <xs:complexType>\r\n                                                         <xs:sequence>\r\n                                                               <xs:element name="item" minOccurs="1" maxOccurs="unbounded">\r\n                                                                     <xs:complexType>\r\n                                                                           <xs:sequence>\r\n                                                                                 <xs:element name="vendorIdentifier" type="xs:string"></xs:element>\r\n                                                                                 <xs:element name="qty" type="xs:int"></xs:element>\r\n                                                                                 <xs:element name="price" type="xs:double"></xs:element>\r\n                                                                                 <xs:element name="lineID" type="xs:int"></xs:element>\r\n                                                                           </xs:sequence>\r\n                                                                     </xs:complexType>\r\n                                                               </xs:element>\r\n                                                         </xs:sequence>\r\n                                                   </xs:complexType>\r\n                                             </xs:element>\r\n                                             <xs:element name="shipping" type="xs:double"></xs:element>\r\n                                             <xs:element name="shipService" type="xs:string"></xs:element>\r\n                                             <xs:element name="shipMethod" type="xs:string"></xs:element>\r\n                                             <xs:element name="shipInstructions"></xs:element>\r\n                                             <xs:element name="orderTotal" type="xs:double"></xs:element>\r\n                                             <xs:element name="storeName" type="xs:string"></xs:element>\r\n                                             <xs:element name="storeId" type="xs:int"></xs:element>\r\n                                             <xs:element name="auth" type="xs:string"></xs:element>\r\n                                       </xs:sequence>\r\n                                 </xs:complexType>\r\n                           </xs:element>\r\n                     </xs:sequence>\r\n               </xs:complexType>\r\n         </xs:element>\r\n   </xs:schema>\n'})})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}}}]);