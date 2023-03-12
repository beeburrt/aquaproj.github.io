"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[3377],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=p(n),k=a,d=s["".concat(c,".").concat(k)]||s[k]||m[k]||i;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=k;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[s]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},1635:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:1950},l="checksum",o={unversionedId:"reference/registry-config/checksum",id:"reference/registry-config/checksum",title:"checksum",description:"Each registry's package configuration has the configuration about checksum.",source:"@site/docs/reference/registry-config/checksum.md",sourceDirName:"reference/registry-config",slug:"/reference/registry-config/checksum",permalink:"/docs/reference/registry-config/checksum",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/reference/registry-config/checksum.md",tags:[],version:"current",sidebarPosition:1950,frontMatter:{sidebar_position:1950},sidebar:"tutorialSidebar",previous:{title:"supported_if",permalink:"/docs/reference/registry-config/supported-if"},next:{title:"supported_envs",permalink:"/docs/reference/registry-config/supported-envs"}},c={},p=[{value:"<code>enabled</code>",id:"enabled",level:2},{value:"checksum <code>algorithm</code>",id:"checksum-algorithm",level:2},{value:"checksum <code>type</code>",id:"checksum-type",level:2},{value:"checksum <code>file_format</code>",id:"checksum-file_format",level:2}],u={toc:p},s="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"checksum"},"checksum"),(0,a.kt)("p",null,"Each registry's package configuration has the configuration about checksum."),(0,a.kt)("p",null,"e.g. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua-registry/blob/109811850abf8ec34f8715f3384ba8218f05ec1d/pkgs/cli/cli/registry.yaml"},"GitHub CLI")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'packages:\n  - type: github_release\n    repo_owner: cli\n    repo_name: cli\n    # ...\n    checksum:\n      type: github_release\n      asset: gh_{{trimV .Version}}_checksums.txt\n      file_format: regexp\n      algorithm: sha256\n      pattern:\n        checksum: ^(\\b[A-Fa-f0-9]{64}\\b)\n        file: "^\\\\b[A-Fa-f0-9]{64}\\\\b\\\\s+(\\\\S+)$"\n')),(0,a.kt)("p",null,"e.g. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua-registry/blob/109811850abf8ec34f8715f3384ba8218f05ec1d/pkgs/argoproj/argo-cd/registry.yaml"},"ArgoCD CLI")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'packages:\n  - type: github_release\n    repo_owner: argoproj\n    repo_name: argo-cd\n    # ...\n    asset: argocd-{{.OS}}-{{.Arch}}\n    checksum:\n      type: github_release\n      asset: "{{.Asset}}.sha256"\n      file_format: raw\n      algorithm: sha256\n')),(0,a.kt)("h2",{id:"enabled"},(0,a.kt)("inlineCode",{parentName:"h2"},"enabled")),(0,a.kt)("p",null,"You can enable or disable the checksum download by ",(0,a.kt)("inlineCode",{parentName:"p"},"enabled")," attribute."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"packages:\n  - type: github_release\n    repo_owner: argoproj\n    repo_name: argo-cd\n    # ...\n    checksum:\n      enabled: false\n")),(0,a.kt)("p",null,"By default, checkdum download is disabled."),(0,a.kt)("h2",{id:"checksum-algorithm"},"checksum ",(0,a.kt)("inlineCode",{parentName:"h2"},"algorithm")),(0,a.kt)("p",null,"The following ",(0,a.kt)("inlineCode",{parentName:"p"},"algorithm")," are supported."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sha1")," (aqua >= ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/aquaproj/aqua/releases/tag/v1.29.0"},"v1.29.0"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sha256")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sha512")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"md5"))),(0,a.kt)("h2",{id:"checksum-type"},"checksum ",(0,a.kt)("inlineCode",{parentName:"h2"},"type")),(0,a.kt)("p",null,"The following ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," are supported."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"github_release")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"http"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"github_release")," requires the following attributes."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"asset"),": GitHub Release Asset name. The format is a Go's ",(0,a.kt)("inlineCode",{parentName:"li"},"text/template")," string")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"http")," requires the following attributes."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"url"),": Checksum file's download URL. The format is a Go's ",(0,a.kt)("inlineCode",{parentName:"li"},"text/template")," string")),(0,a.kt)("h2",{id:"checksum-file_format"},"checksum ",(0,a.kt)("inlineCode",{parentName:"h2"},"file_format")),(0,a.kt)("p",null,"The following ",(0,a.kt)("inlineCode",{parentName:"p"},"file_format")," are supported."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"regexp")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"raw"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"regexp")," requires the following attributes."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pattern.checksum"),":"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pattern.file"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'pattern:\n  checksum: ^(\\b[A-Fa-f0-9]{64}\\b)\n  file: "^\\\\b[A-Fa-f0-9]{64}\\\\b\\\\s+(\\\\S+)$"\n')),(0,a.kt)("p",null,"aqua extracts pairs of checkfum and asset name using regular expressions.\nIf the checksum file includes only one checksum, you can omit ",(0,a.kt)("inlineCode",{parentName:"p"},"pattern.file"),"."))}m.isMDXComponent=!0}}]);