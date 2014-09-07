function getNews(){
   $.get("http://content.guardianapis.com/search", function (data, status) {


   	var newsfeed = $('#news-feed');
   	console.log(newsfeed.length);
   	console.log (data.response.results.length);
	var newsString = 
	            '<section class="panel">' + 
	                '<header class="panel-heading">' + 
	                    'The Guardian News' + 
	                    '<span class="tools pull-right">' +
	                      '<a href="javascript:;" class="fa fa-chevron-down"></a>' +
	                      '<a href="javascript:;" class="fa fa-times"></a>' + 
	                  '</span>' + 
	                '</header>' + 
	                '<div class="panel-body">' +
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
