"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[187],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return f}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(a),f=i,m=c["".concat(l,".").concat(f)]||c[f]||d[f]||o;return a?n.createElement(m,r(r({ref:t},p),{},{components:a})):n.createElement(m,r({ref:t},p))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var u=2;u<o;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8429:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var n=a(3117),i=a(102),o=(a(7294),a(3905)),r=["components"],s={sidebar_position:500},l="asdf",u={unversionedId:"comparison/asdf",id:"comparison/asdf",title:"asdf",description:"https://asdf-vm.com/",source:"@site/docs/comparison/asdf.md",sourceDirName:"comparison",slug:"/comparison/asdf",permalink:"/docs/comparison/asdf",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/comparison/asdf.md",tags:[],version:"current",sidebarPosition:500,frontMatter:{sidebar_position:500},sidebar:"tutorialSidebar",previous:{title:"GitHub Actions",permalink:"/docs/comparison/github-actions"},next:{title:"marcosnils/bin",permalink:"/docs/comparison/marcosnils-bin"}},p={},d=[{value:"Common",id:"common",level:2},{value:"Difference between aqua Registry and asdf Plugin",id:"difference-between-aqua-registry-and-asdf-plugin",level:2},{value:"Security",id:"security",level:3},{value:"Maintainability, readability, and ownership",id:"maintainability-readability-and-ownership",level:3},{value:"Plugin Version Management",id:"plugin-version-management",level:3},{value:"Continous update",id:"continous-update",level:2},{value:"Behaviour when invoked tool isn&#39;t installed",id:"behaviour-when-invoked-tool-isnt-installed",level:2},{value:"aqua&#39;s additional features",id:"aquas-additional-features",level:2},{value:"asdf&#39;s additional features",id:"asdfs-additional-features",level:2},{value:"Support existing config files",id:"support-existing-config-files",level:3},{value:"List up available tool versions",id:"list-up-available-tool-versions",level:3},{value:"Support Optional Scripts",id:"support-optional-scripts",level:3}],c={toc:d};function f(e){var t=e.components,a=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"asdf"},"asdf"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://asdf-vm.com/"},"https://asdf-vm.com/")),(0,o.kt)("h2",{id:"common"},"Common"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Support installing tools in local and global"),(0,o.kt)("li",{parentName:"ul"},"Have plugin mechanism"),(0,o.kt)("li",{parentName:"ul"},"GitHub Actions")),(0,o.kt)("h2",{id:"difference-between-aqua-registry-and-asdf-plugin"},"Difference between aqua Registry and asdf Plugin"),(0,o.kt)("p",null,"aqua Registry is different from asdf Plugin."),(0,o.kt)("p",null,"asdf Plugin"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a Repository per tool"),(0,o.kt)("li",{parentName:"ul"},"Install tool with Shell Script"),(0,o.kt)("li",{parentName:"ul"},"Manage the plugin list in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/asdf-vm/asdf-plugins"},"https://github.com/asdf-vm/asdf-plugins"))),(0,o.kt)("p",null,"aqua Registry"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Manage multiple tools in a Registry"),(0,o.kt)("li",{parentName:"ul"},"Registry is YAML"),(0,o.kt)("li",{parentName:"ul"},"There is a Registry named ",(0,o.kt)("inlineCode",{parentName:"li"},"Standard Registry")),(0,o.kt)("li",{parentName:"ul"},"Install Process is restricted and exteranl commands aren't available")),(0,o.kt)("p",null,"Due to the restriction, aqua can't support some tools.\nBut aqua Registry Configuration is simple due to this restriction. You don't have to write shell scripts."),(0,o.kt)("h3",{id:"security"},"Security"),(0,o.kt)("p",null,"asdf Plugin executes shell scripts, so there is a security concern.\nasdf has a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/asdf-vm/asdf-plugins#security"},"Security Policy"),", but it is difficult to prevent malicious code from being executed mechanically."),(0,o.kt)("p",null,"aqua doesn't execute the external commands, so it is safe."),(0,o.kt)("h3",{id:"maintainability-readability-and-ownership"},"Maintainability, readability, and ownership"),(0,o.kt)("p",null,"When you support a new tool for asdf, you would create an asdf plugin."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://asdf-vm.com/plugins/create.html"},"https://asdf-vm.com/plugins/create.html")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/asdf-vm/asdf-plugin-template"},"https://github.com/asdf-vm/asdf-plugin-template"))),(0,o.kt)("p",null,"You have to create a GitHub Repository based on the Template Repository and write shell scripts.\nYou have to maintain the plugin by yourself."),(0,o.kt)("p",null,"The quality of shell scripts depends on developers and it may be difficult to read.\nThe shell script may have some dependencies.\nSome third party plugins may not be maintained."),(0,o.kt)("p",null,"On the other hand, in case of aqua you would create an issue or pull request to aqua's Standard Registry."),(0,o.kt)("p",null,"Sending a pull request to aqua's Standard Registry is easier than creating an asdf plugin.\nYou can only write declarative YAML configuration based on existing Registry configuration."),(0,o.kt)("p",null,"For example, plase see the pull request to support velero."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua-registry/pull/1281"},"https://github.com/aquaproj/aqua-registry/pull/1281")),(0,o.kt)("p",null,"This pull request includes only 11 lines YAML configuration.\nThe configuration would be maintained in the Standard Registry.\nYou don't have to maintain it by yourself.\naqua doesn't depend on other than OS and CPU architecture.\naqua's Registry Configuration is easier to read than shell script."),(0,o.kt)("h3",{id:"plugin-version-management"},"Plugin Version Management"),(0,o.kt)("p",null,"aqua forces to pin Registry version in aqua.yaml, which ensures the reproductivity.\nYou can update the Registry version with Renovate easily."),(0,o.kt)("p",null,"On the other hand, asdf doesn't force to pin the plugin version."),(0,o.kt)("h2",{id:"continous-update"},"Continous update"),(0,o.kt)("p",null,"aqua provides Renovate Preset Config and you can easily update tools continuously.\nThe package name of aqua is same as GitHub Repository owner and name, so you can update it with Renovate's github_release Datasource."),(0,o.kt)("p",null,"On the other hand, there is an issue to support Renovate Manager for asdf but this isn't supported yet.\nAnd there is no general Renovate Config Preset for asdf.\nThe asdf plugin name is basically different from GitHub Repository owner and name, so it is difficult to update it with Renovate machanically. You have to write code to update it per tool."),(0,o.kt)("h2",{id:"behaviour-when-invoked-tool-isnt-installed"},"Behaviour when invoked tool isn't installed"),(0,o.kt)("p",null,"When a tool is invoked but this isn't installed yet,\naqua installs it automatically and executes it.\nWe name this feature as ",(0,o.kt)("inlineCode",{parentName:"p"},"Lazy Install"),"."),(0,o.kt)("p",null,"On the other hand, asdf doesn't install the tool automatically.\nasdf outputs the guide and exits with non zero code."),(0,o.kt)("h2",{id:"aquas-additional-features"},"aqua's additional features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://aquaproj.github.io/docs/tutorial-extras/team-config"},"Share aqua configuration for teams and organizations with AQUA_GLOBAL_CONFIG")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://aquaproj.github.io/docs/tutorial-extras/split-config"},"Split the list of packages")),(0,o.kt)("li",{parentName:"ul"},"CircleCI Orb")),(0,o.kt)("h2",{id:"asdfs-additional-features"},"asdf's additional features"),(0,o.kt)("h3",{id:"support-existing-config-files"},"Support existing config files"),(0,o.kt)("p",null,"asdf supports for existing config files .nvmrc, .node-versions, .ruby-version for smooth migration.\nOn the other hand, aqua doesn't support them."),(0,o.kt)("h3",{id:"list-up-available-tool-versions"},"List up available tool versions"),(0,o.kt)("p",null,"asdf supports listing up available tool versions.\nOn the other hand, aqua doesn't support the feature for now."),(0,o.kt)("h3",{id:"support-optional-scripts"},"Support Optional Scripts"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://asdf-vm.com/plugins/create.html#optional-scripts"},"https://asdf-vm.com/plugins/create.html#optional-scripts")))}f.isMDXComponent=!0}}]);