"use strict";(self.webpackChunkcheberel=self.webpackChunkcheberel||[]).push([[380],{8848:function(e,t,n){n(2791);var r=n(1363),i=n(9818),o=n(890),s=n(6151),d=n(9276),a=n(7881),c=n.n(a),l=n(6871),u=n(8825),p=n(184);t.Z=function(e){var t=e.setOpen,n=e.open,a=e.title,m=e.subtitle,x=e.product,h=e.handleRemoveProduct,f=(e.item,e.exit),v=(0,l.s0)();return(0,p.jsxs)(i.Z,{sx:{"& .MuiPaper-root":{p:2}},onClose:function(){return t(!1)},open:n,children:[(0,p.jsx)(r.G,{icon:"power-off",fontSize:32,color:"#E32967"}),(0,p.jsx)(o.Z,{variant:"subtitle2",fontWeight:"700",textAlign:"center",mt:2,mb:1,children:a}),(0,p.jsx)(o.Z,{variant:"body1",color:"#15151570",textAlign:"center",children:m}),(0,p.jsxs)(d.Z,{mt:2,borderTop:"1px solid #00000010",display:"flex",pt:2,justifyContent:"space-between",children:[(0,p.jsx)(s.Z,{fullWidth:!0,color:"success",onClick:function(){return t(!1)},children:(0,p.jsx)(o.Z,{variant:"body2",color:"#151515",children:(0,u.t)("no")})}),(0,p.jsx)(s.Z,{fullWidth:!0,onClick:function(){f?(localStorage.clear(),c().removeSpecific("token",{path:"/"}),v("/"),setTimeout((function(){window.location.reload()}),200)):x&&(h(null===x||void 0===x?void 0:x.id,x.sum),t(!1))},children:(0,p.jsx)(o.Z,{variant:"body2",color:"#E32967",children:(0,u.t)("yes")})})]})]})}},6620:function(e,t,n){var r=n(9276),i=(n(2791),n(1625)),o=n(184);t.Z=function(e){var t=e.id,n=e.value,s=e.handleChange,d=e.name;return(0,o.jsxs)(r.Z,{sx:{"& input":{position:"absolute",top:"35%",right:16,opacity:0}},children:[(0,o.jsx)("input",{type:"radio",required:!0,name:d,onChange:s,value:t}),t==n?(0,o.jsx)(i.Fr,{}):(0,o.jsx)(i.Ol,{})]})}},3184:function(e,t,n){var r=n(9439),i=n(2791),o=n(890),s=n(5466),d=n(9673),a=n(5818),c=n(3721),l=n(493),u=n(4852),p=n(6151),m=n(6298),x=n(1625),h=n(6620),f=n(9276),v=n(9434),y=n(3074),b=(n(3567),n(6871)),j=n(184);t.Z=function(e){var t=e.setSuccess,n=e.t,g=e.setLoading,Z=e.buyNow,_=(e.setCartSum,(0,v.I0)()),C=(0,b.s0)(),k=(0,i.useState)(!1),S=(0,r.Z)(k,2),w=S[0],F=S[1],I=(0,v.v9)((function(e){return e.products})).cart_list,W=(0,v.v9)((function(e){return e.order})).created_order,O=(0,m.TA)({initialValues:{paymentMethod:"",delivery_method:"",country:"",city:"",address:"",ordering_item:[]},onSubmit:function(e){if(null!==Z&&void 0!==Z&&Z.from_stream){var t={country:e.country,city:e.city,address:e.address,delivery_method:e.delivery_method,ordering_item:[{product_variations:Z.variant,product_count:Z.count}],from_stream:Z.from_stream};_((0,y.LV)(t)),g(!0)}else if(Z&&!Z.from_stream){var n={country:e.country,city:e.city,address:e.address,delivery_method:e.delivery_method,ordering_item:[{product_variations:Z.variant,product_count:Z.count}]};_((0,y.LV)(n)),g(!0)}else{var r,i,o={country:e.country,city:e.city,address:e.address,delivery_method:e.delivery_method,ordering_item:null===(r=I.results)||void 0===r||null===(i=r.filter((function(e){return!e.total_products_sum})))||void 0===i?void 0:i.map((function(e){var t;return{product_variations:null===e||void 0===e||null===(t=e.product_variations)||void 0===t?void 0:t.id,product_count:null===e||void 0===e?void 0:e.product_count}}))};_((0,y.LV)(o)),g(!0)}}}),T=(0,i.useRef)(!0);(0,i.useLayoutEffect)((function(){T.current?T.current=!1:(g(!1),200===W.severity&&(t(!0),localStorage.setItem("orderId",W.message.order_id),fetch("https://api.opop.asia/payments/result_url/",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({pg_order_id:1,b:"Textual content"})}).then((function(e){return e.json()})).then((function(e){console.log(e)}))))}),[W]);var M=[{id:"COURIER",img:(0,j.jsx)(x.pr,{}),txt:"\u041a\u0443\u0440\u044c\u0435\u0440",subtitle:"\u041e\u043f\u043b\u0430\u0442\u0430 \u0443\u0441\u043b\u0443\u0433\u0438 \u043a\u0443\u0440\u044c\u0435\u0440\u0430 \u0441\u043e\u0432\u0435\u0440\u0448\u0430\u0435\u0442\u0441\u044f \u0432 \u043c\u043e\u043c\u0435\u043d\u0442 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438 \u0442\u043e\u0432\u0430\u0440\u0430. <br/> \u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u0443\u0441\u043b\u0443\u0433 \u0443\u043a\u0430\u0437\u0430\u043d\u044b <b>\u0437\u0434\u0435\u0441\u044c</b>",link:!0},{id:"PICKUP",img:(0,j.jsx)(x.t0,{}),txt:n("pickUp"),subtitle:"\u0410\u043b\u0430\u043c\u0435\u0434\u0438\u043d\u0441\u043a\u0438\u0439 \u0440-\u043d, \u0410\u043b\u043c\u0430-\u0410\u0442\u0438\u043d\u0441\u043a\u0430\u044f 1/1,  \u0433\u0440\u0430\u0444\u0438\u043a \u0440\u0430\u0431\u043e\u0442\u044b \u043f\u043d-\u043f\u0442, \u0441 09:00-18:00",link:!1}];return(0,j.jsxs)(f.Z,{component:"form",sx:{"& .MuiFormControl-root":{boxShadow:"none!important",borderRadius:8,"& .MuiOutlinedInput-notchedOutline":{borderColor:"#CECECE"}}},onSubmit:O.handleSubmit,children:[(0,j.jsx)(o.Z,{fontSize:"12px",mb:1,textTransform:"uppercase",color:"#000",children:n("country")}),(0,j.jsx)(s.Z,{required:!0,fullWidth:!0,name:"country",value:O.values.country,onChange:O.handleChange}),(0,j.jsx)(o.Z,{fontSize:"12px",mb:1,mt:2,textTransform:"uppercase",color:"#000",children:n("city")}),(0,j.jsx)(s.Z,{required:!0,fullWidth:!0,name:"city",value:O.values.city,onChange:O.handleChange}),(0,j.jsx)(o.Z,{fontSize:"12px",mb:1,mt:2,textTransform:"uppercase",color:"#000",children:n("address")}),(0,j.jsx)(s.Z,{required:!0,fullWidth:!0,name:"address",value:O.values.address,onChange:O.handleChange}),(0,j.jsxs)(d.Z,{expanded:w,onChange:function(){return F(!w)},children:[(0,j.jsxs)(a.Z,{expandIcon:(0,j.jsx)(x.ch,{}),children:[(0,j.jsxs)("div",{className:"d-flex",children:[(0,j.jsx)(x.Qh,{}),(0,j.jsxs)(o.Z,{ml:2,variant:"body2",fontWeight:"700",children:[n("shipping_method"),":"," "]})]}),(0,j.jsx)(o.Z,{mr:2,variant:"body2",fontWeight:"400",children:O.values.shippingMethod})]}),(0,j.jsx)(c.Z,{children:(0,j.jsx)(l.Z,{children:M.map((function(e,t){return(0,j.jsxs)(u.ZP,{component:"label",button:!0,sx:{background:"#F1F1F1",borderRadius:"8px",p:2,mb:2,display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,j.jsxs)("div",{className:"d-flex",children:[e.img,(0,j.jsxs)("div",{children:[(0,j.jsx)(o.Z,{variant:"body2",ml:2,children:e.txt}),(0,j.jsx)(o.Z,{dangerouslySetInnerHTML:{__html:e.subtitle},mt:.3,lineHeight:"1.2",onClick:function(){return e.link?C("/shipping"):""},sx:{"& b":{color:"var(--primary)"}},variant:"body2",ml:2,color:"#777"})]})]}),(0,j.jsx)(h.Z,{name:"delivery_method",id:e.id,handleChange:O.handleChange,value:O.values.delivery_method})]},t)}))})})]}),(0,j.jsx)(p.Z,{size:"medium",color:"primary",variant:"contained",type:"submit",onClick:function(){O.values.address&&!O.values.shippingMethod&&F(!0)},sx:{display:"block",m:"24px auto"},children:n("makeOrder")})]})}},7380:function(e,t,n){n.d(t,{F:function(){return j},Z:function(){return b}});var r=n(2791),i=n(5193),o=n(9818),s=n(890),d=n(4852),a=n(6151),c=n(418),l=n(9276),u=(n(3184),n(1363),n(8848),n(9434)),p=n(3567),m=n(184),x=n(1625),h=(n(3654),n(3074)),f=n(3504),v=n(6163),y=n(6620),b=function(e){var t,n=e.open,x=e.setOpen,f=(e.orderSum,e.count,e.setCartSum,e.loading,e.sale,e.t),b=e.setLoading,j=e.success,g=e.setSuccess,Z=(0,u.I0)();(0,r.useEffect)((function(){Z((0,v.cr)())}),[]);var _=(0,u.v9)((function(e){return e.products})),C=_.byNow,k=_.cart_list,S=((0,u.v9)((function(e){return e.order})).created_order,(0,u.v9)((function(e){return e.profile})).client_list),w=(0,c.Z)();(0,i.Z)(w.breakpoints.down(768));return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(o.Z,{sx:{"& .MuiDialog-container":{alignItems:{xs:"end",md:"center"}},"& .MuiDialog-paper":{minWidth:{xs:"100%",md:848},height:{xs:"100%",md:"fit-content"},m:{xs:"0",md:3},maxHeight:{xs:"calc(100% - 113px)",md:"calc(100% - 64px)"},p:2},"& .MuiAccordion-root":{mt:2,width:"100%",background:"#FFFFFF",boxShadow:"0px 4px 8px rgba(0, 0, 0, 0.15)",borderRadius:"8px","&::before":{display:"none"}},"& .MuiAccordionSummary-content":{display:"flex",alignItems:"center",justifyContent:"space-between"}},onClose:function(){C?Z((0,p.Qi)(!1)):x(!1)},open:n||C,children:[(0,m.jsx)(l.Z,{sx:{display:{xs:"block",md:"none"},height:"6px",width:130,borderRadius:1,background:"#7E7E7E",m:"0 auto 16px",color:"transparent"}}),(0,m.jsx)(s.Z,{variant:"h6",mt:1,textAlign:"center",fontWeight:"700",pb:{xs:2,md:0},children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437"}),(0,m.jsx)(s.Z,{variant:"subtitle2",pt:2,mt:{xs:1,md:3},borderTop:"1px solid #00000010",mb:2,fontWeight:"700",children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"}),(0,m.jsx)(l.Z,{children:null===S||void 0===S||null===(t=S.results)||void 0===t?void 0:t.map((function(e){return(0,m.jsxs)(d.ZP,{onClick:function(){return g(e.id)},disabled:!e.confirmation_status,button:!0,sx:{padding:"16px",borderRadius:"8px",backgroundColor:"#F5F6F8",mb:2,display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,m.jsx)(s.Z,{children:e.full_name}),e.confirmation_status?(0,m.jsx)(y.Z,{name:"delivery_method",id:e.id,handleChange:function(){return g(e.id)},value:j}):(0,m.jsx)(s.Z,{color:"red",children:"\u041d\u0435 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d"})]})}))}),(0,m.jsx)(a.Z,{size:"medium",color:"primary",variant:"contained",disabled:!j,type:"submit",onClick:function(){b(!0),Z((0,h.LV)({questionnaire_id:j,products:null===k||void 0===k?void 0:k.map((function(e){return{product_id:e.product_variations.id,product_count:e.product_count}}))}))},sx:{display:"block",m:"24px auto"},children:f("makeOrder")})]})})},j=function(e){var t=e.open,n=e.t,r=e.setOpen;(0,u.v9)((function(e){return e.order})).created_order;return(0,m.jsxs)(o.Z,{sx:{"& .MuiPaper-root":{p:2}},onClose:function(){return r(!1)},open:t,children:[(0,m.jsxs)(l.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[(0,m.jsx)(x.tm,{}),(0,m.jsx)(s.Z,{variant:"subtitle2",fontWeight:"700",textAlign:"center",mt:2,mb:1,children:n("successfullyOrdered")}),(0,m.jsx)(s.Z,{variant:"body1",color:"#15151570",textAlign:"center",maxWidth:"304px",children:n("successfullyOrderedTxt")})]}),(0,m.jsx)(l.Z,{mt:2,borderTop:"1px solid #00000010",display:"flex",pt:2,justifyContent:"space-between",children:(0,m.jsx)(f.rU,{style:{display:"block",margin:"0 auto"},to:"/dashboard/profile/orders",children:(0,m.jsx)(a.Z,{fullWidth:!0,variant:"contained",color:"primary",children:(0,m.jsx)(s.Z,{variant:"body2",color:"#151515",children:"\u0412 \u0437\u0430\u043a\u0430\u0437\u044b"})})})})]})}}}]);
//# sourceMappingURL=380.0af0f512.chunk.js.map