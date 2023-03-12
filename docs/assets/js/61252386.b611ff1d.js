"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[8306],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(r),f=a,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3745:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:500},i="rosetta2",p={unversionedId:"reference/registry-config/rosetta2",id:"reference/registry-config/rosetta2",title:"rosetta2",description:"#442 #444",source:"@site/docs/reference/registry-config/rosetta2.md",sourceDirName:"reference/registry-config",slug:"/reference/registry-config/rosetta2",permalink:"/docs/reference/registry-config/rosetta2",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/reference/registry-config/rosetta2.md",tags:[],version:"current",sidebarPosition:500,frontMatter:{sidebar_position:500},sidebar:"tutorialSidebar",previous:{title:"version_source",permalink:"/docs/reference/registry-config/version-source"},next:{title:"aliases",permalink:"/docs/reference/registry-config/aliases"}},s={},l=[],c={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"rosetta2"},"rosetta2"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/pull/442"},"#442")," ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/pull/444"},"#444")),(0,a.kt)("p",null,"If a package isn't built for apple silicon (i.e. ",(0,a.kt)("inlineCode",{parentName:"p"},"GOOS=darwin, GOARCH=arm64"),"), you have to install the package built for amd64 (i.e. ",(0,a.kt)("inlineCode",{parentName:"p"},"GOOS=darwin, GOARCH=amd64"),").\nWith the field ",(0,a.kt)("inlineCode",{parentName:"p"},"rosetta2"),", you don't have to write ",(0,a.kt)("inlineCode",{parentName:"p"},"if")," condition to support such a case.\n",(0,a.kt)("inlineCode",{parentName:"p"},"rosetta2")," must be boolean. By default, ",(0,a.kt)("inlineCode",{parentName:"p"},"rosetta2")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"rosetta2")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"GOOS")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"darwin")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"GOARCH")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"arm64"),", the template variable ",(0,a.kt)("inlineCode",{parentName:"p"},"Arch")," is interpreted as ",(0,a.kt)("inlineCode",{parentName:"p"},"GOARCH=amd64"),"."),(0,a.kt)("p",null,"AS IS"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"asset: 'argo-{{.OS}}-{{if eq .GOOS \"darwin\"}}amd64{{else}}{{.Arch}}{{end}}.gz'\n")),(0,a.kt)("p",null,"TO BE"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"rosetta2: true\nasset: 'argo-{{.OS}}-{{.Arch}}.gz'\n")))}d.isMDXComponent=!0}}]);