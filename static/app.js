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

			$(this).html($(this).html().replace(politician.person.lastname,'<span class="repwho-hover" data-info="'+i+'">'+politician.person.lastname+'</span>'));

			//$(this).addClass("repwho-hover");
			//$(this).attr('data-info',i);
		});
	}
	$("body").on( "mouseover", ".repwho-hover", function() {
		var index = $(this).attr("data-info");

		console.log(index);
		console.log(RepWho.politicians[index]);

		var rep = RepWho.politicians[index];

		$('div.repwho-infobox .repwho-name').text(rep.person.firstname + " " + rep.person.middlename+ " " + rep.person.lastname);
		$('div.repwho-infobox .repwho-role').text(rep.role_type_label);
		$('div.repwho-infobox .repwho-party').text(rep.party);
		$('div.repwho-infobox .repwho-state').text(rep.state);
		$('div.repwho-infobox .repwho-website').html("<a href="+rep.website+">"+rep.website+"</a>");
		if(rep.person.twitterid){
			$('div.repwho-infobox .repwho-twitter').html("Find me on Twitter: @<a href="+"http://www.twitter.com/"+rep.person.twitterid+">"+rep.person.twitterid+"</a>");
			$('div.repwho-infobox .repwho-twitter').show();
		}else{
			$('div.repwho-infobox .repwho-twitter').hide();
		}

		var left = this.offsetLeft;
		var top = this.offsetTop;

		$("div.repwho-infobox").css({'top':top+30,'left':left, 'position':'absolute'});
		$("div.repwho-infobox").show();
	});
	$("body").on( "click", ".repwho-hover", function() {
		$("div.repwho-infobox").hide();
	});



});
