(this.webpackJsonphangbot=this.webpackJsonphangbot||[]).push([[0],{41:function(e,t,n){e.exports=n(55)},46:function(e,t,n){},48:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(13),i=n.n(r),s=(n(46),n(28)),l=n.n(s),c=n(34),u=n(6),p=n(12),d=n(10),h=n(9),g=n(16),f=function(e){var t=Object(g.b)({position:"relative",margin:"auto",width:"326px",height:"363px",background:"#000000",boxShadow:"0px 0px 30px rgba(121, 120, 120, 0.15)",borderRadius:"6px",opacity:1,from:{opacity:0},config:{duration:2500}}),n=[{position:"absolute",width:"93px",height:"74px",left:"38%",top:"14%",background:"#FFFFFF"},{position:"absolute",width:"20px",height:"20px",left:"55%",top:"20%",borderRadius:"50%",background:"#000000"},{position:"absolute",width:"30px",height:"30px",left:"45%",top:"18.5%",borderRadius:"50%",background:"#000000"},{position:"absolute",width:"57px",height:"5px",left:"45%",top:"30%",background:"#000000"},{position:"absolute",width:"133px",height:"119px",left:"32%",top:"35%",background:"#FFFFFF"},{position:"absolute",width:"24.16px",height:"80.07px",left:"79%",top:"35%",background:"#FFFFFF",transform:"rotate(-109.89deg)"},{position:"absolute",width:"24.16px",height:"80.07px",left:"17%",top:"35%",background:"#FFFFFF",transform:"rotate(-87.17deg)"},{position:"absolute",width:"72px",height:"20px",left:"35%",top:"75%",background:"#FFFFFF",transform:"rotate(-90.89deg)"},{position:"absolute",width:"72px",height:"20px",left:"50%",top:"75%",background:"#FFFFFF",transform:"rotate(-90.89deg)"},{position:"absolute",width:"19px",height:"52px",left:"35%",top:"78%",background:"#FFFFFF",transform:"rotate(-90.89deg)"},{position:"absolute",width:"19px",height:"52px",left:"64%",top:"78%",background:"#FFFFFF",transform:"rotate(-90.89deg)"}];return o.a.createElement(g.a.div,{style:t},n.splice(0,e.currentTurnCount).map((function(e){return o.a.createElement("div",{style:e})})))};var b=function(e){var t=Object(g.b)({display:"inline",padding:"5px",margin:"5px",width:"6%",fontSize:"30px",fontWeight:"bold",cursor:"pointer",opacity:1,from:{opacity:0},config:{duration:1500}});return o.a.createElement("div",{style:{margin:"20px auto",width:"100%",height:"auto",background:"#FFFFFF",boxShadow:"0px 0px 20px rgba(102, 102, 102, 0.15)",borderRadius:"15px",padding:"20px",display:"flex",justifyContent:"center",flexWrap:"wrap"}},"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((function(n){return e.guessedLetters.includes(n)?o.a.createElement(g.a.div,{style:t}):o.a.createElement(g.a.div,{onClick:function(){!function(t){e.onLetterClick(t),e.updateGuessCounter(t)}(n)},style:t},n)})))};var m=function(e){var t={display:"inline-block",margin:"10px",width:"49px",height:"43px",background:"#C4C4C4"},n={display:"inline-block",margin:"10px",width:"50px",height:"auto",fontSize:"40px",textAlign:"center"};return o.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},o.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",margin:"10px auto",minWidth:"25%",height:"74px",border:"5px solid #000000",boxSizing:"border-box"}},e.letters.toUpperCase().split("").map((function(a){return e.guessedLetters.includes(a)||" "===a?o.a.createElement("div",{style:n},a):o.a.createElement("div",{style:t})}))))},E=function(e){return o.a.createElement("div",{style:{textAlign:"center"}},o.a.createElement("h1",null,e.currentTurnCount," Turns remaining"))},w=n(62),x=(n(48),n(26)),y=(n(54),n(58)),v=n(59),k=n(60),F=n(61);var j=function(e){return o.a.createElement("div",null,o.a.createElement(F.a,{show:e.showModal,onHide:e.onResetClick},o.a.createElement(F.a.Header,{closeButton:!0},o.a.createElement(F.a.Title,null,e.endState?"You Win!":"You Lose")),o.a.createElement(F.a.Body,null,e.endState?"I am so proud of you. My human friend!":"It' okay to not be perfect like a robot.",o.a.createElement("br",null),"Care to try again?"),o.a.createElement(F.a.Footer,null,o.a.createElement(w.a,{onClick:e.onResetClick}," Restart Game "))))},S=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).shouldShowModal=function(){return null!==a.props.winGame},a.checkForWin=function(){var e=a.props.currentWord.toUpperCase().split("");return e.filter((function(e){return a.props.trackGuess.includes(e.toUpperCase())})).sort().join("")===e.sort().join("")},a.handleWinGame=function(){a.checkForWin()&&(0,a.props.dispatch)({type:"WIN_GAME"})},a.handleLetterClick=function(){var e=Object(c.a)(l.a.mark((function e(t){var n,o,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.props.dispatch,o={type:"ADD_LETTER",letter:t},e.next=4,n(o);case 4:(r=a.checkForWin())?a.handleWinGame():a.props.wrongGuesses<=0&&!r&&n({type:"LOSE_GAME"});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handleDecrementingTurn=function(e){var t=a.props.dispatch;a.props.currentWord.toUpperCase().split("").includes(e)||t({type:"WRONG_GUESS"})},a.handleResettingGame=function(){var e=a.props.dispatch,t={type:"RESET_GUESS"},n={type:"RESET_LETTERS"},o={type:"SET_WORD"};e({type:"RESET_GAME"}),e(t),e(n),e(o)},a}return Object(p.a)(n,[{key:"componentDidMount",value:function(){(0,this.props.dispatch)({type:"SET_WORD"})}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(y.a,null,o.a.createElement(v.a,null,o.a.createElement(k.a,null,o.a.createElement("h1",{class:"text-center"}," HangBot "))),o.a.createElement(v.a,null,o.a.createElement(k.a,null,o.a.createElement(f,{currentTurnCount:this.props.wrongGuesses}))),o.a.createElement(v.a,null,o.a.createElement(k.a,{xs:"12"},o.a.createElement(m,{letters:this.props.currentWord,guessedLetters:this.props.trackGuess}))),o.a.createElement(v.a,null,o.a.createElement(k.a,{xs:"12"},o.a.createElement(E,{currentTurnCount:this.props.wrongGuesses}))),o.a.createElement(v.a,null,o.a.createElement(k.a,null,o.a.createElement(b,{updateGuessCounter:this.handleDecrementingTurn,onLetterClick:this.handleLetterClick,guessedLetters:this.props.trackGuess}))),o.a.createElement(v.a,null,o.a.createElement(k.a,null,o.a.createElement(j,{onResetClick:this.handleResettingGame,showModal:this.shouldShowModal(),endState:this.props.winGame})))))}}]),n}(o.a.Component),G=S=Object(x.b)((function(e){return{winGame:e.winGame,wrongGuesses:e.wrongGuesses,trackGuess:e.trackGuess,currentWord:e.currentWord}}))(S),T=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var R=["bruptly","absurd","abyss","affix","askew","avenue","awkward","axiom","azure","bagpipes","bandwagon","banjo","bayou","beekeeper","bikini","blitz","blizzard","boggle","bookworm","boxcar","boxful","buckaroo","buffalo","buffoon","buxom","buzzard","buzzing","buzzwords","caliph","cobweb","cockiness","croquet","crypt","curacao","cycle","daiquiri","dirndl","disavow","dizzying","duplex","dwarves","embezzle","equip","espionage","euouae","exodus","faking","fishhook","fixable","fjord","flapjack","flopping","fluffiness","flyby","foxglove","frazzled","frizzled","fuchsia","funny","gabby","galaxy","galvanize","gazebo","giaour","gizmo","glowworm","glyph","gnarly","gnostic","gossip","grogginess","haiku","haphazard","hyphen","iatrogenic","icebox","injury","ivory","ivy","jackpot","jaundice","jawbreaker","jaywalk","jazziest","jazzy","jelly","jigsaw","jinx","jiujitsu","jockey","jogging","joking","jovial","joyful","juicy","jukebox","jumbo","kayak","kazoo","keyhole"],W=n(15),z=n(19),_=Object(z.b)({winGame:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"WIN_GAME":return!0;case"LOSE_GAME":return!1;case"RESET_GAME":return null;default:return e}},wrongGuesses:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:11,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"WRONG_GUESS":return e-1;case"RESET_GUESS":return 11;default:return e}},trackGuess:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_LETTER":var n=[].concat(Object(W.a)(e),[t.letter]);return n;case"RESET_LETTERS":return[];default:return e}},currentWord:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_WORD":var n=R[Math.floor(Math.random()*R.length)];return n;default:return e}}}),O=Object(z.c)(_,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(o.a.createElement(x.a,{store:O},o.a.createElement(G,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/hangbot",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/hangbot","/service-worker.js");T?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):C(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):C(t,e)}))}}()}},[[41,1,2]]]);
//# sourceMappingURL=main.e05bd14c.chunk.js.map