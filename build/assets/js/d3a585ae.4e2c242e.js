"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5437],{5680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>y});var a=r(6540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),d=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(r),p=n,y=c["".concat(l,".").concat(p)]||c[p]||m[p]||o;return r?a.createElement(y,i(i({ref:t},u),{},{components:r})):a.createElement(y,i({ref:t},u))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,i[1]=s;for(var d=2;d<o;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},7812:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=r(8168),n=(r(6540),r(5680));const o={id:"faq",description:"Self-serve yourself with the most common questions with Reedroux!",title:"Frequently Asked Questions",slug:"/faq"},i=void 0,s={unversionedId:"Advanced/faq",id:"Advanced/faq",title:"Frequently Asked Questions",description:"Self-serve yourself with the most common questions with Reedroux!",source:"@site/docs/Advanced/FAQ.mdx",sourceDirName:"Advanced",slug:"/faq",permalink:"/faq",draft:!1,editUrl:"https://github.com/reedroux/docs/edit/main/docs/Advanced/FAQ.mdx",tags:[],version:"current",frontMatter:{id:"faq",description:"Self-serve yourself with the most common questions with Reedroux!",title:"Frequently Asked Questions",slug:"/faq"},sidebar:"sidebars",previous:{title:"Commands",permalink:"/commands"},next:{title:"Custom Playlists",permalink:"/playlists"}},l={},d=[{value:"Introduction",id:"introduction",level:2},{value:"What is Reedroux?",id:"what-is-reedroux",level:3},{value:"How can I add Reedroux to my Discord Server?",id:"how-can-i-add-reedroux-to-my-discord-server",level:3},{value:"Basic Information",id:"basic-information",level:2},{value:"How can I change Reedroux&#39;s nickname in my server?",id:"how-can-i-change-reedrouxs-nickname-in-my-server",level:3},{value:"What are the different entries in the <code>me ping</code> command?",id:"what-are-the-different-entries-in-the-me-ping-command",level:3},{value:"Does Reedroux save its settings when re-inviting the bot?",id:"does-reedroux-save-its-settings-when-re-inviting-the-bot",level:3},{value:"Limitations/Restrictions",id:"limitationsrestrictions",level:2},{value:"Can I change Reedroux&#39;s Profile Picture/Avatar in my server?",id:"can-i-change-reedrouxs-profile-pictureavatar-in-my-server",level:3},{value:"Can I save or create playlists with Reedroux?",id:"can-i-save-or-create-playlists-with-reedroux",level:3},{value:"What music sites does Reedroux currently support?",id:"what-music-sites-does-reedroux-currently-support",level:3},{value:"Can I make custom commands for Reedroux?",id:"can-i-make-custom-commands-for-reedroux",level:3},{value:"Can Reedroux stream the video of the song that is being played?",id:"can-reedroux-stream-the-video-of-the-song-that-is-being-played",level:3},{value:"Can Reedroux play 24/7 Music?",id:"can-reedroux-play-247-music",level:3},{value:"Can Reedroux execute commands given by other bots?",id:"can-reedroux-execute-commands-given-by-other-bots",level:3},{value:"Can Reedroux play music in Stage Channels?",id:"can-reedroux-play-music-in-stage-channels",level:3},{value:"What is Reedroux&#39;s Discord Server used for?",id:"what-is-reedrouxs-discord-server-used-for",level:3}],u={toc:d},c="wrapper";function m(e){let{components:t,...r}=e;return(0,n.yg)(c,(0,a.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"introduction"},"Introduction"),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"what-is-reedroux"},"What is Reedroux?"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/"},"Reedroux")," is a feature-rich, high-performance Discord bot. It is designed to eliminate any need for multiple bots and to provide the best companion experience in your server."),(0,n.yg)("h3",{id:"how-can-i-add-reedroux-to-my-discord-server"},"How can I add Reedroux to my Discord Server?"),(0,n.yg)("p",null,"Please ",(0,n.yg)("a",{parentName:"p",href:"/adding-mewwme"},"click here")," to check out our guide on adding Reedroux."),(0,n.yg)("h2",{id:"basic-information"},"Basic Information"),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"how-can-i-change-reedrouxs-nickname-in-my-server"},"How can I change Reedroux's nickname in my server?"),(0,n.yg)("admonition",{title:"note",type:"note"},(0,n.yg)("p",{parentName:"admonition"},"Make sure you have the ",(0,n.yg)("inlineCode",{parentName:"p"},"Manage Nicknames")," permission!")),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Right Click")," Reedroux's name and press ",(0,n.yg)("inlineCode",{parentName:"li"},"Change Nickname"),". A menu will pop up and ask you to enter your desired name."),(0,n.yg)("li",{parentName:"ol"},"Type in your desired nickname."),(0,n.yg)("li",{parentName:"ol"},"Press ",(0,n.yg)("inlineCode",{parentName:"li"},"Save")," and you're good to go.")),(0,n.yg)("h3",{id:"what-are-the-different-entries-in-the-me-ping-command"},"What are the different entries in the ",(0,n.yg)("inlineCode",{parentName:"h3"},"me ping")," command?"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"center"},"Emoji"),(0,n.yg)("th",{parentName:"tr",align:"center"},"Meaning"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"Ping"),(0,n.yg)("td",{parentName:"tr",align:"center"},"Message response time")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"API"),(0,n.yg)("td",{parentName:"tr",align:"center"},"API response time")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"Database"),(0,n.yg)("td",{parentName:"tr",align:"center"},"Database response time")))),(0,n.yg)("h3",{id:"does-reedroux-save-its-settings-when-re-inviting-the-bot"},"Does Reedroux save its settings when re-inviting the bot?"),(0,n.yg)("p",null,"Yes, all Reedroux's settings will be saved"),(0,n.yg)("h2",{id:"limitationsrestrictions"},"Limitations/Restrictions"),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"can-i-change-reedrouxs-profile-pictureavatar-in-my-server"},"Can I change Reedroux's Profile Picture/Avatar in my server?"),(0,n.yg)("p",null,"No, Discord does not allow bots to change their profile picture/avatar per server."),(0,n.yg)("h3",{id:"can-i-save-or-create-playlists-with-reedroux"},"Can I save or create playlists with Reedroux?"),(0,n.yg)("p",null,"Yes! Reedroux does support the creation of custom playlists. Find out more about it ",(0,n.yg)("a",{parentName:"p",href:"playlists"},"here")),(0,n.yg)("h3",{id:"what-music-sites-does-reedroux-currently-support"},"What music sites does Reedroux currently support?"),(0,n.yg)("p",null,"These are the current sites that music can be played from."),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"https://www.spotify.com/"},"Spotify")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"https://www.soundcloud.com/"},"SoundCloud")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"https://music.apple.com"},"Apple Music")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"https://tidal.com/"},"Tidal")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"https://reddit.com"},"Reddit")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"https://www.twitch.tv/"},"Twitch")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"https://www.vimeo.com/"},"Vimeo")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"https://www.bandcamp.com"},"BandCamp")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"https://www.deezer.com/us/"},"Deezer")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"https://www.facebook.com"},"Facebook")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"https://getyarn.io/"},"Getyarn")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"https://music.yandex.com"},"Yandex Music")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"https://odysee.com/"},"Odysee")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"https://www.clyp.it/"},"Clyp")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"https://ocremix.org/"},"OcRemix")),(0,n.yg)("li",{parentName:"ol"},"Direct Links")),(0,n.yg)("h3",{id:"can-i-make-custom-commands-for-reedroux"},"Can I make custom commands for Reedroux?"),(0,n.yg)("p",null,"No, we do not allow custom commands/aliases."),(0,n.yg)("h3",{id:"can-reedroux-stream-the-video-of-the-song-that-is-being-played"},"Can Reedroux stream the video of the song that is being played?"),(0,n.yg)("p",null,"No, Discord does not allow bots to use the ",(0,n.yg)("inlineCode",{parentName:"p"},"Go Live")," feature."),(0,n.yg)("h3",{id:"can-reedroux-play-247-music"},"Can Reedroux play 24/7 Music?"),(0,n.yg)("p",null,"Yes! And it's ",(0,n.yg)("strong",{parentName:"p"},"100% free")," to do so. Just use the ",(0,n.yg)("inlineCode",{parentName:"p"},"me 247")," command."),(0,n.yg)("h3",{id:"can-reedroux-execute-commands-given-by-other-bots"},"Can Reedroux execute commands given by other bots?"),(0,n.yg)("p",null,"No, Reedroux doesn't respond to commands issued by other bots as it can be easily abused. This restriction will not be removed, nor will any exceptions be made."),(0,n.yg)("h3",{id:"can-reedroux-play-music-in-stage-channels"},"Can Reedroux play music in Stage Channels?"),(0,n.yg)("p",null,"Yes, all you need to do is making Reedroux a Stage Moderator. All commands work exactly the same when you use Reedroux in a normal voice channel."),(0,n.yg)("h3",{id:"what-is-reedrouxs-discord-server-used-for"},"What is Reedroux's Discord Server used for?"),(0,n.yg)("p",null,"Reedroux's Discord Server is a place built for everything related to Reedroux!"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Get help and support from our lovely Staff Members!"),(0,n.yg)("li",{parentName:"ol"},"You will be informed about Reedroux's new features and updates."),(0,n.yg)("li",{parentName:"ol"},"Stay up-to-date with news and announcements."),(0,n.yg)("li",{parentName:"ol"},"Make new feature suggestions for Reedroux."),(0,n.yg)("li",{parentName:"ol"},"Hang out with our amazing growing community members and staff!"),(0,n.yg)("li",{parentName:"ol"},"Join and enjoy our events that take place!")),(0,n.yg)("p",null,"To join our server, click ",(0,n.yg)("a",{parentName:"p",href:"https://reedroux.biz/support"},"here"),"."))}m.isMDXComponent=!0}}]);