$(document).ready(function(){

	var politicians = ["Alma Adams", "Robert Aderholt", "Lamar Alexander", "Justin Amash", "Mark Amodei"];
	$("body")
		.filter(function() {
		// var foundIn;
		// foundIn = $('*:contains("Alma Adams")');
		//alert("filtr function");
		/*
			for variable in array
				if webpage contains variable
					log to console
				else
					log not found (to test) 
		*/

/*
		NOTES FROM THE HELP GUY

		add a CSS class or data attribute
		<p class="poli" data-politician="myName">







*/

		var i;
		for(i in politicians){
			// if($('body:contains(i)')){
			// 	console.log("Found politician: " + politicians[i]);
			// 	//alert("Found politician: " + politicians[i]);
			// }
			// else
			// 	console.log("SOMETHING BROKE");

			if($("body:contains(i)")){	
				var name = $("body:contains(i)").text();	
				// var name = $("body:contains(i)");
				console.log("the name is this: "+name+" okay.");

			}

			else{
				console.log("nah");
			}
			// console.log($('body'));
			// alert("ugh2");
			// name.css("color", "red");

		}

		/*
			I want to search a webpage for any of the politicians names that
			are found in my array.
		*/

	});


});