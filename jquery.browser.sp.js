/*!--------------------------------------------------------------------------*
 *  
 *  jquery.browser.sp.js 1.0.0
 *  
 *  MIT-style license. 
 *  
 *  2014 Kazuma Nishihata 
 *  http://blog.webcreativepark.net/2014/05/19-170831.html
 *  
 *--------------------------------------------------------------------------*/
;(function($){
	
	if(!$.browser)$.browser = {};
	$.browser.ua = navigator.userAgent.toLowerCase();
	$.browser.android = /android/.test($.browser.ua);
	$.browser.iphone = /iphone/.test($.browser.ua);
	$.browser.ipod = /ipod/.test($.browser.ua);
	$.browser.ipad = /ipad/.test($.browser.ua);
	$.browser.ios = /iphone|ipod|ipad/.test($.browser.ua);
	if($.browser.android){
	    $.browser.tablet = !/mobile/.test($.browser.ua);
	}else{
	    $.browser.tablet = /ipad/.test($.browser.ua);
	}
	if(!$.browser.version)$.browser.version = {};
	if($.browser.android){
	    $.browser.version = parseFloat($.browser.ua.slice($.browser.ua.indexOf("android")+8))
	}else if($.browser.ios){
	    $.browser.version = parseFloat($.browser.ua.slice($.browser.ua.indexOf("os ")+3,$.browser.ua.indexOf("os ")+6).replace("_","."))
	}
	
})(jQuery);