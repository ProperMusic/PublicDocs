"use strict";(self.webpackChunkbasil_docs=self.webpackChunkbasil_docs||[]).push([[4230],{4757:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>x,contentTitle:()=>d,default:()=>o,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var s=l(5893),r=l(1151);const n={title:"Order Response Message",slug:"order-responses",public:!0},d=void 0,i={id:"fulfilment/messages/order-responses",title:"Order Response Message",description:"Example Data",source:"@site/docs/fulfilment/messages/order-responses.md",sourceDirName:"fulfilment/messages",slug:"/fulfilment/messages/order-responses",permalink:"/PublicDocs/docs/fulfilment/messages/order-responses",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Order Response Message",slug:"order-responses",public:!0},sidebar:"tutorialSidebar",previous:{title:"Order Request",permalink:"/PublicDocs/docs/fulfilment/messages/order-request-message"},next:{title:"Dispatched.xsd",permalink:"/PublicDocs/docs/fulfilment/samples/dispatched"}},x={},c=[{value:"Example Data",id:"example-data",level:2},{value:"File",id:"file",level:2},{value:"Message Structure",id:"message-structure",level:3},{value:"orderResponse",id:"orderresponse",level:3},{value:"orderLine",id:"orderline",level:3},{value:"status (Line Level)",id:"status-line-level",level:3},{value:"error (Line Level)",id:"error-line-level",level:3},{value:"Line Level Errors",id:"line-level-errors",level:2},{value:"Line Level Statuses",id:"line-level-statuses",level:2},{value:"Order Level Statuses",id:"order-level-statuses",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"example-data",children:"Example Data"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-xml",children:'\r\n <?xml version="1.0" encoding="UTF-8" ?>\r\n <orderResponse>\r\n <customerId>#####</customerId>\r\n <orderId>#####</orderId>\r\n <storeId>#####</storeId>\r\n <storeOrderId>$$$$$</storeOrderId>\r\n <storeCustomerId>$$$$$</storeCustomerId>\r\n <statusString>order held. reason : incomplete</statusString>\r\n <orderLines>\r\n     <orderLine>\r\n         <catalogueNumber>$$$$$</catalogueNumber>\r\n         <qty>1</qty>\r\n         <price>10.99</price>\r\n         <properLineId>#####</properLineId>\r\n         <lineId>$$$$$</lineId>\r\n         <lineStatuses>\r\n            <status>\r\n                <statusCode>0x00000190</statusCode>\r\n                <statusMessage>Line Rejected. See errors for reason</statusMessage>\r\n            </status>\r\n         </lineStatuses>\r\n         <lineErrors>\r\n            <error>\r\n                <errorCode>0x0000138D</errorCode>\r\n                <errorMessage>Could not be found using catalogue number: No Match</errorMessage>\r\n            </error>\r\n         </lineErrors>\r\n     </orderLine>\r\n </orderLines>\r\n </orderResponse>\n'})}),"\n",(0,s.jsx)(t.h2,{id:"file",children:"File"}),"\n",(0,s.jsx)(t.p,{children:"The output file will be named:"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"resp."}),(0,s.jsx)(t.em,{children:"[original file name]"}),(0,s.jsx)(t.strong,{children:".xml.log"})]}),"\n",(0,s.jsx)(t.h3,{id:"message-structure",children:"Message Structure"}),"\n",(0,s.jsxs)(t.p,{children:["See ",(0,s.jsx)(t.a,{href:"/docs/fulfilment/samples/orderResponse-sample",children:"order response sample"})," for sample data"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-xml",children:"<orderResponse>\r\n...\r\n</orderResponse>\n"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Value"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Format"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"orderResponse"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"object"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The Order Response Message / Object"})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"orderresponse",children:"orderResponse"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-xml",children:" \r\n <customerId>#####</customerId>\r\n <orderId>#####</orderId>\r\n <storeId>#####</storeId>\r\n <storeOrderId>$$$$$</storeOrderId>\r\n <storeCustomerId>$$$$$</storeCustomerId>\r\n <statusString>$$$$$</statusString>\r\n <orderLines>...</orderLines>\r\n\n"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Value"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Format"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"customerId"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"integer"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Proper's Internal Customer Id"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"orderId"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"integer"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Proper's Internal Order Id"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"storeId"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"integer"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The Client's Id (assigned by Proper)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"storeOrderId"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"string"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The Client's Order Id"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"storeCustomerId"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"string"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The Client's Customer Id"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"statusString"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"string"}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["See ",(0,s.jsx)(t.a,{href:"#order-level-statuses",children:"Order level Statuses"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"orderLines"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"array[orderLine]"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Array of Order Lines"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"orderline",children:"orderLine"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-xml",children:"<catalogueNumber>$$$$$</catalogueNumber>\r\n<qty>1</qty>\r\n<price>10.99</price>\r\n<properLineId>#####</properLineId>\r\n<lineId>$$$$$</lineId>\r\n<lineStatuses>...</lineStatuses>\r\n<lineErrors>...</lineErrors>\n"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Value"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Format"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"catalogueNumber"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"string"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The catalogue number of the matched product"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"qty"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"integer"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"qty requested"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"price"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"float"}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"properLineId"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"integer"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Proper's internal line Id"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"lineId"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"string"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Client's line Id"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"lineStatuses"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"array[status]"}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Array of Line Status Messages. See ",(0,s.jsx)(t.a,{href:"#line-level-statuses",children:"Line level Statuses"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"lineErrors"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"array[error]"}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Array of Line Error Messages  See ",(0,s.jsx)(t.a,{href:"#line-level-errors",children:"Line level Errors"})]})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"status-line-level",children:"status (Line Level)"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-xml",children:"<lineStatuses>\r\n    <status>\r\n        <statusCode>0x00000190</statusCode>\r\n        <statusMessage>Line Rejected. See errors for reason</statusMessage>\r\n    </status>\r\n</lineStatuses>\r\n\n"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Value"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Format"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"statusCode"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"string"}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"statusMessage"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"string"}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"error-line-level",children:"error (Line Level)"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-xml",children:"<lineErrors>\r\n    <error>\r\n        <errorCode>0x0000138D</errorCode>\r\n        <errorMessage>Could not be found using catalogue number: No Match</errorMessage>\r\n    </error>\r\n</lineErrors>\n"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Value"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Format"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"errorCode"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"string"}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"errorMessage"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"string"}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"line-level-errors",children:"Line Level Errors"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Error Name"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Code (Base 10)"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Code (Hex)"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Message"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Product not found by productId."}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"5001"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"0x00001389"}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Product Id is 0. This is usually caused by the product not ",(0,s.jsx)("br",{}),"being matched by catalogue number earlier in the process"]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"5002"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"0x0000138a"}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Insufficient Stock. The product will still be back-ordered"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"5003"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"0x0000138b"}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Blocked from being ordered by this account"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"5004"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"0x0000138c"}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Could not be found using catalogue number: No Match"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"5005"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"0x0000138d"}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Could not be found using catalogue number: Wrong Supplier"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"5006"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"0x0000138e"}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Could not be found using catalogue number: Not Current"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"5007"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"0x0000138f"}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The client is configured incorrectly"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"5008"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"0x00001390"}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"A file error occurred in the system"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"5009"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"0x00001391"}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"line-level-statuses",children:"Line Level Statuses"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Status Name"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Code (Base 10)"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Code (Hex)"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Message"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Line successfully processed"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"200"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"0x000000c8"}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Line Back-Ordered"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"201"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"0x000000c9"}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Line Rejected. See errors for reason"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"400"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"0x00000190"}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Line Failed to process. Possibly due to a database error"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"402"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"0x00000192"}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Event: Product matched successfully"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"1000"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"0x000003e8"}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"order-level-statuses",children:"Order Level Statuses"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Status Name"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,s.jsx)(t.th,{children:"Order Status"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"country not found"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The country in the file was not recognised"}),(0,s.jsx)(t.td,{children:"Rejected"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"client/storeId not found"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The StoreId in the file was not recognised"}),(0,s.jsx)(t.td,{children:"Rejected"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"failed to authenticate"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:'The file failed to authenticate. Possibly wrong "Auth Code"'}),(0,s.jsx)(t.td,{children:"Rejected"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"order held. reason : one or more lines backordered"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"See line level statuses for details"}),(0,s.jsx)(t.td,{children:"Accepted (with backorders)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"order held. reason : incomplete"}),(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{children:"Partially Accepted"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"order processed successfully"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"No problems at all"}),(0,s.jsx)(t.td,{children:"Accepted"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"order held. reason : other"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"An Unknown Error has occurred"}),(0,s.jsx)(t.td,{children:"Rejected"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"order was not processed"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Usually appended to other errors"}),(0,s.jsx)(t.td,{children:"Rejected"})]})]})]})]})}function o(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}}}]);