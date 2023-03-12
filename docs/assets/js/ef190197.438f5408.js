"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[8575],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(n),d=i,f=c["".concat(p,".").concat(d)]||c[d]||u[d]||a;return n?r.createElement(f,o(o({ref:t},m),{},{components:n})):r.createElement(f,o({ref:t},m))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1617:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:1700},o="Template String",l={unversionedId:"reference/registry-config/template",id:"reference/registry-config/template",title:"Template String",description:"Some fields are parsed with Go's text/template and sprig.",source:"@site/docs/reference/registry-config/template.md",sourceDirName:"reference/registry-config",slug:"/reference/registry-config/template",permalink:"/docs/reference/registry-config/template",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/reference/registry-config/template.md",tags:[],version:"current",sidebarPosition:1700,frontMatter:{sidebar_position:1700},sidebar:"tutorialSidebar",previous:{title:"overrides",permalink:"/docs/reference/registry-config/overrides"},next:{title:"version_constraint, version_overrides",permalink:"/docs/reference/registry-config/version-overrides"}},p={},s=[{value:"Common Template Functions",id:"common-template-functions",level:2},{value:"Template Variables",id:"template-variables",level:2}],m={toc:s},c="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"template-string"},"Template String"),(0,i.kt)("p",null,"Some fields are parsed with ",(0,i.kt)("a",{parentName:"p",href:"https://pkg.go.dev/text/template"},"Go's text/template")," and ",(0,i.kt)("a",{parentName:"p",href:"http://masterminds.github.io/sprig/"},"sprig"),"."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The following sprig functions are removed for security reason."),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://masterminds.github.io/sprig/os.html"},"env")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://masterminds.github.io/sprig/os.html"},"expandenv")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://masterminds.github.io/sprig/network.html"},"getHostByName")))),(0,i.kt)("h2",{id:"common-template-functions"},"Common Template Functions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"trimV"),": This is equivalent to ",(0,i.kt)("inlineCode",{parentName:"li"},'trimPrefix "v"'))),(0,i.kt)("h2",{id:"template-variables"},"Template Variables"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"OS"),": A string which ",(0,i.kt)("inlineCode",{parentName:"li"},"GOOS")," is replaced by ",(0,i.kt)("inlineCode",{parentName:"li"},"replacements"),". If ",(0,i.kt)("inlineCode",{parentName:"li"},"replacements")," isn't set, ",(0,i.kt)("inlineCode",{parentName:"li"},"OS")," is equal to ",(0,i.kt)("inlineCode",{parentName:"li"},"GOOS"),". Basically you should use ",(0,i.kt)("inlineCode",{parentName:"li"},"OS")," for the consistency"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Arch"),": A string which ",(0,i.kt)("inlineCode",{parentName:"li"},"GOARCH")," is replaced by ",(0,i.kt)("inlineCode",{parentName:"li"},"replacements"),". If ",(0,i.kt)("inlineCode",{parentName:"li"},"replacements")," isn't set, ",(0,i.kt)("inlineCode",{parentName:"li"},"Arch")," is equal to ",(0,i.kt)("inlineCode",{parentName:"li"},"GOARCH"),". Basically you should use ",(0,i.kt)("inlineCode",{parentName:"li"},"OS")," for the consistency"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GOOS"),": Go's ",(0,i.kt)("a",{parentName:"li",href:"https://pkg.go.dev/runtime#pkg-constants"},"runtime.GOOS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GOARCH"),": Go's ",(0,i.kt)("a",{parentName:"li",href:"https://pkg.go.dev/runtime#pkg-constants"},"runtime.GOARCH")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Version"),": Package ",(0,i.kt)("inlineCode",{parentName:"li"},"version")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SemVer"),": Package version that ",(0,i.kt)("a",{parentName:"li",href:"/docs/reference/registry-config/version-prefix"},"version_prefix")," is trimmed from ",(0,i.kt)("inlineCode",{parentName:"li"},"Version"),". For example, if ",(0,i.kt)("inlineCode",{parentName:"li"},"Version")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"cli/v1.0.0")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"version_prefix")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"cli/"),", then ",(0,i.kt)("inlineCode",{parentName:"li"},"SemVer")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"v1.0.0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Format"),": Package ",(0,i.kt)("inlineCode",{parentName:"li"},"format")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"FileName"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"files[].name"))))}u.isMDXComponent=!0}}]);