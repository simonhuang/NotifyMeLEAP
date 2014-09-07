function getNews(){
   $.get("http://content.guardianapis.com/search", function (data, status) {


   	var newsfeed = $('#news-feed');
   	console.log(newsfeed.length);
   	console.log (data.response.results.length);
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
