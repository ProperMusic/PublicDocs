"use strict";(self.webpackChunkbasil_docs=self.webpackChunkbasil_docs||[]).push([[1201],{9404:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>m,default:()=>p,frontMatter:()=>l,metadata:()=>x,toc:()=>c});var r=s(5893),t=s(1151);const l={includeInPublic:!0},m="OrderResponse.xsd",x={id:"fulfilment/samples/orderResponse",title:"OrderResponse.xsd",description:"",source:"@site/docs/fulfilment/samples/orderResponse.md",sourceDirName:"fulfilment/samples",slug:"/fulfilment/samples/orderResponse",permalink:"/PublicDocs/docs/fulfilment/samples/orderResponse",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{includeInPublic:!0},sidebar:"tutorialSidebar",previous:{title:"Order Response Sample",permalink:"/PublicDocs/docs/fulfilment/samples/orderResponse-sample"},next:{title:"Files & Folders",permalink:"/PublicDocs/docs/rich-feeds-2/Files and Folders"}},o={},c=[];function a(e){const n={code:"code",h1:"h1",pre:"pre",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"orderresponsexsd",children:"OrderResponse.xsd"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",metastring:'title="OrderResponse.xsd"',children:'<?xml version="1.0" encoding="UTF-8"?>\r\n<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema" attributeFormDefault="unqualified" elementFormDefault="qualified">\r\n<xs:element name="orderResponse">\r\n  <xs:complexType>\r\n    <xs:sequence>\r\n      <xs:element type="xs:int" name="customerId" />\r\n      <xs:element type="xs:int" name="orderId" />\r\n      <xs:element type="xs:int" name="storeId" />\r\n      <xs:element type="xs:string" name="storeOrderId"/>\r\n      <xs:element type="xs:string" name="storeCustomerId"/>\r\n      <xs:element type="xs:string" name="statusString"/>\r\n      <xs:element name="orderLines">\r\n        <xs:complexType>\r\n          <xs:sequence>\r\n            <xs:element name="orderLine" maxOccurs="unbounded" minOccurs="1">\r\n              <xs:complexType>\r\n                <xs:sequence>\r\n                  <xs:element type="xs:string" name="catalogueNumber"/>\r\n                  <xs:element type="xs:int" name="qty"/>\r\n                  <xs:element type="xs:float" name="price"/>\r\n                  <xs:element type="xs:int" name="properLineId"/>\r\n                  <xs:element type="xs:string" name="lineId"/>\r\n                  <xs:element name="lineStatuses">\r\n                    <xs:complexType>\r\n                      <xs:sequence>\r\n                        <xs:element name="status" maxOccurs="unbounded" minOccurs="0">\r\n                          <xs:complexType>\r\n                            <xs:sequence>\r\n                              <xs:element type="xs:string" name="statusCode"/>\r\n                              <xs:element type="xs:string" name="statusMessage"/>\r\n                            </xs:sequence>\r\n                          </xs:complexType>\r\n                        </xs:element>\r\n                      </xs:sequence>\r\n                    </xs:complexType>\r\n                  </xs:element>\r\n                  <xs:element name="lineErrors">\r\n                    <xs:complexType>\r\n                      <xs:sequence>\r\n                        <xs:element name="error" maxOccurs="unbounded" minOccurs="0">\r\n                          \r\n                          <xs:complexType>\r\n                            <xs:sequence>\r\n                              <xs:element type="xs:string" name="errorCode"/>\r\n                              <xs:element type="xs:string" name="errorMessage"/>\r\n                            </xs:sequence>\r\n                          </xs:complexType>\r\n                        </xs:element>\r\n                      </xs:sequence>\r\n                    </xs:complexType>\r\n                  </xs:element>\r\n                </xs:sequence>\r\n              </xs:complexType>\r\n            </xs:element>\r\n          </xs:sequence>\r\n        </xs:complexType>\r\n      </xs:element>\r\n    </xs:sequence>\r\n  </xs:complexType>\r\n</xs:element>\r\n</xs:schema>\r\n\n'})})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}}}]);