(function() {
// make sure we have jQuery
				var interval = null;

				var EE = [];
			if (typeof jQuery === "undefined")
			{
				interval = setInterval(loadRTE, 100);
			}
			else
			{
				loadRTE();
			}

			function loadRTE()
			{
				// make sure jQuery is loaded
				if ( typeof jQuery === "undefined" ){ return; }
				clearInterval( interval );

				var $ = jQuery;

				// RTE library
				/*!
 * jQuery UI Core @VERSION
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */
!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(t){function e(e,i){var r,o,u,s=e.nodeName.toLowerCase();return"area"===s?(r=e.parentNode,o=r.name,!(!e.href||!o||"map"!==r.nodeName.toLowerCase())&&(u=t("img[usemap='#"+o+"']")[0],!!u&&n(u))):(/input|select|textarea|button|object/.test(s)?!e.disabled:"a"===s?e.href||i:i)&&n(e)}function n(e){return t.expr.filters.visible(e)&&!t(e).parents().addBack().filter(function(){return"hidden"===t.css(this,"visibility")}).length}t.ui=t.ui||{},t.extend(t.ui,{version:"@VERSION",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),t.fn.extend({scrollParent:function(e){var n=this.css("position"),i="absolute"===n,r=e?/(auto|scroll|hidden)/:/(auto|scroll)/,o=this.parents().filter(function(){var e=t(this);return(!i||"static"!==e.css("position"))&&r.test(e.css("overflow")+e.css("overflow-y")+e.css("overflow-x"))}).eq(0);return"fixed"!==n&&o.length?o:t(this[0].ownerDocument||document)},uniqueId:function(){var t=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++t)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&t(this).removeAttr("id")})}}),t.extend(t.expr[":"],{data:t.expr.createPseudo?t.expr.createPseudo(function(e){return function(n){return!!t.data(n,e)}}):function(e,n,i){return!!t.data(e,i[3])},focusable:function(n){return e(n,!isNaN(t.attr(n,"tabindex")))},tabbable:function(n){var i=t.attr(n,"tabindex"),r=isNaN(i);return(r||i>=0)&&e(n,!r)}}),t("<a>").outerWidth(1).jquery||t.each(["Width","Height"],function(e,n){function i(e,n,i,o){return t.each(r,function(){n-=parseFloat(t.css(e,"padding"+this))||0,i&&(n-=parseFloat(t.css(e,"border"+this+"Width"))||0),o&&(n-=parseFloat(t.css(e,"margin"+this))||0)}),n}var r="Width"===n?["Left","Right"]:["Top","Bottom"],o=n.toLowerCase(),u={innerWidth:t.fn.innerWidth,innerHeight:t.fn.innerHeight,outerWidth:t.fn.outerWidth,outerHeight:t.fn.outerHeight};t.fn["inner"+n]=function(e){return void 0===e?u["inner"+n].call(this):this.each(function(){t(this).css(o,i(this,e)+"px")})},t.fn["outer"+n]=function(e,r){return"number"!=typeof e?u["outer"+n].call(this,e):this.each(function(){t(this).css(o,i(this,e,!0,r)+"px")})}}),t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(t.fn.removeData=function(e){return function(n){return arguments.length?e.call(this,t.camelCase(n)):e.call(this)}}(t.fn.removeData)),t.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),t.fn.extend({focus:function(e){return function(n,i){return"number"==typeof n?this.each(function(){var e=this;setTimeout(function(){t(e).focus(),i&&i.call(e)},n)}):e.apply(this,arguments)}}(t.fn.focus),disableSelection:function(){var t="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(t+".ui-disableSelection",function(t){t.preventDefault()})}}(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(e){if(void 0!==e)return this.css("zIndex",e);if(this.length)for(var n,i,r=t(this[0]);r.length&&r[0]!==document;){if(n=r.css("position"),("absolute"===n||"relative"===n||"fixed"===n)&&(i=parseInt(r.css("zIndex"),10),!isNaN(i)&&0!==i))return i;r=r.parent()}return 0}}),t.ui.plugin={add:function(e,n,i){var r,o=t.ui[e].prototype;for(r in i)o.plugins[r]=o.plugins[r]||[],o.plugins[r].push([n,i[r]])},call:function(t,e,n,i){var r,o=t.plugins[e];if(o&&(i||t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType))for(r=0;r<o.length;r++)t.options[o[r][0]]&&o[r][1].apply(t.element,n)}}});

/*!
 * jQuery UI Widget @VERSION
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */
!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(t){var e=0,i=Array.prototype.slice;return t.cleanData=function(e){return function(i){var n,s,o;for(o=0;null!=(s=i[o]);o++)try{n=t._data(s,"events"),n&&n.remove&&t(s).triggerHandler("remove")}catch(r){}e(i)}}(t.cleanData),t.widget=function(e,i,n){var s,o,r,a,u={},d=e.split(".")[0];return e=e.split(".")[1],s=d+"-"+e,n||(n=i,i=t.Widget),t.expr[":"][s.toLowerCase()]=function(e){return!!t.data(e,s)},t[d]=t[d]||{},o=t[d][e],r=t[d][e]=function(t,e){return this._createWidget?void(arguments.length&&this._createWidget(t,e)):new r(t,e)},t.extend(r,o,{version:n.version,_proto:t.extend({},n),_childConstructors:[]}),a=new i,a.options=t.widget.extend({},a.options),t.each(n,function(e,n){return t.isFunction(n)?void(u[e]=function(){var t=function(){return i.prototype[e].apply(this,arguments)},s=function(t){return i.prototype[e].apply(this,t)};return function(){var e,i=this._super,o=this._superApply;return this._super=t,this._superApply=s,e=n.apply(this,arguments),this._super=i,this._superApply=o,e}}()):void(u[e]=n)}),r.prototype=t.widget.extend(a,{widgetEventPrefix:o?a.widgetEventPrefix||e:e},u,{constructor:r,namespace:d,widgetName:e,widgetFullName:s}),o?(t.each(o._childConstructors,function(e,i){var n=i.prototype;t.widget(n.namespace+"."+n.widgetName,r,i._proto)}),delete o._childConstructors):i._childConstructors.push(r),t.widget.bridge(e,r),r},t.widget.extend=function(e){for(var n,s,o=i.call(arguments,1),r=0,a=o.length;r<a;r++)for(n in o[r])s=o[r][n],o[r].hasOwnProperty(n)&&void 0!==s&&(t.isPlainObject(s)?e[n]=t.isPlainObject(e[n])?t.widget.extend({},e[n],s):t.widget.extend({},s):e[n]=s);return e},t.widget.bridge=function(e,n){var s=n.prototype.widgetFullName||e;t.fn[e]=function(o){var r="string"==typeof o,a=i.call(arguments,1),u=this;return o=!r&&a.length?t.widget.extend.apply(null,[o].concat(a)):o,r?this.each(function(){var i,n=t.data(this,s);return"instance"===o?(u=n,!1):n?t.isFunction(n[o])&&"_"!==o.charAt(0)?(i=n[o].apply(n,a),i!==n&&void 0!==i?(u=i&&i.jquery?u.pushStack(i.get()):i,!1):void 0):t.error("no such method '"+o+"' for "+e+" widget instance"):t.error("cannot call methods on "+e+" prior to initialization; attempted to call method '"+o+"'")}):this.each(function(){var e=t.data(this,s);e?(e.option(o||{}),e._init&&e._init()):t.data(this,s,new n(o,this))}),u}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(i,n){n=t(n||this.defaultElement||this)[0],this.element=t(n),this.uuid=e++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=t(),this.hoverable=t(),this.focusable=t(),n!==this&&(t.data(n,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===n&&this.destroy()}}),this.document=t(n.style?n.ownerDocument:n.document||n),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this.options=t.widget.extend({},this.options,this._getCreateOptions(),i),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:t.noop,_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:t.noop,widget:function(){return this.element},option:function(e,i){var n,s,o,r=e;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof e)if(r={},n=e.split("."),e=n.shift(),n.length){for(s=r[e]=t.widget.extend({},this.options[e]),o=0;o<n.length-1;o++)s[n[o]]=s[n[o]]||{},s=s[n[o]];if(e=n.pop(),1===arguments.length)return void 0===s[e]?null:s[e];s[e]=i}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];r[e]=i}return this._setOptions(r),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return this.options[t]=e,"disabled"===t&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!e),e&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(e,i,n){var s,o=this;"boolean"!=typeof e&&(n=i,i=e,e=!1),n?(i=s=t(i),this.bindings=this.bindings.add(i)):(n=i,i=this.element,s=this.widget()),t.each(n,function(n,r){function a(){if(e||o.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled"))return("string"==typeof r?o[r]:r).apply(o,arguments)}"string"!=typeof r&&(a.guid=r.guid=r.guid||a.guid||t.guid++);var u=n.match(/^([\w:-]*)\s*(.*)$/),d=u[1]+o.eventNamespace,h=u[2];h?s.delegate(h,d,a):i.bind(d,a)})},_off:function(e,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(i).undelegate(i),this.bindings=t(this.bindings.not(e).get()),this.focusable=t(this.focusable.not(e).get()),this.hoverable=t(this.hoverable.not(e).get())},_delay:function(t,e){function i(){return("string"==typeof t?n[t]:t).apply(n,arguments)}var n=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){t(e.currentTarget).addClass("ui-state-hover")},mouseleave:function(e){t(e.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){t(e.currentTarget).addClass("ui-state-focus")},focusout:function(e){t(e.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(e,i,n){var s,o,r=this.options[e];if(n=n||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(s in o)s in i||(i[s]=o[s]);return this.element.trigger(i,n),!(t.isFunction(r)&&r.apply(this.element[0],[i].concat(n))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(n,s,o){"string"==typeof s&&(s={effect:s});var r,a=s?s===!0||"number"==typeof s?i:s.effect||i:e;s=s||{},"number"==typeof s&&(s={duration:s}),r=!t.isEmptyObject(s),s.complete=o,s.delay&&n.delay(s.delay),r&&t.effects&&t.effects.effect[a]?n[e](s):a!==e&&n[a]?n[a](s.duration,s.easing,o):n.queue(function(i){t(this)[e](),o&&o.call(n[0]),i()})}}),t.widget});

/*!
 * jQuery UI Dialog @VERSION
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/dialog/
 */
!function(i){"function"==typeof define&&define.amd?define(["jquery","./core","./widget","./button","./draggable","./mouse","./position","./resizable"],i):i(jQuery)}(function(i){return i.widget("ui.dialog",{version:"@VERSION",options:{appendTo:"body",autoOpen:!0,buttons:[],closeOnEscape:!0,closeText:"Close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(t){var e=i(this).css(t).offset().top;e<0&&i(this).css("top",t.top-e)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},resizableRelatedOptions:{maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),this.options.title=this.options.title||this.originalTitle,this._createWrapper(),this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&i.fn.draggable&&this._makeDraggable(),this.options.resizable&&i.fn.resizable&&this._makeResizable(),this._isOpen=!1,this._trackFocus()},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var t=this.options.appendTo;return t&&(t.jquery||t.nodeType)?i(t):this.document.find(t||"body").eq(0)},_destroy:function(){var i,t=this.originalPosition;this._destroyOverlay(),this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(),this.uiDialog.stop(!0,!0).remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),i=t.parent.children().eq(t.index),i.length&&i[0]!==this.element[0]?i.before(this.element):t.parent.append(this.element)},widget:function(){return this.uiDialog},disable:i.noop,enable:i.noop,close:function(t){var e,o=this;if(this._isOpen&&this._trigger("beforeClose",t)!==!1){if(this._isOpen=!1,this._focusedElement=null,this._destroyOverlay(),this._untrackInstance(),!this.opener.filter(":focusable").focus().length)try{e=this.document[0].activeElement,e&&"body"!==e.nodeName.toLowerCase()&&i(e).blur()}catch(s){}this._hide(this.uiDialog,this.options.hide,function(){o._trigger("close",t)})}},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(t,e){var o=!1,s=this.uiDialog.siblings(".ui-front:visible").map(function(){return+i(this).css("z-index")}).get(),n=Math.max.apply(null,s);return n>=+this.uiDialog.css("z-index")&&(this.uiDialog.css("z-index",n+1),o=!0),o&&!e&&this._trigger("focus",t),o},open:function(){var t=this;return this._isOpen?void(this._moveToTop()&&this._focusTabbable()):(this._isOpen=!0,this.opener=i(this.document[0].activeElement),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this.overlay&&this.overlay.css("z-index",this.uiDialog.css("z-index")-1),this._show(this.uiDialog,this.options.show,function(){t._focusTabbable(),t._trigger("focus")}),this._makeFocusTarget(),void this._trigger("open"))},_focusTabbable:function(){var i=this._focusedElement;i||(i=this.element.find("[autofocus]")),i.length||(i=this.element.find(":tabbable")),i.length||(i=this.uiDialogButtonPane.find(":tabbable")),i.length||(i=this.uiDialogTitlebarClose.filter(":tabbable")),i.length||(i=this.uiDialog),i.eq(0).focus()},_keepFocus:function(t){function e(){var t=this.document[0].activeElement,e=this.uiDialog[0]===t||i.contains(this.uiDialog[0],t);e||this._focusTabbable()}t.preventDefault(),e.call(this),this._delay(e)},_createWrapper:function(){this.uiDialog=i("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+this.options.dialogClass).hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._on(this.uiDialog,{keydown:function(t){if(this.options.closeOnEscape&&!t.isDefaultPrevented()&&t.keyCode&&t.keyCode===i.ui.keyCode.ESCAPE)return t.preventDefault(),void this.close(t);if(t.keyCode===i.ui.keyCode.TAB&&!t.isDefaultPrevented()){var e=this.uiDialog.find(":tabbable"),o=e.filter(":first"),s=e.filter(":last");t.target!==s[0]&&t.target!==this.uiDialog[0]||t.shiftKey?t.target!==o[0]&&t.target!==this.uiDialog[0]||!t.shiftKey||(this._delay(function(){s.focus()}),t.preventDefault()):(this._delay(function(){o.focus()}),t.preventDefault())}},mousedown:function(i){this._moveToTop(i)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var t;this.uiDialogTitlebar=i("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog),this._on(this.uiDialogTitlebar,{mousedown:function(t){i(t.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.focus()}}),this.uiDialogTitlebarClose=i("<button type='button'></button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:!1}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar),this._on(this.uiDialogTitlebarClose,{click:function(i){i.preventDefault(),this.close(i)}}),t=i("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar),this._title(t),this.uiDialog.attr({"aria-labelledby":t.attr("id")})},_title:function(i){this.options.title||i.html("&#160;"),i.text(this.options.title)},_createButtonPane:function(){this.uiDialogButtonPane=i("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),this.uiButtonSet=i("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane),this._createButtons()},_createButtons:function(){var t=this,e=this.options.buttons;return this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),i.isEmptyObject(e)||i.isArray(e)&&!e.length?void this.uiDialog.removeClass("ui-dialog-buttons"):(i.each(e,function(e,o){var s,n;o=i.isFunction(o)?{click:o,text:e}:o,o=i.extend({type:"button"},o),s=o.click,o.click=function(){s.apply(t.element[0],arguments)},n={icons:o.icons,text:o.showText},delete o.icons,delete o.showText,i("<button></button>",o).button(n).appendTo(t.uiButtonSet)}),this.uiDialog.addClass("ui-dialog-buttons"),void this.uiDialogButtonPane.appendTo(this.uiDialog))},_makeDraggable:function(){function t(i){return{position:i.position,offset:i.offset}}var e=this,o=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(o,s){i(this).addClass("ui-dialog-dragging"),e._blockFrames(),e._trigger("dragStart",o,t(s))},drag:function(i,o){e._trigger("drag",i,t(o))},stop:function(s,n){var a=n.offset.left-e.document.scrollLeft(),l=n.offset.top-e.document.scrollTop();o.position={my:"left top",at:"left"+(a>=0?"+":"")+a+" top"+(l>=0?"+":"")+l,of:e.window},i(this).removeClass("ui-dialog-dragging"),e._unblockFrames(),e._trigger("dragStop",s,t(n))}})},_makeResizable:function(){function t(i){return{originalPosition:i.originalPosition,originalSize:i.originalSize,position:i.position,size:i.size}}var e=this,o=this.options,s=o.resizable,n=this.uiDialog.css("position"),a="string"==typeof s?s:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:o.maxWidth,maxHeight:o.maxHeight,minWidth:o.minWidth,minHeight:this._minHeight(),handles:a,start:function(o,s){i(this).addClass("ui-dialog-resizing"),e._blockFrames(),e._trigger("resizeStart",o,t(s))},resize:function(i,o){e._trigger("resize",i,t(o))},stop:function(s,n){var a=e.uiDialog.offset(),l=a.left-e.document.scrollLeft(),h=a.top-e.document.scrollTop();o.height=e.uiDialog.height(),o.width=e.uiDialog.width(),o.position={my:"left top",at:"left"+(l>=0?"+":"")+l+" top"+(h>=0?"+":"")+h,of:e.window},i(this).removeClass("ui-dialog-resizing"),e._unblockFrames(),e._trigger("resizeStop",s,t(n))}}).css("position",n)},_trackFocus:function(){this._on(this.widget(),{focusin:function(t){this._makeFocusTarget(),this._focusedElement=i(t.target)}})},_makeFocusTarget:function(){this._untrackInstance(),this._trackingInstances().unshift(this)},_untrackInstance:function(){var t=this._trackingInstances(),e=i.inArray(this,t);e!==-1&&t.splice(e,1)},_trackingInstances:function(){var i=this.document.data("ui-dialog-instances");return i||(i=[],this.document.data("ui-dialog-instances",i)),i},_minHeight:function(){var i=this.options;return"auto"===i.height?i.minHeight:Math.min(i.minHeight,i.height)},_position:function(){var i=this.uiDialog.is(":visible");i||this.uiDialog.show(),this.uiDialog.position(this.options.position),i||this.uiDialog.hide()},_setOptions:function(t){var e=this,o=!1,s={};i.each(t,function(i,t){e._setOption(i,t),i in e.sizeRelatedOptions&&(o=!0),i in e.resizableRelatedOptions&&(s[i]=t)}),o&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",s)},_setOption:function(i,t){var e,o,s=this.uiDialog;"dialogClass"===i&&s.removeClass(this.options.dialogClass).addClass(t),"disabled"!==i&&(this._super(i,t),"appendTo"===i&&this.uiDialog.appendTo(this._appendTo()),"buttons"===i&&this._createButtons(),"closeText"===i&&this.uiDialogTitlebarClose.button({label:""+t}),"draggable"===i&&(e=s.is(":data(ui-draggable)"),e&&!t&&s.draggable("destroy"),!e&&t&&this._makeDraggable()),"position"===i&&this._position(),"resizable"===i&&(o=s.is(":data(ui-resizable)"),o&&!t&&s.resizable("destroy"),o&&"string"==typeof t&&s.resizable("option","handles",t),o||t===!1||this._makeResizable()),"title"===i&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){var i,t,e,o=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),o.minWidth>o.width&&(o.width=o.minWidth),i=this.uiDialog.css({height:"auto",width:o.width}).outerHeight(),t=Math.max(0,o.minHeight-i),e="number"==typeof o.maxHeight?Math.max(0,o.maxHeight-i):"none","auto"===o.height?this.element.css({minHeight:t,maxHeight:e,height:"auto"}):this.element.height(Math.max(0,o.height-i)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var t=i(this);return i("<div>").css({position:"absolute",width:t.outerWidth(),height:t.outerHeight()}).appendTo(t.parent()).offset(t.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(t){return!!i(t.target).closest(".ui-dialog").length||!!i(t.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var t=!0;this._delay(function(){t=!1}),this.document.data("ui-dialog-overlays")||this._on(this.document,{focusin:function(i){t||this._allowInteraction(i)||(i.preventDefault(),this._trackingInstances()[0]._focusTabbable())}}),this.overlay=i("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()),this._on(this.overlay,{mousedown:"_keepFocus"}),this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1)}},_destroyOverlay:function(){if(this.options.modal&&this.overlay){var i=this.document.data("ui-dialog-overlays")-1;i?this.document.data("ui-dialog-overlays",i):this.document.unbind("focusin").removeData("ui-dialog-overlays"),this.overlay.remove(),this.overlay=null}}})});

/*!
 * jQuery UI Position @VERSION
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */
!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(t){return function(){function i(t,i,e){return[parseFloat(t[0])*(a.test(t[0])?i/100:1),parseFloat(t[1])*(a.test(t[1])?e/100:1)]}function e(i,e){return parseInt(t.css(i,e),10)||0}function o(i){var e=i[0];return 9===e.nodeType?{width:i.width(),height:i.height(),offset:{top:0,left:0}}:t.isWindow(e)?{width:i.width(),height:i.height(),offset:{top:i.scrollTop(),left:i.scrollLeft()}}:e.preventDefault?{width:0,height:0,offset:{top:e.pageY,left:e.pageX}}:{width:i.outerWidth(),height:i.outerHeight(),offset:i.offset()}}t.ui=t.ui||{};var n,l,f=Math.max,s=Math.abs,h=Math.round,r=/left|center|right/,p=/top|center|bottom/,c=/[\+\-]\d+(\.[\d]+)?%?/,d=/^\w+/,a=/%$/,g=t.fn.position;t.position={scrollbarWidth:function(){if(void 0!==n)return n;var i,e,o=t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),l=o.children()[0];return t("body").append(o),i=l.offsetWidth,o.css("overflow","scroll"),e=l.offsetWidth,i===e&&(e=o[0].clientWidth),o.remove(),n=i-e},getScrollInfo:function(i){var e=i.isWindow||i.isDocument?"":i.element.css("overflow-x"),o=i.isWindow||i.isDocument?"":i.element.css("overflow-y"),n="scroll"===e||"auto"===e&&i.width<i.element[0].scrollWidth,l="scroll"===o||"auto"===o&&i.height<i.element[0].scrollHeight;return{width:l?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0}},getWithinInfo:function(i){var e=t(i||window),o=t.isWindow(e[0]),n=!!e[0]&&9===e[0].nodeType;return{element:e,isWindow:o,isDocument:n,offset:e.offset()||{left:0,top:0},scrollLeft:e.scrollLeft(),scrollTop:e.scrollTop(),width:o||n?e.width():e.outerWidth(),height:o||n?e.height():e.outerHeight()}}},t.fn.position=function(n){if(!n||!n.of)return g.apply(this,arguments);n=t.extend({},n);var a,u,m,w,W,v,y=t(n.of),b=t.position.getWithinInfo(n.within),H=t.position.getScrollInfo(b),x=(n.collision||"flip").split(" "),T={};return v=o(y),y[0].preventDefault&&(n.at="left top"),u=v.width,m=v.height,w=v.offset,W=t.extend({},w),t.each(["my","at"],function(){var t,i,e=(n[this]||"").split(" ");1===e.length&&(e=r.test(e[0])?e.concat(["center"]):p.test(e[0])?["center"].concat(e):["center","center"]),e[0]=r.test(e[0])?e[0]:"center",e[1]=p.test(e[1])?e[1]:"center",t=c.exec(e[0]),i=c.exec(e[1]),T[this]=[t?t[0]:0,i?i[0]:0],n[this]=[d.exec(e[0])[0],d.exec(e[1])[0]]}),1===x.length&&(x[1]=x[0]),"right"===n.at[0]?W.left+=u:"center"===n.at[0]&&(W.left+=u/2),"bottom"===n.at[1]?W.top+=m:"center"===n.at[1]&&(W.top+=m/2),a=i(T.at,u,m),W.left+=a[0],W.top+=a[1],this.each(function(){var o,r,p=t(this),c=p.outerWidth(),d=p.outerHeight(),g=e(this,"marginLeft"),v=e(this,"marginTop"),L=c+g+e(this,"marginRight")+H.width,P=d+v+e(this,"marginBottom")+H.height,D=t.extend({},W),I=i(T.my,p.outerWidth(),p.outerHeight());"right"===n.my[0]?D.left-=c:"center"===n.my[0]&&(D.left-=c/2),"bottom"===n.my[1]?D.top-=d:"center"===n.my[1]&&(D.top-=d/2),D.left+=I[0],D.top+=I[1],l||(D.left=h(D.left),D.top=h(D.top)),o={marginLeft:g,marginTop:v},t.each(["left","top"],function(i,e){t.ui.position[x[i]]&&t.ui.position[x[i]][e](D,{targetWidth:u,targetHeight:m,elemWidth:c,elemHeight:d,collisionPosition:o,collisionWidth:L,collisionHeight:P,offset:[a[0]+I[0],a[1]+I[1]],my:n.my,at:n.at,within:b,elem:p})}),n.using&&(r=function(t){var i=w.left-D.left,e=i+u-c,o=w.top-D.top,l=o+m-d,h={target:{element:y,left:w.left,top:w.top,width:u,height:m},element:{element:p,left:D.left,top:D.top,width:c,height:d},horizontal:e<0?"left":i>0?"right":"center",vertical:l<0?"top":o>0?"bottom":"middle"};u<c&&s(i+e)<u&&(h.horizontal="center"),m<d&&s(o+l)<m&&(h.vertical="middle"),f(s(i),s(e))>f(s(o),s(l))?h.important="horizontal":h.important="vertical",n.using.call(this,t,h)}),p.offset(t.extend(D,{using:r}))})},t.ui.position={fit:{left:function(t,i){var e,o=i.within,n=o.isWindow?o.scrollLeft:o.offset.left,l=o.width,s=t.left-i.collisionPosition.marginLeft,h=n-s,r=s+i.collisionWidth-l-n;i.collisionWidth>l?h>0&&r<=0?(e=t.left+h+i.collisionWidth-l-n,t.left+=h-e):r>0&&h<=0?t.left=n:h>r?t.left=n+l-i.collisionWidth:t.left=n:h>0?t.left+=h:r>0?t.left-=r:t.left=f(t.left-s,t.left)},top:function(t,i){var e,o=i.within,n=o.isWindow?o.scrollTop:o.offset.top,l=i.within.height,s=t.top-i.collisionPosition.marginTop,h=n-s,r=s+i.collisionHeight-l-n;i.collisionHeight>l?h>0&&r<=0?(e=t.top+h+i.collisionHeight-l-n,t.top+=h-e):r>0&&h<=0?t.top=n:h>r?t.top=n+l-i.collisionHeight:t.top=n:h>0?t.top+=h:r>0?t.top-=r:t.top=f(t.top-s,t.top)}},flip:{left:function(t,i){var e,o,n=i.within,l=n.offset.left+n.scrollLeft,f=n.width,h=n.isWindow?n.scrollLeft:n.offset.left,r=t.left-i.collisionPosition.marginLeft,p=r-h,c=r+i.collisionWidth-f-h,d="left"===i.my[0]?-i.elemWidth:"right"===i.my[0]?i.elemWidth:0,a="left"===i.at[0]?i.targetWidth:"right"===i.at[0]?-i.targetWidth:0,g=-2*i.offset[0];p<0?(e=t.left+d+a+g+i.collisionWidth-f-l,(e<0||e<s(p))&&(t.left+=d+a+g)):c>0&&(o=t.left-i.collisionPosition.marginLeft+d+a+g-h,(o>0||s(o)<c)&&(t.left+=d+a+g))},top:function(t,i){var e,o,n=i.within,l=n.offset.top+n.scrollTop,f=n.height,h=n.isWindow?n.scrollTop:n.offset.top,r=t.top-i.collisionPosition.marginTop,p=r-h,c=r+i.collisionHeight-f-h,d="top"===i.my[1],a=d?-i.elemHeight:"bottom"===i.my[1]?i.elemHeight:0,g="top"===i.at[1]?i.targetHeight:"bottom"===i.at[1]?-i.targetHeight:0,u=-2*i.offset[1];p<0?(o=t.top+a+g+u+i.collisionHeight-f-l,t.top+a+g+u>p&&(o<0||o<s(p))&&(t.top+=a+g+u)):c>0&&(e=t.top-i.collisionPosition.marginTop+a+g+u-h,t.top+a+g+u>c&&(e>0||s(e)<c)&&(t.top+=a+g+u))}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}},function(){var i,e,o,n,f,s=document.getElementsByTagName("body")[0],h=document.createElement("div");i=document.createElement(s?"div":"body"),o={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},s&&t.extend(o,{position:"absolute",left:"-1000px",top:"-1000px"});for(f in o)i.style[f]=o[f];i.appendChild(h),e=s||document.documentElement,e.insertBefore(i,e.firstChild),h.style.cssText="position: absolute; left: 10.7432222px;",n=t(h).offset().left,l=n>10&&n<11,i.innerHTML="",e.removeChild(i)}()}(),t.ui.position});

!function(e,t,n){var i=window.WysiHat={name:"WysiHat",addButton:function(e,t){this._buttons[e]=t},attach:function(e,n){return new i.Editor(t(e),n)},inherit:function(e,n){function i(){var n;this.parent={};for(n in e)e.hasOwnProperty(n)&&(this.parent[n]=t.proxy(e[n],this))}var r,o;i.prototype=e,o=new i;for(r in n)o[r]=n[r];return o},_buttons:[]};i.Editor=function(e,t){this.$field=e.hide(),this.$editor=this.create(),e.before(this.$editor),this.createWrapper(),this.Element=i.Element,this.Commands=i.Commands,this.Formatting=i.Formatting,this.init(t)},i.Editor.prototype={_emptyChar:String.fromCharCode(8203),_empty:function(){return"<p>"+this._emptyChar+"</p>"},isEmpty:function(){return html=this.$editor.html(),""==html||"\0"==html||"<br>"==html||"<br/>"==html||"<p></p>"==html||"<p><br></p>"==html||"<p>\0</p>"==html||html==this._empty()},create:function(){var e=this;return t("<div/>",{"class":i.name+"-editor",data:{wysihat:this,field:this.$field},role:"application",contentEditable:"true",height:this.$field.height(),dir:this.$field.attr("dir"),html:i.Formatting.getBrowserMarkupFrom(this.$field),blur:function(){e.updateField(),e.$field.trigger("blur")}})},createWrapper:function(){var e=this;this.$field.add(this.$editor).wrapAll(t("<div/>",{"class":i.name+"-container",mouseup:function(){e.$field.is(":visible")?e.$editor.outerHeight(e.$field.outerHeight()):e.$editor.is(":visible")&&e.$field.outerHeight(e.$editor.outerHeight())}}))},init:function(e){var n=this.$editor,r=this;this.Undo=new i.Undo,this.Selection=new i.Selection(n),this.Event=new i.Event(this),this.Toolbar=new i.Toolbar(n,e.buttons),this.$field.change(t.proxy(this,"updateEditor")),n.closest("form").on("submit entry:autosave",function(){r.$field.is(":visible")||r.updateField()})},updateField:function(){this.$field.val(i.Formatting.getApplicationMarkupFrom(this.$editor))},updateEditor:function(){this.$editor.html(i.Formatting.getBrowserMarkupFrom(this.$field)),this.selectEmptyParagraph()},selectEmptyParagraph:function(){var n,i=this.$editor,r=(i.html(),window.getSelection());this.isEmpty()&&(i.html(this._empty()),n=e.createRange(),r.removeAllRanges(),n.selectNodeContents(i.find("p").get(0)),t.browser.mozilla&&i.find("p").eq(0).html(""),r.addRange(n))}},i.Editor.constructor=i.Editor,i.Element=function(){function e(e){for(var t=arguments.length,n=!1;0==n&&t-- >1;)n=e.is(arguments[t].join(","));return n}var t=["blockquote","details","fieldset","figure","td"],n=["article","aside","header","footer","nav","section"],i=["blockquote","details","dl","ol","table","ul"],r=["dd","dt","li","summary","td","th"],o=["address","caption","dd","div","dt","figcaption","figure","h1","h2","h3","h4","h5","h6","hgroup","hr","p","pre","summary","small"],s=["audio","canvas","embed","iframe","img","object","param","source","track","video"],a=["a","abbr","b","br","cite","code","del","dfn","em","i","ins","kbd","mark","span","q","samp","s","strong","sub","sup","time","u","var","wbr"],l=["b","code","del","em","i","ins","kbd","span","s","strong","u","font"],d=["address","blockquote","div","dd","dt","h1","h2","h3","h4","h5","h6","p","pre"],c=["button","datalist","fieldset","form","input","keygen","label","legend","optgroup","option","output","select","textarea"];return{isRoot:function(n){return e(n,t)},isSection:function(t){return e(t,n)},isContainer:function(t){return e(t,i)},isSubContainer:function(t){return e(t,r)},isBlock:function(s){return e(s,t,n,i,r,o)},isHTML4Block:function(t){return e(t,d)},isContentElement:function(t){return e(t,r,o)},isMediaElement:function(t){return e(t,s)},isPhraseElement:function(t){return e(t,a)},isFormatter:function(t){return e(t,l)},isFormComponent:function(t){return e(t,c)},getRoots:function(){return t},getSections:function(e){return n},getContainers:function(){return i},getSubContainers:function(){return r},getBlocks:function(){return t.concat(n,i,r,o)},getHTML4Blocks:function(){return d},getContentElements:function(){return r.concat(o)},getMediaElements:function(){return s},getPhraseElements:function(){return a},getFormatters:function(){return l},getFormComponents:function(){return c}}}(),t(e).ready(function(){var n,i,r=t(e);"onselectionchange"in e&&"selection"in e?(i=function(){var n=e.selection.createRange(),i=n.parentElement();t(i).trigger("WysiHat-selection:change")},r.on("selectionchange",i)):(i=function(){var i,r,o=e.activeElement,s=o.tagName.toLowerCase();if("textarea"==s||"input"==s)n=null;else{if(i=window.getSelection(),i.rangeCount<1)return;if(r=i.getRangeAt(0),r&&r.equalRange(n))return;for(n=r,o=r.commonAncestorContainer;o.nodeType==Node.TEXT_NODE;)o=o.parentNode}t(o).trigger("WysiHat-selection:change")},r.mouseup(i),r.keyup(i))}),i.Paster=function(){var n=t('<div id="paster" contentEditable="true"/>').css({width:"100%",height:10,position:"absolute",left:-9999}),r=50,o=200;return{getHandler:function(s){return function(a,l){var d=s.Commands.getRanges(),c=d[0].startContainer,h=0;return n.html("").css("top",t(e).scrollTop()),n.appendTo(e.body),n.focus(),setTimeout(function u(){if(!n.html()&&(h+=r,h<o))return void setTimeout(u,r);var e=t(c).closest(i.Element.getBlocks().join(","));e.length?s.Formatting.cleanupPaste(n,e.get(0).tagName):s.Formatting.cleanupPaste(n),s.$editor.focus(),s.Commands.restoreRanges(d),d[0].deleteContents?d[0].deleteContents():s.Commands.insertHTML(""),s.isEmpty()&&s.selectEmptyParagraph(),s.Commands.insertHTML(n.html());var a=s.Selection.get();s.updateField(),s.updateEditor(),s.Selection.set(a),n=n.remove(),l()},r),!1}}}}();var r,o;r=function(){for(var e={3:"enter",8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",27:"esc",32:"space",37:"left",38:"up",39:"right",40:"down",46:"delete",91:"mod",92:"mod",93:"mod",59:";",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",63232:"up",63233:"down",63234:"left",63235:"right",63272:"delete"},t=0;t<10;t++)e[t+48]=String(t);for(var t=65;t<=90;t++)e[t]=String.fromCharCode(t);return e}(),o=function(){var e=/AppleWebKit/.test(navigator.userAgent)&&/Mobile\/\w+/.test(navigator.userAgent),t=e||/Mac/.test(navigator.platform),n=t?"cmd":"ctrl";return{cut:n+"-x",copy:n+"-c",paste:n+"-v",undo:n+"-z",redo:n+"-shift-z",bold:n+"-b",italics:n+"-i",underline:n+"-u"}}(),i.Event=function(e){this.Editor=e,this.$editor=e.$editor,this.eventHandlers=[],this.textStart=null,this.pasteStart=null,this.textDeleting=!1,this.Undo=e.Undo,this.Selection=e.Selection,this._hijack_events(),this.add("paste",i.Paster.getHandler(e))},i.Event.prototype={add:function(e,t){this.eventHandlers[e]=t},has:function(e){return e in this.eventHandlers},run:function(e,t,n){var i=this.eventHandlers[e](t,n);i!==!1&&n()},fire:function(e){var n,i,r=this;if(this._saveTextState(e),"undo"==e||"redo"==e){var o,s="undo"==e?"hasUndo":"hasRedo";return void(this.Undo[s]()&&(o=this.Undo[e](this.$editor.html()),this.$editor.html(o[0]),this.Selection.set(o[1])))}return!this.has(e)||(n=this.getState(),i=function(){this.hasRun||(this.hasRun=!0,r.textChange(n),r._saveTextState(e),r.$editor.focus())},void this.run(e,n,t.proxy(i,i)))},textChange:function(n,i){i=i||this.getState(),this.Editor.selectEmptyParagraph(),this.Undo.push(n.html,i.html,n.selection,i.selection),this.$editor.closest("form").trigger("entry:startAutosave"),t(e).trigger("entry:preview")},isKeyCombo:function(e,t){var n="",i="",o=e.indexOf("-")>-1;return!t.altGraphKey&&(t.metaKey&&(n+="cmd-"),t.altKey&&(n+="alt-"),t.ctrlKey&&(n+="ctrl-"),t.shiftKey&&(n+="shift-"),!o&&e.length>1?n.replace(/-$/,"")==e:(i=r[t.keyCode],!!i&&e.toLowerCase()==(n+i).toLowerCase()))},isEvent:function(e,t){var n=t.type;if(n==e)return!0;if("key"!=n.substr(0,3))return!1;var i=o[e];return!!i&&this.isKeyCombo(i,t)},getState:function(){return{html:this.$editor.html(),selection:this.Selection.get()}},_saveTextState:function(e){"redo"!=e&&this.textStart&&(this.textChange(this.textStart),this.textStart=null)},_hijack_events:function(){var e={"selectionchange focusin mousedown":t.proxy(this._rangeEvent,this),"keydown keyup keypress":t.proxy(this._keyEvent,this),"cut undo redo paste input contextmenu":t.proxy(this._menuEvent,this),focus:t.proxy(this._focusEvent,this)};this.$editor.on(e)},_focusEvent:function(){this.Editor.isEmpty()&&this.Editor.selectEmptyParagraph()},_keyComboEvent:function(e){var t,n=["undo","redo","paste"];if("keydown"==e.type)for(;t=n.shift();)if(this.isEvent(t,e))return"paste"==t?(this.fire(t),!0):(e.preventDefault(),this.fire(t),!1);return!0},_triggerPreivew:_.debounce(function(){this.Editor.updateField(),t(e).trigger("entry:preview")},225),_keyEvent:function(e){if("keypress"==e.type)return this._triggerPreivew(),!0;if(e.ctrlKey||e.altKey||e.metaKey)return this._keyComboEvent(e);if("keydown"==e.type)"backspace"==r[e.keyCode]?0==this.textDeleting&&(this.textDeleting=!0,this._saveTextState("backspace")):1==this.textDeleting&&(this.textDeleting=!1,this._saveTextState("keypress")),null==this.textStart&&(this.textStart=this.getState());else if("keyup"==e.type)switch(r[e.keyCode]){case"up":case"down":case"left":case"right":this._saveTextState("keyup")}},_rangeEvent:function(e){this._saveTextState(e.type)},_menuEvent:function(e){for(var t,n=["undo","redo","paste"];t=n.shift();)this.isEvent(t,e)&&("paste"!=t&&e.preventDefault(),this.fire(t))}},i.Event.constructor=i.Event,i.Undo=function(){this.max_depth=75,this.saved=[],this.index=0},i.Undo.prototype={push:function(e,n,i,r){var o=[],s=this;o=t.isArray(e)?t.map(e,function(e,t){return s._diff(e,n[t])}):this._diff(e,n),o&&(this.index<this.saved.length&&(this.saved=this.saved.slice(0,this.index),this.index=this.saved.length),this.saved.length>this.max_depth&&(this.saved=this.saved.slice(this.saved.length-this.max_depth),this.index=this.saved.length),this.index++,this.saved.push({changes:o,selection:[i,r]}))},undo:function(e){this.index--;for(var t=this.saved[this.index],n=t.changes,i=n.length,r=0;r<i;r++)change=n[r],e=e.substring(0,change[0])+change[1]+e.substring(change[0]+change[2].length);return[e,t.selection[0]]},redo:function(e){for(var t=this.saved[this.index],n=t.changes,i=n.length,r=i-1;r>=0;r--)change=n[r],e=e.substring(0,change[0])+change[2]+e.substring(change[0]+change[1].length);return this.index++,[e,t.selection[1]]},hasUndo:function(){return 0!=this.index},hasRedo:function(){return this.index!=this.saved.length},_diff:function(e,t){var n,i=e.length,r=t.length,o=0,s=0;if(e==t)return null;for(;o<i&&o<r&&e[o]==t[o];)o++;for(;s<i&&s<r&&e[i-s-1]==t[r-s-1];)s++;return o==Math.min(i,r)&&(o=0),s==Math.min(i,r)&&(s=0),(o||s)&&(e=e.substring(o,i-s+1),t=t.substring(o,r-s+1),i=e.length,r=t.length),i!==r&&(n=i<r?t.indexOf(e):e.indexOf(t),n>-1)?i<r?[[o,"",t.substr(0,n)],[o+i,"",t.substr(n+i)]]:[[o,e.substr(0,n),""],[o+n+r,e.substr(n+r),""]]:[[o,e,t]]}},i.Undo.constructor=i.Undo,i.Selection=function(e){this.$editor=e,this.top=this.$editor.get(0)},i.Selection.prototype={_replace:new RegExp("[\r\n]","g"),get:function(t){var i,r,o=window.getSelection(),s=e.createRange();if(t===n){if(!o.rangeCount)return[0,0];t=o.getRangeAt(0)}return i=t.toString().replace(this._replace,"").length,s.setStart(this.top,0),s.setEnd(t.startContainer,t.startOffset),r=s.toString().replace(this._replace,"").length,[r,r+i]},set:function(i,r){t.isArray(i)&&(r=i[1],i=i[0]);var o,s,a=window.getSelection(),l=e.createRange();o=this._getOffsetNode(this.top,i,!0),l.setStart.apply(l,o),r===n||r==i?(r=i,l.collapse(!0)):(s=this._getOffsetNode(this.top,r,!1),l.setEnd.apply(l,s)),a.removeAllRanges(),a.addRange(l)},toString:function(e){var t=window.getSelection();return e===n&&(e=t.getRangeAt(0)),e.toString()},_getOffsetNode:function(e,n,r){function o(e){if(e.nodeType==Node.TEXT_NODE||e.nodeType==Node.CDATA_SECTION_NODE)n>0&&(s=e,n-=e.nodeValue.replace(/\n/g,"").length);else for(var t=0,i=e.childNodes.length;n>0&&t<i;++t)o(e.childNodes[t])}var s=e,a=0,l=this.$editor.get(0).lastChild,d=i.Element.getBlocks();if(o(e),0==n){if(s.nodeType!=Node.TEXT_NODE){for(;null!==s.firstChild;)s=s.firstChild;return[s,0]}if(r){for(var c=0;null===s.nextSibling&&s.parentNode!==l;)c++,s=s.parentNode;for(t.inArray(s.nodeName.toLowerCase(),d)>-1&&null!==s.nextSibling&&(s=s.nextSibling);c&&s.firstChild&&"br"!=s.firstChild.nodeName.toLowerCase();)c--,s=s.firstChild}}return a=s.nodeValue?s.nodeValue.length:0,[s,a+n]}},i.Selection.constructor=i.Selection,i.Commands=function(){var n={is:{},make:{}},i={makeEasy:["bold","underline","italic","strikethrough","fontname","fontsize","forecolor","createLink","insertImage","insertOrderedList","insertUnorderedList"],isSelectors:{bold:"b, strong",italic:"i, em",link:"a[href]",underline:"u, ins",indented:"blockquote",strikethrough:"s, del",orderedList:"ol",unorderedList:"ul"},isNativeState:{bold:"bold",italic:"italic",underline:"underline",strikethrough:"strikethrough",orderedList:"insertOrderedList",unorderedList:"insertUnorderedList"}};t.each(i.makeEasy,function(e,t){n.make[t]=function(e){n.execCommand(t,!1,e)}}),t.each(i.isSelectors,function(t,r){t in i.isNativeState?n.is[t]=function(){return n.selectionIsWithin(r)||e.queryCommandState(i.isNativeState[t])}:n.is[t]=function(){return n.selectionIsWithin(r)}});var r={is:{linked:"link",underlined:"underline",struckthrough:"strikethrough",ol:"orderedList",ul:"unorderedList"},make:{italicize:"italic",font:"fontname",color:"forecolor",link:"createLink",ol:"insertOrderedList",ul:"insertUnorderedList",orderedList:"insertOrderedList",unorderedList:"insertUnorderedList",align:"alignment"}};return t.each(r.is,function(e,t){n.is[e]=function(){return n.is[t]()}}),t.each(r.make,function(e,i){n.make[e]=t.proxy(n.make,i)}),n.noSpans=function(){try{return e.execCommand("styleWithCSS",0,!1),function(){e.execCommand("styleWithCSS",0,!1)}}catch(n){try{return e.execCommand("useCSS",0,!0),function(){e.execCommand("useCSS",0,!0)}}catch(n){try{return e.execCommand("styleWithCSS",!1,!1),function(){e.execCommand("styleWithCSS",!1,!1)}}catch(n){return t.noop}}}}(),n}(),t.extend(i.Commands,{_blockElements:i.Element.getContentElements().join(",").replace(",div,",",div:not(."+i.name+"-editor),"),styleSelectors:{fontname:"fontFamily",fontsize:"fontSize",forecolor:"color",hilitecolor:"backgroundColor",backcolor:"backgroundColor"},validCommands:["backColor","bold","createLink","fontName","fontSize","foreColor","hiliteColor","italic","removeFormat","strikethrough","subscript","superscript","underline","unlink","delete","formatBlock","forwardDelete","indent","insertHorizontalRule","insertHTML","insertImage","insertLineBreak","insertOrderedList","insertParagraph","insertText","insertUnorderedList","justifyCenter","justifyFull","justifyLeft","justifyRight","outdent","copy","cut","paste","selectAll","styleWithCSS","useCSS"],execCommand:function(t,n,i){this.noSpans();try{e.execCommand(t,n,i)}catch(r){return null}},isMakeCommand:function(e){return e in this.make},isValidExecCommand:function(e){return t.inArray(e,this.validCommands)>-1},queryCommandState:function(t){if(t in this.is)return this.is[t]();try{return e.queryCommandState(t)}catch(n){return null}},selectionIsWithin:function(e){var n=i.Element.getPhraseElements(),r=!1,o=e.split(","),s=o.length,a=window.getSelection(),l=a.anchorNode,d=a.focusNode;if(l&&l.nodeType&&3==l.nodeType&&""==l.nodeValue&&(l=l.nextSibling),!l)return!1;if(t.browser.mozilla){for(;s--;)if(t.inArray(o[s],n)!=-1){r=!0;break}r&&1==l.nodeType&&t.inArray(l.nodeName.toLowerCase(),n)==-1&&(s=l.firstChild,s&&(""==s.nodeValue&&(s=s.nextSibling),1==s.nodeType&&(l=s)))}for(;l&&d&&1!=l.nodeType&&1!=d.nodeType;)1!=l.nodeType&&(l=l.parentNode),1!=d.nodeType&&(d=d.parentNode);return!(!t(l).closest(e).length&&!t(d).closest(e).length)},getSelectedStyles:function(){var e=window.getSelection(),n=t(e.getNode()),i={};for(var r in this.styleSelectors)i[r]=n.css(this.styleSelectors[r]);return i},replaceElement:function(e,n){if(!e.hasClass(i.name+"-editor")){for(var r=e.get(0),o=t("<"+n+"/>").html(r.innerHTML),s=r.attributes,a=s.length||0;a--;)o.attr(s[a].name,s[a].value);return e.replaceWith(o),o}},deleteElement:function(e){var n=t(e);n.replaceWith(n.html())},stripFormattingElements:function(){function e(n,i){var o=t(i);o.children().each(e),s(o)&&r.deleteElement(o)}for(var n,r=this,o=window.getSelection(),s=i.Element.isFormatter,a=o.rangeCount,l=[];a--;)n=o.getRangeAt(a),l.push(n),this.getRangeElements(n,this._blockElements).each(e);this.restoreRanges(l)},manipulateSelection:function(){for(var e,t=window.getSelection(),n=t.rangeCount,i=[],r=arguments,o=r[0];n--;)e=t.getRangeAt(n),i.push(e),r[0]=e,o.apply(this,r);this.restoreRanges(i)},getRangeElements:function(e,n){var i=t(e.startContainer).closest(n),r=t(e.endContainer).closest(n),o=t("nullset");return i.parents(".WysiHat-editor").length&&r.parents(".WysiHat-editor").length&&(o=i,i.filter(r).length||(o=i.nextAll().filter(r).length?i.nextUntil(r).andSelf().add(r):i.prevUntil(r).andSelf().add(r))),o},getRanges:function(){for(var e,t=window.getSelection(),n=t.rangeCount,i=[];n--;)e=t.getRangeAt(n),i.push(e);return i},restoreRanges:function(e){var t=window.getSelection(),n=e.length;for(t.removeAllRanges();n--;)t.addRange(e[n])},changeContentBlock:function(e){for(var n,i=window.getSelection(),r=this,o=t(r),s="WysiHat-replaced",a=i.rangeCount,l=[];a--;)n=i.getRangeAt(a),l.push(n),this.getRangeElements(n,this._blockElements).each(function(){r.replaceElement(t(this),e)}).data(s,!0);o.children(e).removeData(s),this.restoreRanges(l)},unformatContentBlock:function(){this.changeContentBlock("p")},unlinkSelection:function(){this.manipulateSelection(function(e){this.getRangeElements(e,"[href]").each(this.clearElement)})},wrapHTML:function(){var n,i=window.getSelection(),r=i.getRangeAt(0),o=i.getNode(),s=arguments.length;for(r.collapsed&&(r=e.createRange(),r.selectNodeContents(o),i.removeAllRanges(),i.addRange(r)),r=i.getRangeAt(0);s--;)n=t("<"+arguments[s]+"/>"),r.surroundContents(n.get(0))},toggleHTML:function(e){var t=e.$editor,n=e.$element,i=t.data("field"),r=n.siblings(),o=n.data("text");t.is(":visible")?(n.find("b").text(n.data("toggle-text")),r.parents("ul.toolbar").addClass("disabled"),t.hide(),i.show()):(n.find("b").text(o),r.parents("ul.toolbar").removeClass("disabled"),i.hide(),t.show())},insertHTML:function(n){if(t.browser.msie){var i=e.selection.createRange();i.pasteHTML(n),i.collapse(!1),i.select()}else this.execCommand("insertHTML",!1,n)},quoteSelection:function(){var e=t("<blockquote/>");this.manipulateSelection(function(e,n){var r=n.clone(),o=this.getRangeElements(e,this._blockElements),s=o.length-1,a=t();o.each(function(e){var n,o=t(this),l=!1;i.Element.isSubContainer(o)&&(l=!0),!e&&l&&e==s?(n=t("<p/>").html(o.html()),o.html("").append(n),a=a.add(n)):a=l?a.add(o.closest(i.Element.getContainers().join(","))):a.add(o),e==s&&a.wrapAll(r)})},e)},unquoteSelection:function(){this.manipulateSelection(function(e){this.getRangeElements(e,"blockquote > *").each(function(){var e=this,n=t(e),r=n.closest("blockquote"),o=r.clone().html(""),s=r.children(),a=s.length-1,l=t();n.unwrap("blockquote"),a>0&&s.each(function(n){this!=e&&(l=l.add(this)),n!=a&&this!=e||(l.wrapAll(o.clone()),l=t())}),r=n.parent(),i.Element.isSubContainer(r)&&1==r.children().length&&r.html(n.html())})})}}),t.extend(i.Commands.make,{blockquote:function(){i.Commands.is.indented()?i.Commands.unquoteSelection():i.Commands.quoteSelection()},alignment:function(e){i.Commands.execCommand("justify"+e)},backgroundColor:function(e){var n=t.browser.mozilla?"hilitecolor":"backcolor";i.Commands.execCommand(n,!1,e)}});var s={is:function(e){return i.Commands.is[e]()},make:function(e,t){return i.Commands.make[e](t)},toggle:function(e,t){return i.Commands.make[e](t)}};t.extend(i.Editor.prototype,s),i.Formatting={_bottomUp:function(e,n,i){var r=e.find(n),o=t.makeArray(r).reverse();t.each(o,i)},cleanup:function(e){var n=i.Commands.replaceElement,r=i.Commands.deleteElement;e.contents().filter(function(){return this.nodeType==Node.COMMENT_NODE}).remove(),this._bottomUp(e,"span",function(){var e=t(this),i=e.css("font-weight"),r="bold"==i||i>500,o="italic"==e.css("font-style");e.hasClass("Apple-style-span")&&e.removeClass("Apple-style-span"),e.removeAttr("style"),o&&r?(e.wrap("<b>"),n(e,"i")):r?n(e,"b"):o&&n(e,"i")}),e.children("div").each(function(){this.attributes.length||n(t(this),"p")}).end().find("strong").each(function(){n(t(this),"b")}).end().find("em").each(function(){n(t(this),"i")}).end().find("strike").each(function(){n(t(this),"del")}).end().find("u").each(function(){n(t(this),"ins")}).end().find("p:empty,script,noscript,style").remove(),e.find("b > b, i > i").each(function(){r(this)})},cleanupPaste:function(n,r){i.Commands.replaceElement;this.cleanup(n),this._bottomUp(n,"*",function(){var n=this.nodeName.toLowerCase(),i=e.createElement(n);switch(n){case"a":i.href=this.href,i.title=this.title;break;case"img":i.src=this.src,i.alt=this.alt}i.innerHTML=this.innerHTML,t(this).replaceWith(i)}),n.find("br").replaceWith("\n"),n.html(function(e,n){return n=t.trim(n),n=n.replace(/<\/p>\s*<p>/g,"\n\n").replace(/^(<p>)+/,"").replace(/(<\/p>)+$/,"").replace(/<!--[^>]*-->/g,""),n.indexOf("\n")==-1?n:(n=n.replace(/\n/,"<p>").replace(/\n/g,"\n</p><p>"),t.trim(n)+"</p>")}),n.find("span").children(i.Element.getBlocks()).unwrap(),n.find(":empty").remove(),"p"!=r.toLowerCase()&&n.find(r).replaceWith(function(e,t){return t});var o,s=[];for(n.find("p ~ p").each(function(){var e=t(this),n=e.prev();o?t.trim(n.html())||(o.after("\n"),o=s.pop()):o=n,o.html(function(n,i){var r=t.trim(e.html());return i=t.trim(i),i&&r&&(i+="<br>"),i+r}),s.push(e)});o=s.pop();)o.remove();n.before("\n").find("br").replaceWith("<br>\n")},reBlocks:new RegExp("(</(?:ul|ol)>|</(?:"+i.Element.getBlocks().join("|")+")>)","g"),format:function(e){var t=this;e.html(function(e,n){return n.replace(/<\/?[A-Z]+/g,function(e){return e.toLowerCase()}).replace(/(\t|\n| )+/g," ").replace(/>\s+</g,"> <").replace("/&nbsp;/g"," ").replace("/<p>[ ]+</p>/g","").replace(/<br ?\/?>\s?<\/p>/g,"</p>").replace(/<p>\n+<\/p>/g,"").replace(t.reBlocks,"$1\n\n").replace(/<br ?\/?>/g,"<br>\n").replace(/(ul|ol|li)>\s+<(\/)?(ul|ol|li)>/g,"$1>\n<$2$3>").replace(/><li>/g,">\n<li>").replace(/<\/li>\n+</g,"</li>\n<").replace(/^\s+(<li>|<\/?ul>|<\/?ol>)/gm,"$1").replace(/<li>/g,"    <li>").replace(/>\s*(<\/?tr>)/g,">$1").replace(/(<\/?tr>)\s*</g,"$1<").replace(/<(\/?(table|tbody))>/g,"<$1>\n").replace(/<\/tr>/g,"</tr>\n").replace(/<tr>/g,"    <tr>")}),e.html(e.html().trim())},getBrowserMarkupFrom:function(e){var n,i=t("<div>"+e.val()+"</div>");return this.cleanup(i),n=i.html(),""!=n&&"<br>"!=n&&"<br/>"!=n||i.html("<p>&#x200b;</p>"),i.html()},getApplicationMarkupFrom:function(e){var n,i,r=e.clone();return n=t("<div/>").html(r.html()),i=n.html(),""!=i&&"<br>"!=i&&"<br/>"!=i||n.html("<p>&#x200b;</p>"),this.cleanup(n),this.format(n),n.html().replace(/<\/?[A-Z]+/g,function(e){return e.toLowerCase()})}};var a={init:function(e,t){return this.name=e,this.$editor=t,this.$field=t.data("field"),this},setElement:function(e){return this.$element=t(e),this},getHandler:function(){if(this.handler)return t.proxy(this,"handler");var e=this;return i.Commands.isMakeCommand(this.name)?function(){return i.Commands.make[e.name]()}:i.Commands.isValidExecCommand(this.name)?function(){return i.Commands.execCommand(e.name)}:t.noop},getStateHandler:function(){if(this.query)return t.proxy(this,"query");if(i.Commands.isValidExecCommand(this.name)){var e=this;return function(t){var n=t.data("wysihat");return n.Commands.queryCommandState(e.name)}}return t.noop},setOn:function(){return this.$element.addClass("selected").attr("aria-pressed","true").find("b").text(this["toggle-text"]?this["toggle-text"]:this.label),this},setOff:function(){return this.$element.removeClass("selected").attr("aria-pressed","false").find("b").text(this.label),this}};i.Toolbar=function(e,n){this.suspendQueries=!1,this.$editor=e,this.$toolbar=t('<ul class="toolbar rte"></ul>'),e.before(this.$toolbar);var i,r=n.length;for(i=0;i<r;i++)this.addButton(n[i]);this.$toolbar.children(".rte-elements").length?this.$toolbar.children(".rte-elements").prev().addClass("last"):this.$toolbar.children(".rte-view").length?this.$toolbar.children(".rte-view").prev().addClass("last"):this.$toolbar.children("li:last").addClass("last")},i.Toolbar.prototype={addButton:function(e){var n=this.$editor.data("wysihat"),r=i.inherit(a,i._buttons[e]).init(e,n.$editor);t.extend(r,s),r.Editor=n,r.Event=n.Event,r.Commands=n.Commands,r.Selection=n.Selection,r.setElement(this.createButtonElement(r)),r.Event.add(e,r.getHandler()),this.observeButtonClick(r),this.observeStateChanges(r)},createButtonElement:function(e){var n;if(e.type&&"select"==e.type){var i=e.options,r=i.length,o=0;for(n=t("<select/>");o<r;o++)n.append('<option value="'+i[o][0]+'">'+i[o][1]+"</option>");n.appendTo(this.$toolbar).wrap('<li class="rte-elements"/>')}else n=t('<li><a href=""></a></li>'),n.appendTo(this.$toolbar);return e.cssClass&&n.addClass(e.cssClass),e.title&&n.find("a").attr("title",e.title),n.data("text",e.label),e["toggle-text"]&&n.data("toggle-text",e["toggle-text"]),n},observeButtonClick:function(e){var t=e.type&&"select"==e.type?"change":"click",n=this;e.$element.on(t,function(t){n.suspendQueries=!0;var i=e.$editor;return i.is(":focus")||i.focus(),e.Event.fire(e.name),n.suspendQueries=!1,!1})},observeStateChanges:function(e){var t,n=this,i=e.getStateHandler();n.$editor.on("WysiHat-selection:change",function(){if(!n.suspendQueries){var r=i(e.$editor,e.$element);r!=t&&(t=r,n.updateButtonState(e,r))}})},updateButtonState:function(e,t){return t?void e.setOn():void e.setOff()}},i.Toolbar.constructor=i.Toolbar}(document,jQuery),jQuery.fn.wysihat=function(e){var t=this.data("wysihat");return t?jQuery.inArray(e,["Event","Selection","Toolbar","Undo"])!=-1?t[e]:t:this.each(function(){t=WysiHat.attach(this,e),$(this).data("wysihat",t)})},function(e,t){"undefined"==typeof Node&&!function(){function e(){return{ATTRIBUTE_NODE:2,CDATA_SECTION_NODE:4,COMMENT_NODE:8,DOCUMENT_FRAGMENT_NODE:11,DOCUMENT_NODE:9,DOCUMENT_TYPE_NODE:10,ELEMENT_NODE:1,ENTITY_NODE:6,ENTITY_REFERENCE_NODE:5,NOTATION_NODE:12,PROCESSING_INSTRUCTION_NODE:7,TEXT_NODE:3}}window.Node=new e}(),e.getSelection?(window.Selection={},window.Selection.prototype=window.getSelection().__proto__):!function(){function n(){this.startContainer,this.startOffset,this.endContainer,this.endOffset,this.collapsed}function i(){this._reset(),this._selection=e.selection}function r(e,t){this.node=e,this.offset=t}n.prototype={setStart:function(e,t){this.startContainer=e,this.startOffset=t,e==this.endContainer&&t==this.endOffset&&(this.collapsed=!0)},setEnd:function(e,t){this.endContainer=e,this.endOffset=t,e==this.startContainer&&t==this.startOffset&&(this.collapsed=!0)},collapse:function(e){e?(this.endContainer=this.startContainer,this.endOffset=this.startOffset):(this.startContainer=this.endContainer,this.startOffset=this.endOffset)},getNode:function(){var t=e.selection.createRange();return s.getParentElement(t)},selectNode:function(e){this.setStart(e.parentNode,s.getNodeIndex(e)),this.setEnd(e.parentNode,s.getNodeIndex(e)+1)},insertNode:function(e){s.insertNode(e,this.startContainer,this.startOffset)},selectNodeContents:function(e){var t=s.isCharacterDataNode(e)?e.length:e.childNodes.length;this.setStart(e,0),this.setEnd(e,t)},surroundContents:function(e){},cloneRange:function(){var e=new n;return e.setStart(this.startContainer,this.startOffset),e.setEnd(this.endContainer,this.endOffset),e},toString:function(){var e=s.rangeToTextRange(this);return e?e.text:""}},e.createRange=function(){return new n},i.prototype={_reset:function(){this.rangeCount=0,this.anchorNode=null,this.anchorOffset=null,this.focusNode=null,this.focusOffset=null,this._ranges=[]},addRange:function(e){var t=s.rangeToTextRange(e);return t?(t.select(),this.rangeCount=1,this._ranges=[e],this.isCollapsed=e.collapsed,void this._updateNodeRefs(e)):void this.removeAllRanges()},removeAllRanges:function(){this.rangeCount&&this._selection.empty(),this._reset()},getRangeAt:function(e){return 0!==e?null:this._ranges[e]},toString:function(){return this.rangeCount?this._ranges[0].toString():""},_refresh:function(){var e,t,i,r=this._selection.createRange(),o=s.getParentElement(r);0==r.compareEndPoints("StartToEnd",r)?(e=s.getBoundary(r,o,!0,!0),t=e):(e=s.getBoundary(r,o,!0,!1),t=s.getBoundary(r,o,!1,!1));var i=new n;return i.setStart(e.node,e.offset),i.setEnd(t.node,t.offset),this.rangeCount=1,this._ranges=[i],this.isCollapsed=i.collapsed,this._updateNodeRefs(i),this},_updateNodeRefs:function(e){this.anchorNode=e.startContainer,this.anchorOffset=e.startOffset,this.focusNode=e.endContainer,this.focusOffset=e.endOffset}};var o=new i;window.getSelection=function(){return o._refresh()};var s={isCharacterDataNode:function(e){var t=e.nodeType;return 3==t||4==t||8==t},getNodeIndex:function(e){for(var t=0;e=e.previousSibling;)t++;return t},isAncestorOf:function(e,t,n){for(var i=n?t:t.parentNode;i;){if(i===e)return!0;i=i.parentNode}return!1},getCommonAncestor:function(e,n){var i,r=[];for(i=e;i;i=i.parentNode)r.push(i);for(i=n;i;i=i.parentNode)if(t.inArray(i,r)>-1)return i;return null},insertNode:function(e,n,i){var r=11==e.nodeType?e.firstChild:e;return this.isCharacterDataNode(n)?i==n.length?t(e).insertAfter(n):n.parentNode.insertBefore(e,0==i?n:this.splitDataNode(n,i)):i>=n.childNodes.length?n.appendChild(e):n.insertBefore(e,n.childNodes[i]),r},splitDataNode:function(e,n){var i=e.cloneNode(!1);return i.deleteData(0,n),e.deleteData(n,e.length-n),t(i).insertAfter(e),i},rangeToTextRange:function(t){var n,i;return n=this.createBoundaryTextRange(new r(t.startContainer,t.startOffset),!0),t.collapsed?n:(i=this.createBoundaryTextRange(new r(t.endContainer,t.endOffset),!1),!(!n||!i)&&(textRange=e.body.createTextRange(),textRange.setEndPoint("StartToStart",n),textRange.setEndPoint("EndToEnd",i),textRange))},getParentElement:function(e){var t,n,i,r,o=e.parentElement();return r=e.duplicate(),r.collapse(!0),n=r.parentElement(),r=e.duplicate(),r.collapse(!1),i=r.parentElement(),t=n==i?n:this.getCommonAncestor(n,i),t==o?t:this.getCommonAncestor(o,t)},createBoundaryTextRange:function(n,i){var r,o,s,a,l=e,d=n.offset,c=l.body.createTextRange(),h=this.isCharacterDataNode(n.node);return h?(r=n.node,o=r.parentNode):(a=n.node.childNodes,r=d<a.length?a[d]:null,o=n.node),s=l.createElement("span"),s.innerHTML="&#feff;",r?o.insertBefore(s,r):o.appendChild(s),t.contains(e.body,s)?(c.moveToElementText(s),c.collapse(!i),o.removeChild(s),h&&c[i?"moveStart":"moveEnd"]("character",d),c):(o.removeChild(s),null)},getBoundary:function(t,n,i,o){var s,a=t.duplicate();if(a.collapse(i),s=a.parentElement(),this.isAncestorOf(n,s,!0)||(s=n),!s.canHaveHTML)return new r(s.parentNode,this.getNodeIndex(s));var l,d,c,h,u,f=e.createElement("span"),m=i?"StartToStart":"StartToEnd";do s.insertBefore(f,f.previousSibling),a.moveToElementText(f);while((l=a.compareEndPoints(m,t))>0&&f.previousSibling);if(u=f.nextSibling,l==-1&&u&&this.isCharacterDataNode(u)){a.setEndPoint(i?"EndToStart":"EndToEnd",t);var p;if(/[\r\n]/.test(u.data)){var g=a.duplicate(),v=g.text.replace(/\r\n/g,"\r").length;for(p=g.moveStart("character",v);(l=g.compareEndPoints("StartToEnd",g))==-1;)p++,g.moveStart("character",1)}else p=a.text.length;h=new r(u,p)}else d=(o||!i)&&f.previousSibling,c=(o||i)&&f.nextSibling,h=c&&this.isCharacterDataNode(c)?new r(c,0):d&&this.isCharacterDataNode(d)?new r(d,d.length):new r(s,this.getNodeIndex(f));return f.parentNode.removeChild(f),h}};window.Range=n,window.Selection=i}(),t.extend(Range.prototype,{equalRange:function(e){return!(!e||!e.compareBoundaryPoints)&&(this.collapsed&&e.collapsed?0==this.compareBoundaryPoints(this.START_TO_START,e):0==this.compareBoundaryPoints(this.START_TO_START,e)&&1==this.compareBoundaryPoints(this.START_TO_END,e)&&0==this.compareBoundaryPoints(this.END_TO_END,e)&&this.compareBoundaryPoints(this.END_TO_START,e)==-1)}}),t.extend(window.Selection.prototype,{getNode:function(){return this.rangeCount>0?this.getRangeAt(0).getNode():null;
}}),t.uaMatch=t.uaMatch||function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},t.browser||(matched=t.uaMatch(navigator.userAgent),browser={},matched.browser&&(browser[matched.browser]=!0,browser.version=matched.version),browser.chrome?browser.webkit=!0:browser.webkit&&(browser.safari=!0),t.browser=browser)}(document,jQuery);



				// RTE styles
				$("head")
					.append( $("<style> #rte-link-dialog p { margin:10px 0; } #rte-link-dialog label { display: inline-block; } #rte-link-dialog input[type=\"text\"] { width: 100%; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box; padding: 4px; } #rte-link-dialog .buttons { margin: 10px 0 8px; float: right; } #rte-link-dialog .submit { cursor: pointer; } #rte-link-dialog .notice { color: #CE0000; font-weight: bold; margin: 5px 0; } #rte-remove-link { cursor: pointer; margin-right: 1em; } #rte-remove-link:hover { text-decoration: underline; } #rte-link-dialog-external { margin-top: 10px; } .WysiHat-editor-toolbar .view_source { text-transform: uppercase; } </style>"));

				// RTE globals
				var EE = {"rte":{"headings":{"paragraph":"paragraph","heading_1":"heading 1","heading_2":"heading 2","heading_3":"heading 3","heading_4":"heading 4","heading_5":"heading 5","heading_6":"heading 6"},"bold":{"add":"Bold","remove":"Unbold","title":"make bold"},"italics":{"add":"Italicize","remove":"Remove Italics","title":"make italic"},"blockquote":{"add":"Quote","remove":"Remove Quote","title":"create blockquote"},"unordered_list":{"add":"Bulleted List","remove":"Remove Bulleted List","title":"create unordered list"},"ordered_list":{"add":"Numbered List","remove":"Remove Numbered List","title":"create ordered list"},"link":{"add":"Link","title":"create hyperlink","modal":{"html":"<div class=\"modal-wrap modal-rte-link-dialog\">\n\t<div class=\"modal\">\n\t\t<div class=\"col-group\">\n\t\t\t<div class=\"col w-16\">\n\t\t\t\t<a class=\"m-close\" href=\"#\"><\/a>\n\t\t\t\t<div class=\"box\">\n\t\t\t\t\t<h1>Link <span class=\"req-title\">required_fields<\/span><\/h1>\n\t\t\t\t\t<form class=\"settings\">\n\t\t\t\t\t\t<fieldset class=\"col-group required\">\n\t\t\t\t\t\t\t<div class=\"setting-txt col w-8\">\n\t\t\t\t\t\t\t\t<h3>URL<\/h3>\n\t\t\t\t\t\t\t<\/div>\n\t\t\t\t\t\t\t<div class=\"setting-field col w-8 last\">\n\t\t\t\t\t\t\t\t<input type=\"text\" name=\"url\" required=\"required\">\n\t\t\t\t\t\t\t<\/div>\n\t\t\t\t\t\t<\/fieldset>\n\t\t\t\t\t\t<fieldset class=\"col-group\">\n\t\t\t\t\t\t\t<div class=\"setting-txt col w-8\">\n\t\t\t\t\t\t\t\t<h3>Title<\/h3>\n\t\t\t\t\t\t\t<\/div>\n\t\t\t\t\t\t\t<div class=\"setting-field col w-8 last\">\n\t\t\t\t\t\t\t\t<input type=\"text\" name=\"title\">\n\t\t\t\t\t\t\t<\/div>\n\t\t\t\t\t\t<\/fieldset>\n\t\t\t\t\t\t<fieldset class=\"col-group\">\n\t\t\t\t\t\t\t<div class=\"setting-txt col w-8\">\n\t\t\t\t\t\t\t\t<h3>External Link<\/h3>\n\t\t\t\t\t\t\t<\/div>\n\t\t\t\t\t\t\t<div class=\"setting-field col w-8 last\">\n\t\t\t\t\t\t\t\t<label class=\"choice mr yes\"><input type=\"radio\" name=\"external\" value=\"y\"> Yes<\/label> <label class=\"choice chosen no\"><input type=\"radio\" name=\"external\" value=\"n\" checked=\"checked\"> No<\/label>\n\t\t\t\t\t\t\t<\/div>\n\t\t\t\t\t\t<\/fieldset>\n\t\t\t\t\t\t<fieldset class=\"form-ctrls\">\n\t\t\t\t\t\t\t<button id=\"rte-remove-link\" class=\"btn hidden\">Remove Link<\/button>\n\t\t\t\t\t\t\t<input class=\"btn\" type=\"submit\" value=\"Add Link\">\n\t\t\t\t\t\t<\/fieldset>\n\t\t\t\t\t<\/form>\n\t\t\t\t<\/div>\n\t\t\t<\/div>\n\t\t<\/div>\n\t<\/div>\n<\/div>\n","url_required":"A valid URL is required.","selection_error":"Please select some text or images first.","add_link":"Add Link","update_link":"Update Link"}},"view_source":{"code":"View Code","content":"View Content","title":"view code"}}};

				// RTE button class definitions
				
		WysiHat.addButton('headings', {
			type: 'select',
			options: [
				['p', EE.rte.headings.paragraph],
				['h1', EE.rte.headings.heading_1],
				['h2', EE.rte.headings.heading_2],
				['h3', EE.rte.headings.heading_3],
				['h4', EE.rte.headings.heading_4],
				['h5', EE.rte.headings.heading_5],
				['h6', EE.rte.headings.heading_6]
			],
			handler: function(state, finalize) {
				this.Commands.changeContentBlock(this.$element.val());
				this.Selection.set(state.selection);
			},
			query: function() {

				var
					selection	= window.getSelection(),
					hasRange	= !! selection.rangeCount,
					el			= selection.anchorNode,
					blocks	 	= 'p,h1,h2,h3,h4,h5,h6',
					$el, $p;

				if ( hasRange )
				{
					while ( el.nodeType != "1" )
					{
						el = el.parentNode;

						if (el == null)
						{
							break;
						}
					}
				}

				$el 	= $(el);
				$parent	= $el.parents(blocks);

				if ( $el.is(blocks) )
				{
					this.$element.val(el.nodeName.toLowerCase());
				}
				else if ( $parent.length && ! $parent.hasClass('WysiHat-Editor'))
				{
					this.$element.val($parent.get(0).nodeName.toLowerCase());
				}
				else
				{
					this.$element.val('p');
				}
			}
		});


		WysiHat.addButton('bold', {
			cssClass: 'rte-bold',
			title: 			EE.rte.bold.title,
			label: 			EE.rte.bold.add,
			'toggle-text':	EE.rte.bold.remove
		});


		WysiHat.addButton('italic', {
			cssClass: 'rte-italic',
			title:			EE.rte.italics.title,
			label:			EE.rte.italics.add,
			'toggle-text':	EE.rte.italics.remove
		});


		WysiHat.addButton('blockquote', {
			cssClass: 'rte-quote',
			title:			EE.rte.blockquote.title,
			label:			EE.rte.blockquote.add,
			'toggle-text': 	EE.rte.blockquote.remove,
			handler: function(state) {
				this.toggle('blockquote');
				this.Selection.set(state.selection);
			},
			query: function() {
				var
				selection	= window.getSelection(),
				hasRange	= !! selection.rangeCount,
				el			= selection.anchorNode;

				if ( hasRange )
				{
					while ( el.nodeType != "1" )
					{
						el = el.parentNode;

						if (el == null)
						{
							break;
						}
					}
				}

				$blockquote	= $(el).parents('blockquote');
				return  !! $blockquote.length;
			}
		});


		WysiHat.addButton('unordered_list', {
			cssClass: 'rte-list',
			title:			EE.rte.unordered_list.title,
			label:			EE.rte.unordered_list.add,
			'toggle-text':	EE.rte.unordered_list.remove,
			handler: function(state){
				this.make('unorderedList');
			},
			query: function(){
				return this.is('unorderedList');
			}
		});


		WysiHat.addButton('ordered_list', {
			cssClass: 'rte-order-list',
			title:			EE.rte.ordered_list.title,
			label:			EE.rte.ordered_list.add,
			'toggle-text':	EE.rte.ordered_list.remove,
			handler: function(state) {
				this.make('orderedList');
			},
			query: function() {
				return this.is('orderedList');
			}
		});

/**
 * Links are hard
 */
WysiHat.addButton('link', {
	cssClass: 'rte-link',

	title:	EE.rte.link.title,

	label:	EE.rte.link.add,

	init: function() {
		this.parent.init.apply(this, arguments);

		this.$link_dialog;
		this.$error = $('<em class="ee-form-error-message"/>').text(EE.rte.link.modal.url_required);

		this.origState;
		this.link_node;

		return this;
	},

	handler: function(state, finalize) {
		this.link_node = null;

		this.origState = state;
		this.$editor.select();

		var sel		= window.getSelection(),
			link	= true,
			test_el, s_el, e_el;

		// get the elements
		s_el = sel.anchorNode;
		e_el = sel.focusNode;

		this.range = sel.getRangeAt(0);

		if ((s_el == e_el && sel.anchorOffset == sel.focusOffset) ||
			e_el.textContent == '​') // Our zero-width character
		{
			link = false;
		}

		// find link element
		test_el = this._findLinkableNode(s_el, 'img', sel.anchorOffset);
		if ( ! this._is(test_el, 'a')) {
			test_el = this._findLinkableNode(e_el, 'img', sel.focusOffset);
		}

		// found?
		if (test_el !== false) {
			s_el = test_el;
			link = true;
			this.range.selectNode(s_el);
			this.link_node = s_el;
		}

		if ( link ) {
			var that = this;
			this.$link_dialog = this._setupDialog();

			this.$link_dialog.on('modal:open', function() {
				setTimeout(function() {
					that._dialogOpen();
				}, 10)
			});

			this.$link_dialog.on('modal:close', function() {
				that._dialogClose();
				setTimeout(function() {
					finalize();
					that.$link_dialog.remove();
				}, 50);
			});

			this.$link_dialog.trigger('modal:open');

			return false;
		}

		// only return false if we go async
		alert( EE.rte.link.modal.selection_error );
	},

	query: function($editor) {
		return this.is('linked');
	},


	/////////////////////
	// Private Methods //
	/////////////////////

	_is: function(node, name) {
		return (node.tagName && node.tagName.toLowerCase() == name);
	},

	_findLinkableNode: function(el, childTagName, offset) {
		var _is = this._is,
			firefox_node = el.childNodes[offset];

		// can we go deeper? do it!
		if (el.childNodes.length > 0 || _is(el, childTagName)) {
			while(el.childNodes.length > 0) {
				el = el.childNodes[0];
			}

			// If we found the child, and it's already in an anchor tag,
			// grab the anchor tag for selection instead
			if (_is(el, childTagName) && _is(el.parentNode, 'a')) {
				return el.parentNode;
			}
		}

		// ended up with a child or link? good, select them
		if (_is(el, 'a') || _is(el, childTagName)) {
			return el;
		}

		// look up for luck
		if ( ! _is(el, 'a') && ! _is(el, childTagName)) {
			while (el.nodeType != 1) {
				el = el.parentNode;
			}

			if (_is(el, 'a') || _is(el, childTagName)) {
				return el;
			}
		}

		// Firefox gives is the parent node, with the anchor offset
		// being the index of the node in the parent node
		if (firefox_node !== undefined) {
			if (_is(firefox_node, 'a')) {
				return firefox_node;
			}
		}

		return false;
	},

	_clearErrors: function() {
		this.$link_dialog.find('.ee-form-error-message').remove();
		this.$link_dialog.find('.invalid').removeClass('invalid');
	},

	_editLinkNode: function(found, notfound) {
		var el = this.link_node;

		if (el) {
			while (el.nodeType != 1) {
				el = el.parentNode;
			}

			if (el.tagName.toLowerCase() == 'a') {
				found.call(this, $(el));
			}
			else if (notfound) {
				notfound.call(this);
			}
		}
	},

	_dialogOpen: function() {
		this._clearErrors();
		this._editLinkNode(
			function($el) {
				this.$url.val($el.attr('href'));
				this.$title.val($el.attr('title'));

				var val = ($el.attr('target') == '_blank') ? 'y' : 'n';
				this.$external.val([val]);
				// Trigger the click event on this element
				this.$link_dialog.find('input[value=' + val + ']').click();

				this.$submit.val(EE.rte.link.modal.update_link);
				$('#rte-remove-link').show();
			},
			function() {
				this.$submit.val(EE.rte.link.modal.add_link);
				$('#rte-remove-link').hide();
			}
		);

		this.$url.focus();
	},

	_dialogClose: function() {
		var	title = $('#rte_link_title-').val();

		if (title != '') {
			this._editLinkNode(function($el) {
				$el.attr('title', title);
			});
		}
	},

	_removeLink: function() {
		this.Commands.deleteElement(this.link_node);

		this.$link_dialog.trigger('modal:close');
		this.Selection.set(this.origState.selection);
	},

	_submit: function(e) {
		e.preventDefault();
		this._validateLinkDialog();
	},

	_setupDialog: function() {
		var $link_dialog = $(EE.rte.link.modal.html)
			.appendTo('body')
			.hide()
			.on('click', '#rte-remove-link', $.proxy(this, '_removeLink'))
			.find('form').on('submit', $.proxy(this, '_submit'));

		this.$url		= $link_dialog.find('input[name=url]');
		this.$title		= $link_dialog.find('input[name=title]');
		this.$submit	= $link_dialog.find('input[type=submit]');
		this.$external	= $link_dialog.find('input[name=external]');

		return $link_dialog;
	},

	_validateLinkDialog: function() {
		this._clearErrors();

		var	url		= this.$url.val().replace(/^\s+|\s+$/g, ''),
			title	= this.$title.val();

		// is it empty?
		if (url == '') {
			this.$error.appendTo(this.$url.parent());
			this.$url.parents('fieldset').addClass('invalid');
			return;
		}

		this.$editor.focus();

		// Reselect the range
		var sel = window.getSelection();
		sel.removeAllRanges();
		sel.addRange(this.range);

		if (this.link_node) {
			this.range.selectNode(this.link_node);
		}

		this.$link_dialog.trigger('modal:close');

		// Make a link! This is what the other 300
		// lines of code are here for, folks.
		this.make('link', url);

		// Select our new link so that Firefox will not keep the
		// selection inside the link, thus trapping the cursor, and
		// we also need to add the optional title attribute; if we
		// linked an image, the anchor is likely the focusNode so
		// we try that first. IE doesn't always play that way, so
		// we try a few others as well.

		var sel = window.getSelection(),
			_is = this._is,
			anchor_node = this._findLinkableNode(sel.anchorNode, 'img', sel.anchorOffset);

		if ( ! _is(anchor_node, 'a')) {
			anchor_node = this._findLinkableNode(sel.focusNode, 'img', sel.focusOffset);
		}

		if (anchor_node !== false) {
			sel.removeAllRanges();
			this.range.selectNode(anchor_node);
			sel.addRange(this.range);

			// Title attribute
			if (title == '') {
				$(anchor_node).removeAttr('title');
			}
			else
			{
				$(anchor_node).attr('title', title);
			}

			// Target attribute
			if (this.$external.filter(':checked').val() == 'y') {
				$(anchor_node).attr('target', '_blank');
			}
			else
			{
				$(anchor_node).removeAttr('target');
			}
		}

		// close
		this.$link_dialog.trigger('modal:close');
	}
});
		WysiHat.addButton('view_source', {
			cssClass: 'rte-view',
			title:			EE.rte.view_source.title,
			label:			EE.rte.view_source.code,
			'toggle-text':	EE.rte.view_source.content,
			handler: function() {
				this.Editor.updateField();
				this.Commands.toggleHTML(this);
			}
		});



				// RTE editor setup for this page
				$(".WysiHat-field")
					.not(".grid-input-form .WysiHat-field")
					.not(".fluid-field-templates .WysiHat-field")
					.addClass("WysiHat-field")
					.wysihat({
						buttons: ["bold","italic","blockquote","unordered_list","ordered_list","link",["headings"],["view_source"]]
					});

				if (typeof FluidField === "object")
				{
					FluidField.on("rte", "add", function(el) {
						$(".WysiHat-field", el).addClass("WysiHat-field")
							.wysihat({
								buttons: ["bold","italic","blockquote","unordered_list","ordered_list","link",["headings"],["view_source"]]
							});
					});
				}

				if (typeof Grid === "object")
				{
					Grid.bind("rte", "display", function(cell)
					{
						$(".WysiHat-field", cell)
							.addClass("WysiHat-field")
							.wysihat({
								buttons: ["bold","italic","blockquote","unordered_list","ordered_list","link",["headings"],["view_source"]]
							});
					});
				}
			}
		})();