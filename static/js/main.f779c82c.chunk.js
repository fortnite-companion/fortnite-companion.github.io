(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){e.exports=a(267)},105:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){},119:function(e,t,a){},120:function(e,t,a){},121:function(e,t,a){},122:function(e,t,a){},123:function(e,t,a){},124:function(e,t,a){},125:function(e,t,a){},262:function(e,t,a){},263:function(e,t,a){},264:function(e,t,a){},265:function(e,t,a){},266:function(e,t,a){},267:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(97),c=a.n(s),i=(a(105),a(6)),o=a.n(i),l=a(9),m=a(1),u=a(2),p=a(4),h=a(3),d=a(5),f=(a(107),a(108),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){console.log(this.props.weapon)}},{key:"render",value:function(){return r.a.createElement("div",{className:this.props.rarity+" weapon-card"},r.a.createElement("h1",{className:"weapon-name"},this.props.weaponName),r.a.createElement("img",{className:"weapon-image",src:this.props.weaponImage}))}}]),t}(n.Component)),v=a(16),E=(a(109),a(110),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"header"},r.a.createElement("div",null,r.a.createElement(v.b,{to:"/",className:"link-text"},"Home")),r.a.createElement("div",null,r.a.createElement(v.b,{to:"/store",className:"link-text"},"Daily Store")),r.a.createElement("div",null,r.a.createElement(v.b,{to:"/weapons",className:"link-text"},"Weapons")),r.a.createElement("div",{className:"locked"},r.a.createElement(v.b,{to:"/challenges",className:"link-text locked"},"Challenges (Coming Soon!)")))}}]),t}(n.Component)),b=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"loading"},r.a.createElement("div",{className:"obj"}),r.a.createElement("div",{className:"obj"}),r.a.createElement("div",{className:"obj"}),r.a.createElement("div",{className:"obj"}),r.a.createElement("div",{className:"obj"}),r.a.createElement("div",{className:"obj"}),r.a.createElement("div",{className:"obj"}),r.a.createElement("div",{className:"obj"}),r.a.createElement("div",{className:"obj"})))}}]),t}(n.Component),g=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={weapons:"",weaponToShow:[],isLoading:!0},a.getWeapons=Object(l.a)(o.a.mark(function e(){var t,n,r,s,c,i;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"https://fortnite-public-api.theapinetwork.com/prod09/weapons/get",e.next=3,fetch("https://fortnite-public-api.theapinetwork.com/prod09/weapons/get").then(function(e){if(!e.ok)throw Error(e.statusText);return e});case 3:if(!(t=e.sent).ok){e.next=16;break}return e.next=7,t.text();case 7:for(i in n=e.sent,r=JSON.parse(n),a.setState({weapons:r}),s=[],c=r.weapons)s.push(c[i]);console.log(s),a.setState({weaponToShow:s}),null!=r&&a.setState({isLoading:!1});case 16:case"end":return e.stop()}},e)})),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getWeapons()}},{key:"render",value:function(){return this.state.isLoading?r.a.createElement(r.a.Fragment,null,r.a.createElement(E,null),r.a.createElement(b,null)):r.a.createElement(r.a.Fragment,null,r.a.createElement(E,null),r.a.createElement("div",{className:"content content-weapons-wrapper"},r.a.createElement("div",{className:"content-weapons"},r.a.createElement("div",{className:"weapon-box"},r.a.createElement("h1",{className:"title title-weapon"},"Weapons"),r.a.createElement("div",{className:"line line-weapon"}),r.a.createElement("div",{className:"weapons"},this.state.weaponToShow.map(function(e){return r.a.createElement(f,{weaponName:e.name,weaponImage:e.images.image,rarity:e.rarity})}))))))}}]),t}(n.Component),w=(a(119),a(120),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={serverStatus:[]},a.getServerStatus=Object(l.a)(o.a.mark(function e(){var t,n,r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"https://fortnite-public-api.theapinetwork.com/prod09/status/fortnite_server_status",e.next=3,fetch("https://fortnite-public-api.theapinetwork.com/prod09/status/fortnite_server_status").then(function(e){if(!e.ok)throw Error(e.statusText);return e});case 3:if(!(t=e.sent).ok){e.next=10;break}return e.next=7,t.text();case 7:n=e.sent,r=JSON.parse(n),a.setState({serverStatus:r});case 10:case"end":return e.stop()}},e)})),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getServerStatus()}},{key:"render",value:function(){return"UP"===this.state.serverStatus.status?r.a.createElement("div",{className:"serverContent"},r.a.createElement("p",{className:"serverText"},r.a.createElement("span",{className:"serverUp"}),this.state.serverStatus.message)):r.a.createElement("div",{className:"serverContent"},r.a.createElement("p",{className:"serverText"},r.a.createElement("span",{className:"serverDown"}),"Fortnite is down.."))}}]),t}(n.Component)),N=(a(121),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",null,r.a.createElement(w,null)),r.a.createElement("div",null,r.a.createElement("p",{className:"disclaimer footer-text"},"This service is not associated with Epic Games and is developed without their granted permisson")),r.a.createElement("div",null,r.a.createElement("p",{className:"footer-text credit"},"Devloped by magnusrambech & thomasrognes")))}}]),t}(n.Component));n.Component,Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(122),a(123);var k=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={username:""},a.handleSubmit=function(e){""!=a.state.username.length&&a.getUserId()},a.getUserId=Object(l.a)(o.a.mark(function e(){var t,n,r,s,c,i;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://fortnite-public-api.theapinetwork.com/prod09/users/id?username="+a.state.username,e.next=3,fetch(t).then(function(e){if(!e.ok)throw Error(e.statusText);return e});case 3:if(!(n=e.sent).ok){e.next=12;break}return e.next=7,n.text();case 7:r=e.sent,s=JSON.parse(r),c=s.uid,i=a.state.username,null!=c&&a.props.history.push("profile/"+i+"/"+c);case 12:case"end":return e.stop()}},e)})),a.handleChangeUsername=function(e){a.setState({username:e.target.value})},a.handleKeypress=function(e){"Enter"==e.key&&a.handleSubmit()},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,null),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"content-frontpage"},r.a.createElement("h1",{className:"title-main"},"Fortnite Companion"),r.a.createElement("div",{className:"line"}),r.a.createElement("input",{required:!0,type:"text",placeholder:"Enter your Epic account",onChange:this.handleChangeUsername,onKeyDown:this.handleKeypress}),r.a.createElement("button",{onClick:this.handleSubmit},"Track"),r.a.createElement(N,null))))}}]),t}(n.Component),j=(a(124),a(125),function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(p.a)(this,Object(h.a)(t).call(this))).state={stats:[],username:"",user_id:"",loading:!1,profileFetched:!1},e.fetchparams=function(t){var a=e.props.match.params,n=a.username,r=a.userid;e.setState({username:n,user_id:r})},e.getStats=Object(l.a)(o.a.mark(function t(){var a,n,r,s;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({loading:!0}),t.next=3,e.fetchparams();case 3:return a="https://fortnite-public-api.theapinetwork.com/prod09/users/public/br_stats_v2?user_id="+e.state.user_id,t.next=6,fetch(a).then(function(e){if(!e.ok)throw Error(e.statusText);return e});case 6:if(!(n=t.sent)){t.next=15;break}return t.next=10,n.text();case 10:r=t.sent,s=JSON.parse(r),e.setState({stats:s}),e.setState({loading:!1}),null!=s.epicName&&e.setState({profileFetched:!0});case 15:case"end":return t.stop()}},t)})),e}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getStats()}},{key:"render",value:function(){return this.state.loading?r.a.createElement(r.a.Fragment,null,r.a.createElement(E,null),r.a.createElement(b,null),r.a.createElement(N,null)):this.state.profileFetched?r.a.createElement(r.a.Fragment,null,r.a.createElement(E,null),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"content-profile"},r.a.createElement("h1",{className:"title"},"Overall data for",r.a.createElement("span",{className:"username"}," ",this.state.username)),r.a.createElement("div",{className:"line"}),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"stat-container"},r.a.createElement("span",{className:"label"},"Kills",r.a.createElement("p",{className:"stat"},this.state.stats.overallData.defaultModes.kills)),r.a.createElement("span",{className:"label"},"Wins",r.a.createElement("p",{className:"stat"},this.state.stats.overallData.defaultModes.placetop1)),r.a.createElement("span",{className:"label"},"Matches",r.a.createElement("p",{className:"stat"},this.state.stats.overallData.defaultModes.matchesplayed)))),r.a.createElement(v.b,{to:"/"},"back"))),r.a.createElement(N,null)):r.a.createElement("div",{className:"content"},r.a.createElement("h1",null,this.state.username),r.a.createElement(v.b,{to:"/"},"back"),r.a.createElement(N,null))}}]),t}(n.Component)),y=a(18),O=(a(126),a(262),a(263),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return null!=this.state.item?r.a.createElement(b,null):r.a.createElement("div",{className:"item-card"},r.a.createElement("img",{className:"store-image",src:this.props.item.item.images.background}),r.a.createElement("h1",{className:"item-name item"},this.props.item.item.name),r.a.createElement("p",{className:"item-price item"},this.props.item.cost,r.a.createElement("img",{className:"vbucks-item-card",src:this.props.vbucks})))}}]),t}(n.Component)),x=(a(264),a(265),a(266),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={seconds:0,time:{}},a.startTimer=function(){a.setState({seconds:a.secondsUntilMidnight()}),a.tick()},a.tick=function(){setInterval(a.countdown,1e3)},a.countdown=function(){var e=a.state.seconds-1;a.setState({seconds:e,time:a.secondsToTime(e)})},a.secondsUntilMidnight=function(){var e=new Date;return e.setHours(24),e.setMinutes(0),e.setSeconds(0),e.setMilliseconds(0),(e.getTime()-(new Date).getTime())/1e3},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.startTimer()}},{key:"secondsToTime",value:function(e){var t=e%3600,a=t%60;return{h:Math.floor(e/3600),m:Math.floor(t/60),s:Math.ceil(a)}}},{key:"render",value:function(){return null!=this.state.time.h?r.a.createElement("span",{className:"timer"},"New deals in"," "+this.state.time.h+"h "+this.state.time.m+"m "+this.state.time.s+"s"):r.a.createElement("span",{className:"timer"},"Getting time..")}}]),t}(n.Component)),S=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!0,store:"",itemsArray:[],featuredItems:[],isVisible:"hidden"},a.getCurrentStore=Object(l.a)(o.a.mark(function e(){var t,n,r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"https://fortnite-public-api.theapinetwork.com/prod09/store/get?language=en",e.next=3,fetch("https://fortnite-public-api.theapinetwork.com/prod09/store/get?language=en").then(function(e){if(!e.ok)throw Error(e.statusText);return e});case 3:if(!(t=e.sent)){e.next=12;break}return e.next=7,t.text();case 7:n=e.sent,r=JSON.parse(n),a.setState({store:r}),a.setState({loading:!1}),null!=r&&(a.createItemArray(),a.setState({isLoading:!1,isVisible:"visible"}));case 12:case"end":return e.stop()}},e)})),a.createItemArray=function(){var e=a.state.store.items,t=[],n=[];for(var r in e)1===e[r].featured?n.push(e[r]):t.push(e[r]);a.setState({itemsArray:t,featuredItems:n})},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getCurrentStore()}},{key:"render",value:function(){var e=this;return this.state.isLoading?r.a.createElement(r.a.Fragment,null,r.a.createElement(E,null),r.a.createElement(b,null)):r.a.createElement(r.a.Fragment,null,r.a.createElement(E,null),r.a.createElement("div",{className:"content content-store-wrapper"},r.a.createElement("div",{className:"content-store "+this.state.isVisible},r.a.createElement("div",{className:"store-box featured-box"},r.a.createElement("div",{className:"store-category"},r.a.createElement("h1",{className:"title title-store"},"Featured"),r.a.createElement("span",{className:"timer"},"Exclusive deals"),r.a.createElement("div",{className:"line line-store"})),r.a.createElement("div",{className:"item-list"},this.state.featuredItems.map(function(t){return r.a.createElement(O,{vbucks:e.state.store.vbucks,key:t.itemid,item:t})}))),r.a.createElement("div",{className:"store-box daily-box"},r.a.createElement("div",{className:"store-category"},r.a.createElement("h1",{className:"title title-store"},"Daily Store"),r.a.createElement(x,null),r.a.createElement("div",{className:"line line-store"})),r.a.createElement("div",{className:"item-list"},this.state.itemsArray.map(function(t){return r.a.createElement(O,{vbucks:e.state.store.vbucks,key:t.itemid,item:t})}))))))}}]),t}(n.Component),C=r.a.createElement(v.a,null,r.a.createElement("div",{style:{width:"100%",height:"100%"}},r.a.createElement(y.a,{exact:!0,path:"/",component:k}),r.a.createElement(y.a,{path:"/weapons",component:g}),r.a.createElement(y.a,{path:"/profile/:username/:userid",component:j}),r.a.createElement(y.a,{path:"/store",component:S})));c.a.render(C,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[100,1,2]]]);
//# sourceMappingURL=main.f779c82c.chunk.js.map