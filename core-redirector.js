// Go to Blogger >> Template >> Edit HTML.
// Now in the template codes, search for </head> tag and just above it paste
// the below js code. Change it accordingly and press the " Save Template" btn 
// on the top of your screen after you finish customizing it.

<script language=’javascript’>

// @package core-redirector.JS
// @author Stevemats
// @license Core-redirector License

//<![CDATA[
var key = window.location.href.split(“go/”)[1].replace(“/”,””)
var urls={
‘insta’:’https://www.instagram.com/sysa_shoaiyb’,
‘facebook’:’https://www.facebook.com/realshoaiyb’,
‘twitter’:”https://twitter.com/shoaiybsysa”,
‘github’:”https://github.com/shoaiyb”,
}
if(key){
if(urls[key]){
window.location.href=urls[key]
}else{
document.write(“‘”+key+”‘ not found :(“);
}
}
//]]>
</script>