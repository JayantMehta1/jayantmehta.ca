webpackJsonp([0],{"/Bm9":function(e,t){},"8g2U":function(e,t){},AKVF:function(e,t){},AhPL:function(e,t){},HUQ1:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("span",{attrs:{id:"mediaSpacing"}},[t("a",{attrs:{id:"mediaDynamic",href:this.myMedia.myLink}},[t("span",[t("i",{class:this.myMedia.icon,attrs:{id:this.myMediaColour}})])])])},staticRenderFns:[]};var r={data:function(){return{myProfiles:[{icon:"fas fa-envelope fa-lg",myLink:"mailto: j7mehta@edu.uwaterloo.ca"},{icon:"fab fa-linkedin-in fa-lg",myLink:"https://www.linkedin.com/in/jayant-mehta"},{icon:"fab fa-github fa-lg",myLink:"https://github.com/JayantMehta1"},{icon:"fas fa-file fa-lg",myLink:"../../../static/JayantMehtaResume.pdf"}]}},props:["passColour"],components:{Media:n("VU/8")({data:function(){return{myColour:"grey"}},props:["myMedia","myMediaColour"]},i,!1,function(e){n("hLxy")},null,null).exports}},o={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{attrs:{id:"mediaBlock"}},e._l(e.myProfiles,function(t){return n("media",{staticClass:"iconMedia",attrs:{myMedia:t,myMediaColour:e.passColour}})}),1)])},staticRenderFns:[]};var s=n("VU/8")(r,o,!1,function(e){n("8g2U")},"data-v-51e5c472",null).exports,c={data:function(){return{accountsColourConclusion:"accountsColourWhite"}},props:["myName"],components:{Accounts:s}},l={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",[n("p",[e._v("j7mehta@edu.uwaterloo.ca")]),e._v(" "),n("accounts",{attrs:{passColour:e.accountsColourConclusion}}),e._v(" "),n("p",{attrs:{id:"credit"}},[e._v("Designed and Developed by "+e._s(e.myName.first)+" "+e._s(e.myName.last))])],1)},staticRenderFns:[]};var d={data:function(){return{userName:{first:"Jayant",last:"Mehta"}}},components:{Conclusion:n("VU/8")(c,l,!1,function(e){n("HUQ1")},"data-v-64412b39",null).exports}},u={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"wrapper"}},[n("nav",{staticClass:"navbar navbar-default"},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"navbar-header"},[n("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[e._v("Home")]),e._v(" "),n("router-link",{staticClass:"navbar-brand",attrs:{to:"/about"}},[e._v("About Me")]),e._v(" "),n("router-link",{staticClass:"navbar-brand",attrs:{to:"/resume"}},[e._v("Resume")])],1)])]),e._v(" "),n("div",{attrs:{id:"whole"}},[n("router-view")],1),e._v(" "),n("conclusion",{attrs:{myName:e.userName}})],1)},staticRenderFns:[]};var v=n("VU/8")(d,u,!1,function(e){n("ktp7")},"data-v-0bcbf2c8",null).exports,p=n("/ocq"),m={data:function(){return{accountsColourIntro:"accountsColourBlue",typing:!0}},props:["myName"],components:{Accounts:s}},f={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{attrs:{id:"introWords"}},[n("h1",[e._v(" Hi, I'm "+e._s(e.myName.first)+"!")]),e._v(" "),n("p",[e._v("\n            I am a software developer studying Engineering at the University of Waterloo. Feel free to explore my website to get to know me :)\n        ")])]),e._v(" "),n("a",{attrs:{href:"../../../static/JayantMehtaResume.pdf"}},[e._v("Here is my Resume")]),e._v(" "),n("div",{attrs:{id:"introAccounts"}},[n("accounts",{attrs:{passColour:e.accountsColourIntro}})],1)])},staticRenderFns:[]};var h=n("VU/8")(m,f,!1,function(e){n("Z66M")},"data-v-1dea2268",null).exports,_={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{"data-aos":"fade-up"}},[t("div",{staticClass:"border hvr-grow"},[t("div",{staticClass:"left",attrs:{id:this.myPos.pic}}),this._v(" "),t("div",{staticClass:"right"},[t("h5",[this._v(this._s(this.myPos.position)+" at "+this._s(this.myPos.company))])])])])},staticRenderFns:[]};var y={data:function(){return{Experiences:[{company:"Design Net Specific",position:"Web Developer",pic:"picOne"},{company:"City of Brampton",position:"Aquatics Instructor",pic:"picTwo"},{company:"Carte Wealth Management Inc.",position:"Administrative Assistant",pic:"picThree"},{company:"Brdiges Canada Inc.",position:"Technology Camp Counsellor",pic:"picFour"},{company:"Carte Wealth Management Inc.",position:"Computer and Software Intern",pic:"picFive"}]}},components:{Experienceloop:n("VU/8")({props:["myPos"]},_,!1,function(e){n("x+gY")},"data-v-867c8122",null).exports}},C={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[this._m(0),this._v(" "),this._l(this.Experiences,function(e){return t("experienceloop",{attrs:{myPos:e}})})],2)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"experienceSpace"}},[t("h1",[this._v("Experience")])])}]};var g=n("VU/8")(y,C,!1,function(e){n("jdii")},"data-v-c11e1dda",null).exports,w={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{"data-aos":"fade-up"}},[n("div",{staticClass:"border hvr-grow"},[n("div",{staticClass:"left",attrs:{id:e.myProject.pic}}),e._v(" "),n("div",{staticClass:"right"},[n("h5",[e._v(e._s(e.myProject.title))]),e._v(" "),n("p",[e._v(e._s(e.myProject.award))])])])])},staticRenderFns:[]};var b={data:function(){return{Projects:[{title:"Artificial Intelligence Mobile App for Workouts",award:"National Finalist in Medical Innovation by HOSA Canada",pic:"picOne"},{title:"Biometrics Bicycle Lock",award:"Provincial Finalist in Innovation by DECA Ontario",pic:"picTwo"}],stuff:"hello"}},components:{Projectsloop:n("VU/8")({props:["myProject"]},w,!1,function(e){n("AKVF")},"data-v-16edc804",null).exports}},E={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[this._m(0),this._v(" "),this._l(this.Projects,function(e){return t("projectsloop",{attrs:{myProject:e}})})],2)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"projectSpace"}},[t("h1",[this._v("Projects")])])}]};var M={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h3",[e._v("Programming Languages I work with")]),e._v(" "),n("div",{staticClass:"row"},e._l(e.myLanguages,function(e){return n("i",{directives:[{name:"tippy",rawName:"v-tippy"},{name:"scroll-reveal",rawName:"v-scroll-reveal.reset",modifiers:{reset:!0}}],staticClass:"column",class:e.icon,attrs:{content:e.name}})}),0),e._v(" "),n("h3",[e._v("Tools I work with")]),e._v(" "),n("div",{staticClass:"row"},e._l(e.myTools,function(e){return n("i",{directives:[{name:"tippy",rawName:"v-tippy"},{name:"scroll-reveal",rawName:"v-scroll-reveal.reset",modifiers:{reset:!0}}],staticClass:"column",class:e.icon,attrs:{content:e.name}})}),0)])},staticRenderFns:[]};var k={data:function(){return{userName:{first:"Jayant",last:"Mehta"}}},components:{Intro:h,Experience:g,Projects:n("VU/8")(b,E,!1,function(e){n("l/OD")},"data-v-6c1ce3f7",null).exports,Languages:n("VU/8")({data:function(){return{myLanguages:[{icon:"devicon-java-plain-wordmark colored",name:"Java"},{icon:"devicon-javascript-plain colored",name:"JavaScript"},{icon:"devicon-cplusplus-plain colored",name:"C++"},{icon:"devicon-python-plain-wordmark colored",name:"Python"},{icon:"devicon-c-plain colored",name:"C"}],myTools:[{icon:"devicon-vuejs-plain-wordmark colored",name:"Vue.js"},{icon:"devicon-webpack-plain colored",name:"Webpack"},{icon:"devicon-photoshop-plain colored",name:"PhotoShop"},{icon:"devicon-bootstrap-plain-wordmark colored",name:"Bootstrap"}]}}},M,!1,function(e){n("V6vX")},"data-v-2f81359f",null).exports}},P={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("intro",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal.reset",modifiers:{reset:!0}}],attrs:{myName:this.userName}}),this._v(" "),t("languages"),this._v(" "),t("experience"),this._v(" "),t("projects")],1)},staticRenderFns:[]};var x={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal.reset",modifiers:{reset:!0}}]},[n("h2",[e._v("My Biography")]),e._v(" "),n("p",[e._v(" I am currently studying Systems Design Engineering at the University of Waterloo.\r\n        With a passion for programming, I like to work on projects that allow me to express my creativity.")]),e._v(" "),n("ul",e._l(e.myAwards,function(t){return n("li",[e._v(e._s(t.description)+" "+e._s(t.dates))])}),0)]),e._v(" "),n("div",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal.reset",modifiers:{reset:!0}}]},[n("h2",[e._v("Community Involvement")]),e._v(" "),n("ul",e._l(e.myCommunity,function(t){return n("li",[e._v(e._s(t.description)+" "+e._s(t.dates))])}),0)])])},staticRenderFns:[]};var A={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h2",[this._v("My Resume")]),this._v(" "),t("a",{attrs:{href:"../../../static/JayantMehtaResume.pdf"}},[this._v("Please click here to access my resume")])])}]};var j=[{path:"/",component:n("VU/8")(k,P,!1,function(e){n("aYjv")},"data-v-2a5fb6a3",null).exports},{path:"/about",component:n("VU/8")({data:function(){return{myCommunity:[{description:"SHAD Ambassador",dates:"(Sep. 2018 - Present)"},{description:"DECA President",dates:"(Sep. 2015 - Jun. 2019)"},{description:"PEO Oakville Chapter National Engineering Month Conference Coordinator",dates:"(Mar. 2016 - Mar. 2019)"},{description:"Milton District Hospital Computer Information Desk Volunteer",dates:"(Jan. 2017 - Apr. 2019)"},{description:"S.T.E.M. Executive Diector of Technology, Engineering Lead",dates:"(Sep. 2016 - Jun. 2019)"},{description:"H.O.S.A Executive Diector",dates:"(May 2018 - Jun. 2019)"},{description:"Community Living North Halton Program Coordiantor Volunteer",dates:"(Sep. 2015 - Dec. 2018)"}],myAwards:[{description:"Schulich Leader National Scholarship Award - University of Toronto Engineering Science",dates:"(Apr. 2019)"},{description:"SHAD Fellow",dates:"(Jul. 2018)"},{description:"Nationals Finalist in Medical Innovation - H.O.S.A. Canada",dates:"(Mar. 2019)"},{description:"Provincials Finalist in Innovation - DECA Ontario",dates:"(Feb. 2018)"}]}}},x,!1,function(e){n("/Bm9")},"data-v-2ef9bca5",null).exports},{path:"/resume",component:n("VU/8")({},A,!1,function(e){n("remS")},"data-v-603edc84",null).exports}],N=n("Ubyc"),F=n.n(N),S=n("4t5/"),I=n.n(S),U=n("RInU"),R=n.n(U),V=(n("AhPL"),n("CRpV"));a.a.use(V.a),a.a.use(p.a),a.a.use(F.a),a.a.use(I.a),R.a.init(),a.a.config.productionTip=!1;var D=new p.a({mode:"history",routes:j});new a.a({el:"#app",router:D,components:{App:v},template:"<App/>"})},V6vX:function(e,t){},Z66M:function(e,t){},aYjv:function(e,t){},hLxy:function(e,t){},jdii:function(e,t){},ktp7:function(e,t){},"l/OD":function(e,t){},remS:function(e,t){},"x+gY":function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.b0513c9d1dcf130844e7.js.map