webpackJsonp([0],[,,function(t,a,s){function e(t){s(13)}var i=s(0)(s(5),s(26),e,null,null);t.exports=i.exports},,function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s(3),i=s(2),o=s.n(i);window.$=s(1),e.a.config.productionTip=!1,new e.a({el:"#app",template:"<App/>",components:{App:o.a}}),$(function(){var t=$("#msg-button"),a=$("#response"),s=$("#response-text"),e=!0;$(".menu .item").first().toggleClass("active",2e3),$(".menu .item").click(function(){$(".active").removeClass("active"),$(this).toggleClass("active",300)}),$(".scroll").on("click",function(){$("html,body").animate({scrollTop:$($(this).attr("href")).offset().top},600)}),$(".select-me").click(function(){$(this).select()}),$("form").submit(function(t){t.preventDefault();var a=$(this).find("textarea").val(),s=$("#email").val(),e=$(this).find("p");""!==a&&""!==s?$.ajax({method:"POST",url:"https://bausano.000webhostapp.com/email.php",data:{from:s,msg:a}}).done(function(t){"true"!==t&&$(e).fadeIn().text(t)}):$(e).fadeIn().text("You have to fill in both message and email!")}),$(t).click(function(){if(!e)return!1;var t=$("#msg");if($(t).attr("data-text")===$(t).text()||$(t).text().length<5)return $(t).focus(),!1;$.ajax({method:"POST",url:"https://bausano.000webhostapp.com/email.php",data:{from:"Chat bot",msg:$(t).text()}}).done(function(i){$(t).attr("contentEditable","false"),$(s).text(i),$(a).fadeIn(),e=!1})})})},function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s(17),i=s.n(e),o=s(14),l=s.n(o),n=s(19),r=s.n(n),c=s(18),v=s.n(c),h=s(16),m=s.n(h),p=s(15),_=s.n(p);a.default={name:"app",components:{Home:i.a,About:l.a,Skills:r.a,Hobbies:m.a,Contact:_.a,Projects:v.a}}},function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"about",data:function(){return{birthday:"12-06-1996"}},computed:{age:function(){var t=new Date(Date.now()-new Date(this.birthday));return Math.abs(t.getUTCFullYear()-1970)}}}},function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"template",data:function(){return{}}}},function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"template",data:function(){return{}}}},function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"home",data:function(){return{}}}},function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s(20),i=s.n(e);a.default={name:"projects",components:{Project:i.a}}},function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"skills",data:function(){return{}}}},function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"project",props:["title","image"]}},function(t,a){},function(t,a,s){var e=s(0)(s(6),s(24),null,null,null);t.exports=e.exports},function(t,a,s){var e=s(0)(s(7),s(22),null,null,null);t.exports=e.exports},function(t,a,s){var e=s(0)(s(8),s(27),null,null,null);t.exports=e.exports},function(t,a,s){var e=s(0)(s(9),s(21),null,null,null);t.exports=e.exports},function(t,a,s){var e=s(0)(s(10),s(25),null,null,null);t.exports=e.exports},function(t,a,s){var e=s(0)(s(11),s(28),null,null,null);t.exports=e.exports},function(t,a,s){var e=s(0)(s(12),s(23),null,null,null);t.exports=e.exports},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"home"},[s("div",{staticClass:"container",attrs:{id:"home"}},[s("h2",{staticClass:"margin-top-20"},[t._v("Home")]),t._v(" "),s("div",{staticClass:"chat"},[s("div",{staticClass:"message row"},[s("div",{staticClass:"author col-sm-24 col-md-6"},[s("img",{staticClass:"radius border face float-right",attrs:{src:"static/img/michael_bausano.jpg",alt:"Michael Bausano"}}),t._v(" "),s("span",{staticClass:"float-right"},[t._v("Michael Bausano")])]),t._v(" "),s("div",{staticClass:"text col-sm-24 col-md-14 me"},[s("p",[t._v(" Hey, there!")]),t._v(" "),s("p",[t._v("\n  \t\t\t\t\tWelcome to my online portfolio. I'm "),s("span",{staticClass:"highlight"},[t._v("Michael Bausano")]),t._v(" and I can't wait to become your teammate!")]),t._v(" "),s("p",[t._v("\n  \t\t\t\t\tYou can find my cover letter in PDF "),s("a",{attrs:{href:"static/files/cover_letter.pdf",target:"_blank"}},[t._v("here")]),t._v(". Also, there is a "),s("a",{attrs:{href:"static/files/bausano_portfolio.pdf",target:"_blank"}},[t._v("PDF version")]),t._v(" of my portfolio available.\n  \t\t\t\t")]),t._v(" "),s("p",[t._v("\n  \t\t\t\t\tFeel free to say hello any time via the message box below or in "),s("a",{staticClass:"scroll",attrs:{href:"#contact"}},[t._v("the contact section")]),t._v(" of my page. Don't forget to mention your email or phone, so I can get to you as soon as possible!\n  \t\t\t\t")])])]),t._v(" "),s("div",{staticClass:"message row"},[s("div",{staticClass:"author col-xs-10 col-sm-4 col-md-6 pointer center",attrs:{id:"msg-button"}},[s("img",{staticClass:"face float-right",attrs:{src:"static/img/icon/send.svg",alt:"Michael Bausano",title:"Send the message"}}),t._v(" "),s("span",{staticClass:"float-right"},[t._v("Send")])]),t._v(" "),s("div",{staticClass:"text col-xs-14 col-sm-20 col-md-14 you"},[s("div",{staticClass:"textarea",attrs:{spellcheck:"false",contentEditable:"true","data-text":"Type your message...",id:"msg"}})])]),t._v(" "),s("div",{staticClass:"message row hidden",attrs:{id:"response"}},[s("div",{staticClass:"author col-sm-24 col-md-6"},[s("img",{staticClass:"radius border face float-right",attrs:{src:"static/img/michael_bausano.jpg",alt:"Michael Bausano"}}),t._v(" "),s("span",{staticClass:"float-right"},[t._v("Michael Bausano")])]),t._v(" "),s("div",{staticClass:"text col-sm-24 col-md-14 me"},[s("p",{attrs:{id:"response-text"}})])])]),t._v(" "),s("div",{staticClass:"row margin-gap-top"},[s("div",{staticClass:"col-sm-24 col-md-12 margin-top-20"},[t._v("\n  \t\t\tTo download my portfolio in PDF follow "),s("a",{attrs:{href:"static/files/bausano_portfolio.pdf",target:"_blank"}},[t._v("this")]),t._v(" link.\n  \t\t")]),t._v(" "),s("div",{staticClass:"col-sm-24 col-md-12 margin-top-20 left"},[s("p",{staticClass:"icon-small-line margin-left-20"},[s("a",{staticClass:"margin-left-10",attrs:{href:"https://www.linkedin.com/in/bausano",target:"_blank"}},[s("img",{staticClass:"icon-small float-left",attrs:{src:"static/img/icon/linkedin.svg",alt:"LinkedIn"}}),t._v("\n            linkedin.com/in/bausano\n          ")])]),t._v(" "),s("p",{staticClass:"margin-top-20 icon-small-line margin-top-20 margin-left-20"},[s("a",{staticClass:"margin-left-10",attrs:{href:"https://www.github.com/bausano/",target:"_blank"}},[s("img",{staticClass:"icon-small float-left",attrs:{src:"static/img/icon/github.svg",alt:"GitHub"}}),t._v("\n            github.com/bausano\n          ")])]),t._v(" "),s("p",{staticClass:"margin-top-20 icon-small-line margin-top-20 margin-left-20"},[s("a",{staticClass:"margin-left-10",attrs:{href:"https://twitter.com/BausanoMichael",target:"_blank"}},[s("img",{staticClass:"icon-small float-left",attrs:{src:"static/img/icon/twitter.svg",alt:"Twitter"}}),t._v("\n            twitter.com/BausanoMichael\n          ")])])])])])])}]}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"template"},[s("div",{staticClass:"container",attrs:{id:"contact"}},[s("h2",{staticClass:"margin-gap-top"},[t._v("Contact")]),t._v(" "),s("span",{staticClass:"note"},[t._v("/say hello, don't be shy/")]),t._v(" "),s("div",{staticClass:"row margin-top-40 margin-gap-bottom"},[s("div",{staticClass:"col-md-12"},[s("p",{staticClass:"left margin-left-10p"},[t._v("\n          Text me:\n          "),s("input",{staticClass:"highlight select-me pointer",attrs:{value:"0759 9906380",onsubmit:"return false;",readonly:"readonly"}}),t._v(" "),s("input",{staticClass:"highlight select-me pointer",attrs:{value:"+420777840863",onsubmit:"return false;",readonly:"readonly"}})]),t._v(" "),s("p",{staticClass:"left margin-left-10p"},[t._v("\n          Email me:\n          "),s("input",{staticClass:"highlight select-me pointer",attrs:{value:"bausanomichal@gmail.com",onsubmit:"return false;",readonly:"readonly"}})]),t._v(" "),s("p",{staticClass:"left margin-top-20 margin-left-10p"},[t._v("\n          My London postcode is "),s("span",{staticClass:"highlight"},[t._v("NW4 1BN")])])]),t._v(" "),s("div",{staticClass:"col-md-12"},[s("form",[s("div",{staticClass:"contact"},[s("textarea",{attrs:{name:"message"}}),t._v(" "),s("input",{attrs:{type:"text",name:"email",id:"email",placeholder:"Your email or phone ..."}}),t._v(" "),s("input",{attrs:{type:"submit",value:"Send"}}),t._v(" "),s("p",{staticClass:"center red hidden"})])])])])])])}]}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"project col-md-12 "},[s("img",{staticClass:"preview",attrs:{src:t.image}}),t._v(" "),s("h4",[t._v(t._s(t.title))]),t._v(" "),t._t("default")],2)},staticRenderFns:[]}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"about"},[s("div",{staticClass:"container",attrs:{id:"about"}},[s("h2",{staticClass:"margin-gap-top"},[t._v("About")]),t._v(" "),s("span",{staticClass:"note"},[t._v("/who's Michael Bausano/")]),t._v(" "),s("div",{staticClass:"row margin-top-20"},[s("div",{staticClass:"col-md-12"},[s("p",{staticClass:"justify margin-top-20"},[t._v("I am a "+t._s(t.age)+" years old student born in the Czech Republic and currently living in London. I met programming in 2011 and it was a love at first sight! Up until now I worked with mupltiple programming languages and I loved them all (except Java, one simply does not like Java), nevertheless my 'main' is PHP. Have a closer look at my "),s("a",{staticClass:"scroll",attrs:{href:"#skills"}},[t._v("skills section")]),t._v(" to find out more about what I can do with PHP!")]),t._v(" "),s("p",{staticClass:"justify margin-top-20"},[t._v("I really do have itchy feet, no doubts. To feed my wanderlust, I applied for a British university and since I strongly believe that London is the very best option for young and ambitious programmer I went for that one. And here I am.")]),t._v(" "),t._m(0),t._v(" "),s("p",{staticClass:"margin-top-40 left"}),t._m(1),t._v(" "),t._m(2),t._v(" "),s("p")]),t._v(" "),t._m(3)])])])},staticRenderFns:[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",{staticClass:"justify margin-top-20"},[t._v("In London I study at "),s("a",{attrs:{href:"http://www.mdx.ac.uk/",target:"_blank"}},[t._v("Middlesex University")]),t._v(" a computer science course. Naturally CS has been my first pick as in the future, I would love to be part of a team which would develop an artificial intelligence system. I can't do this without proper academic knowledge.")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("h4",[t._v("Download my "),s("span",{staticClass:"highlight",attrs:{title:"Curriculum vitae"}},[t._v("CVs")]),t._v(":")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"row margin-top-20"},[s("div",{staticClass:"col-md-8"},[s("div",{staticClass:"cv"},[s("a",{attrs:{href:"static/files/chronological_cv.pdf"}},[t._v("Chronological CV")])])]),t._v(" "),s("div",{staticClass:"col-md-8"},[s("div",{staticClass:"cv"},[s("a",{attrs:{href:"static/files/cover_letter.pdf"}},[t._v("Cover letter")])])]),t._v(" "),s("div",{staticClass:"col-md-8"},[s("div",{staticClass:"cv"},[s("a",{attrs:{href:"static/files/bausano_portfolio.pdf"}},[t._v("Portfolium")])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-md-12"},[s("h3",[t._v("IT Experience")]),t._v(" "),s("h4",{staticClass:"left margin-left-10"},[t._v("8commerce")]),t._v(" "),s("p",{staticClass:"left margin-top-20"},[s("a",{attrs:{href:"http://8com.cz/en",target:"_blank"}},[t._v("http://8com.cz/en")])]),t._v(" "),s("p",{staticClass:"left"},[s("i",[t._v("June 2015")]),t._v(" - "),s("i",[t._v("December 2016")])]),t._v(" "),s("p",{staticClass:"justify margin-top-20"},[t._v("Since I have been interested in IT for so long, in 2015 I found a job in a company providing e-shop solutions all over the Czech Republic called "),s("a",{attrs:{href:"http://8com.cz/en",target:"_blank"}},[t._v("8commerce")]),t._v(" (Creactive before rebranding).")]),t._v(" "),s("p",{staticClass:"justify margin-top20"},[t._v("I doubt I could've wished for a better experience at the time. I perfectly adapted a team-driven approach because my job was to maintain their application and add new features - you cannot do either unless you efficiently communicate with your testers, colleagues programmers and analysts.")]),t._v(" "),s("h4",{staticClass:"left margin-left-10"},[t._v("Freelance")]),t._v(" "),s("p",{staticClass:"justify"},[t._v("I have a freelancing background too. An example is a Czech company "),s("a",{attrs:{href:"http://wrongware.cz",target:"_blank"}},[t._v("Wrongware")]),t._v(" or UK company "),s("a",{attrs:{href:"http://mountainview.co.uk",target:"_blank"}},[t._v("Mountainview Learning")]),t._v(" for which I did "),s("span",{staticClass:"scroll highlight",attrs:{href:"#projects"}},[t._v("a reflex study app")]),t._v(".")]),t._v(" "),s("h4",{staticClass:"left margin-left-10"},[t._v("Personal")]),t._v(" "),s("p",{staticClass:"justify"},[t._v("During my high school studies I also participated in many IT competitions. These successes caused that I was awarded as a regional talent. Besides to those achievements I built my own projects like web pages of an athletic club, personal blog or design studio. For a year I was also a leader of a student club devoted to robotics.")])])}]}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"projects"},[s("div",{staticClass:"container",attrs:{id:"projects"}},[s("h2",{staticClass:"margin-gap-top"},[t._v("Projects")]),t._v(" "),s("span",{staticClass:"note"},[t._v("/what did I work on/")]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"row"},[s("project",{attrs:{title:"Metalshop voting poll",image:"static/img/projects/hlasovani.png"}},[s("p",{staticClass:"left"},[t._v("Majority of my time in "),s("span",{staticClass:"highlight"},[t._v("8commerce")]),t._v(" I spent on backend or fixing some bugs + cosmetics on frontend.")]),t._v(" "),s("p",{staticClass:"left"},[t._v("One of my solo projects was to create an external voting application that would communicate with main database. Customers of main eshop would upload the photos of stock they bought in eshop and vote. Our team consisted of me as a developer, a tester and a designer.")]),t._v(" "),s("p",{staticClass:"left"},[s("a",{attrs:{href:"https://hlasovani.metalshop.cz/",target:"_blank"}},[s("img",{staticClass:"icon-small float-left margin-right-10",attrs:{src:"static/img/icon/link.svg"}}),t._v("\n              View on Web\n            ")])])]),t._v(" "),s("project",{attrs:{title:"Reflex study app",image:"static/img/projects/mountainview.png"}},[s("p",{staticClass:"left"},[t._v("My major "),s("span",{staticClass:"hightlight"},[t._v("Vue.js")]),t._v(" project is an application where a respondent is sorting targets based on two labels. Sometimes there are primes shortly popping before a target, sometimes labels get swapped.")]),t._v(" "),s("p",{staticClass:"left"},[t._v("The purpouse is to observe how some primes effect the respondents. The app records respondent's answers and passes them to backend, where that information is evaluated.")]),t._v(" "),s("p",{staticClass:"left"},[s("a",{attrs:{href:"#"}},[s("img",{staticClass:"icon-small float-left margin-right-10",attrs:{src:"static/img/icon/link.svg"}}),t._v("\n              View on Web is going to be available soon, bear with me\n            ")])])])],1),t._v(" "),s("div",{staticClass:"row"},[s("project",{attrs:{title:"E-bchod",image:"static/img/projects/ebchod.png"}},[s("p",{staticClass:"left"},[t._v("A project my coleague and I created for an IT competition. It was an eshop which would download stocks from our affiliates, sorted them into categories and assigned filters.")]),t._v(" "),s("p",{staticClass:"left"},[s("a",{attrs:{href:"https://github.com/bausano/Ebchod",target:"_blank"}},[s("img",{staticClass:"icon-small float-left margin-right-10",attrs:{src:"static/img/icon/github.svg"}}),t._v("\n              View on GitHub\n            ")])])]),t._v(" "),s("project",{attrs:{title:"Personal blog",image:"static/img/projects/blog.png"}},[s("p",{staticClass:"left"},[t._v("My personal blog. It's an old project that I was working on in my free time, so it's quite sloppy.")]),t._v(" "),s("p",{staticClass:"left"},[s("a",{attrs:{href:"https://github.com/bausano/blog",target:"_blank"}},[s("img",{staticClass:"icon-small float-left margin-right-10",attrs:{src:"static/img/icon/github.svg"}}),t._v("\n              View on GitHub\n            ")])])])],1),t._v(" "),s("div",{staticClass:"row"},[s("project",{staticClass:"pointer scroll",attrs:{image:"static/img/projects/new.png",title:"This spot is yours!",href:"#contact"}}),t._v(" "),t._m(0)],1)])])])},staticRenderFns:[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-md-12"},[s("h4",{staticClass:"margin-gap-top"},[t._v("Just a fraction")]),t._v(" "),s("p",{staticClass:"justify"},[t._v("\n            What you see here is just a fraction of my code and projects. That is either because I can't access them anymore or because they're really old\n            using raw PHP (we've all been there, right).\n          ")]),t._v(" "),s("p",{staticClass:"left"},[t._v("To prove you my knowledge I can code a mock project according to your task. "),s("span",{staticClass:"scroll highlight",attrs:{href:"#contact"}},[t._v("Let's get in touch")]),t._v(" and see what we can do.")])])}]}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"app"}},[s("home"),t._v(" "),s("about"),t._v(" "),s("skills"),t._v(" "),s("projects"),t._v(" "),s("hobbies"),t._v(" "),s("contact")],1)},staticRenderFns:[]}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"template"},[s("div",{staticClass:"container",attrs:{id:"hobbies"}},[s("h2",{staticClass:"margin-gap-top"},[t._v("Hobbies")]),t._v(" "),s("span",{staticClass:"note"},[t._v("/I'm not only an IT geek/")]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-12 col-md-12"},[s("div",{staticClass:"hobby"},[s("h3",[t._v("Literature")]),t._v(" "),s("p",{staticClass:"left"},[t._v("Historical literature, surrealism, existentialism, magic realism, absurd drama, postmodernism and much more. I love books. They smell good.")])]),t._v(" "),s("div",{staticClass:"hobby",attrs:{id:"comedy"}},[s("h3",[t._v("Comedy")]),t._v(" "),s("p",{staticClass:"left"},[t._v("( ͡° ͜ʖ ͡° ) Talking about British comedy pool I was lucky enough to catch so far: Ricky Gervais, Monty Python, Mitchell and Webb, Hale and Pace, Yes Prime Minister or aka Black Adder.")])]),t._v(" "),s("div",{staticClass:"hobby"},[s("h3",[t._v("Chess")]),t._v(" "),s("p",{staticClass:"left"},[t._v("I used to be competitive for few years as well. Sounds boring though, doesn't it?")])])]),t._v(" "),s("div",{staticClass:"col-sm-12 col-md-12"},[s("div",{staticClass:"hobby"},[s("h3",[t._v("Music")]),t._v(" "),s("p",{staticClass:"left"},[t._v("I'm "),s("span",{staticClass:"highlight"},[t._v("indie rock")]),t._v(", "),s("span",{staticClass:"highlight"},[t._v("folk")]),t._v(" and "),s("span",{staticClass:"highlight"},[t._v("reggae")]),t._v(" fan. Among my fav bands are Sticky Fingers, The Neighborhood, Daughter, Milky Chance. "),s("br"),t._v("Music is probably the most important part of my life and I would be truly glad to find a collegues to share my passion with.")])]),t._v(" "),s("div",{staticClass:"hobby"},[s("h3",[t._v("Politics")]),t._v(" "),s("p",{staticClass:"left"},[t._v("I keep my eye on current affairs. I love smart people with good arguments who don't see only two counterpoles.")])])])])])])}]}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"skills"},[s("div",{staticClass:"container",attrs:{id:"skills"}},[s("h2",{staticClass:"margin-gap-top"},[t._v("Skills")]),t._v(" "),s("span",{staticClass:"note"},[t._v("/what can I offer you/")]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-24"},[s("div",[s("h3",{staticClass:"highlight"},[t._v("<?PHP ?>")])]),t._v(" "),s("ul",{staticClass:"skills full-page"},[s("li",[t._v("Laravel")]),t._v(" "),s("li",[t._v("ZendFramework")]),t._v(" "),s("li",[t._v("WordPress")]),t._v(" "),s("li",[t._v("OOP")]),t._v(" "),s("li",[t._v("MySQL")]),t._v(" "),s("li",[t._v("RESTful")]),t._v(" "),s("li",[t._v("DOM")]),t._v(" "),s("li",[t._v("LAMP")])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("p",{staticClass:"justify margin-top-20"},[t._v("PHP's without doubts my main so I am very confident about my PHP skills. When provided with clear task, I submit "),s("span",{staticClass:"highlight"},[t._v("documentated")]),t._v(", "),s("span",{staticClass:"highlight"},[t._v("neat")]),t._v(" and "),s("span",{staticClass:"highlight"},[t._v("fast")]),t._v(" code. In my career I've worked around with many APIs, so no matter how badly is a library documentated - I always will tame it!")]),t._v(" "),s("p",{staticClass:"justify"},[t._v("Lately I've fallen in love with "),s("span",{staticClass:"highlight"},[t._v("Laravel")]),t._v(", because the code looks simply adorable and it provides almost everything a web developer could wish for. Nevertheless I am looking forward to learn another MVC framework - in absorbing of new information I seek no limits!")]),t._v(" "),s("p",{staticClass:"justify"},[t._v("The database work is essential for a web programmer. The databases I managed were of hundred thousands rows and I sometimes had to work on my queries so that they would be faster. I was using "),s("span",{staticClass:"highlight"},[t._v("MySQL")]),t._v(" so far.")]),t._v(" "),s("p",{staticClass:"justify"},[t._v("On web, you send datafiles either via "),s("span",{staticClass:"highlight"},[t._v("jSON")]),t._v(" or "),s("span",{staticClass:"highlight"},[t._v("XML")]),t._v(" (sorry CSV, I don't like you). In my projects I of course worked with both. "),s("span",{staticClass:"highlight"},[t._v("Google Merchant")]),t._v(", eBay, Heureka, TrovaPrezzi and many many more - I usually was in charge of providing them with XML data.")]),t._v(" "),s("p",{staticClass:"justify"},[t._v("As an externist of WrongWare I did a project with "),s("span",{staticClass:"highlight"},[t._v("WordPress")]),t._v(". I missed MVC so much and I believe we can find mutual ground without WP.")])]),t._v(" "),s("div",{staticClass:"col-md-12 margin-top-20"},[s("p",{staticClass:"justify"},[t._v("In my previous job for the e-commerce company, I maintained an eshop application written in "),s("span",{staticClass:"highlight"},[t._v("Zend")]),t._v(". Also I did some projects in "),s("span",{staticClass:"highlight"},[t._v("Zf2")]),t._v(". This experience made me familiar with lots of aspects Zend brings. I can see where you can get wrong when building a large app with Zf2 - my experience here might save you a lot of time!")]),t._v(" "),s("p",{staticClass:"justify"},[t._v("There is no better feeling than seeing "),s("span",{staticClass:"theme-light-text"},[t._v("status code 200")]),t._v(" after implementing an API to your code. "),s("span",{staticClass:"highlight"},[t._v("RESTful")]),t._v(" architecture is an amazing thing and throughout my previous projects I worked for example with Twitter API or PayPal API.")]),t._v(" "),s("p",{staticClass:"left"},[s("span",{staticClass:"highlight"},[t._v("OOP")]),t._v(" is of course must-have skill in programming.")]),t._v(" "),s("p",{staticClass:"left"},[s("span",{staticClass:"theme-text"},[t._v("echo")]),t._v(" "),s("span",{staticClass:"theme-light-text"},[t._v("$")]),t._v("me"),s("span",{staticClass:"theme-light-text"},[t._v("->")]),s("span",{staticClass:"theme-text"},[t._v("can")]),s("span",{staticClass:"theme-light-text"},[t._v("( ")]),t._v("Skills::"),s("span",{staticClass:"theme-text"},[t._v("OOP")]),s("span",{staticClass:"theme-light-text"},[t._v(" );")]),s("br"),t._v(" "),s("span",{staticClass:"red"},[t._v("// true")])]),t._v(" "),s("p",{staticClass:"justify"},[t._v("I participated and won several programming contests using PHP. I was more confident in PHP than in Java or C#, so I used it to solve mathematical and logical tasks. Fortunately nowdays I use PHP for web backend only.")])])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-8"},[s("div",{staticClass:"skill-name"},[s("h3",{staticClass:"highlight"},[t._v(".CSS{}")])]),t._v(" "),s("ul",{staticClass:"skills"},[s("li",[t._v("SASS")]),t._v(" "),s("li",[t._v("Grid system")]),t._v(" "),s("li",[t._v("Bootstrap")]),t._v(" "),s("li",[t._v("CSS 3.0")]),t._v(" "),s("li",[t._v(".psd to HTML+CSS")]),t._v(" "),s("li",[t._v("SVG")]),t._v(" "),s("li",[t._v("Flex")])]),t._v(" "),s("p",{staticClass:"justify margin-top-20"},[t._v("Since I prefer logic-based creativity I always call myself a programmer rather than a coder. Yet I am familiar with most aspects CSS brings in. I always enjoyed designing webpage elements on paper and then putting it all together.")]),t._v(" "),s("p",{staticClass:"justify"},[t._v("I believe that "),s("span",{staticClass:"highlight"},[t._v("SASS")]),t._v(" makes code easily maintainable and extendable. That's why I quiet fancy it.")]),t._v(" "),s("p",{staticClass:"justify"},[t._v("To make a website responsive, I use "),s("span",{staticClass:"highlight"},[t._v("grid system")]),t._v(". The one "),s("span",{staticClass:"highlight"},[t._v("Bootstrap")]),t._v(" provides makes the coding notably easier.")]),t._v(" "),s("p",{staticClass:"justify"},[t._v("What I love about "),s("span",{staticClass:"highlight"},[t._v("flexbox")]),t._v(" is how easy it is to maintan the HTML code with it. A sight for sore eyes.")])]),t._v(" "),s("div",{staticClass:"col-md-8"},[s("div",{staticClass:"skill-name"},[s("h3",{staticClass:"highlight"},[t._v("javaScript()")])]),t._v(" "),s("ul",{staticClass:"skills"},[s("li",[t._v("Vue.js")]),t._v(" "),s("li",[t._v("jQuery")]),t._v(" "),s("li",[t._v("AJAX")]),t._v(" "),s("li",[t._v("Node.js")]),t._v(" "),s("li",[t._v("Gulp")]),t._v(" "),s("li",[t._v("Websocket")]),t._v(" "),s("li",[t._v("Google Analytics")]),t._v(" "),s("li",[t._v("MongoDB")])]),t._v(" "),s("p",{staticClass:"justify margin-top-20"},[t._v("Thanks to Laravel I met "),s("span",{staticClass:"highlight"},[t._v("Vue.js")]),t._v(", an amazingly simple to work with javascript framework. My most notable project built with Vue.js was a "),s("span",{staticClass:"highlight scroll",attrs:{href:"#projects"}},[t._v("research application")]),t._v(". Worth mentioning a Vue Webpack template also known as a definition of convenience.")]),t._v(" "),s("p",{staticClass:"justify"},[s("span",{staticClass:"highlight"},[t._v("Gulp")]),t._v(" with Elixir comes very handy when you develop a Laravel application. Realtime update, LESS compiling and JS&CSS mimifying are cool!")]),t._v(" "),s("p",{staticClass:"justify"},[t._v("I also worked with "),s("span",{staticClass:"highlight"},[t._v("Websocket")]),t._v(" several times. PHP lib "),s("span",{staticClass:"highlight"},[t._v("Ratchet")]),t._v(" makes it a very good solution for real-time events on your page.")]),t._v(" "),s("p",{staticClass:"justify"},[s("span",{staticClass:"highlight"},[t._v("Google Analytics")]),t._v(" are important for all webpages nowdays. I can work both with PHP and JS APIs. "),s("span",{staticClass:"highlight"},[t._v("Schema.org")]),t._v(" is another SEO utility I'm familiar with.")]),t._v(" "),s("p",{staticClass:"justify"},[t._v("Honestly I wish I got chance to work on my Javascript more. It's become a powerful tool and I would like to learn React or Angular in near future as well as create something stunning with Node.")]),t._v(" "),s("p",{staticClass:"justify"},[t._v("In one of my personal projects that I am working on right now, I use "),s("span",{staticClass:"highlight"},[t._v("MongoDB")]),t._v(". It's amazing how quick it is to create a database with nosql, but I don't want to make any assumptions yet.")])]),t._v(" "),s("div",{staticClass:"col-md-8"},[s("div",{staticClass:"skill-name"},[s("h3",{staticClass:"highlight"},[t._v("Software")])]),t._v(" "),s("ul",{staticClass:"skills"},[s("li",[t._v("Ubuntu")]),t._v(" "),s("li",[t._v("Git")]),t._v(" "),s("li",[t._v("NetBeans")]),t._v(" "),s("li",[t._v("Atom")]),t._v(" "),s("li",[t._v("SublimeText")]),t._v(" "),s("li",[t._v("HeidiSQL")]),t._v(" "),s("li",[t._v("GIMP2")])]),t._v(" "),s("p",{staticClass:"justify margin-top-20"},[t._v("This section is for you to make an idea what programs do I use to code. Nothing's strict - being flexible and self-learning means that I can adapt to your workflow with any software you long for.")]),t._v(" "),s("p",{staticClass:"justify"},[s("span",{staticClass:"highlight"},[t._v("Git")]),t._v(" and "),s("span",{staticClass:"highlight"},[t._v("Assembla")]),t._v(" are code management technology providers I've used so far. I can't wait to do my first commit in your company!")]),t._v(" "),s("p",{staticClass:"justify"},[s("span",{staticClass:"highlight"},[t._v("NetBeans")]),t._v(" is solid IDE with almost everything one needs. I worked around with NetBeans for several years spending thousands of hours spitting some variables around.")]),t._v(" "),s("p",{staticClass:"justify"},[t._v("I used "),s("span",{staticClass:"highlight"},[t._v("SublimeText 3")]),t._v(" because it's so adjustable. Also the dark theme here looks so sick!")]),t._v(" "),s("p",{staticClass:"justify"},[t._v("At the moment I program in "),s("span",{staticClass:"highlight"},[t._v("Atom")]),t._v(" and I'm more than satisfied.")]),t._v(" "),s("p",{staticClass:"justify"},[s("span",{staticClass:"highlight"},[t._v("HeidiSQL")]),t._v(" serves for browsing through a database quickly. On "),s("span",{staticClass:"highlight"},[t._v("Ubuntu")]),t._v(" I get the job done by "),s("span",{staticClass:"highlight"},[t._v("MySQL Workbench")]),t._v(".")]),t._v(" "),s("p",{staticClass:"justify"},[t._v("$ "),s("span",{staticClass:"theme-light-text"},[t._v("composer")]),t._v(" install")])])])])])}]}}],[4]);
//# sourceMappingURL=app.34cf24f057c0a3004059.js.map