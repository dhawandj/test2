import{h as b,i as w,v,o as i,c as x,T as V,d as f,w as d,a as t,u as s,Z as B,t as C,g,b as o,j as p,e as m,n as $,f as P}from"./app-_L60qiYm.js";import{_ as q}from"./GuestLayout-_2dICG8y.js";import{_ as y,a as k,b as h}from"./TextInput-hdk2O7bK.js";import{P as N}from"./PrimaryButton-OLyFGHpE.js";import"./ApplicationLogo-ElJGmmqC.js";import"./_plugin-vue_export-helper-x3n3nnut.js";const R=["value"],U={__name:"Checkbox",props:{checked:{type:[Array,Boolean],required:!0},value:{default:null}},emits:["update:checked"],setup(l,{emit:e}){const u=e,n=l,r=b({get(){return n.checked},set(a){u("update:checked",a)}});return(a,c)=>w((i(),x("input",{type:"checkbox",value:l.value,"onUpdate:modelValue":c[0]||(c[0]=_=>r.value=_),class:"rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-indigo-600 shadow-sm focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:focus:ring-offset-gray-800"},null,8,R)),[[v,r.value]])}},L={key:0,class:"mb-4 font-medium text-sm text-green-600"},S={class:"mt-4"},j={class:"block mt-4"},D={class:"flex items-center"},E=o("span",{class:"ms-2 text-sm text-gray-600 dark:text-gray-400"},"Remember me",-1),F={class:"flex items-center justify-end mt-4"},G={__name:"Login",props:{canResetPassword:{type:Boolean},status:{type:String}},setup(l){const e=V({email:"",password:"",remember:!1}),u=()=>{e.post(route("login"),{onFinish:()=>e.reset("password")})};return(n,r)=>(i(),f(q,null,{default:d(()=>[t(s(B),{title:"Log in"}),l.status?(i(),x("div",L,C(l.status),1)):g("",!0),o("form",{onSubmit:P(u,["prevent"])},[o("div",null,[t(y,{for:"email",value:"Email"}),t(k,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":r[0]||(r[0]=a=>s(e).email=a),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),t(h,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),o("div",S,[t(y,{for:"password",value:"Password"}),t(k,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:s(e).password,"onUpdate:modelValue":r[1]||(r[1]=a=>s(e).password=a),required:"",autocomplete:"current-password"},null,8,["modelValue"]),t(h,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),o("div",j,[o("label",D,[t(U,{name:"remember",checked:s(e).remember,"onUpdate:checked":r[2]||(r[2]=a=>s(e).remember=a)},null,8,["checked"]),E])]),o("div",F,[l.canResetPassword?(i(),f(s(p),{key:0,href:n.route("password.request"),class:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"},{default:d(()=>[m(" Forgot your password? ")]),_:1},8,["href"])):g("",!0),t(N,{class:$(["ms-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:d(()=>[m(" Log in ")]),_:1},8,["class","disabled"])])],32),t(s(p),{class:"underlin text-sm text-gray-600 dark:text-yellow-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800",href:n.route("register")},{default:d(()=>[m("Register Her")]),_:1},8,["href"])]),_:1}))}};export{G as default};
