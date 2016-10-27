
var today = new Date();
var hourNow =today.getHours();
var greeting;

if(hourNow > 18){
		greeting = "Good Evening from the West Coast"
	} else if (hourNow > 12){
		greeting = "Good Afternoon from the West Coast"
	} else if (hourNow > 0) {
		greeting = "Good Morning from the West Coast"
	}
	else {
		greeting = ""
	}
		
document.write('<h2>' + greeting + '</h2>');
