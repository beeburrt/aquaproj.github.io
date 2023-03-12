"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[1479],{3905:(e,a,r)=>{r.d(a,{Zo:()=>g,kt:()=>d});var n=r(7294);function t(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function o(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?o(Object(r),!0).forEach((function(a){t(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function l(e,a){if(null==e)return{};var r,n,t=function(e,a){if(null==e)return{};var r,n,t={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],a.indexOf(r)>=0||(t[r]=e[r]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var p=n.createContext({}),c=function(e){var a=n.useContext(p),r=a;return e&&(r="function"==typeof e?e(a):i(i({},a),e)),r},g=function(e){var a=c(e.components);return n.createElement(p.Provider,{value:a},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var r=e.components,t=e.mdxType,o=e.originalType,p=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),s=c(r),m=t,d=s["".concat(p,".").concat(m)]||s[m]||u[m]||o;return r?n.createElement(d,i(i({ref:a},g),{},{components:r})):n.createElement(d,i({ref:a},g))}));function d(e,a){var r=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l[s]="string"==typeof e?e:t,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},253:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),t=(r(7294),r(3905));const o={sidebar_position:1200},i="go Package",l={unversionedId:"reference/registry-config/go-package",id:"reference/registry-config/go-package",title:"go Package",description:"Use go_install package instead of go package",source:"@site/docs/reference/registry-config/go-package.md",sourceDirName:"reference/registry-config",slug:"/reference/registry-config/go-package",permalink:"/docs/reference/registry-config/go-package",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/reference/registry-config/go-package.md",tags:[],version:"current",sidebarPosition:1200,frontMatter:{sidebar_position:1200},sidebar:"tutorialSidebar",previous:{title:"github_archive Package",permalink:"/docs/reference/registry-config/github-archive-package"},next:{title:"go_install Package",permalink:"/docs/reference/registry-config/go-install-package"}},p={},c=[{value:"File parameter",id:"file-parameter",level:2}],g={toc:c},s="wrapper";function u(e){let{components:a,...r}=e;return(0,t.kt)(s,(0,n.Z)({},g,r,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"go-package"},(0,t.kt)("inlineCode",{parentName:"h1"},"go")," Package"),(0,t.kt)("admonition",{type:"caution"},(0,t.kt)("p",{parentName:"admonition"},"Use ",(0,t.kt)("inlineCode",{parentName:"p"},"go_install")," package instead of ",(0,t.kt)("inlineCode",{parentName:"p"},"go")," package"),(0,t.kt)("p",{parentName:"admonition"},"For the historical reason, there are two package types building Go tools, ",(0,t.kt)("inlineCode",{parentName:"p"},"go")," and ",(0,t.kt)("inlineCode",{parentName:"p"},"go_install"),"."),(0,t.kt)("ul",{parentName:"admonition"},(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"go"),": Packages are downloaded from GitHub Archive and are built by ",(0,t.kt)("inlineCode",{parentName:"li"},"go build")," command"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"go_install"),": Packages are installed by ",(0,t.kt)("inlineCode",{parentName:"li"},"go install")," command")),(0,t.kt)("p",{parentName:"admonition"},"Basically when you add new packages, we recommend using the ",(0,t.kt)("inlineCode",{parentName:"p"},"go_install")," package instead of the ",(0,t.kt)("inlineCode",{parentName:"p"},"go")," package.")),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/issues/798"},"#798")," ",(0,t.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/issues/799"},"#799")),(0,t.kt)("p",null,"aqua >= ",(0,t.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/releases/tag/v1.7.0"},"v1.7.0")," is required."),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"repo_owner"),": The repository owner name"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"repo_name"),": The repository name")),(0,t.kt)("p",null,"The repository archive is downloaded from GitHub and the package is built by command ",(0,t.kt)("inlineCode",{parentName:"p"},"go build")," when it is installed.\nSo the command ",(0,t.kt)("inlineCode",{parentName:"p"},"go")," is required.\naqua is a CLI Version Manager, you have to specify the version. Unlike ",(0,t.kt)("inlineCode",{parentName:"p"},"go install")," command, you can't specify the head of the default branch."),(0,t.kt)("p",null,"e.g. ",(0,t.kt)("a",{parentName:"p",href:"https://github.com/google/wire"},"https://github.com/google/wire")),(0,t.kt)("p",null,"registry.yaml"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-yaml"},"packages:\n  - type: go\n    repo_owner: google\n    repo_name: wire\n    description: Compile-time Dependency Injection for Go\n    files:\n      - name: wire\n        src: ./cmd/wire\n        dir: wire-{{trimV .Version}}\n")),(0,t.kt)("p",null,"aqua.yaml"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-yaml"},"registries:\n  - name: local\n    type: local\n    path: registry.yaml\npackages:\n  - name: google/wire@v0.5.0\n    registry: local\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-console"},"$ aqua which wire\n/home/foo/.local/share/aquaproj-aqua/pkgs/go/github.com/google/wire/v0.5.0/bin/wire\n\n$ aqua install\nINFO[0000] create a symbolic link                        aqua_version= env=darwin/arm64 link_file=/home/foo/.local/share/aquaproj-aqua/bin/wire new=aqua-proxy package_name=google/wire package_version=v0.5.0 program=aqua registry=standard\nINFO[0000] download and unarchive the package            aqua_version= env=darwin/arm64 package_name=google/wire package_version=v0.5.0 program=aqua registry=standard\nINFO[0001] building Go tool                              aqua_version= env=darwin/arm64 exe_path=/home/foo/.local/share/aquaproj-aqua/pkgs/go/github.com/google/wire/v0.5.0/bin/wire file_name=wire go_build_dir=/home/foo/.local/share/aquaproj-aqua/pkgs/go/github.com/google/wire/v0.5.0/src/wire-0.5.0 go_src=./cmd/wire package_name=google/wire package_version=v0.5.0 program=aqua registry=standard\n")),(0,t.kt)("p",null,"From aqua ",(0,t.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/releases/tag/v1.9.0"},"v1.9.0"),", if there is no GitHub Repository tag or the latest tag is old, you can specify Git revision instead of tag."),(0,t.kt)("p",null,"e.g."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-yaml"},"packages:\n  - name: google/wire\n    registry: local\n    version: 79660af94317b9c466adc39f27f469f1079c779b\n")),(0,t.kt)("h2",{id:"file-parameter"},"File parameter"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-yaml"},"    files:\n      - name: wire\n        src: ./cmd/wire\n        dir: wire-{{trimV .Version}}\n")),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"name: command name"),(0,t.kt)("li",{parentName:"ul"},"dir: Directory path where ",(0,t.kt)("inlineCode",{parentName:"li"},"go build")," is run"),(0,t.kt)("li",{parentName:"ul"},"src: go build's target path")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"${AQUA_ROOT_DIR}/pkgs/go/github.com/google/wire/v0.5.0/\n  bin/wire\n  src/ # GitHub Repository Archive\n    wire-0.5.0/ # `go build` is run on this directory\n      cmd/wire # build target\n")),(0,t.kt)("p",null,"The following command is run."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-console"},'$ go build -o "${AQUA_ROOT_DIR}/pkgs/go/github.com/google/wire/v0.5.0/bin/wire" "./cmd/wire"\n')))}u.isMDXComponent=!0}}]);