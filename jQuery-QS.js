//this parses the pages querystring and saves it in jQuery.qs
(function(e){e.qs=function(a){if(a=="")return{};for(var d={},b=0;b<a.length;++b){var 
c=a[b].split("=");c.length==2&&(d[c[0]]=decodeURIComponent(c[1].replace(/\+/g," ")))}return 
d}(window.location.search.substr(1).split("&"))})(jQuery);

