(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{126:function(e,n,t){"use strict";t.d(n,"a",function(){return N});var a=t(12),r=t.n(a),o=t(0),l=t.n(o),i=t(22),s=t(33),c=t.n(s);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.forEach(function(n){b(e,n,t[n])})}return e}function d(e,n,t,a,r,o,l){try{var i=e[o](l),s=i.value}catch(c){return void t(c)}i.done?n(s):Promise.resolve(s).then(a,r)}function p(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,n){return(g=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function b(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function E(){var e=w(["\n  padding-bottom: 10px;\n  color: #3498db !important;\n"]);return E=function(){return e},e}function y(){var e=w(["\n  display: block;\n  padding: 10px;\n  border-radius: 4px;\n  color: gray;\n"]);return y=function(){return e},e}function v(){var e=w(["\n  margin-bottom: 15px;\n  input, textarea {\n    display: block;\n    margin: 5px 0;\n    line-height: 34px;\n    width: 390px;\n    border: 1px solid silver;\n    padding-left: 5px;\n  }\n"]);return v=function(){return e},e}function w(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var k=i.a.form(v()),x=i.a.button(y()),O=i.a.p(E()),P=function(e){return Object.keys(e).map(function(n){return"".concat(encodeURIComponent(n),"=").concat(encodeURIComponent(e[n]))}).join("&")},N=function(e){function n(){var e,t,a,o;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);for(var l=arguments.length,i=new Array(l),s=0;s<l;s++)i[s]=arguments[s];return a=this,o=(e=f(n)).call.apply(e,[this].concat(i)),t=!o||"object"!==u(o)&&"function"!=typeof o?h(a):o,b(h(t),"state",{submitted:!1}),b(h(t),"submitForm",function(){var e,n=(e=r.a.mark(function e(n){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("submitted"),console.log(n),n.preventDefault(),e.prev=3,e.next=6,c.a.post("/",P(m({"form-name":"inquiry"},n)),{headers:{"Content-Type":"application/x-www-form-urlencoded"}});case 6:t.setState({submitted:!0}),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(3),console.log(e.t0),window.alert("There was a problem submitting your form! Try again or reload the page :)"),t.setState({submitted:!0});case 14:case"end":return e.stop()}},e,null,[[3,9]])}),function(){var n=this,t=arguments;return new Promise(function(a,r){var o=e.apply(n,t);function l(e){d(o,a,r,l,i,"next",e)}function i(e){d(o,a,r,l,i,"throw",e)}l(void 0)})});return function(e){return n.apply(this,arguments)}}()),t}var t,a,i;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&g(e,n)}(n,o["Component"]),t=n,(a=[{key:"render",value:function(){return this.state.submitted?l.a.createElement(O,null,"Your inquiry has been submitted. We'll be in contact with you as soon as possible"):l.a.createElement(k,{name:"inquiry",method:"post","data-netlify":"true","data-netlify-honeypot":"bot-field",onSubmit:this.submitForm},l.a.createElement("input",{type:"hidden",name:"form-name",value:"inquiry",disabled:!0}),l.a.createElement("input",{type:"text",name:"name",placeholder:"Name",disabled:!0}),l.a.createElement("input",{type:"tel",name:"tel",placeholder:"Contact number",disabled:!0}),l.a.createElement("input",{type:"email",name:"email",placeholder:"Email Address",disabled:!0}),l.a.createElement("textarea",{placeholder:"Other remarks",style:{minHeight:"150px"},disabled:!0}),l.a.createElement(x,{type:"submit",disabled:!0},"Submit"))}}])&&p(t.prototype,a),i&&p(t,i),n}()},128:function(e,n,t){"use strict";var a=t(22);function r(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n  color: rgba(132, 129, 122,1.0);\n  #room-banner {\n    max-width: 960px;\n    margin: 15px auto 0 auto;\n  }\n\n  #room-banner img {\n    width: 100%;\n    max-width: 960px;\n    border-radius: 2px;\n    height: auto;\n  }\n\n  #room-content {\n    color: rgba(132, 129, 122,1.0);\n    max-width: 960px;\n    margin: auto;\n    font-size: 16px;\n    line-height: 24px;\n  }\n\n  h1 {\n    color: rgba(204, 174, 98,1.0);\n    font-family: 'Tangerine', serif;\n    padding: 20px;\n    font-size: 4rem;\n    text-align: center;\n    margin: auto auto;\n  }\n\n  h2 {\n    color: rgba(204, 174, 98,1.0);\n  }\n\n  .room-section {\n    border-top: 1px dashed rgba(204, 174, 98,.50);\n    margin: 0 auto;\n    padding: 15px;\n  }\n\n  .room-section ul {\n    margin: 0 auto;\n    padding: 0 0 0 25px;\n  } \n\n  #room-lead {\n    font-size: 20px;\n    line-height: 34px;\n    padding: 0 10px 20px 10px;\n    text-align: center;\n  }\n\n  #room-items,\n  #check-in-policies {\n    padding: 0;\n    margin: 0;\n    list-style-type: none;\n  }\n\n  #room-price {\n    font-size: 32px;\n    color: rgba(204, 174, 98,1.0);\n    margin: 0;\n  }\n\n  .room-section h2 {\n    font-size: 22px;\n    margin: 0;\n  }\n\n  #inquiries-reservation-section p {\n    color: gray;\n    margin: 0;\n  }\n\n  li {\n    line-height: 28px;\n  }\n\n  ul {\n    margin: 0 auto;\n    padding: 25px;  \n    list-style-type: circle;\n  }\n\n  .gold {\n    color: rgba(204, 174, 98,1.0); \n  }\n\n  /* Small devices (landscape phones, 576px and up) */\n  @media (min-width: 576px) { \n  }\n  \n  /* Medium devices (tablets, 768px and up) The navbar toggle appears at this breakpoint */\n  @media (min-width: 768px) {  \n    #rooms, \n    #room-price-section,\n    #checkin-policy-section,\n    #inquiries-reservation-section {\n      display: grid;\n      grid-template-columns: 40% 60%;\n    }\n\n    .room-section h2 {\n      padding: 0;\n    }\n\n\n  }\n  \n  /* Large devices (desktops, 992px and up) */\n  @media (min-width: 992px) { \n  }\n  \n  /* Extra large devices (large desktops, 1200px and up) */\n  @media (min-width: 1200px) {\n\n  }  \n"]);return r=function(){return e},e}n.a=a.a.div(r())},53:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(128),l=t(126);n.default=function(){return r.a.createElement(o.a,null,r.a.createElement("section",{id:"room-banner"},r.a.createElement("img",{src:"https://res.cloudinary.com/stmi/image/upload/c_scale,w_960/v1555333820/eldonresort/el-don-resort-casa-del-mar_deqzgi.jpg"})),r.a.createElement("div",{id:"room-content"},r.a.createElement("h1",{id:"room-title"},"Casa del Mar"),r.a.createElement("p",{id:"room-lead"},"Beachfront room ideal for couples seeking for a romantic retreat and families looking for a holiday home. It has a private veranda that provides guests a beautiful overlooking view to the sea. "),r.a.createElement("section",{id:"room-price-section",className:"room-section"},r.a.createElement("div",null,r.a.createElement("h2",null,"Room Rate"),r.a.createElement("p",{className:"gold"},r.a.createElement("small",null,r.a.createElement("i",null,"Good for 2 persons")))),r.a.createElement("div",null,r.a.createElement("p",{id:"room-price"},"Php 4,000.00"),r.a.createElement("p",null,r.a.createElement("small",null,"Room rates are introductory only until May 31, 2019.")))),r.a.createElement("section",{id:"rooms",className:"room-section"},r.a.createElement("div",null,r.a.createElement("h2",null,"Rooms"),r.a.createElement("p",{className:"gold"},r.a.createElement("small",null,r.a.createElement("i",null,"Single Beds (42 x75 inches)")))),r.a.createElement("ul",{id:"room-items"},r.a.createElement("li",null,"Casa del Mar 1 and 2"),r.a.createElement("li",null,"Casa del Mar 3 and 4"),r.a.createElement("li",null,"Casa del Mar 5"),r.a.createElement("li",null,"Casa del Mar 6"),r.a.createElement("li",null,"Casa del Mar 7"))),r.a.createElement("section",{id:"checkin-policy-section",className:"room-section"},r.a.createElement("div",null,r.a.createElement("h2",null,"Check-in Policy")),r.a.createElement("ul",{id:"check-in-policies",className:"room-info"},r.a.createElement("li",null,"Check-In Time:  After 2:00 PM"),r.a.createElement("li",null,"Check-Out Time: Before 12:00 noon"),r.a.createElement("li",null,"Extra-person charge: P1,500/pax with breakfast."),r.a.createElement("li",null,"Children 8 years below are free of charge but will have to pay P250.00 for breakfast."))),r.a.createElement("section",{id:"inquiries-reservation-section",className:"room-section"},r.a.createElement("div",null,r.a.createElement("h2",null,"For Inquiries and Reservations")),r.a.createElement("div",null,r.a.createElement(l.a,null),r.a.createElement("p",null,"Please dont hesitate to call or email us at: "),r.a.createElement("p",null,"Mobile Number: 0917 722 1506"),r.a.createElement("p",null,"E-mail Address: eldonresort@gmail.com"),r.a.createElement("br",null),r.a.createElement("p",null,"Booking Office:"),r.a.createElement("p",null,r.a.createElement("strong",null,"El Don Resort Office")),r.a.createElement("p",null,"Roadway Inn Mezzanine Floor, J.P. Laurel Avenue, Davao"),r.a.createElement("p",null,"City (Mondays- Saturdays from 9:00 am-6:00 pm)"))),r.a.createElement("section",{className:"room-section"},r.a.createElement("h2",null,"STAYING GUEST POLICY"),r.a.createElement("ul",{className:"room-info"},r.a.createElement("li",null,"Prior reservations must be made."),r.a.createElement("li",null,"Any government issued identification or company ID must be presented upon check-in along with the confirmation form."),r.a.createElement("li",null,"All guests must register at the resort’s front desk."),r.a.createElement("li",null,"Strictly NO SMOKING (please see smoking policy below). "),r.a.createElement("li",null,"NO PETS allowed."),r.a.createElement("li",null,"Issuance of parking permits will be done upon check -in (see parking policies below)."),r.a.createElement("li",null,"Room service, pool side service and beach area food service will incur 10% service charge."),r.a.createElement("li",null,"If you exceed the maximum number of guests allowed, you will be asked to rent another guestroom for proper accommodation."),r.a.createElement("li",null,"Breakfast meals will be on buffet for an accumulated guests of 20 pax on Chefs’ choice for menu. Breakfast is available from 6-9 am only at the restaurant. Present/show meal stubs/coupons upon dining."),r.a.createElement("li",null,"For overnight guests of less than 20 pax, plated breakfast will be offered from the ala carte choices with prior ordering done at least a day before. Breakfast is available from 6-9 am only at the restaurant."),r.a.createElement("li",null,"For other meals, special group packages can be availed for buffet service to be arranged with the management with minimum of 20 pax at P 350.00/pax to be served at the restaurant."),r.a.createElement("li",null,"Buffet service will require a minimum of 20 guests accumulated. The menu will be on Chef’s choice for buffet which consists of One Soup ; One pasta; One veggies/noodle dish; One Chicken/Pork dish, One fish/seafood dish, Rice and One Dessert with one round of iced tea/juice."),r.a.createElement("li",null,"Only one discount may be allowed relative to other discount programs. No additional discounts may be added to special package rates, group rates, or promotional rates."),r.a.createElement("li",null,"Rates are subject to change without notice."),r.a.createElement("li",null,"Rates are inclusive of VAT."))),r.a.createElement("section",{className:"room-section"},r.a.createElement("h2",null,"NIGHTLY RESERVATIONS"),r.a.createElement("ul",{className:"room-info"},r.a.createElement("li",null,"Rooms are serviced daily."),r.a.createElement("li",null,"A Full Service Clean will be performed every third night on reservations of five nights or longer including fresh bed sheets, making of beds, floor sweep, vacuum and  bathroom cleaning ."),r.a.createElement("li",null,"Stays of seven, ten or thirteen nights will receive the first Full Service Clean on the fourth night and resume every third night thereafter."))),r.a.createElement("section",{className:"room-section"},r.a.createElement("h2",null,"CANCELLATIONS AND CHARGES"),r.a.createElement("ul",{className:"room-info"},r.a.createElement("li",null,"Advance payments are non-refundable on confirmed bookings less than a week of date/s for overnight guests, special packages and functions.  For day tours, no refunds for cancellations three days prior the event."),r.a.createElement("li",null,"Date change will be allowed one month before the confirmed booking date with no extra charge. A change of date fee will apply if less than one month at P 1,000.00 for the confirmed bookings for each date change per room /night and subject to availability."),r.a.createElement("li",null,"We reserve the right to cancel or modify reservations where it appears that a customer has engaged in fraudulent or inappropriate activity or under other circumstances where it appears that the reservations contain or resulted from a mistake or error."),r.a.createElement("li",null,"The resort shall not be held liable for cancellation of bookings and shortened stays because of force majeure/acts of God or conditions beyond the Resort’s control, which include floods, earthquakes, explosions, fire, civil disobedience, war, legislation not in force at the date of this agreement, labor disputes or delays of third parties. Also, the Resort will not be held liable for failure to carry out arrangements and other obligations due to the same circumstances. In such cases, the Resort must be granted a reasonable extension of time to perform the obligations or arrangements."),r.a.createElement("li",null,"Before sending us your booking, please check that all of the information you have provided are correct and complete. Incorrect or incomplete information can result in an erroneous booking for which we take no responsibility."))),r.a.createElement("section",{className:"room-section"},r.a.createElement("h2",null,"PARKING"),r.a.createElement("ul",{className:"room-info"},r.a.createElement("li",null,"Free parking is provided to guests."),r.a.createElement("li",null,"Guests are provided a parking permit upon entry at the guard house which must be prominently displayed at all times while parking on-site."),r.a.createElement("li",null,"To ensure sufficient parking for all guests at the resort, parking permits are issued in accordance to the size of room and/or group size."),r.a.createElement("li",null,"We are unable to issue additional parking permits.",r.a.createElement("ul",null,r.a.createElement("li",null,"1 Bedroom will receive 1 Parking Permit at check-in"),r.a.createElement("li",null,"2 Bedrooms will receive 2 Parking Permits at check-in."),r.a.createElement("li",null,"1 parking ticket for every group of day tourist numbering 10 or less."))),r.a.createElement("li",null," Parking for event/function participants will be designated by the resort management upon consultation with the organizers; 10 parking slots at the resort will be arranged."),r.a.createElement("li",null,"Due to limited parking availability, big vehicle (like buses) parking is only permitted with prior Management approval."))),r.a.createElement("section",{className:"room-section"},r.a.createElement("h2",null,"SMOKING"),r.a.createElement("ul",{className:"room-info"},r.a.createElement("li",null,"El Don Resort has smoking designated areas."),r.a.createElement("li",null,"All rooms, balconies, and common areas are smoke free."),r.a.createElement("li",null,"As a courtesy to other guests, and to maintain a healthy and clean environment, the use of electronic cigarettes, vaporizers, and smokeless tobacco of any kind is also subject to the same rules."),r.a.createElement("li",null,"A fine of FIVE THOUSAND PESOS will be charged for violation of this rule.")))))}}}]);
//# sourceMappingURL=src-pages-casa-del-mar.2bbcb725.js.map