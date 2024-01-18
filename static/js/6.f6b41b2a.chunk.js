(this.webpackJsonpinstagram=this.webpackJsonpinstagram||[]).push([[6],{276:function(e,t,s){"use strict";s.d(t,"a",(function(){return o})),s.d(t,"e",(function(){return l})),s.d(t,"d",(function(){return a})),s.d(t,"c",(function(){return c})),s.d(t,"j",(function(){return r})),s.d(t,"i",(function(){return i})),s.d(t,"b",(function(){return d})),s.d(t,"f",(function(){return u})),s.d(t,"g",(function(){return j})),s.d(t,"h",(function(){return m}));var n=s(49);async function o(e){return(await n.b.firestore().collection("users").where("username","==",e.toLowerCase()).get()).docs.length>0}async function l(e){return(await n.b.firestore().collection("users").where("username","==",e.toLowerCase()).get()).docs.map((e=>({...e.data(),docId:e.id})))}async function a(e){return(await n.b.firestore().collection("users").where("userId","==",e).get()).docs.map((e=>({...e.data(),docId:e.id})))}async function c(e,t){let s=n.b.firestore().collection("users");s=t.length>0?s.where("userId","not-in",[...t,e]):s.where("userId","!=",e);return(await s.limit(10).get()).docs.map((e=>({...e.data(),docId:e.id})))}async function r(e,t,s){return n.b.firestore().collection("users").doc(e).update({following:s?n.a.arrayRemove(t):n.a.arrayUnion(t)})}async function i(e,t,s){return n.b.firestore().collection("users").doc(e).update({followers:s?n.a.arrayRemove(t):n.a.arrayUnion(t)})}async function d(e,t){const s=(await n.b.firestore().collection("photos").where("userId","in",t).get()).docs.map((e=>({...e.data(),docId:e.id})));return await Promise.all(s.map((async t=>{let s=!1;t.likes.includes(e)&&(s=!0);const n=await a(t.userId),{username:o}=n[0];return{username:o,...t,userLikedPhoto:s}})))}async function u(e){return(await n.b.firestore().collection("photos").where("userId","==",e).get()).docs.map((e=>({...e.data(),docId:e.id})))}async function j(e,t){const s=await n.b.firestore().collection("users").where("username","==",e).where("following","array-contains",t).get(),[o={}]=s.docs.map((e=>({...e.data(),docId:e.id})));return o.userId}async function m(e,t,s,n,o){await r(t,n,e),await i(s,o,e)}},279:function(e,t,s){"use strict";s.d(t,"a",(function(){return n}));const n="/images/avatars/default.png"},280:function(e,t,s){"use strict";s.d(t,"a",(function(){return l}));var n=s(1),o=s(276);function l(e){const[t,s]=Object(n.useState)();return Object(n.useEffect)((()=>{e&&async function(e){const[t]=await Object(o.d)(e);s(t||{})}(e)}),[e]),{user:t,setActiveUser:s}}},281:function(e,t,s){"use strict";var n=s(1);const o=Object(n.createContext)(null);t.a=o},286:function(e,t,s){"use strict";s.d(t,"a",(function(){return j}));var n=s(1),o=s(9),l=s(48),a=s(42),c=s(76),r=s(24),i=s(279),d=s(280),u=s(7);function j(){const{user:e}=Object(n.useContext)(c.a),{user:t}=Object(d.a)(null===e||void 0===e?void 0:e.uid),{firebase:s}=Object(n.useContext)(a.a),j=Object(o.g)();return Object(u.jsx)("header",{className:"h-16 bg-white border-b border-gray-primary mb-8",children:Object(u.jsx)("div",{className:"container mx-auto max-w-screen-lg h-full",children:Object(u.jsxs)("div",{className:"flex justify-between h-full",children:[Object(u.jsx)("div",{className:"text-gray-700 text-center flex items-center align-items cursor-pointer",children:Object(u.jsx)("h1",{className:"flex justify-center w-full",children:Object(u.jsx)(l.b,{to:r.a,"aria-label":"Instagram logo",children:Object(u.jsx)("img",{src:"./images/logo.png",alt:"Instagram",className:"mt-2 w-6/12"})})})}),Object(u.jsx)("div",{className:"text-gray-700 text-center flex items-center align-items",children:e?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(l.b,{to:r.a,"aria-label":"Dashboard",children:Object(u.jsx)("svg",{className:"w-8 mr-6 text-black-light cursor-pointer",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(u.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})})}),Object(u.jsx)("button",{type:"button",title:"Sign Out",onClick:()=>{s.auth().signOut(),j.push(r.b)},onKeyDown:e=>{"Enter"===e.key&&(s.auth().signOut(),j.push(r.b))},children:Object(u.jsx)("svg",{className:"w-8 mr-6 text-black-light cursor-pointer",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(u.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})})}),t&&Object(u.jsx)("div",{className:"flex items-center cursor-pointer",children:Object(u.jsx)(l.b,{to:"/p/".concat(null===t||void 0===t?void 0:t.username),children:Object(u.jsx)("img",{className:"rounded-full h-8 w-8 flex",src:"./images/avatars/".concat(null===t||void 0===t?void 0:t.username,".jpg"),alt:"".concat(null===t||void 0===t?void 0:t.username," profile"),onError:e=>{e.target.src=i.a}})})})]}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(l.b,{to:r.b,children:Object(u.jsx)("button",{type:"button",className:"bg-blue-medium font-bold text-sm rounded text-white w-20 h-8",children:"Log In"})}),Object(u.jsx)(l.b,{to:r.e,children:Object(u.jsx)("button",{type:"button",className:"font-bold text-sm rounded text-blue-medium w-20 h-8",children:"Sign Up"})})]})})]})})})}},312:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return N}));var n=s(9),o=s(1),l=s(276),a=s(24),c=s(286),r=s(287),i=s.n(r),d=s(280),u=s(76),j=s(279),m=s(313),b=s(309),h=s(307),f=s(48),x=s(7);function w(e){let{profile:t,handleRemove:s,setOpen:o,open:l,text:a}=e;const c=t.username;let r=Object(n.g)();return Object(x.jsxs)("div",{className:"flex flex-row items-center align-items justify-between",children:[Object(x.jsxs)("div",{className:"flex items-center justify-between",children:[Object(x.jsx)("img",{className:"rounded-full w-8 flex mr-3",src:"./images/avatars/".concat(c,".jpg"),alt:"",onError:e=>{e.target.src="/images/avatars/default.png"}}),Object(x.jsx)(f.b,{onClick:e=>((e,t)=>{e.preventDefault(),o(!1),setTimeout((()=>r.push(t)),500)})(e,"/p/".concat(c)),to:"/p/".concat(c),children:Object(x.jsx)("p",{className:"font-bold text-sm",children:c})})]}),Object(x.jsx)("button",{className:"text-xs font-bold text-blue-medium",type:"button",onClick:()=>s(t.docId,t.userId),children:a})]})}function g(e){let{open:t,setOpen:s,data:n,title:l,handleUnFollowUser:a,handleRemoveFollowers:c}=e;console.log(n);let r,i,d=null;return"Followers"==l&&(r=c,i="Remove"),"Following"==l&&(r=a,i="Unfollow"),n&&null!==n&&(d=n.map((e=>Object(x.jsx)("div",{className:"relative mt-2 flex-1 px-4 sm:px-10",children:Object(x.jsx)(w,{handleRemove:r,setOpen:s,profile:e,text:i})})))),console.log(n),Object(o.useEffect)((()=>{}),[n]),Object(x.jsx)(m.a.Root,{show:t||!1,as:o.Fragment,children:Object(x.jsxs)(b.a,{as:"div",className:"relative z-10",onClose:()=>s(!t),children:[Object(x.jsx)(m.a.Child,{as:o.Fragment,enter:"ease-in-out duration-500",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in-out duration-500",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:Object(x.jsx)("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})}),Object(x.jsx)("div",{className:"fixed inset-0 overflow-hidden",children:Object(x.jsx)("div",{className:"absolute inset-0 overflow-hidden",children:Object(x.jsx)("div",{className:"pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10",children:Object(x.jsx)(m.a.Child,{as:o.Fragment,enter:"transform transition ease-in-out duration-500 sm:duration-700",enterFrom:"translate-x-full",enterTo:"translate-x-0",leave:"transform transition ease-in-out duration-500 sm:duration-700",leaveFrom:"translate-x-0",leaveTo:"translate-x-full",children:Object(x.jsxs)(b.a.Panel,{className:"pointer-events-auto relative w-screen max-w-md",children:[Object(x.jsx)(m.a.Child,{as:o.Fragment,enter:"ease-in-out duration-500",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in-out duration-500",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:Object(x.jsx)("div",{className:"absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4",children:Object(x.jsxs)("button",{type:"button",className:"relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white",onClick:()=>s(!t),children:[Object(x.jsx)("span",{className:"absolute -inset-2.5"}),Object(x.jsx)("span",{className:"sr-only",children:"Close panel"}),Object(x.jsx)(h.a,{className:"h-6 w-6","aria-hidden":"true"})]})})}),Object(x.jsxs)("div",{className:"flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl",children:[Object(x.jsx)("div",{className:"px-4 sm:px-6",children:Object(x.jsx)(b.a.Title,{className:"text-base font-semibold leading-6 text-gray-900",children:l})}),Object(x.jsx)("div",{className:"mt-4 grid gap-5",children:d})]})]})})})})})]})})}var O=s(281);function p(e){var t;let{photosCount:s,followerCount:n,setFollowerCount:a,followingCount:c,setFollowingCount:r,profile:{docId:m,userId:b,fullName:h,followers:f,following:w,username:p},setProfile:v}=e;const{setUser:y}=Object(o.useContext)(O.a),{user:N}=Object(o.useContext)(u.a);let{user:C}=Object(d.a)(null===N||void 0===N?void 0:N.uid);const[I,F]=Object(o.useState)(null),k=(null===C||void 0===C?void 0:C.username)&&(null===C||void 0===C?void 0:C.username)!==p,[R,U]=Object(o.useState)(!1),[L,E]=Object(o.useState)(!1),[S,P]=Object(o.useState)(null);console.log(N.user),console.log(C);let T=async(e,t)=>{let s=await Promise.all(e.map((async e=>(await Object(l.d)(e))[0])));P({title:t}),P((e=>({...e,data:s}))),console.log(S)};const z=(e,t)=>{e&&T(e,t),E(!0)},M=async()=>{F((e=>!e)),a({followerCount:I?n-1:n+1}),await Object(l.h)(I,C.docId,m,b,C.userId)};return Object(o.useEffect)((()=>{null!==C&&void 0!==C&&C.username&&b&&(async()=>{const e=await Object(l.g)(C.username,b);F(!!e)})()}),[null===C||void 0===C?void 0:C.username,b]),Object(x.jsxs)("div",{className:"grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg",children:[Object(x.jsx)("div",{className:"container flex justify-center items-center",children:p?Object(x.jsx)("img",{className:"rounded-full h-40 w-40 flex",alt:"".concat(h," profile picture"),src:"./images/avatars/".concat(p,".jpg"),onError:e=>{e.target.src=j.a}}):Object(x.jsx)(i.a,{circle:!0,height:150,width:150,count:1})}),Object(x.jsxs)("div",{className:"flex items-center justify-center flex-col col-span-2",children:[Object(x.jsxs)("div",{className:"container flex items-center",children:[Object(x.jsx)("p",{className:"text-2xl mr-4",children:p}),k&&null===I?Object(x.jsx)(i.a,{count:1,width:80,height:32}):k&&Object(x.jsx)("button",{className:"bg-blue-medium font-bold text-sm rounded text-white w-20 h-8",type:"button",onClick:M,onKeyDown:e=>{"Enter"===e.key&&M()},children:I?"Unfollow":"Follow"})]}),Object(x.jsx)("div",{className:"container flex mt-4",children:f&&w?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("p",{className:"mr-10",children:[Object(x.jsx)("span",{className:"font-bold",children:s})," ",1===s?"photo":"photos"]}),Object(x.jsxs)("p",{style:{cursor:"pointer"},onClick:()=>z(f,"Followers"),className:"mr-10",children:[Object(x.jsx)("span",{className:"font-bold",children:n})," ",1===n?"follower":"followers"]}),Object(x.jsxs)("p",{style:{cursor:"pointer"},onClick:()=>z(w,"Following"),className:"mr-10",children:[Object(x.jsx)("span",{className:"font-bold",children:null===(t=w)||void 0===t?void 0:t.length})," following"]})]}):Object(x.jsx)(i.a,{count:1,width:677,height:24})}),Object(x.jsxs)("div",{className:"container mt-4",children:[Object(x.jsx)(g,{open:L,setOpen:E,data:null===S||void 0===S?void 0:S.data,title:null===S||void 0===S?void 0:S.title,handleUnFollowUser:async function(e,t){U(!0),await Object(l.j)(C.docId,t,!0),await Object(l.i)(e,C.userId,!0),E(!0);const[s]=await Object(l.d)(C.userId);v({profile:s}),w=s.following,r({followingCount:c-1}),T(w,"Following"),console.log(w)},handleRemoveFollowers:async function(e,t){await Object(l.j)(e,C.userId,!0),await Object(l.i)(C.docId,t,!0),await T(f,"Followers"),E(!0);const[s]=await Object(l.d)(C.userId);v({profile:s});let o=s.followers;a({followerCount:n-1}),T(o,"Followers")}}),Object(x.jsx)("p",{className:"font-medium",children:h||Object(x.jsx)(i.a,{count:1,height:24})})]})]})]})}function v(e){let{photos:t}=e;return Object(x.jsxs)("div",{className:"h-16 border-t border-gray-primary mt-12 pt-4",children:[Object(x.jsx)("div",{className:"grid grid-cols-3 gap-8 mt-4 mb-12",children:t?t.length>0?t.map((e=>Object(x.jsxs)("div",{className:"relative group",children:[Object(x.jsx)("img",{src:e.imageSrc,alt:e.caption}),Object(x.jsxs)("div",{className:"absolute bottom-0 left-0 bg-gray-200 z-10 w-full justify-evenly items-center h-full bg-black-faded group-hover:flex hidden",children:[Object(x.jsxs)("p",{className:"flex items-center text-white font-bold",children:[Object(x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"w-8 mr-4",children:Object(x.jsx)("path",{fillRule:"evenodd",d:"M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z",clipRule:"evenodd"})}),e.likes.length]}),Object(x.jsxs)("p",{className:"flex items-center text-white font-bold",children:[Object(x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"w-8 mr-4",children:Object(x.jsx)("path",{fillRule:"evenodd",d:"M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z",clipRule:"evenodd"})}),e.comments.length]})]})]},e.docId))):null:new Array(12).fill(0).map(((e,t)=>Object(x.jsx)(i.a,{width:320,height:400},t)))}),!t||0===t.length&&Object(x.jsx)("p",{className:"text-center text-2xl",children:"No Posts Yet"})]})}function y(e){let{user:t}=e;const[{profile:s,photosCollection:n,followerCount:a,followingCount:c},r]=Object(o.useReducer)(((e,t)=>({...e,...t})),{profile:{},photosCollection:null,followerCount:0,followingCount:0});return Object(o.useEffect)((()=>{!async function(){const e=await Object(l.f)(t.userId);r({profile:t,photosCollection:e,followerCount:t.followers.length,followingCount:t.following.length})}()}),[t.username]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(p,{photosCount:n?n.length:0,profile:s,setProfile:r,followerCount:a,setFollowerCount:r,followingCount:c,setFollowingCount:r}),Object(x.jsx)(v,{photos:n})]})}function N(){const{username:e}=Object(n.h)(),[t,s]=Object(o.useState)(null),r=Object(n.g)();return Object(o.useEffect)((()=>{!async function(){const[t]=await Object(l.e)(e);null!==t&&void 0!==t&&t.userId?s(t):r.push(a.c)}()}),[e,r]),null!==t&&void 0!==t&&t.username?Object(x.jsx)(O.a.Provider,{value:{user:t,setUser:s},children:Object(x.jsxs)("div",{className:"bg-gray-background",children:[Object(x.jsx)(c.a,{}),Object(x.jsx)(g,{}),Object(x.jsx)("div",{className:"mx-auto max-w-screen-lg",children:Object(x.jsx)(y,{user:t})})]})}):null}}}]);
//# sourceMappingURL=6.f6b41b2a.chunk.js.map