"use strict";(self.webpackChunkkeycloakify_starter=self.webpackChunkkeycloakify_starter||[]).push([[7594],{"./node_modules/keycloakify/login/pages/IdpReviewUserProfile.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>IdpReviewUserProfile});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_login_lib_kcClsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/keycloakify/login/lib/kcClsx.js");function IdpReviewUserProfile(props){const{kcContext,i18n,doUseDefaultCss,Template,classes,UserProfileFormFields,doMakeUserConfirmPassword}=props,{kcClsx}=(0,_login_lib_kcClsx__WEBPACK_IMPORTED_MODULE_2__.z)({doUseDefaultCss,classes}),{msg,msgStr}=i18n,{url,messagesPerField}=kcContext,[isFomSubmittable,setIsFomSubmittable]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Template,Object.assign({kcContext,i18n,doUseDefaultCss,classes,displayMessage:messagesPerField.exists("global"),displayRequiredFields:!0,headerNode:msg("loginIdpReviewProfileTitle")},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form",Object.assign({id:"kc-idp-review-profile-form",className:kcClsx("kcFormClass"),action:url.loginAction,method:"post"},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UserProfileFormFields,{kcContext,i18n,onIsFormSubmittableValueChange:setIsFomSubmittable,kcClsx,doMakeUserConfirmPassword}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",Object.assign({className:kcClsx("kcFormGroupClass")},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",Object.assign({id:"kc-form-options",className:kcClsx("kcFormOptionsClass")},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:kcClsx("kcFormOptionsWrapperClass")})})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",Object.assign({id:"kc-form-buttons",className:kcClsx("kcFormButtonsClass")},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{className:kcClsx("kcButtonClass","kcButtonPrimaryClass","kcButtonBlockClass","kcButtonLargeClass"),type:"submit",value:msgStr("doSubmit"),disabled:!isFomSubmittable})}))]}))]}))}))}}}]);