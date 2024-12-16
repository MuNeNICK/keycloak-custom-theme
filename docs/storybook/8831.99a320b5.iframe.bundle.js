"use strict";(self.webpackChunkkeycloakify_starter=self.webpackChunkkeycloakify_starter||[]).push([[8831],{"./node_modules/keycloakify/login/pages/LoginPassword.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>LoginPassword});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_tools_clsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/keycloakify/tools/clsx.js"),_tools_assert__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/keycloakify/tools/assert.js"),_login_lib_kcClsx__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/keycloakify/login/lib/kcClsx.js");function LoginPassword(props){const{kcContext,i18n,doUseDefaultCss,Template,classes}=props,{kcClsx}=(0,_login_lib_kcClsx__WEBPACK_IMPORTED_MODULE_4__.z)({doUseDefaultCss,classes}),{realm,url,messagesPerField}=kcContext,{msg,msgStr}=i18n,[isLoginButtonDisabled,setIsLoginButtonDisabled]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Template,Object.assign({kcContext,i18n,doUseDefaultCss,classes,headerNode:msg("doLogIn"),displayMessage:!messagesPerField.existsError("password")},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",Object.assign({id:"kc-form"},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",Object.assign({id:"kc-form-wrapper"},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form",Object.assign({id:"kc-form-login",onSubmit:()=>(setIsLoginButtonDisabled(!0),!0),action:url.loginAction,method:"post"},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",Object.assign({className:(0,_tools_clsx__WEBPACK_IMPORTED_MODULE_2__.$)(kcClsx("kcFormGroupClass"),"no-bottom-margin")},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("hr",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label",Object.assign({htmlFor:"password",className:kcClsx("kcLabelClass")},{children:msg("password")})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PasswordWrapper,Object.assign({kcClsx,i18n,passwordInputId:"password"},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{tabIndex:2,id:"password",className:kcClsx("kcInputClass"),name:"password",type:"password",autoFocus:!0,autoComplete:"on","aria-invalid":messagesPerField.existsError("username","password")})})),messagesPerField.existsError("password")&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{id:"input-error-password",className:kcClsx("kcInputErrorMessageClass"),"aria-live":"polite",dangerouslySetInnerHTML:{__html:messagesPerField.get("password")}})]})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",Object.assign({className:kcClsx("kcFormGroupClass","kcFormSettingClass")},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{id:"kc-form-options"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",Object.assign({className:kcClsx("kcFormOptionsWrapperClass")},{children:realm.resetPasswordAllowed&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",Object.assign({tabIndex:5,href:url.loginResetCredentialsUrl},{children:msg("doForgotPassword")}))})}))]})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",Object.assign({id:"kc-form-buttons",className:kcClsx("kcFormGroupClass")},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{tabIndex:4,className:kcClsx("kcButtonClass","kcButtonPrimaryClass","kcButtonBlockClass","kcButtonLargeClass"),name:"login",id:"kc-login",type:"submit",value:msgStr("doLogIn"),disabled:isLoginButtonDisabled})}))]}))}))}))}))}function PasswordWrapper(props){const{kcClsx,i18n,passwordInputId,children}=props,{msgStr}=i18n,[isPasswordRevealed,toggleIsPasswordRevealed]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)((isPasswordRevealed=>!isPasswordRevealed),!1);return(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{const passwordInputElement=document.getElementById(passwordInputId);(0,_tools_assert__WEBPACK_IMPORTED_MODULE_3__.v)(passwordInputElement instanceof HTMLInputElement),passwordInputElement.type=isPasswordRevealed?"text":"password"}),[isPasswordRevealed]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",Object.assign({className:kcClsx("kcInputGroup")},{children:[children,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",Object.assign({type:"button",className:kcClsx("kcFormPasswordVisibilityButtonClass"),"aria-label":msgStr(isPasswordRevealed?"hidePassword":"showPassword"),"aria-controls":passwordInputId,onClick:toggleIsPasswordRevealed},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i",{className:kcClsx(isPasswordRevealed?"kcFormPasswordVisibilityIconHide":"kcFormPasswordVisibilityIconShow"),"aria-hidden":!0})}))]}))}}}]);