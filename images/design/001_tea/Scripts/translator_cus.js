// JavaScript Document
$(document).ready(function(){
$.JTranslator({
	//$root: 'example', 					//?寧??(ex: http://localhost/test/ => $root: "/test/" 甇???啣?銝身摰 window.location.host+"/")
	$defaultOption: "en",				
	$langSwitchNode: "select",				
	$langVar: {
		tw:"/zh/",						
		en:"/en/",							
		cn:"/gb/"						
	}
})

});

