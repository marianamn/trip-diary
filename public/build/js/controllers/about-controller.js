"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.aboutController=void 0;var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),_jquery=require("jquery"),_jquery2=_interopRequireDefault(_jquery),_handlebars=require("handlebars"),_handlebars2=_interopRequireDefault(_handlebars),_templates=require("templates"),aboutController=function(){var e=function(){function e(t){_classCallCheck(this,e),this.templates=t}return _createClass(e,[{key:"about",value:function(){this.templates.get("about").then(function(e){var t=_handlebars2.default.compile(e);(0,_jquery2.default)("#content").html(t())})}}]),e}(),t=new e(_templates.templatesLoader);return{about:function(){return t.about()}}}();exports.aboutController=aboutController;