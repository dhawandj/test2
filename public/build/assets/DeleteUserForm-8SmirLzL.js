import{o as m,c as _,r as h,x as $,l as C,m as B,h as D,d as S,a as o,w as n,i as y,q as p,b as e,s as g,n as b,g as V,y as E,p as x,T as U,z as A,e as w,u as d,A as T}from"./app-_L60qiYm.js";import{_ as N}from"./_plugin-vue_export-helper-x3n3nnut.js";import{_ as z,a as M,b as O}from"./TextInput-hdk2O7bK.js";const P={},W={class:"inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150"};function F(s,r){return m(),_("button",W,[h(s.$slots,"default")])}const v=N(P,[["render",F]]),I={class:"fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50","scroll-region":""},K=e("div",{class:"absolute inset-0 bg-gray-500 dark:bg-gray-900 opacity-75"},null,-1),L=[K],j={__name:"Modal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0}},emits:["close"],setup(s,{emit:r}){const t=s,a=r;$(()=>t.show,()=>{t.show?document.body.style.overflow="hidden":document.body.style.overflow=null});const i=()=>{t.closeable&&a("close")},l=u=>{u.key==="Escape"&&t.show&&i()};C(()=>document.addEventListener("keydown",l)),B(()=>{document.removeEventListener("keydown",l),document.body.style.overflow=null});const c=D(()=>({sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"})[t.maxWidth]);return(u,f)=>(m(),S(E,{to:"body"},[o(g,{"leave-active-class":"duration-200"},{default:n(()=>[y(e("div",I,[o(g,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:n(()=>[y(e("div",{class:"fixed inset-0 transform transition-all",onClick:i},L,512),[[p,s.show]])]),_:1}),o(g,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to-class":"opacity-100 translate-y-0 sm:scale-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100 translate-y-0 sm:scale-100","leave-to-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:n(()=>[y(e("div",{class:b(["mb-6 bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto",c.value])},[s.show?h(u.$slots,"default",{key:0}):V("",!0)],2),[[p,s.show]])]),_:3})],512),[[p,s.show]])]),_:3})]))}},q=["type"],G={__name:"SecondaryButton",props:{type:{type:String,default:"button"}},setup(s){return(r,t)=>(m(),_("button",{type:s.type,class:"inline-flex items-center px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-500 rounded-md font-semibold text-xs text-gray-700 dark:text-gray-300 uppercase tracking-widest shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 disabled:opacity-25 transition ease-in-out duration-150"},[h(r.$slots,"default")],8,q))}},H={class:"space-y-6"},J=e("header",null,[e("h2",{class:"text-lg font-medium text-gray-900 dark:text-gray-100"},"Delete Account"),e("p",{class:"mt-1 text-sm text-gray-600 dark:text-gray-400"}," Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain. ")],-1),Q={class:"p-6"},R=e("h2",{class:"text-lg font-medium text-gray-900 dark:text-gray-100"}," Are you sure you want to delete your account? ",-1),X=e("p",{class:"mt-1 text-sm text-gray-600 dark:text-gray-400"}," Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. ",-1),Y={class:"mt-6"},Z={class:"mt-6 flex justify-end"},ae={__name:"DeleteUserForm",setup(s){const r=x(!1),t=x(null),a=U({password:""}),i=()=>{r.value=!0,A(()=>t.value.focus())},l=()=>{a.delete(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>c(),onError:()=>t.value.focus(),onFinish:()=>a.reset()})},c=()=>{r.value=!1,a.reset()};return(u,f)=>(m(),_("section",H,[J,o(v,{onClick:i},{default:n(()=>[w("Delete Account")]),_:1}),o(j,{show:r.value,onClose:c},{default:n(()=>[e("div",Q,[R,X,e("div",Y,[o(z,{for:"password",value:"Password",class:"sr-only"}),o(M,{id:"password",ref_key:"passwordInput",ref:t,modelValue:d(a).password,"onUpdate:modelValue":f[0]||(f[0]=k=>d(a).password=k),type:"password",class:"mt-1 block w-3/4",placeholder:"Password",onKeyup:T(l,["enter"])},null,8,["modelValue"]),o(O,{message:d(a).errors.password,class:"mt-2"},null,8,["message"])]),e("div",Z,[o(G,{onClick:c},{default:n(()=>[w(" Cancel ")]),_:1}),o(v,{class:b(["ms-3",{"opacity-25":d(a).processing}]),disabled:d(a).processing,onClick:l},{default:n(()=>[w(" Delete Account ")]),_:1},8,["class","disabled"])])])]),_:1},8,["show"])]))}};export{ae as default};
