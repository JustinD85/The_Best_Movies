(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,n){e.exports=n(64)},33:function(e,t,n){},41:function(e,t,n){},44:function(e,t,n){},50:function(e,t,n){},52:function(e,t,n){},54:function(e,t,n){},56:function(e,t,n){},58:function(e,t,n){},60:function(e,t,n){},62:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(26),c=n.n(o),s=(n(33),n(2)),i=n.n(s),u=n(4),l=n(10),p=n(11),m=n(15),f=n(12),v=n(16),h=n(46),d=n(68),E=n(7),b="https://falsemotive.io/api/",w=function(e,t){return{method:e,headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}},g=function(){var e=Object(u.a)(i.a.mark(function e(){var t,n,r,a,o=arguments;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:"",n=o.length>1?o[1]:void 0,e.next=4,fetch("".concat(b).concat(t),w("POST",n));case 4:if((r=e.sent).ok){e.next=7;break}throw new Error("".concat(r.statusText));case 7:return e.next=9,r.json();case 9:return a=e.sent,e.abrupt("return",a.data);case 11:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(u.a)(i.a.mark(function e(){var t,n,r,a,o=arguments;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:"",n=o.length>1?o[1]:void 0,e.next=4,fetch("".concat(b).concat(t),w("DELETE",n));case 4:if(r=e.sent,console.log(n),r.ok){e.next=8;break}throw new Error("".concat(r.statusText));case 8:return console.log(r),e.next=11,r.json();case 11:return a=e.sent,e.abrupt("return",a.results);case 13:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(u.a)(i.a.mark(function e(t){var n,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(b).concat(t));case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("".concat(n.statusText));case 5:return e.next=7,n.json();case 7:return r=e.sent,e.abrupt("return",r.data);case 9:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(u.a)(i.a.mark(function e(t){var n,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://falsemotive.io/newKey");case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r.results);case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),x=function(e){return{type:"SET_MOVIES",movies:e}},y=function(e,t){return{type:"SET_FAVORITES",favorites:e,user_id:t}},k=function(e){return{type:"SET_USER",user:e}},j=function(e){return{type:"SET_SHOULD_PROMPT_LOGIN",bool:e}},_=function(e){return{type:"SET_POPUP",bool:e}},N=n(43),C=(n(41),Object(E.b)(function(e){return{user:e.user}},function(e){return{setFavorites:function(t,n){return e(y(t,n))},setShouldPromptLogin:function(t){return e(j(t))},setPopup:function(t){return e(_(t))}}})(function(e){var t=e.movie,n=e.user,r=e.setShouldPromptLogin,o=e.setFavorites,c=e.isPopup,s=e.setPopup,l=function(){var e=Object(u.a)(i.a.mark(function e(){var a,c,s;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(!n);case 2:if(!n){e.next=24;break}if(a="users/".concat(n.id,"/favorites"),c="".concat(a,"/").concat(t.id),e.prev=6,t.isFavorite){e.next=12;break}return e.next=10,g("/users/favorites/new",t);case 10:e.next=14;break;case 12:return e.next=14,O(c,t);case 14:return e.next=16,P(a);case 16:s=e.sent,console.log(s,n),o(s,n.id),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(6),console.log(e.t0);case 24:case"end":return e.stop()}},e,this,[[6,21]])}));return function(){return e.apply(this,arguments)}}(),p=c?"popup":"Movie";return a.a.createElement("div",{className:p},c&&a.a.createElement(N.a,{onClick:function(){return s(!1)},to:"/"},"x"),c&&a.a.createElement("h1",{className:"movie-title"},t.title),c&&a.a.createElement("p",{className:"movie-title"},t.release_date),c&&a.a.createElement("iframe",{width:"560",height:"315",title:t.title,src:"https://www.youtube.com/embed/".concat(t.trailer),frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),!c&&a.a.createElement(N.a,{to:"/movies/".concat(t.id)},a.a.createElement("img",{onClick:function(){return s(!0)},src:"https://image.tmdb.org/t/p/w500"+t.poster_path,className:"movie-poster",alt:"movie poster"})),a.a.createElement("span",{className:"favorite-btn",onClick:function(){return l()}},t.isFavorite?"\u2b50":"\u2606"))})),T=n(65),L=(n(44),function(){return a.a.createElement("nav",{className:"Nav"},a.a.createElement(T.a,{exact:!0,to:"/",activeStyle:{color:"red"},name:"recent"},"Recent"),a.a.createElement(T.a,{exact:!0,to:"/favorites",activeStyle:{color:"red"},name:"favorites"},"Favorite Movies"),a.a.createElement(T.a,{exact:!0,to:"/popular",activeStyle:{color:"red"},name:"popular"},"Popular Movies"))}),F=(n(50),function(e){var t=e.movies;return a.a.createElement("div",{className:"Home"},a.a.createElement(L,null),a.a.createElement("section",{className:"View"},a.a.createElement(h.a,{path:"/",component:G}),a.a.createElement(h.a,{path:"/",render:function(e){var t=e.location;return a.a.createElement(R,{location:t})}}),a.a.createElement(h.a,{path:"/",render:function(e){var t=e.location;return a.a.createElement(R,{location:t})}}),a.a.createElement(h.a,{path:"/movies/:id",render:function(e){return function(e){var n=t.find(function(t){return t.id===parseInt(e.params.id)});return n?a.a.createElement(C,{key:JSON.stringify(n),movie:n,isPopup:!0}):a.a.createElement("div",null," Movie does not exist")}(e.match)}})))}),M=(n(52),function(e){var t=e.setShouldPromptLogin,n=e.setPopup;return n(!0),a.a.createElement("div",{className:"CreateAccountPrompt"},a.a.createElement("p",null,"Would you like to create an account?"),a.a.createElement(N.a,{to:"/create-user",onClick:function(){return t(!1)}}," YUSH"),a.a.createElement("button",{onClick:function(){t(!1),n(!1)}},"NAH"))}),U=(n(54),function(e){function t(){var e,n;Object(l.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(a)))).componentDidMount=Object(u.a)(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S("now_playing");case 2:return t=e.sent,e.next=5,t.forEach(function(){var e=Object(u.a)(i.a.mark(function e(t){var n,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id+"/videos",e.next=3,S(n);case 3:r=e.sent,t.trailer=r[0].key;case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}());case 5:n.props.setMovies(t);case 6:case"end":return e.stop()}},e,this)})),n}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.canPopup,r=t.setPopup,o=t.setShouldPromptLogin;return a.a.createElement("div",{className:"App"},a.a.createElement(h.a,{path:"/login",component:J}),a.a.createElement(h.a,{path:"/create-user",render:function(){return a.a.createElement(q,{setPopup:r})}}),a.a.createElement(h.a,{path:"/",render:function(){return n&&a.a.createElement(M,{setPopup:r,setShouldPromptLogin:o})}}),a.a.createElement(h.a,{path:"/",render:function(){return a.a.createElement(F,{movies:e.props.movies})}}))}}]),t}(r.Component)),I=Object(d.a)(Object(E.b)(function(e){return{movies:e.movies,canPopup:e.shouldPromptLogin,user:e.user}},function(e){return{setMovies:function(t){return e(x(t))},setShouldPromptLogin:function(t){return e(j(t))},setPopup:function(t){return e(_(t))}}})(U)),D=n(69),R=(n(56),Object(E.b)(function(e){return{movies:e.movies,isPopup:e.isPopup}})(function(e){var t=e.movies.map(function(e){return a.a.createElement(C,{key:JSON.stringify(e),movie:e})}),n=t.filter(function(e){return e.props.movie.isFavorite}),o=!n.length&&a.a.createElement("h1",{style:{color:"white"}},"You need to favorite some damn movies."),c=e.isPopup?"Carousel blur":"Carousel";return a.a.createElement(r.Fragment,null,a.a.createElement("section",{className:c},a.a.createElement(D.a,null,a.a.createElement(h.a,{path:"/favorites",render:function(){return a.a.createElement(r.Fragment,null,a.a.createElement("h2",null,"Favorite Movies"),o||n)}}),a.a.createElement(h.a,{path:"/",render:function(){return a.a.createElement(r.Fragment,null,a.a.createElement("h2",null,"Recent Movies"),t)}}))))})),A=n(14),V=n(66),q=(n(58),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(m.a)(this,Object(f.a)(t).call(this))).handleChange=function(t){var n=t.target,r=n.name,a=n.value;e.setState(Object(A.a)({},r,a))},e.handleSubmit=function(){var t=Object(u.a)(i.a.mark(function t(n){var r,a,o,c,s;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),r=e.state,a=r.name,o=r.email,c=r.password,s={name:a,email:o,password:c},t.prev=3,t.next=6,g("users/new",s);case 6:e.setState({didPost:!0}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(3),e.setState({error:"User already exists"});case 12:case"end":return t.stop()}},t,this,[[3,9]])}));return function(e){return t.apply(this,arguments)}}(),e.componentDidMount=function(){return e.props.setPopup(!0)},e.state={name:"",email:"",password:"",didPost:!1,error:""},e}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.didPost,r=t.error;return n?a.a.createElement(V.a,{to:"/login"}):a.a.createElement("form",{onSubmit:this.handleSubmit,className:"CreateUser"},a.a.createElement("input",{className:"user-input",placeholder:"Name",required:!0,type:"text",onChange:this.handleChange,name:"name"}),a.a.createElement("input",{className:"user-input",placeholder:"Email",required:!0,type:"email",onChange:this.handleChange,name:"email"}),a.a.createElement("input",{className:"user-input",placeholder:"Password",required:!0,type:"password",onChange:this.handleChange,name:"password"}),a.a.createElement(N.a,{to:"/",onClick:function(){return e.props.setPopup(!1)}},"Back"),a.a.createElement("button",{className:"submit-user",type:"submit"},"Submit"),r&&a.a.createElement("h3",null,r))}}]),t}(r.Component)),H=(n(60),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(m.a)(this,Object(f.a)(t).call(this))).handleChange=function(t){var n=t.target,r=n.name,a=n.value;e.setState(Object(A.a)({},r,a))},e.setUser=Object(u.a)(i.a.mark(function t(){var n,r,a,o,c,s;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state,r=n.password,a=n.email,t.next=3,g("users",{password:r,email:a});case 3:return o=t.sent,c=o.name,s=o.id,e.props.setUser({name:c,id:s}),t.abrupt("return",s);case 7:case"end":return t.stop()}},t,this)})),e.setFavorites=function(){var t=Object(u.a)(i.a.mark(function t(n){var r,a;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r="users/".concat(n,"/favorites"),t.next=3,P(r);case 3:a=t.sent,e.props.setFavorites(a,n);case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),e.handleSubmit=function(){var t=Object(u.a)(i.a.mark(function t(n){var r;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,t.next=4,e.setUser();case 4:r=t.sent,e.setFavorites(r),e.setState({canLogin:!0}),e.props.setPopup(!1),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),e.setState({error:"That email or password does not exist"});case 13:case"end":return t.stop()}},t,this,[[1,10]])}));return function(e){return t.apply(this,arguments)}}(),e.componentDidMount=function(){e.props.setPopup(!0),e.props.setShouldPromptLogin(!1)},e.state={email:"",password:"",error:"",canLogin:!1},e}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.canLogin,r=t.error;return n?a.a.createElement(V.a,{to:"/"}):a.a.createElement("form",{className:"Login",onSubmit:this.handleSubmit},a.a.createElement("h1",null,"Movie Tracker"),a.a.createElement("h3",null,"Welcome back!"),a.a.createElement("input",{className:"user-input",placeholder:"Email",required:!0,type:"email",onChange:this.handleChange,name:"email"}),a.a.createElement("input",{className:"user-input",placeholder:"Password",required:!0,type:"password",onChange:this.handleChange,name:"password"}),r&&a.a.createElement("h3",null,r),a.a.createElement(N.a,{to:"/",onClick:function(){return e.props.setPopup(!1)}},"Back"),a.a.createElement("button",{className:"sign-in link"}," Sign In "),a.a.createElement("p",null,"New to Movie Tracker?"),a.a.createElement(T.a,{className:"create-user link",to:"/create-user"},"Create Account"))}}]),t}(r.Component)),J=Object(E.b)(function(e){return{movies:e.movies}},function(e){return{setMovies:function(t){return e(x(t))},setUser:function(t){return e(k(t))},setFavorites:function(t,n){return e(y(t,n))},setShouldPromptLogin:function(t){return e(j(t))},setPopup:function(t){return e(_(t))}}})(H),G=(n(62),Object(E.b)(function(e){return{user:e.user}},function(e){return{setUser:function(t){return e(k(t))},setMovies:function(t){return e(x(t))},setPopup:function(t){return e(_(t))}}})(function(e){var t=function(){var t=Object(u.a)(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.setUser(null),t.t0=e,t.next=4,S("now_playing");case 4:t.t1=t.sent,t.t0.setMovies.call(t.t0,t.t1);case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}();return a.a.createElement("div",{className:"Profile"},a.a.createElement("p",null,"Profile"),e.user?a.a.createElement("button",{onClick:function(){return t()}},"Logout"):a.a.createElement(N.a,{to:"/login",onClick:function(){return e.setPopup(!0)}},"Login"))})),X=n(67),B=n(13),W=n(48),Y=n(22),K=[],z=Object(B.b)({movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.id;switch(n){case"SET_MOVIES":return t.movies.map(function(e){return e.movie_id=e.id,e});case"TOGGLE_FAVORITE":return Object(Y.a)(e).map(function(e){return e.id===r?Object(W.a)({},e,{isFavorite:!e.isFavorite}):e});case"SET_FAVORITES":return Object(Y.a)(e).map(function(e){return e.isFavorite=!1,e.user_id=t.user_id,t.favorites.forEach(function(t){t.movie_id===e.movie_id&&(e.isFavorite=!0)}),e});default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return t.user;default:return e}},shouldPromptLogin:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SHOULD_PROMPT_LOGIN":return t.bool;default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_FILTER":return t.filter;default:return e}},isPopup:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_POPUP":return t.bool;default:return e}}}),Q=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(),Z=Object(B.c)(z,Q),$=a.a.createElement(E.a,{store:Z},a.a.createElement(X.a,null,a.a.createElement(I,null)));c.a.render($,document.getElementById("root"))}},[[28,2,1]]]);
//# sourceMappingURL=main.9135f884.chunk.js.map