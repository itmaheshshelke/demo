
$('a.toggle-collapse').click(function(){
	if($('nav#sidebar').is(':hidden') == true){
		$('nav#sidebar').show();
		$('.main-panel').css({'width':'82%', 'margin-left':'18.5%'});
		$('div#searchrow').css({'width':'63%', 'margin-left':'16%'})
	}else{
		$('nav#sidebar').hide();
		$('.main-panel').css({'width':'100%', 'margin-left':'0px'})
		$('div#searchrow').css({'width':'70%','margin-left':'16%'})
	}
})

//show dropdown block
var set;
$('a[data-toggle="dropdown"]').click(function(){
	if($('div[aria-labelledby = "'+$(this).attr('id')+'"]').is(':hidden')){
		set = "hidden";
	}else{
		set = "visible";
	}
	for(var i = 0; i<$('.dropdown-menu').length; i++){
		$($('.dropdown-menu')[i]).hide();
	}
	if(set == 'hidden'){
		$('div[aria-labelledby = "'+$(this).attr('id')+'"]').show();
	}else{
		$('div[aria-labelledby = "'+$(this).attr('id')+'"]').hide();
	}
})

//sidebar accordian effect
var set1;
$('a[data-toggle = "collapse"]').click(function(){
	if($($(this).attr('href')).is(":hidden")){
		set1 = "hidden";
	}else{
		set1 = "visible";
	}
	for(var i = 0; i<$('.collapse').length; i++){
		$($('.collapse')[i]).hide();
	}
	
	if(set1 == 'hidden'){
		$($(this).attr('href')).show();
		$($(this).attr('href')).css({'height':'unset!important'})
	}else{
		$($(this).attr('href')).hide();
		$($(this).attr('href')).css({'height':'unset!important'})
	}
})
