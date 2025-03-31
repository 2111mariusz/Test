(function(){"use strict";var e={8944:function(e,t,r){var a=r(6848),s=function(){var e=this,t=e._self._c;return e.isMounted?t("div",{class:[`flex flex-col ${e.currentRoute==e.baseUrl+"loader"?"h-screen ":"min-h-screen"} font-primary justify-between text-primary bg-grprimary lg:bg-grsecondary`],attrs:{id:"app"}},[t("div",{class:[` ${e.currentRoute==e.baseUrl+"loader"?"pb-0 overflow-hidden":"pb-14"} ${e.currentRoute==e.baseUrl+"details"?"lg:pb-21":"pb-14"} h-full`]},[t("Header"),t("div",{class:[`h-full ${e.currentRoute==e.baseUrl+"thanks"?"":"lg:max-w-wrapper-824 px-4"} mx-auto`]},[t("div",{class:["items-center pt-3.5 mx-auto "+(e.currentRoute==e.baseUrl+"loader"||e.currentRoute==e.baseUrl+"thanks"?"hidden":"flex")]},[e._m(0),t("div",{class:[(e.currentStepIndex>0?"bg-blue-600":"bg-primary")+" w-full h-0.5 transition-colors duration-1000"]}),t("div",{class:[(e.currentStepIndex>0?"bg-secondary border-secondary text-white":"border-primary")+" border-2 flex items-center rounded-full w-5 h-5 transition-colors duration-1000"]},[t("p",{staticClass:"w-5 h-5 text-sm text-center font-bold leading-5 rounded-full"},[e._v("2")])]),t("div",{class:[(e.currentStepIndex>1?"bg-blue-600":"bg-primary")+" w-full h-0.5 transition-colors duration-1000"]}),t("div",{class:[(e.currentStepIndex>1?"bg-secondary border-secondary text-white":"border-primary")+" border-2 flex items-center rounded-full w-5 h-5 transition-colors duration-1000"]},[t("p",{staticClass:"w-5 h-5 text-sm text-center font-bold leading-5 rounded-full"},[e._v("3")])]),t("div",{class:[(e.currentStepIndex>2?"bg-blue-600":"bg-primary")+" w-full h-0.5 transition-colors duration-1000"]}),t("div",{class:[(e.currentStepIndex>2?"bg-secondary border-secondary text-white":"border-primary")+" border-2 flex items-center rounded-full w-5 h-5 transition-colors duration-1000"]},[t("p",{staticClass:"w-5 h-5 text-sm text-center font-bold leading-5 rounded-full"},[e._v("4")])])]),t("div",{class:[` ${e.currentRoute==e.baseUrl+"loader"||e.currentRoute==e.baseUrl+"thanks"||e.currentRoute==e.baseUrl+"details"?"hidden":"flex"} max-w-wrapper-510 justify-between py-7 px-2`]},[t("img",{staticClass:"lg:w-13 lg:h-8",attrs:{src:"/Test/Sky.svg",alt:"Sky",width:"40",height:"24"}}),t("img",{staticClass:"lg:w-8 lg:h-8",attrs:{src:"/Test/BT.svg",alt:"Bt",width:"24",height:"24"}}),t("img",{staticClass:"lg:w-16 lg:h-7",attrs:{src:"/Test/TalkTalk.svg",alt:"TalkTalk",width:"52",height:"22"}}),t("img",{staticClass:"lg:w-11 lg:h-7",attrs:{src:"/Test/VirginMedia.svg",alt:"VirginMedia",width:"38",height:"23"}}),t("img",{staticClass:"lg:w-11 lg:h-8",attrs:{src:"/Test/Vodafone.svg",alt:"Vodafone",width:"34",height:"24"}})]),t("div",{class:[(e.currentRoute==e.baseUrl+"details"?"max-w-wrapper-343 mx-auto":"")+" h-full"]},[t("div",{staticClass:"relative h-full"},[t("transition",{attrs:{name:"slide"}},[t(e.ViewComponent,{ref:e.getRefForStep,tag:"component",on:{next:function(t){return e.navigate("next")}}})],1)],1),t("nav",{class:[`flex ${e.currentRoute==e.baseUrl+"details"?"flex-col-reverse":"flex-row items-center"} ${e.currentRoute==e.baseUrl+""?"lg:justify-end lg:max-w-wrapper-343":""} lg:max-w-wrapper-326 justify-between`]},[e.currentStepIndex>0&&e.currentRoute!==e.baseUrl+"loader"&&e.currentRoute!==e.baseUrl+"thanks"?t("button",{class:["flex items-center gap-2.5 text-text2 text-base leading-4"],on:{click:function(t){return t.preventDefault(),e.navigate("back")}}},[t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"21",height:"8",viewBox:"0 0 21 8",fill:"none"}},[t("path",{attrs:{d:"M0.646446 3.64645C0.451185 3.84171 0.451185 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646446 3.64645ZM21 3.5L1 3.5V4.5L21 4.5V3.5Z",fill:"#666666"}})]),e._v(" Back "),e.currentRoute==e.baseUrl+"age"?t("div",{staticClass:"h-14 mt-7 mb-5 w-1"}):e._e()]):e._e(),e.currentRoute==e.baseUrl+"details"?t("p",{staticClass:"text-xs leading-5 text-text text-center mb-12"},[e._v("By clicking “Continue”, you agree to our Privacy Policy and to be contacted by phone, email and SMS by a Broadband Advisor")]):e._e(),e.currentRoute===e.baseUrl+"age"&&e.storageData.selectedAge||e.currentRoute!==e.baseUrl+"loader"&&e.currentRoute!==e.baseUrl+"thanks"&&e.currentRoute!==e.baseUrl+"age"?t("button",{class:[`${e.currentStepIndex>0&&e.currentStepIndex<3?"max-w-40 text-xl":"text-2xl lg:text-xl"} ${e.currentRoute==e.baseUrl+"details"?"mb-3":""} ${e.currentRoute==e.baseUrl+""?"lg:max-w-51":""} my-7 py-4 w-full rounded-full bg-button hover:bg-button-hover text-white leading-8 lg:leading-6 font-bold`],on:{click:function(t){return t.preventDefault(),e.navigate("next")}}},[e._v("Continue")]):e._e()]),t("div",{class:[` ${e.currentRoute==e.baseUrl+"providers"||e.currentRoute==e.baseUrl+"age"||e.currentRoute==e.baseUrl+"details"?"flex":"hidden"} ${e.currentRoute==e.baseUrl+"details"?"mt-11 flex":""}  justify-between lg:max-w-wrapper-326`]},[t("div",{staticClass:"flex items-center gap-2"},[t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"11",viewBox:"0 0 10 11",fill:"none"}},[t("path",{attrs:{d:"M8.92857 4.8125H8.39286V3.26562C8.39286 1.46523 6.87054 0 5 0C3.12946 0 1.60714 1.46523 1.60714 3.26562V4.8125H1.07143C0.479911 4.8125 0 5.27441 0 5.84375V9.96875C0 10.5381 0.479911 11 1.07143 11H8.92857C9.52009 11 10 10.5381 10 9.96875V5.84375C10 5.27441 9.52009 4.8125 8.92857 4.8125ZM5.89286 8.42188C5.89286 8.89668 5.4933 9.28125 5 9.28125C4.5067 9.28125 4.10714 8.89668 4.10714 8.42188V7.39062C4.10714 6.91582 4.5067 6.53125 5 6.53125C5.4933 6.53125 5.89286 6.91582 5.89286 7.39062V8.42188ZM6.60714 4.8125H3.39286V3.26562C3.39286 2.4127 4.11384 1.71875 5 1.71875C5.88616 1.71875 6.60714 2.4127 6.60714 3.26562V4.8125Z",fill:"#001429"}})]),t("p",{staticClass:"text-10 leading-5"},[e._v("Safe | Secure | Privacy Protected")])]),t("img",{attrs:{src:"/Test/Encrypt.svg",alt:"Encrypt",width:"65",height:"49"}})]),t("p",{class:[(0==e.currentStepIndex?"block":"hidden")+" text-xs leading-5 text-text lg:max-w-wrapper-468"]},[e._v(" Find a better Broadband and WiFi deal in your area. Choose from big providers such as TalkTalk, Virgin, Sky and Shell. Unlimited, Superfast deals with speeds up to 900mbps. Find out the top speed at your address. Enter your postcode and find deals in your area. ")])])])],1),e.currentRoute!==e.baseUrl+"loader"?t("div",[t("Footer")],1):e._e()]):e._e()},i=[function(){var e=this,t=e._self._c;return t("div",[t("p",{staticClass:"w-5 h-5 bg-secondary rounded-full text-sm font-bold text-center leading-5 text-white"},[e._v("1")])])}],l=function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex flex-col space-y-7 w-full"},[t("h1",{staticClass:"font-secondary text-32 lg:text-42 tracking-1 font-extrabold leading-10 lg:leading-48 max-w-wrapper-572"},[e._v("Get a Better Broadband and WiFi Deal at your Home")]),t("div",{staticClass:"space-y-5"},[e._m(0),t("div",{staticClass:"flex flex-col gap-2"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.postcode,expression:"postcode"}],class:[(e.errorMessage?"ring-error":"ring-white")+" px-4 h-14 w-full lg:max-w-wrapper-343 rounded shadow-shprimary text-base leading-6 lg:leading-7 border-transparent outline-none ring-2 bg-prefilled placeholder-shown:bg-white focus:ring-secondary placeholder-placeholder"],attrs:{type:"text",placeholder:"eg. SW1A 1AA"},domProps:{value:e.postcode},on:{input:function(t){t.target.composing||(e.postcode=t.target.value)}}}),e.errorMessage?t("span",{staticClass:"text-sm leading-5 text-error"},[e._v(e._s(e.errorMessage))]):e._e()])])])},o=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"space-y-1"},[t("p",{staticClass:"text-26 lg:text-32 lg:leading-42 font-bold leading-35 tracking-1"},[e._v("What’s your postcode?")]),t("p",{staticClass:"text-base lg:text-sm lg:leading-7 leading-7"},[e._v("Enter your postcode and click ‘Continue’. ")])])}],n={name:"PostcodeStep",data(){return{postcode:this.getStoredPostcode()||"",errorMessage:""}},watch:{postcode(e){this.savePostcodeToLocalStorage(e),this.errorMessage=""}},methods:{isValid(){return""!==this.postcode.trim()||(this.errorMessage="This field is required",!1)},savePostcodeToLocalStorage(e){localStorage.setItem("postcode",e)},getStoredPostcode(){return localStorage.getItem("postcode")}}},d=n,c=r(1656),p=(0,c.A)(d,l,o,!1,null,null,null),u=p.exports,g=(r(8111),r(1701),function(){var e=this,t=e._self._c;return t("div",{staticClass:"space-y-7"},[t("div",{staticClass:"relative w-full"},[t("label",{staticClass:"text-base lg:text-2xl lg:leading-7 font-bold tracking-1 leading-7",attrs:{for:"provider1"}},[e._v("Who provides your current Broadband?")]),t("div",{staticClass:"relative lg:mt-4 mb-2 lg:max-w-wrapper-326"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.provider1,expression:"provider1"}],class:[(e.error.provider1?"ring-error":"ring-white")+" px-4 h-14 w-full rounded shadow-shprimary text-sm leading-6 outline-none ring-2 hover:ring-secondary appearance-none cursor-pointer bg-white"],on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.provider1=t.target.multiple?r:r[0]}}},[t("option",{attrs:{value:"",disabled:""}},[e._v("Please select")]),t("option",{attrs:{value:"provider1"}},[e._v("Sky")]),t("option",{attrs:{value:"provider2"}},[e._v("BT")]),t("option",{attrs:{value:"provider3"}},[e._v("EE")]),t("option",{attrs:{value:"provider3"}},[e._v("Virgin Media")]),t("option",{attrs:{value:"provider3"}},[e._v("Other")]),t("option",{attrs:{value:"provider3"}},[e._v("Don’t have one")])]),t("svg",{staticClass:"absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none transition-all",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"15",height:"9",viewBox:"0 0 15 9",fill:"none"}},[t("path",{attrs:{d:"M2.34205 0.421258C1.08903 -0.856118 -0.847462 1.05995 0.40556 2.33732L6.55676 8.60808C7.06936 9.13064 7.92369 9.13064 8.43629 8.60808L14.5875 2.33732C15.8405 1.05995 13.961 -0.856119 12.651 0.421257L7.525 5.70495L2.34205 0.421258Z",fill:"#216CF6"}})])]),e.error.provider1?t("span",{staticClass:"text-sm leading-5 text-error pt-4"},[e._v(e._s(e.error.provider1))]):e._e()]),t("div",{staticClass:"relative w-full"},[t("label",{staticClass:"text-base lg:text-2xl lg:leading-7 font-bold tracking-1 leading-7",attrs:{for:"provider2"}},[e._v("What’s your ideal speed?")]),t("div",{staticClass:"relative mt-2 lg:mt-4 mb-2 lg:max-w-wrapper-326"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.provider2,expression:"provider2"}],class:[(e.error.provider2?"ring-error":"ring-white")+" px-4 h-14 w-full rounded shadow-shprimary text-sm leading-6 outline-none ring-2 hover:ring-secondary appearance-none cursor-pointer bg-white"],on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.provider2=t.target.multiple?r:r[0]}}},[t("option",{attrs:{value:"",disabled:""}},[e._v("Please select")]),t("option",{attrs:{value:"provider1"}},[e._v("0 - 30 mbps")]),t("option",{attrs:{value:"provider2"}},[e._v("30 - 60 mbps")]),t("option",{attrs:{value:"provider3"}},[e._v("60 mbps +")])]),t("svg",{staticClass:"absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none transition-all",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"15",height:"9",viewBox:"0 0 15 9",fill:"none"}},[t("path",{attrs:{d:"M2.34205 0.421258C1.08903 -0.856118 -0.847462 1.05995 0.40556 2.33732L6.55676 8.60808C7.06936 9.13064 7.92369 9.13064 8.43629 8.60808L14.5875 2.33732C15.8405 1.05995 13.961 -0.856119 12.651 0.421257L7.525 5.70495L2.34205 0.421258Z",fill:"#216CF6"}})])]),e.error.provider2?t("span",{staticClass:"text-sm leading-5 text-error"},[e._v(e._s(e.error.provider2))]):e._e()]),t("div",{staticClass:"relative w-full"},[t("label",{staticClass:"text-base lg:text-2xl lg:leading-7 font-bold tracking-1 leading-7",attrs:{for:"provider3"}},[e._v("Which Broadband type do you need?")]),t("div",{staticClass:"relative mt-2 lg:mt-4 mb-2 lg:max-w-wrapper-326"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.provider3,expression:"provider3"}],class:[(e.error.provider3?"ring-error":"ring-white")+" px-4 h-14 w-full rounded shadow-shprimary text-sm leading-6 outline-none ring-2 hover:ring-secondary appearance-none cursor-pointer bg-white"],on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.provider3=t.target.multiple?r:r[0]}}},[t("option",{attrs:{value:"",disabled:""}},[e._v("Please select")]),t("option",{attrs:{value:"provider1"}},[e._v("Fibre")]),t("option",{attrs:{value:"provider2"}},[e._v("Standard")]),t("option",{attrs:{value:"provider3"}},[e._v("Not Sure")])]),t("svg",{staticClass:"absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none transition-all",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"15",height:"9",viewBox:"0 0 15 9",fill:"none"}},[t("path",{attrs:{d:"M2.34205 0.421258C1.08903 -0.856118 -0.847462 1.05995 0.40556 2.33732L6.55676 8.60808C7.06936 9.13064 7.92369 9.13064 8.43629 8.60808L14.5875 2.33732C15.8405 1.05995 13.961 -0.856119 12.651 0.421257L7.525 5.70495L2.34205 0.421258Z",fill:"#216CF6"}})])]),e.error.provider3?t("span",{staticClass:"text-sm leading-5 text-error mt-4"},[e._v(e._s(e.error.provider3))]):e._e()])])}),h=[],v={name:"ProvidersStep",data(){return{provider1:this.getStoredItem("provider1")||"",provider2:this.getStoredItem("provider2")||"",provider3:this.getStoredItem("provider3")||"",error:{provider1:"",provider2:"",provider3:""}}},watch:{provider1(e){this.saveToLocalStorage("provider1",e),e&&(this.error.provider1=!1)},provider2(e){this.saveToLocalStorage("provider2",e),e&&(this.error.provider2=!1)},provider3(e){this.saveToLocalStorage("provider3",e),e&&(this.error.provider3=!1)}},methods:{validateFields(){let e=!0;return this.error={provider1:"",provider2:"",provider3:""},this.provider1||(this.error.provider1="This field is required",e=!1),this.provider2||(this.error.provider2="This field is required",e=!1),this.provider3||(this.error.provider3="This field is required",e=!1),e},saveToLocalStorage(e,t){localStorage.setItem(e,t)},getStoredItem(e){return localStorage.getItem(e)}}},f=v,m=(0,c.A)(f,g,h,!1,null,null,null),x=m.exports,b=function(){var e=this,t=e._self._c;return t("div",[t("h3",{staticClass:"text-base lg:text-2xl leading-7 lg:leading-7 font-bold tracking-1"},[e._v("What is your age?")]),t("div",{staticClass:"flex flex-wrap max-w-wrapper-350 gap-3 py-7"},[t("div",{staticClass:"flex flex-wrap gap-2"},[t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedAge,expression:"selectedAge"}],staticClass:"peer hidden",attrs:{id:"18-24",type:"radio",value:"18-25"},domProps:{checked:e._q(e.selectedAge,"18-25")},on:{change:function(t){e.selectedAge="18-25"}}}),t("label",{staticClass:"flex items-center justify-center w-42 h-14 rounded border-2 border-secondary peer-checked:bg-secondary peer-checked:text-white cursor-pointer select-none text-base leading-18",attrs:{for:"18-24"}},[e._v(" 18-25 ")])]),t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedAge,expression:"selectedAge"}],staticClass:"peer hidden",attrs:{id:"25-34",type:"radio",value:"25-34"},domProps:{checked:e._q(e.selectedAge,"25-34")},on:{change:function(t){e.selectedAge="25-34"}}}),t("label",{staticClass:"flex items-center justify-center w-42 h-14 rounded border-2 border-secondary peer-checked:bg-secondary peer-checked:text-white cursor-pointer select-none text-base leading-18",attrs:{for:"25-34"}},[e._v(" 25-34 ")])])]),t("div",{staticClass:"flex flex-wrap gap-2"},[t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedAge,expression:"selectedAge"}],staticClass:"peer hidden",attrs:{id:"35-44",type:"radio",value:"35-44"},domProps:{checked:e._q(e.selectedAge,"35-44")},on:{change:function(t){e.selectedAge="35-44"}}}),t("label",{staticClass:"flex items-center justify-center w-42 h-14 rounded border-2 border-secondary peer-checked:bg-secondary peer-checked:text-white cursor-pointer select-none text-base leading-18",attrs:{for:"35-44"}},[e._v(" 35-44 ")])]),t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedAge,expression:"selectedAge"}],staticClass:"peer hidden",attrs:{id:"45-54",type:"radio",value:"45-54"},domProps:{checked:e._q(e.selectedAge,"45-54")},on:{change:function(t){e.selectedAge="45-54"}}}),t("label",{staticClass:"flex items-center justify-center w-42 h-14 rounded border-2 border-secondary peer-checked:bg-secondary peer-checked:text-white cursor-pointer select-none text-base leading-18",attrs:{for:"45-54"}},[e._v(" 45-54 ")])])]),t("div",{staticClass:"flex flex-wrap gap-2"},[t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedAge,expression:"selectedAge"}],staticClass:"peer hidden",attrs:{id:"55-64",type:"radio",value:"55-64"},domProps:{checked:e._q(e.selectedAge,"55-64")},on:{change:function(t){e.selectedAge="55-64"}}}),t("label",{staticClass:"flex items-center justify-center w-42 h-14 rounded border-2 border-secondary peer-checked:bg-secondary peer-checked:text-white cursor-pointer select-none text-base leading-18",attrs:{for:"55-64"}},[e._v(" 55-64 ")])]),t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedAge,expression:"selectedAge"}],staticClass:"peer hidden",attrs:{id:"65+",type:"radio",value:"65+"},domProps:{checked:e._q(e.selectedAge,"65+")},on:{change:function(t){e.selectedAge="65+"}}}),t("label",{staticClass:"flex items-center justify-center w-42 h-14 rounded border-2 border-secondary peer-checked:bg-secondary peer-checked:text-white cursor-pointer select-none text-base leading-18",attrs:{for:"65+"}},[e._v(" 65+ ")])])])]),e.errorMessage?t("span",{staticClass:"error"},[e._v(e._s(e.errorMessage))]):e._e()])},w=[],y={name:"AgeStep",data(){return{selectedAge:this.getStoredAge()||"",errorMessage:""}},watch:{selectedAge(e){e&&(this.errorMessage="",this.saveAgeToLocalStorage(),this.$emit("age-selected",e),this.$emit("next"))}},methods:{saveAgeToLocalStorage(){localStorage.setItem("selectedAge",this.selectedAge)},getStoredAge(){return localStorage.getItem("selectedAge")}}},C=y,_=(0,c.A)(C,b,w,!1,null,null,null),S=_.exports,T=function(){var e=this;e._self._c;return e._m(0)},k=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex h-full w-full items-center justify-center"},[t("div",{staticClass:"flex gap-2 items-center"},[t("div",{staticClass:"bg-secondary w-7 h-7 animate-loop1 rounded-full"}),t("div",{staticClass:"bg-secondary/60 w-7 h-7 animate-loop1 [animation-delay:-0.33s] rounded-full"}),t("div",{staticClass:"bg-secondary/40 w-7 h-7 animate-loop1 [animation-delay:-0.66s] rounded-full"})])])}],A={name:"LoaderStep"},R=A,L=(0,c.A)(R,T,k,!1,null,null,null),F=L.exports,I=function(){var e=this,t=e._self._c;return t("div",{staticClass:"w-full lg:max-w-wrapper-343 lg:mx-auto"},[t("Offer"),t("div",{staticClass:"px-2"},[t("div",{staticClass:"pt-7 pb-5 space-y-7",attrs:{id:"form"}},[t("div",{staticClass:"space-y-2"},[t("p",{staticClass:"text-lg lg:text-22 leading-7 lg:leading-7 font-bold tracking-1"},[e._v("First Name")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.field1,expression:"field1"}],class:[(e.error.field1?"ring-error":"ring-white")+" px-4 h-14 w-full lg:max-w-wrapper-343 rounded shadow-shprimary text-base leading-6 lg:leading-7 border-transparent outline-none ring-2 bg-prefilled placeholder-shown:bg-white focus:ring-secondary placeholder-placeholder"],attrs:{type:"text",placeholder:"First Name"},domProps:{value:e.field1},on:{input:function(t){t.target.composing||(e.field1=t.target.value)}}}),e.error.field1?t("span",{staticClass:"text-sm leading-5 text-error"},[e._v(e._s(e.error.field1))]):e._e()]),t("div",{staticClass:"space-y-2"},[t("p",{staticClass:"text-lg lg:text-22 leading-7 lg:leading-7 font-bold tracking-1"},[e._v("Last Name")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.field2,expression:"field2"}],class:[(e.error.field2?"ring-error":"ring-white")+" px-4 h-14 w-full lg:max-w-wrapper-343 rounded shadow-shprimary text-base leading-6 lg:leading-7 border-transparent outline-none ring-2 bg-prefilled placeholder-shown:bg-white focus:ring-secondary placeholder-placeholder"],attrs:{type:"text",placeholder:"Last Name"},domProps:{value:e.field2},on:{input:function(t){t.target.composing||(e.field2=t.target.value)}}}),e.error.field2?t("span",{staticClass:"text-sm leading-5 text-error"},[e._v(e._s(e.error.field2))]):e._e()]),t("div",{staticClass:"space-y-2"},[t("p",{staticClass:"text-lg lg:text-22 leading-7 lg:leading-7 font-bold tracking-1"},[e._v("Telephone")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.field3,expression:"field3"}],class:[(e.error.field3?"ring-error":"ring-white")+" px-4 h-14 w-full lg:max-w-wrapper-343 rounded shadow-shprimary text-base leading-6 lg:leading-7 border-transparent outline-none ring-2 bg-prefilled placeholder-shown:bg-white focus:ring-secondary placeholder-placeholder"],attrs:{type:"tel",placeholder:"Telephone"},domProps:{value:e.field3},on:{input:function(t){t.target.composing||(e.field3=t.target.value)}}}),e.error.field3?t("span",{staticClass:"text-sm leading-5 text-error"},[e._v(e._s(e.error.field3))]):e._e()]),t("div",{staticClass:"space-y-2"},[t("p",{staticClass:"text-lg lg:text-22 leading-7 lg:leading-7 font-bold tracking-1"},[e._v("Email Address")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.field4,expression:"field4"}],class:[(e.error.field4?"ring-error":"ring-white")+" px-4 h-14 w-full lg:max-w-wrapper-343 rounded shadow-shprimary text-base leading-6 lg:leading-7 border-transparent outline-none ring-2 bg-prefilled placeholder-shown:bg-white focus:ring-secondary placeholder-placeholder"],attrs:{type:"email",placeholder:"Email Address"},domProps:{value:e.field4},on:{input:function(t){t.target.composing||(e.field4=t.target.value)}}}),e.error.field4?t("span",{staticClass:"text-sm leading-5 text-error"},[e._v(e._s(e.error.field4))]):e._e()])]),t("div",{},[t("label",{staticClass:"flex gap-2.5"},[t("div",{staticClass:"relative h-6"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.acceptTerms,expression:"acceptTerms"}],staticClass:"peer hidden",attrs:{id:"checkbox",type:"checkbox"},domProps:{checked:Array.isArray(e.acceptTerms)?e._i(e.acceptTerms,null)>-1:e.acceptTerms},on:{change:function(t){var r=e.acceptTerms,a=t.target,s=!!a.checked;if(Array.isArray(r)){var i=null,l=e._i(r,i);a.checked?l<0&&(e.acceptTerms=r.concat([i])):l>-1&&(e.acceptTerms=r.slice(0,l).concat(r.slice(l+1)))}else e.acceptTerms=s}}}),t("div",{staticClass:"w-6 h-6 rounded border-2 border-secondary peer-checked:bg-secondary",attrs:{for:"checkbox"}}),t("svg",{staticClass:"absolute top-0 bottom-0 right-0 left-0 m-auto hidden peer-checked:block",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"12",viewBox:"0 0 16 12",fill:"none"}},[t("path",{attrs:{d:"M6.25001 7.10571C6.19652 7.1578 6.10993 7.1578 6.05644 7.10571L2.45907 3.60009L0 5.99907L3.59614 9.50669L6.15323 12L16 2.39717L13.5391 0L6.25001 7.10571Z",fill:"white"}})])]),t("p",{staticClass:"w-full text-xs leading-5 text-text2"},[e._v("If you would like to receive the best deals on Broadband and other offers from CF-Broadband.com, please tick this box.")])]),e.error.acceptTerms?t("span",{staticClass:"text-sm leading-5 text-error"},[e._v(e._s(e.error.acceptTerms))]):e._e()])])],1)},P=[],U=function(){var e=this,t=e._self._c;return t("div",{staticClass:"relative flex flex-col mt-11 pt-8 pb-5 px-5 bg-white shadow-shprimary rounded-10"},[e._m(0),t("div",{staticClass:"flex pb-3.5 gap-2 mx-auto"},[t("p",{staticClass:"text-text text-sm leading-5"},[e._v("Offered by:")]),t("img",{attrs:{src:"/Test/TalkTalk-black.svg",alt:"TalkTalk",width:"62",height:"26"}})]),t("div",{staticClass:"flex flex-col pt-3.5 pb-5 rounded items-center bg-background"},[t("p",{staticClass:"text-offer text-sm leading-7 font-bold"},[e._v("FIBRE PACKAGE + AMAZON TECH PACK")]),t("p",{staticClass:"text-white text-xs leading-5"},[e._v("Available on Selected Deals*")]),t("div",{staticClass:"pt-2"},[t("img",{attrs:{src:"/Test/offer.png",srcset:"offer.png 1x, offer@2x.png 2x, offer@3x.png 3x",alt:"ad",width:"245",height:"86"}})])]),e._m(1),t("div",{staticClass:"space-y-3.5"},[t("p",{staticClass:"text-sm text-text leading-5"},[e._v("Features included:")]),t("div",{staticClass:"space-y-2"},[t("div",{staticClass:"flex items-start gap-2"},[t("img",{attrs:{src:"/Test/Check.svg",alt:"Check",width:"15",height:"15"}}),t("p",{staticClass:"text-sm leading-5"},[e._v("Unlimited Superfast Broadband")])]),t("div",{staticClass:"flex items-start gap-2"},[t("img",{attrs:{src:"/Test/Check.svg",alt:"Check",width:"15",height:"15"}}),t("p",{staticClass:"text-sm leading-5"},[e._v("No Price Increases")])]),t("div",{staticClass:"flex items-start gap-2"},[t("img",{attrs:{src:"/Test/Check.svg",alt:"Check",width:"15",height:"15"}}),e._m(2)])])]),e._m(3)])},M=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"absolute -top-4 flex left-0 right-0 w-63 mx-auto gap-2 py-1 px-3 bg-secondary rounded-full"},[t("p",{staticClass:"text-xl leading-6 font-bold text-offer2"},[e._v("1")]),t("p",{staticClass:"text-base leading-6 font-bold text-white"},[e._v("We’ve found you an offer!")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"pt-3.5 space-y-2 pb-2"},[t("p",{staticClass:"text-sm leading-5 text-text"},[e._v("Monthly Cost From:")]),t("p",{staticClass:"text-64 text-Cold-Blue-600 leading-56 font-bold tracking-1"},[e._v("£17.95")])])},function(){var e=this,t=e._self._c;return t("p",{staticClass:"text-sm leading-5"},[t("strong",[e._v("Amazon Echo Dot")]),e._v(" and "),t("strong",[e._v("Amazon Smart Plug")]),e._v(" Included on selected deals")])},function(){var e=this,t=e._self._c;return t("a",{attrs:{href:"#form"}},[t("button",{staticClass:"mt-3.5 py-4 w-full rounded-full bg-button hover:bg-button-hover text-2xl text-white leading-6 font-bold"},[e._v("Find out more")])])}],B={name:"TheOffer"},N=B,j=(0,c.A)(N,U,M,!1,null,null,null),O=j.exports,D={name:"DetailsStep",components:{Offer:O},data(){return{field1:this.getStoredField1()||"",field2:this.getStoredField2()||"",field3:this.getStoredField3()||"",field4:this.getStoredField4()||"",acceptTerms:!1,error:{field1:"",field2:"",field3:"",field4:"",acceptTerms:""}}},watch:{field1(e){this.saveField1ToLocalStorage(e),e.trim()&&(this.error.field1="")},field2(e){this.saveField2ToLocalStorage(e),e.trim()&&(this.error.field2="")},field3(e){this.saveField3ToLocalStorage(e),e.trim()&&(this.error.field3="")},field4(e){this.saveField4ToLocalStorage(e),e.trim()&&(this.error.field4="")},acceptTerms(e){e&&(this.error.acceptTerms="")}},methods:{validateFields(){let e=!0;return this.error={field1:"",field2:"",field3:"",field4:"",acceptTerms:""},this.field1.trim()||(this.error.field1="This field is required",e=!1),this.field2.trim()||(this.error.field2="This field is required",e=!1),this.field3.trim()||(this.error.field3="This field is required",e=!1),this.field4.trim()||(this.error.field4="This field is required",e=!1),this.acceptTerms||(this.error.acceptTerms="You must accept.",e=!1),e},saveField1ToLocalStorage(e){localStorage.setItem("field1",e)},getStoredField1(){return localStorage.getItem("field1")},saveField2ToLocalStorage(e){localStorage.setItem("field2",e)},getStoredField2(){return localStorage.getItem("field2")},saveField3ToLocalStorage(e){localStorage.setItem("field3",e)},getStoredField3(){return localStorage.getItem("field3")},saveField4ToLocalStorage(e){localStorage.setItem("field4",e)},getStoredField4(){return localStorage.getItem("field4")}}},V=D,$=(0,c.A)(V,I,P,!1,null,null,null),q=$.exports,E=function(){var e=this;e._self._c;return e._m(0)},W=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex flex-col font-secondary text-3xl gap-6"},[t("div",{staticClass:"flex justify-center bg-primary p-5 mt-1"},[t("p",{staticClass:"text-22 text-center text-white font-bold"},[e._v("Thank you for using CF Broadband")])]),t("div",{staticClass:"text-center space-y-2"},[t("p",{staticClass:"text-2xl font-bold"},[e._v("What's next?")]),t("p",{staticClass:"text-lg"},[e._v("An advisor from CF Broadband will call you shortly.")])])])}],Z={name:"ThanksStep",props:{msg:String}},H=Z,G=(0,c.A)(H,E,W,!1,null,null,null),z=G.exports,K=function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex py-3.5 px-4 justify-between bg-white"},[t("a",{attrs:{href:"/Test/"}},[t("img",{attrs:{src:"/Test/CFB-Logo.svg",alt:"Logo",width:"162",height:"28"}})]),t("img",{attrs:{src:"/Test/Safe-&-Secure.svg",alt:"Safe-&-Secure",width:"113",height:"28"}})])},Y=[],X={name:"TheHeader"},J=X,Q=(0,c.A)(J,K,Y,!1,null,null,null),ee=Q.exports,te=function(){var e=this;e._self._c;return e._m(0)},re=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex justify-center w-full bg-white"},[t("div",{staticClass:"flex flex-col lg:flex-row px-4 lg:px-0 py-2.5 gap-3.5 w-full lg:max-w-wrapper-824"},[t("p",{staticClass:"text-10 leading-5 pr-3.5 w-full lg:text-xs lg:leading-5"},[e._v("CF-Broadband.com is a trading name of Client Flo Media Limited. Registered Office Address - 5-9 Main Street, GX11 1AA. Company Number 120004.")]),t("div",{staticClass:"flex lg:flex-col-reverse w-full lg:max-w-wrapper-343 lg:items-end justify-between text-10 leading-7 lg:text-xs lg:leading-5"},[t("p",[e._v("Copyright © 2022 CF-Broadband.com")]),t("div",{staticClass:"flex gap-7"},[t("p",[e._v("Terms")]),t("p",[e._v("Privacy Policy")])])])])])}],ae={name:"TheFooter"},se=ae,ie=(0,c.A)(se,te,re,!1,null,null,null),le=ie.exports;const oe={template:"<p>Page not found</p>"},ne={};ne["/Test/"]=u,ne["/Test/providers"]=x,ne["/Test/age"]=S,ne["/Test/loader"]=F,ne["/Test/details"]=q,ne["/Test/thanks"]=z;var de={name:"App",components:{Header:ee,Footer:le},data(){return{currentRoute:window.location.pathname,steps:["/Test/","/Test/providers","/Test/age","/Test/details","/Test/thanks"],currentStepIndex:0,storageData:{},baseUrl:"/",isMounted:!1}},computed:{ViewComponent(){return ne[this.currentRoute]||oe},getRefForStep(){return"/Test/"===this.currentRoute?"postcodeStep":"/Test/providers"===this.currentRoute?"providersStep":"/Test/age"===this.currentRoute?"ageStep":"/Test/loader"===this.currentRoute?"loaderStep":"/Test/details"===this.currentRoute?"detailsStep":"/Test/thanks"===this.currentRoute?"thanksStep":""}},mounted(){window.addEventListener("popstate",this.handlePopState),this.storageData=this.GetStorageData(),this.baseUrl="/Test/",console.log("this.baseUrl = ",this.baseUrl),this.isMounted=!0},methods:{GetStorageData(){const e={};for(let t=0;t<localStorage.length;t++){const r=localStorage.key(t),a=localStorage.getItem(r);e[r]=a}return e},handlePopState(){const e=window.location.pathname;if("true"===localStorage.getItem("reachedThanks")&&"/loader"===e)return window.history.pushState({},"","/details"),this.currentRoute="/Test//details",void(this.currentStepIndex=this.steps.indexOf("/details"));this.currentRoute=e,this.currentStepIndex=this.steps.indexOf(e)},getStoredItem(e){return localStorage.getItem(e)||""},navigate(e){if("next"===e){const e={};e[this.baseUrl]=()=>this.validateAndProceed(this.$refs.postcodeStep,"postcode","This field cannot be empty."),e[this.baseUrl+"providers"]=()=>this.validateAndProceed(this.$refs.providersStep,"validateFields","You must select a provider."),e[this.baseUrl+"age"]=()=>this.navigateWithDelay(this.baseUrl+"details"),e[this.baseUrl+"details"]=()=>this.validateAndProceed(this.$refs.detailsStep,"validateFields","",(()=>this.navigateWithDelay(this.baseUrl+"thanks"))),e[this.currentRoute]?e[this.currentRoute]():this.updateRoute(1)}else"back"===e&&this.updateRoute(-1)},validateAndProceed(e,t,r,a){("function"===typeof e[t]?e[t]():e[t].trim())?a?a():this.updateRoute(1):e.errorMessage=r},navigateWithDelay(e){this.currentRoute="/Test/loader",window.history.pushState({},"",this.currentRoute),setTimeout((()=>{this.currentRoute=e,this.currentStepIndex=this.steps.indexOf(e),window.history.pushState({},"",this.currentRoute)}),2e3)},updateRoute(e){this.currentStepIndex=Math.max(0,Math.min(this.currentStepIndex+e,this.steps.length-1)),this.currentRoute=this.steps[this.currentStepIndex],window.history.pushState({},"",this.currentRoute)}},watch:{currentRoute(e){this.storageData=this.GetStorageData(),e===this.baseUrl+"thanks"&&console.log("All Collected Data:",this.storageData)}},created(){this.currentStepIndex=this.steps.indexOf(this.currentRoute)}},ce=de,pe=(0,c.A)(ce,s,i,!1,null,null,null),ue=pe.exports;a.Ay.config.productionTip=!1,new a.Ay({render:e=>e(ue)}).$mount("#app")}},t={};function r(a){var s=t[a];if(void 0!==s)return s.exports;var i=t[a]={exports:{}};return e[a].call(i.exports,i,i.exports,r),i.exports}r.m=e,function(){var e=[];r.O=function(t,a,s,i){if(!a){var l=1/0;for(c=0;c<e.length;c++){a=e[c][0],s=e[c][1],i=e[c][2];for(var o=!0,n=0;n<a.length;n++)(!1&i||l>=i)&&Object.keys(r.O).every((function(e){return r.O[e](a[n])}))?a.splice(n--,1):(o=!1,i<l&&(l=i));if(o){e.splice(c--,1);var d=s();void 0!==d&&(t=d)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[a,s,i]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};r.O.j=function(t){return 0===e[t]};var t=function(t,a){var s,i,l=a[0],o=a[1],n=a[2],d=0;if(l.some((function(t){return 0!==e[t]}))){for(s in o)r.o(o,s)&&(r.m[s]=o[s]);if(n)var c=n(r)}for(t&&t(a);d<l.length;d++)i=l[d],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(c)},a=self["webpackChunkmy_vue2_app"]=self["webpackChunkmy_vue2_app"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=r.O(void 0,[504],(function(){return r(8944)}));a=r.O(a)})();
//# sourceMappingURL=app.d345769a.js.map