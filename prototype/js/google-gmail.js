function getNews(){
   $.get("http://content.guardianapis.com/search", function (data, status) {
   	var newsfeed = $('#news-feed');
	var newsString = 
	            '<section id="accord10" class="panel panel-default">' + 
	                '<header class="panel-heading">' + 
	                '<h4 class="panel-title">' + 
                        '<a href="#collapseMinusOne" data-parent="#accord10" data-toggle="collapse" class="accordion-toggle">' +
                            'News' +
                        '</a>' +
                    '</h4>' +
	                '</header>' + 
	                '<div class="panel-body panel-collapse collapse in" id="collapseMinusOne">' +
	                    '<table class="table table-hover">' + 
						 	'<tbody>';
   	for (i = 0; i < data.response.results.length; i++) {
   		var result = data.response.results[i];
   		newsString += '<tr><td>' + result.webTitle + ' ' + '<a href=' + result.webUrl + ' target="_blank">Read More</a></td></tr>';
   	}
   	newsString += '</tbody>' +
						'</table>' +
	                '</div>' +
	            '</section>';
	newsfeed.html(newsString);
   });
 }

function getWeather() {
	$.get("http://api.wunderground.com/api/146f20e12bdac7ca/conditions/q/Ann_Arbor.json", function (data, status) {
		console.log(data);
		var weatherfeed = $('#weather-data');
		var result = data.current_observation;
		var weatherString = '<h4>' + result.observation_time_rfc822.substring(0, 16) + '</h4>' +
                        '<div class="col-lg-2">' +
                            '<img src=' + result.icon_url + '>' + 
                        '</div>' +
                        '<div class="col-lg-3">' +
                        '<b>' + result.weather + '<b>' +
                        '<br>' +
                        result.temp_f + '°F' +
                        '<br>' +
                        '</div>' +
                        
                        '<i>Ann Arbour, Michigan</i>';
        weatherfeed.html(weatherString);

	})
}
 
