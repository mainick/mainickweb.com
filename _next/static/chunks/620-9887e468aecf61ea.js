(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[620],{9618:function(e,t,r){var a={"./AuthorLayout":4152,"./AuthorLayout.js":4152,"./ListLayout":9795,"./ListLayout.js":9795,"./PageFullSimple":3156,"./PageFullSimple.js":3156,"./PostLayout":5105,"./PostLayout.js":5105,"./PostSimple":3259,"./PostSimple.js":3259};function n(e){var t=i(e);return r(t)}function i(e){if(!r.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=i,e.exports=n,n.id=9618},6009:function(e,t,r){"use strict";var a=r(7320);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=r(3454).env.NEXT_PUBLIC_BASE_PATH||"";t.Z=function(e){var t=e.src,r=i(e,["src"]);return(0,a.tZ)("img",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){n(e,t,r[t])}))}return e}({src:l+t},r))}},8620:function(e,t,r){"use strict";r.d(t,{J:function(){return g}});var a=r(7320),n=r(1720),i=r(3194),l=r(6009),c=r(4373),o=function(e){var t=e.toc,r=e.indentDepth,n=void 0===r?3:r,i=e.fromHeading,l=void 0===i?1:i,c=e.toHeading,o=void 0===c?6:c,d=e.asDisclosure,s=void 0!==d&&d,u=e.exclude,m=void 0===u?"":u,p=Array.isArray(m)?new RegExp("^("+m.join("|")+")$","i"):new RegExp("^("+m+")$","i"),h=t.filter((function(e){return e.depth>=l&&e.depth<=o&&!p.test(e.value)})),g=(0,a.tZ)("ul",{children:h.map((function(e){return(0,a.tZ)("li",{className:"".concat(e.depth>=n&&"ml-6"),children:(0,a.tZ)("a",{href:e.url,children:e.value})},e.value)}))});return(0,a.tZ)(a.HY,{children:s?(0,a.BX)("details",{open:!0,children:[(0,a.tZ)("summary",{className:"ml-6 pt-2 pb-2 text-xl font-bold",children:"Table of Contents"}),(0,a.tZ)("div",{className:"ml-6",children:g})]}):g})},d=function(e){var t=(0,n.useRef)(null),r=(0,n.useState)(!1),i=r[0],l=r[1],c=(0,n.useState)(!1),o=c[0],d=c[1];return(0,a.BX)("div",{ref:t,onMouseEnter:function(){l(!0)},onMouseLeave:function(){l(!1),d(!1)},className:"relative",children:[i&&(0,a.tZ)("button",{"aria-label":"Copy code",type:"button",className:"absolute right-2 top-2 h-8 w-8 rounded border-2 bg-gray-700 p-1 dark:bg-gray-800 ".concat(o?"border-green-400 focus:border-green-400 focus:outline-none":"border-gray-300"),onClick:function(){d(!0),navigator.clipboard.writeText(t.current.textContent),setTimeout((function(){d(!1)}),2e3)},children:(0,a.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",stroke:"currentColor",fill:"none",className:o?"text-green-400":"text-gray-300",children:o?(0,a.tZ)(a.HY,{children:(0,a.tZ)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"})}):(0,a.tZ)(a.HY,{children:(0,a.tZ)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"})})})}),(0,a.tZ)("pre",{children:e.children})]})},s=r(8968);function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){u(e,t,r[t])}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var h={Image:l.Z,TOCInline:o,a:c.Z,pre:d,BlogNewsletterForm:s.w,wrapper:function(e){e.components;var t=e.layout,n=p(e,["components","layout"]),i=r(9618)("./".concat(t)).default;return(0,a.tZ)(i,m({},n))}},g=function(e){var t=e.layout,r=e.mdxSource,l=p(e,["layout","mdxSource"]),c=(0,n.useMemo)((function(){return(0,i.getMDXComponent)(r)}),[r]);return(0,a.tZ)(c,m({layout:t,components:h},l))}},8968:function(e,t,r){"use strict";r.d(t,{w:function(){return u}});var a=r(4051),n=r.n(a),i=r(7320),l=r(1720),c=r(7059),o=r.n(c);function d(e,t,r,a,n,i,l){try{var c=e[i](l),o=c.value}catch(d){return void r(d)}c.done?t(o):Promise.resolve(o).then(a,n)}var s=function(e){var t=e.title,r=void 0===t?"Subscribe to the newsletter":t,a=(0,l.useRef)(null),c=(0,l.useState)(!1),s=c[0],u=c[1],m=(0,l.useState)(""),p=m[0],h=m[1],g=(0,l.useState)(!1),f=g[0],y=g[1],x=function(){var e,t=(e=n().mark((function e(t){var r;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("/api/".concat(o().newsletter.provider),{body:JSON.stringify({email:a.current.value}),headers:{"Content-Type":"application/json"},method:"POST"});case 3:return r=e.sent,e.next=6,r.json();case 6:if(!e.sent.error){e.next=11;break}return u(!0),h("Your e-mail address is invalid or you are already subscribed!"),e.abrupt("return");case 11:a.current.value="",u(!1),y(!0),h("Successfully! \ud83c\udf89 You are now subscribed.");case 15:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(a,n){var i=e.apply(t,r);function l(e){d(i,a,n,l,c,"next",e)}function c(e){d(i,a,n,l,c,"throw",e)}l(void 0)}))});return function(e){return t.apply(this,arguments)}}();return(0,i.BX)("div",{children:[(0,i.tZ)("div",{className:"pb-1 text-lg font-semibold text-gray-800 dark:text-gray-100",children:r}),(0,i.BX)("form",{className:"flex flex-col sm:flex-row",onSubmit:x,children:[(0,i.BX)("div",{children:[(0,i.tZ)("label",{className:"sr-only",htmlFor:"email-input",children:"Email address"}),(0,i.tZ)("input",{autoComplete:"email",className:"w-72 rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black",id:"email-input",name:"email",placeholder:f?"You're subscribed !  \ud83c\udf89":"Enter your email",ref:a,required:!0,type:"email",disabled:f})]}),(0,i.tZ)("div",{className:"mt-2 flex w-full rounded-md shadow-sm sm:mt-0 sm:ml-3",children:(0,i.tZ)("button",{className:"w-full rounded-md bg-primary-500 py-2 px-4 font-medium text-white sm:py-0 ".concat(f?"cursor-default":"hover:bg-primary-700 dark:hover:bg-primary-400"," focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 dark:ring-offset-black"),type:"submit",disabled:f,children:f?"Thank you!":"Sign up"})})]}),s&&(0,i.tZ)("div",{className:"w-72 pt-2 text-sm text-red-500 dark:text-red-400 sm:w-96",children:p})]})};t.Z=s;var u=function(e){var t=e.title;return(0,i.tZ)("div",{className:"flex items-center justify-center",children:(0,i.tZ)("div",{className:"bg-gray-100 p-6 dark:bg-gray-800 sm:px-14 sm:py-8",children:(0,i.tZ)(s,{title:t})})})}},8215:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var a=r(7320);function n(e){var t=e.children;return(0,a.tZ)("h1",{className:"text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14",children:t})}},8590:function(e,t,r){"use strict";r.d(t,{TQ:function(){return d},$t:function(){return s},Uy:function(){return u}});var a=r(7320),n=r(9008),i=r(1163),l=r(7059),c=r.n(l),o=function(e){var t=e.title,r=e.description,l=e.ogType,o=e.ogImage,d=(e.twImage,e.canonicalUrl),s=(0,i.useRouter)();return(0,a.BX)(n.default,{children:[(0,a.tZ)("title",{children:t}),(0,a.tZ)("meta",{name:"robots",content:"follow, index"}),(0,a.tZ)("meta",{name:"description",content:r}),(0,a.tZ)("meta",{property:"og:locale",content:c().locale}),(0,a.tZ)("meta",{property:"og:type",content:l}),(0,a.tZ)("meta",{property:"og:title",content:t}),(0,a.tZ)("meta",{property:"og:description",content:r}),(0,a.tZ)("meta",{property:"og:url",content:"".concat(c().siteUrl).concat(s.asPath)}),(0,a.tZ)("meta",{property:"og:site_name",content:c().title}),"Array"===o.constructor.name?o.map((function(e){var t=e.url;return(0,a.tZ)("meta",{property:"og:image",content:t},t)})):(0,a.tZ)("meta",{property:"og:image",content:o},o),(0,a.tZ)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,a.tZ)("meta",{name:"twitter:site",content:c().twitter_nickname}),(0,a.tZ)("meta",{name:"twitter:creator",content:c().twitter_nickname}),(0,a.tZ)("link",{rel:"canonical",href:d?"".concat(c().siteUrl,"/blog").concat(d):"".concat(c().siteUrl).concat(s.asPath)}),(0,a.tZ)("meta",{name:"google-site-verification",content:"sRNs-QI2BFxY7HPTZETOyTsQrKw3XycylW8R5EAa_Xo"})]})},d=function(e){var t=e.title,r=e.description,n=c().siteUrl+c().socialBanner,i=c().siteUrl+c().socialBanner;return(0,a.tZ)(o,{title:t,description:r,ogType:"website",ogImage:n,twImage:i})},s=function(e){var t=e.title,r=e.description,l=c().siteUrl+c().socialBanner,d=c().siteUrl+c().socialBanner,s=(0,i.useRouter)();return(0,a.BX)(a.HY,{children:[(0,a.tZ)(o,{title:t,description:r,ogType:"article",ogImage:l,twImage:d}),(0,a.tZ)(n.default,{children:(0,a.tZ)("link",{rel:"alternate",type:"application/rss+xml",title:"".concat(r," - RSS feed"),href:"".concat(c().siteUrl).concat(s.asPath,"/feed.xml")})})]})},u=function(e){var t=e.authorDetails,r=e.title,l=e.excerpt,d=e.date,s=e.lastmod,u=e.url,m=e.images,p=void 0===m?[]:m,h=e.permalink,g=((0,i.useRouter)(),new Date(d).toISOString()),f=new Date(s||d).toISOString(),y=(0===p.length?[c().socialBanner]:"string"===typeof p?[p]:p).map((function(e){return{"@type":"ImageObject",url:"".concat(c().siteUrl).concat(e)}})),x={"@context":"https://schema.org","@type":"Article",mainEntityOfPage:{"@type":"WebPage","@id":u},headline:r,image:y,datePublished:g,dateModified:f,author:t?t.map((function(e){return{"@type":"Person",name:e.name}})):{"@type":"Person",name:c().author},publisher:{"@type":"Organization",name:c().author,logo:{"@type":"ImageObject",url:"".concat(c().siteUrl).concat(c().siteLogo)}},description:l},v=y[0].url;return(0,a.BX)(a.HY,{children:[(0,a.tZ)(o,{title:"".concat(r," - ").concat(c().title),description:l,ogType:"article",ogImage:y,twImage:v,canonicalUrl:h}),(0,a.BX)(n.default,{children:[d&&(0,a.tZ)("meta",{property:"article:published_time",content:g}),s&&(0,a.tZ)("meta",{property:"article:modified_time",content:f}),(0,a.tZ)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(x,null,2)}})]})]})}},2540:function(e,t,r){"use strict";var a=r(7320),n=r(7059),i=r.n(n),l=r(1720),c=r(523),o=r.n(c);t.Z=function(){var e=(0,l.useState)(!1),t=e[0],r=e[1];(0,l.useEffect)((function(){o().polyfill();var e=function(){window.scrollY>50?r(!0):r(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]);return(0,a.BX)("div",{className:"fixed right-8 bottom-8 hidden flex-col gap-3 ".concat(t?"md:flex":"md:hidden"),children:[i().comment.provider&&(0,a.tZ)("button",{"aria-label":"Scroll To Comment",type:"button",onClick:function(){document.getElementById("comment").scrollIntoView()},className:"rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600",children:(0,a.tZ)("svg",{className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:(0,a.tZ)("path",{fillRule:"evenodd",d:"M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z",clipRule:"evenodd"})})}),(0,a.tZ)("button",{"aria-label":"Scroll To Top",type:"button",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},className:"rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600",children:(0,a.tZ)("svg",{className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:(0,a.tZ)("path",{fillRule:"evenodd",d:"M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z",clipRule:"evenodd"})})})]})}},2917:function(e,t,r){"use strict";var a=r(7320),n=r(1664),i=r(7836);t.Z=function(e){var t=e.text;return(0,a.tZ)(n.default,{href:"/tags/".concat((0,i.Z)(t)),children:(0,a.tZ)("a",{className:"mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:t.split(" ").join("-")})})}},9367:function(e,t,r){"use strict";var a=r(7320),n=r(7059),i=r.n(n),l=r(5152),c=(0,l.default)((function(){return r.e(369).then(r.bind(r,369))}),{loadableGenerated:{webpack:function(){return[369]}},ssr:!1}),o=(0,l.default)((function(){return r.e(13).then(r.bind(r,6013))}),{loadableGenerated:{webpack:function(){return[6013]}},ssr:!1}),d=(0,l.default)((function(){return r.e(970).then(r.bind(r,9970))}),{loadableGenerated:{webpack:function(){return[9970]}},ssr:!1});t.Z=function(e){var t,r=e.frontMatter,n=null===i()||void 0===i()?void 0:i().comment;if(!n||0===Object.keys(n).length)return(0,a.tZ)(a.HY,{});switch(i().comment.giscusConfig.mapping||i().comment.utterancesConfig.issueTerm){case"pathname":t=r.slug;break;case"url":t=window.location.href;break;case"title":t=r.title}return(0,a.BX)("div",{id:"comment",children:[i().comment&&"giscus"===i().comment.provider&&(0,a.tZ)(o,{mapping:t}),i().comment&&"utterances"===i().comment.provider&&(0,a.tZ)(c,{issueTerm:t}),i().comment&&"disqus"===i().comment.provider&&(0,a.tZ)(d,{frontMatter:r})]})}},4152:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s}});var a=r(7320),n=r(7059),i=r.n(n),l=r(2578),c=r(6009),o=r(8590),d=r(4373);function s(e){var t=e.children,r=e.frontMatter,n=r.name,s=r.avatar,u=r.occupation,m=r.company,p=r.companyLink,h=(r.email,r.twitter),g=r.linkedin,f=r.github;return(0,a.BX)(a.HY,{children:[(0,a.tZ)(o.TQ,{title:"About - ".concat(n," - ").concat(i().title),description:"About me - ".concat(n)}),(0,a.BX)("div",{className:"divide-y",children:[(0,a.tZ)("div",{className:"space-y-2 pt-6 pb-8 md:space-y-5",children:(0,a.tZ)("h1",{className:"text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14",children:"About"})}),(0,a.BX)("div",{className:"items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0",children:[(0,a.BX)("div",{className:"flex flex-col items-center pt-8",children:[(0,a.tZ)(c.Z,{src:s,alt:"avatar",width:"192px",height:"192px",className:"h-48 w-48 rounded-full"}),(0,a.tZ)("h3",{className:"pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight",children:n}),(0,a.tZ)("div",{className:"text-gray-500 dark:text-gray-400",children:u}),(0,a.tZ)("div",{className:"text-gray-500 dark:text-gray-400",children:(0,a.tZ)(d.Z,{href:p,children:m})}),(0,a.BX)("div",{className:"flex space-x-3 pt-6",children:[(0,a.tZ)(l.Z,{kind:"github",href:f}),(0,a.tZ)(l.Z,{kind:"linkedin",href:g}),(0,a.tZ)(l.Z,{kind:"twitter",href:h})]})]}),(0,a.tZ)("div",{className:"prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2",children:t})]})]})]})}},9795:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var a=r(7320),n=r(4373),i=r(2917),l=(r(7059),r(1720));function c(e){var t=e.totalPages,r=e.currentPage,i=parseInt(r)-1>0,l=parseInt(r)+1<=parseInt(t);return(0,a.tZ)("div",{className:"space-y-2 pt-6 pb-8 md:space-y-5",children:(0,a.BX)("nav",{className:"flex justify-between",children:[!i&&(0,a.tZ)("button",{rel:"previous",className:"cursor-auto disabled:opacity-50",disabled:!i,children:"Precedenti"}),i&&(0,a.tZ)(n.Z,{href:r-1===1?"/blog/":"/blog/page/".concat(r-1),children:(0,a.tZ)("button",{rel:"previous",children:"Precedenti"})}),(0,a.BX)("span",{children:[r," di ",t]}),!l&&(0,a.tZ)("button",{rel:"next",className:"cursor-auto disabled:opacity-50",disabled:!l,children:"Successivi"}),l&&(0,a.tZ)(n.Z,{href:"/blog/page/".concat(r+1),children:(0,a.tZ)("button",{rel:"next",children:"Successivi"})})]})})}var o=r(811);function d(e){var t=e.posts,r=e.title,d=e.initialDisplayPosts,s=void 0===d?[]:d,u=e.pagination,m=(0,l.useState)(""),p=m[0],h=m[1],g=t.filter((function(e){var t=e.title+e.excerpt;return e.tag&&(t+=e.tag.join(" ")),e.tags&&(t+=e.tags.join(" ")),t.toLowerCase().includes(p.toLowerCase())})),f=s.length>0&&!p?s:g;return(0,a.BX)(a.HY,{children:[(0,a.BX)("div",{className:"divide-y",children:[(0,a.BX)("div",{className:"space-y-2 pt-6 pb-8 md:space-y-5",children:[(0,a.tZ)("h1",{className:"text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14",children:r}),(0,a.BX)("div",{className:"relative",children:[(0,a.tZ)("input",{"aria-label":"Cerca articoli",type:"text",onChange:function(e){return h(e.target.value)},placeholder:"Cerca articoli",className:"block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"}),(0,a.tZ)("svg",{className:"absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.tZ)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})]})]}),(0,a.BX)("ul",{children:[!g.length&&"No posts found.",f.map((function(e){var t=e.slug,r=e.date,l=e.title,c=e.excerpt,d=e.tags,s=e.tag;return(0,a.tZ)("li",{className:"py-4",children:(0,a.BX)("article",{className:"space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0",children:[(0,a.BX)("dl",{children:[(0,a.tZ)("dt",{className:"sr-only",children:"Pubblicato il"}),(0,a.tZ)("dd",{className:"text-base font-medium leading-6 text-gray-500 dark:text-gray-400",children:(0,a.tZ)("time",{dateTime:r,children:(0,o.Z)(r)})})]}),(0,a.BX)("div",{className:"space-y-3 xl:col-span-3",children:[(0,a.BX)("div",{children:[(0,a.tZ)("h3",{className:"text-2xl font-bold leading-8 tracking-tight",children:(0,a.tZ)(n.Z,{href:"/blog/".concat(t),className:"text-gray-900 dark:text-gray-100",children:l})}),(0,a.BX)("div",{className:"flex flex-wrap",children:[d&&d.map((function(e){return(0,a.tZ)(i.Z,{text:e},e)})),s&&s.map((function(e){return(0,a.tZ)(i.Z,{text:e},e)}))]})]}),(0,a.tZ)("div",{className:"prose max-w-none text-gray-500 dark:text-gray-400",children:c})]})]})},t)}))]})]}),u&&u.totalPages>1&&!p&&(0,a.tZ)(c,{currentPage:u.currentPage,totalPages:u.totalPages})]})}},3156:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return m}});var a=r(7320),n=r(4373),i=r(8215),l=r(9072),c=r(8590),o=r(7059),d=r.n(o),s=r(811),u=(r(9367),r(2540));function m(e){var t=e.frontMatter,r=(e.authorDetails,e.next),o=e.prev,m=e.children,p=t.date,h=t.title;return(0,a.BX)(l.Z,{children:[(0,a.tZ)(c.TQ,{title:"".concat(h," - ").concat(d().title),description:h}),(0,a.tZ)(u.Z,{}),(0,a.tZ)("article",{children:(0,a.BX)("div",{children:[(0,a.tZ)("header",{children:(0,a.BX)("div",{className:"space-y-1 border-b border-gray-200 pb-10 text-center dark:border-gray-700",children:[(0,a.tZ)("dl",{children:(0,a.BX)("div",{children:[(0,a.tZ)("dt",{className:"sr-only",children:"Pubblicato il"}),(0,a.tZ)("dd",{className:"text-base font-medium leading-6 text-gray-500 dark:text-gray-400",children:(0,a.tZ)("time",{dateTime:p,children:(0,s.Z)(p)})})]})}),(0,a.tZ)("div",{children:(0,a.tZ)(i.Z,{children:h})})]})}),(0,a.BX)("div",{className:"divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0 ",style:{gridTemplateRows:"auto 1fr"},children:[(0,a.tZ)("div",{className:"divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0",children:(0,a.tZ)("div",{className:"prose max-w-none pt-10 pb-8 dark:prose-dark",children:m})}),(0,a.tZ)("footer",{children:(0,a.BX)("div",{className:"flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base",children:[o&&(0,a.tZ)("div",{className:"pt-4 xl:pt-8",children:(0,a.BX)(n.Z,{href:"/blog/".concat(o.slug),className:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:["\u2190 ",o.title]})}),r&&(0,a.tZ)("div",{className:"pt-4 xl:pt-8",children:(0,a.BX)(n.Z,{href:"/blog/".concat(r.slug),className:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:[r.title," \u2192"]})})]})})]})]})})]})}},5105:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return x}});var a=r(7320),n=r(4373),i=r(8215),l=r(9072),c=r(8590),o=r(6009),d=r(2917),s=r(7059),u=r.n(s),m=r(9367),p=r(2540);function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){h(e,t,r[t])}))}return e}var f=function(e){return"https://mobile.twitter.com/search?q=".concat(encodeURIComponent("".concat(u().siteUrl,"/blog/").concat(e)))},y={weekday:"long",year:"numeric",month:"long",day:"numeric"};function x(e){var t=e.frontMatter,r=e.authorDetails,s=e.next,h=e.prev,x=e.children,v=t.slug,b=(t.fileName,t.date),Z=t.title,w=t.tags,k=t.tag;return(0,a.BX)(l.Z,{children:[(0,a.tZ)(c.Uy,g({url:"".concat(u().siteUrl,"/blog/").concat(v),authorDetails:r},t)),(0,a.tZ)(p.Z,{}),(0,a.tZ)("article",{children:(0,a.BX)("div",{className:"xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700",children:[(0,a.tZ)("header",{className:"pt-6 xl:pb-6",children:(0,a.BX)("div",{className:"space-y-1 text-center",children:[(0,a.tZ)("dl",{className:"space-y-10",children:(0,a.BX)("div",{children:[(0,a.tZ)("dt",{className:"sr-only",children:"Pubblicato il"}),(0,a.tZ)("dd",{className:"text-base font-medium leading-6 text-gray-500 dark:text-gray-400",children:(0,a.tZ)("time",{dateTime:b,children:new Date(b).toLocaleDateString(u().locale,y)})})]})}),(0,a.tZ)("div",{children:(0,a.tZ)(i.Z,{children:Z})})]})}),(0,a.BX)("div",{className:"divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0",style:{gridTemplateRows:"auto 1fr"},children:[(0,a.BX)("dl",{className:"pt-6 pb-10 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700",children:[(0,a.tZ)("dt",{className:"sr-only",children:"Autori"}),(0,a.tZ)("dd",{children:(0,a.tZ)("ul",{className:"flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8",children:r.map((function(e){return(0,a.BX)("li",{className:"flex items-center space-x-2",children:[e.avatar&&(0,a.tZ)(o.Z,{src:e.avatar,width:"38px",height:"38px",alt:"avatar",className:"h-10 w-10 rounded-full"}),(0,a.BX)("dl",{className:"whitespace-nowrap text-sm font-medium leading-5",children:[(0,a.tZ)("dt",{className:"sr-only",children:"Name"}),(0,a.tZ)("dd",{className:"text-gray-900 dark:text-gray-100",children:e.name}),(0,a.tZ)("dt",{className:"sr-only",children:"Twitter"}),(0,a.tZ)("dd",{children:e.twitter&&(0,a.tZ)(n.Z,{href:e.twitter,className:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:e.twitter.replace("https://twitter.com/","@")})})]})]},e.name)}))})})]}),(0,a.BX)("div",{className:"divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0",children:[(0,a.tZ)("div",{className:"prose max-w-none pt-10 pb-8 dark:prose-dark",children:x}),(0,a.tZ)("div",{className:"pt-6 pb-6 text-sm text-gray-700 dark:text-gray-300",children:(0,a.tZ)(n.Z,{href:f(v),rel:"nofollow",children:"Discutiamone su Twitter"})}),(0,a.tZ)(m.Z,{frontMatter:t})]}),(0,a.BX)("footer",{children:[(0,a.BX)("div",{className:"divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y",children:[w&&(0,a.BX)("div",{className:"py-4 xl:py-8",children:[(0,a.tZ)("h2",{className:"text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400",children:"Tags"}),(0,a.tZ)("div",{className:"flex flex-wrap",children:w&&w.map((function(e){return(0,a.tZ)(d.Z,{text:e},e)}))})]}),k&&(0,a.BX)("div",{className:"py-4 xl:py-8",children:[(0,a.tZ)("h2",{className:"text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400",children:"Tags"}),(0,a.tZ)("div",{className:"flex flex-wrap",children:k&&k.map((function(e){return(0,a.tZ)(d.Z,{text:e},e)}))})]}),(s||h)&&(0,a.BX)("div",{className:"flex justify-between py-4 xl:block xl:space-y-8 xl:py-8",children:[h&&(0,a.BX)("div",{children:[(0,a.tZ)("h2",{className:"text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400",children:"Articolo Precedente"}),(0,a.tZ)("div",{className:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:(0,a.tZ)(n.Z,{href:"/blog/".concat(h.slug),children:h.title})})]}),s&&(0,a.BX)("div",{children:[(0,a.tZ)("h2",{className:"text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400",children:"Articolo Successivo"}),(0,a.tZ)("div",{className:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:(0,a.tZ)(n.Z,{href:"/blog/".concat(s.slug),children:s.title})})]})]})]}),(0,a.tZ)("div",{className:"pt-4 xl:pt-8",children:(0,a.tZ)(n.Z,{href:"/blog",className:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:"\u2190 Torna al blog"})})]})]})]})})]})}},3259:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return g}});var a=r(7320),n=r(4373),i=r(8215),l=r(9072),c=r(8590),o=r(7059),d=r.n(o),s=r(811),u=r(9367),m=r(2540);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){p(e,t,r[t])}))}return e}function g(e){var t=e.frontMatter,r=(e.authorDetails,e.next),o=e.prev,p=e.children,g=t.date,f=t.title;return(0,a.BX)(l.Z,{children:[(0,a.tZ)(c.Uy,h({url:"".concat(d().siteUrl,"/blog/").concat(t.slug)},t)),(0,a.tZ)(m.Z,{}),(0,a.tZ)("article",{children:(0,a.BX)("div",{children:[(0,a.tZ)("header",{children:(0,a.BX)("div",{className:"space-y-1 border-b border-gray-200 pb-10 text-center dark:border-gray-700",children:[(0,a.tZ)("dl",{children:(0,a.BX)("div",{children:[(0,a.tZ)("dt",{className:"sr-only",children:"Pubblicato il"}),(0,a.tZ)("dd",{className:"text-base font-medium leading-6 text-gray-500 dark:text-gray-400",children:(0,a.tZ)("time",{dateTime:g,children:(0,s.Z)(g)})})]})}),(0,a.tZ)("div",{children:(0,a.tZ)(i.Z,{children:f})})]})}),(0,a.BX)("div",{className:"divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0 ",style:{gridTemplateRows:"auto 1fr"},children:[(0,a.tZ)("div",{className:"divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0",children:(0,a.tZ)("div",{className:"prose max-w-none pt-10 pb-8 dark:prose-dark",children:p})}),(0,a.tZ)(u.Z,{frontMatter:t}),(0,a.tZ)("footer",{children:(0,a.BX)("div",{className:"flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base",children:[o&&(0,a.tZ)("div",{className:"pt-4 xl:pt-8",children:(0,a.BX)(n.Z,{href:"/blog/".concat(o.slug),className:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:["\u2190 ",o.title]})}),r&&(0,a.tZ)("div",{className:"pt-4 xl:pt-8",children:(0,a.BX)(n.Z,{href:"/blog/".concat(r.slug),className:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:[r.title," \u2192"]})})]})})]})]})})]})}},811:function(e,t,r){"use strict";var a=r(7059),n=r.n(a);t.Z=function(e){return new Date(e).toLocaleDateString(n().locale,{year:"numeric",month:"long",day:"numeric"})}},7836:function(e,t,r){"use strict";var a=r(9671);t.Z=function(e){return(0,a.slug)(e)}}}]);