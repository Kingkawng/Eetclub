// JavaScript Document

$(function(){

	$('object, embed, iframe').each(function()
	{
		var elem = $(this);
		var w = elem.attr('width');
		var h = elem.attr('height');
		elem.removeAttr('width').removeAttr('height');
		elem.attr('style', 'width:' + w + 'px;height:'+ h +'px;max-height:100%;max-width:100%;');		
	})
})