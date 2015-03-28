(function(RepWho){
	RepWho.politicians = [];
	//fetches data and caches it in politicians
	RepWho.getPoliticians = function(){
		RepWho.politicians = RepWho.rawPoliticians.objects;
	};
}(RepWho=window.RepWho || {}));

$(document).ready(function(){

	RepWho.getPoliticians();
	$("div.repwho-infobox").hide();

	var politician;
	for(var i=0; i<RepWho.politicians.length; i++){
		politician = RepWho.politicians[i];

		$('span:contains("'+politician.person.lastname+'")').each(function(){
			console.log($(this));
			$(this).addClass("repwho-hover");
			$(this).attr('data-info',i);
		});
	}
	$("body").on( "mouseover", ".repwho-hover", function() {
		console.log($(this).text());
		var index = $(this).attr("data-info");
		console.log(index);
		console.log(RepWho.politicians[index]);
		var left = this.offsetLeft;
		var top = this.offsetTop;
		$("div.repwho-infobox").css({'top':top-30,'left':left, 'position':'absolute'});
		$("div.repwho-infobox").show();
	});
	$("body").on( "mouseleave", ".repwho-hover", function() {
		$("div.repwho-infobox").hide();
	});



});
