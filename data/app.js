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
		var index = $(this).attr("data-info");

		console.log(index);
		console.log(RepWho.politicians[index]);

		var rep = RepWho.politicians[index];

		$('div.repwho-infobox .name').text(rep.person.firstname + " " + rep.person.middlename+ " " + rep.person.lastname);
		$('div.repwho-infobox .role').text(rep.role_type_label);
		$('div.repwho-infobox .party').text(rep.party);
		$('div.repwho-infobox .state').text(rep.state);
		$('div.repwho-infobox .website').text(rep.website);
		$('div.repwho-infobox .twitter').text("Find me on Twitter: @"+rep.person.twitterid);

		var left = this.offsetLeft;
		var top = this.offsetTop;

		$("div.repwho-infobox").css({'top':top+30,'left':left, 'position':'absolute'});
		$("div.repwho-infobox").show();
	});
	$("body").on( "mouseleave", ".repwho-hover", function() {
		$("div.repwho-infobox").hide();
	});



});
