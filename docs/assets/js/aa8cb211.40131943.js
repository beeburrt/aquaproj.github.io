"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[7572],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>d});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),s=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},m=function(e){var a=s(e.components);return n.createElement(p.Provider,{value:a},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(t),g=r,d=u["".concat(p,".").concat(g)]||u[g]||c[g]||i;return t?n.createElement(d,l(l({ref:a},m),{},{components:t})):n.createElement(d,l({ref:a},m))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=g;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},6117:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=t(7462),r=(t(7294),t(3905));const i={sidebar_position:200},l="Configuration",o={unversionedId:"reference/config/index",id:"reference/config/index",title:"Configuration",description:"e.g. aqua.yaml",source:"@site/docs/reference/config/index.md",sourceDirName:"reference/config",slug:"/reference/config/",permalink:"/docs/reference/config/",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/reference/config/index.md",tags:[],version:"current",sidebarPosition:200,frontMatter:{sidebar_position:200},sidebar:"tutorialSidebar",previous:{title:"Usage",permalink:"/docs/reference/usage"},next:{title:"Checksum",permalink:"/docs/reference/config/checksum"}},p={},s=[{value:"Configuration File Path",id:"configuration-file-path",level:2},{value:"Environment variables",id:"environment-variables",level:2},{value:"JSON Schema",id:"json-schema",level:2},{value:"Configuration attributes",id:"configuration-attributes",level:2},{value:"<code>registries</code>",id:"registries",level:2},{value:"<code>standard</code> registry",id:"standard-registry",level:3},{value:"<code>local</code> registry",id:"local-registry",level:3},{value:"<code>github_content</code> registry",id:"github_content-registry",level:3},{value:"<code>packages</code>",id:"packages",level:2}],m={toc:s},u="wrapper";function c(e){let{components:a,...t}=e;return(0,r.kt)(u,(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"e.g. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/blob/main/aqua.yaml"},"aqua.yaml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"registries:\n- type: standard\n  ref: v3.90.0 # renovate: depName=aquaproj/aqua-registry\n\npackages:\n- name: helm/helm@v3.7.0\n- name: golangci/golangci-lint@v1.42.1\n- import: aqua/*.yaml\n")),(0,r.kt)("h2",{id:"configuration-file-path"},"Configuration File Path"),(0,r.kt)("p",null,"aqua searches the following configuration files."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"--config (-c)")," option (environment variable ",(0,r.kt)("inlineCode",{parentName:"li"},"AQUA_CONFIG")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"\\.?aqua\\.ya?ml")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"\\.?aqua/aqua\\.ya?ml")," from the current directory to the root directory. If configuration files are found in the multiple directories, aqua read all of them"),(0,r.kt)("li",{parentName:"ol"},"global configuration: environment variable ",(0,r.kt)("inlineCode",{parentName:"li"},"AQUA_GLOBAL_CONFIG"))),(0,r.kt)("p",null,"To install tools in global configuration files, you have to set ",(0,r.kt)("inlineCode",{parentName:"p"},"-a")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"aqua install")," command."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"/docs/guides/keep-in-one-dir"},"From aqua v1.33.0, aqua supports keeping aqua's configuration files in one directory ",(0,r.kt)("inlineCode",{parentName:"a"},".?aqua")),".")),(0,r.kt)("h2",{id:"environment-variables"},"Environment variables"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AQUA_LOG_LEVEL"),": (default: ",(0,r.kt)("inlineCode",{parentName:"li"},"info"),") Log level"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AQUA_CONFIG"),": configuration file path"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/tutorial/global-config"},"AQUA_GLOBAL_CONFIG"),": global configuration file paths separated by semicolon ",(0,r.kt)("inlineCode",{parentName:"li"},":")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AQUA_POLICY_CONFIG"),": ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/security/policy-as-code"},"policy file")," paths separated by semicolon ",(0,r.kt)("inlineCode",{parentName:"li"},":")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AQUA_ROOT_DIR"),": The directory path where aqua install tools",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"default (linux and macOS): ",(0,r.kt)("inlineCode",{parentName:"li"},"${XDG_DATA_HOME:-$HOME/.local/share}/aquaproj-aqua")),(0,r.kt)("li",{parentName:"ul"},"default (windows): ",(0,r.kt)("inlineCode",{parentName:"li"},"${HOME/AppData/Local}/aquaproj-aqua")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AQUA_MAX_PARALLELISM"),": (default: ",(0,r.kt)("inlineCode",{parentName:"li"},"5"),") The maximum number of packages which are installed in parallel at the same time"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AQUA_GITHUB_TOKEN"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"GITHUB_TOKEN"),": GitHub Access Token. This is required to install private repository's package"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/config/log-color"},"AQUA_LOG_COLOR"),": Log color setting (",(0,r.kt)("inlineCode",{parentName:"li"},"always|auto|never"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/config/progress-bar"},"AQUA_PROGRESS_BAR"),": The progress bar is disabled by default, but you can enable it by setting the environment variable ",(0,r.kt)("inlineCode",{parentName:"li"},"AQUA_PROGRESS_BAR")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"true")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/develop-registry/change-os-arch-for-test"},"AQUA_GOOS, AQUA_GOARCH")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/config/experimental-feature#aqua_experimental_x_sys_exec"},"AQUA_EXPERIMENTAL_X_SYS_EXEC"))),(0,r.kt)("h2",{id:"json-schema"},"JSON Schema"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/aquaproj/aqua/tree/main/json-schema"},"https://github.com/aquaproj/aqua/tree/main/json-schema")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/aquaproj/aqua/blob/main/json-schema/aqua-yaml.json"},"https://github.com/aquaproj/aqua/blob/main/json-schema/aqua-yaml.json")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/aquaproj/aqua/main/json-schema/aqua-yaml.json"},"https://raw.githubusercontent.com/aquaproj/aqua/main/json-schema/aqua-yaml.json"))),(0,r.kt)("h2",{id:"configuration-attributes"},"Configuration attributes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#registries"},"registries"),": The list of registries"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#packages"},"packages"),": The list of installed packages"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/config/checksum"},"checksum"),": configuration for checksum verification")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"inline_registry")," was removed from ",(0,r.kt)("inlineCode",{parentName:"p"},"aqua >= v0.9.0"),". Please use ",(0,r.kt)("a",{parentName:"p",href:"#local-registry"},"local registry"),".")),(0,r.kt)("h2",{id:"registries"},(0,r.kt)("inlineCode",{parentName:"h2"},"registries")),(0,r.kt)("p",null,"e.g."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"registries:\n- type: standard\n  ref: v3.90.0 # renovate: depName=aquaproj/aqua-registry\n")),(0,r.kt)("p",null,"Registry types"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#standard-registry"},"standard"),": aqua's ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/aquaproj/aqua-registry"},"Standard Registry")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#local-registry"},"local"),": local file"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#github_content-registry"},"github_content"),": Get the registry by GitHub Repository Content API")),(0,r.kt)("h3",{id:"standard-registry"},(0,r.kt)("inlineCode",{parentName:"h3"},"standard")," registry"),(0,r.kt)("p",null,"e.g."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"registries:\n- type: standard\n  ref: v3.90.0 # renovate: depName=aquaproj/aqua-registry\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ref"),": the Registry Version. Please check ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/aquaproj/aqua-registry/releases"},"Releases"))),(0,r.kt)("p",null,"This is equivalent to the following definition."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"registries:\n- name: standard\n  type: github_content\n  repo_owner: aquaproj\n  repo_name: aqua-registry\n  ref: v3.90.0 # renovate: depName=aquaproj/aqua-registry\n  path: registry.yaml\n")),(0,r.kt)("p",null,"You can also specify a commit hash as ",(0,r.kt)("inlineCode",{parentName:"p"},"ref"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"registries:\n- type: standard\n  ref: 0d1572334a460e5a74f2a6455e510d8a4d6c8e93\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Don't specify a branch name as ",(0,r.kt)("inlineCode",{parentName:"p"},"ref"),", because aqua treats the ref as immutable."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"registries:\n- type: standard\n  ref: main # Specify a tag or commit hash\n"))),(0,r.kt)("h3",{id:"local-registry"},(0,r.kt)("inlineCode",{parentName:"h3"},"local")," registry"),(0,r.kt)("p",null,"e.g."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"registries:\n- name: local\n  type: local\n  path: registry.yaml\n- name: home\n  type: local\n  path: $HOME/aqua-registry.yaml\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name"),": Registry name"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"path"),": The file path. Either absolute path or relative path from ",(0,r.kt)("inlineCode",{parentName:"li"},"aqua.yaml"),". If ",(0,r.kt)("inlineCode",{parentName:"li"},"path")," starts with ",(0,r.kt)("inlineCode",{parentName:"li"},"$HOME")," + ",(0,r.kt)("inlineCode",{parentName:"li"},"OS specific path separator such as '/'"),", it's replaced with the home directory path")),(0,r.kt)("p",null,"Please see ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/registry-config"},"Configuration (registry.yaml)"),"."),(0,r.kt)("h3",{id:"github_content-registry"},(0,r.kt)("inlineCode",{parentName:"h3"},"github_content")," registry"),(0,r.kt)("p",null,"e.g."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"registries:\n- name: foo\n  type: github_content\n  repo_owner: aquaproj\n  repo_name: aqua-registry\n  ref: v3.90.0 # renovate: depName=aquaproj/aqua-registry\n  path: registry.yaml\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name"),": Registry Name"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"repo_owner"),": Repository Owner name"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"repo_name"),": Repository name"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ref"),": Repository tag or commit hash. Don't specify a branch name as ",(0,r.kt)("inlineCode",{parentName:"li"},"ref"),", because aqua treats the ref as immutable"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"path"),": file path from the repository root directory")),(0,r.kt)("h2",{id:"packages"},(0,r.kt)("inlineCode",{parentName:"h2"},"packages")),(0,r.kt)("p",null,"e.g."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"packages:\n- name: helm/helm\n  version: v3.7.0 # renovate: depName=helm/helm\n- name: golangci/golangci-lint@v1.42.1\n  registry: standard\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name"),": (string, optional) package name. If ",(0,r.kt)("inlineCode",{parentName:"li"},"import")," isn't set, this is required",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"format: ",(0,r.kt)("inlineCode",{parentName:"li"},"<package name>[@<package version>]")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"registry"),": (string, optional) registry name",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"default value is ",(0,r.kt)("inlineCode",{parentName:"li"},"standard")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"version"),": (string, optional) package version"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"import"),": (string, optional) glob pattern of package files. This is relative path from the configuration file. This is parsed with ",(0,r.kt)("a",{parentName:"li",href:"https://pkg.go.dev/path/filepath#Glob"},"filepath.Glob"),". Please see ",(0,r.kt)("a",{parentName:"li",href:"/docs/guides/split-config"},"Split the list of packages")," too."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/guides/package-tag"},"tags"),": Filter installed packages. Please see ",(0,r.kt)("a",{parentName:"li",href:"/docs/guides/package-tag"},"Filter packages with tags"))),(0,r.kt)("p",null,"The following two configuration is equivalent."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: golangci/golangci-lint@v1.42.1\n  registry: standard\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: golangci/golangci-lint\n  registry: standard\n  version: v1.42.1\n")),(0,r.kt)("p",null,"When you want to update the package with Renovate,\nthe first style is better because you don't have to write code comments for Renovate's Regex Manager."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: golangci/golangci-lint\n  registry: standard\n  version: v1.43.0 # renovate: depName=golangci/golangci-lint\n")),(0,r.kt)("p",null,"If the package name in the code comment is wrong, the package version is changed wrongly."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: golangci/golangci-lint\n  registry: standard\n  # depName is wrong!\n  version: v1.42.1 # renovate: depName=helm/helm\n")),(0,r.kt)("p",null,"On the other hand, you can prevent such a mis configuration by the first style."))}c.isMDXComponent=!0}}]);