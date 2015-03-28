(function(RepWho){
	RepWho.politicians = [];
	//fetches data and caches it in politicians
	RepWho.getPoliticians = function(){
		RepWho.politicians = RepWho.rawPoliticians.objects;
	};
}(RepWho=window.RepWho || {}));

$(document).ready(function(){

	RepWho.getPoliticians();
	
	var politician;
	for(var i=0; i<RepWho.politicians.length; i++){
		politician = RepWho.politicians[i];

		$('span:contains("'+politician.person.lastname+'")').each(function(){
			console.log($(this));
			$(this).addClass("repwho-hover");
			$(this).attr('data-info',i);
		});

		


	}
	


});