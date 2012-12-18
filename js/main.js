// Get #nimeregister Tweets

function getTweets() {
	var screenWidth = window.innerWidth;
	var tweets_url = '';
	var count = 0;
	var page_no = 0;
	var img_width = '';
	
	var theTweets = new Array();
	
	if (screenWidth > 767) {
		count = 48;
		tweets_url = 'http://search.twitter.com/search.json?q=nimeregister&rpp=48&include_entities=true&with_twitter_user_id=true&result_type=mixed';
		img_width = '6.25%';
	} else {
		count = 20;
		tweets_url = 'http://search.twitter.com/search.json?q=nimeregister&rpp=20&include_entities=true&with_twitter_user_id=true&result_type=mixed';
		img_width = '10%';
	}
	
	$.ajax({
	
	    url : tweets_url,
	    dataType : 'jsonp',
	    success : function(data)
	    {
	        var to_tweetsid = '';
	        for (var i = 0; i < count; i++) {
	        	var img_url = data['results'][i]['profile_image_url'].replace("_normal","_bigger");
	        	var tweet_txt = data['results'][i]['text'].replace("\"","&quot;");
	        	to_tweetsid += '<img src="' + img_url + '" style="width:' + img_width + ';" ';
	        	to_tweetsid += 'rel="tooltip" data-placement="bottom" data-original-title="'+ tweet_txt +'"/>';
	        }
	        $('#tweets').html(to_tweetsid);
	        $("[rel=tooltip]").tooltip();
	    },
	    error : function()
	    {
	        alert("Something seems to have gone wrong loading the tweets.");
	    },
	
	});
}

getTweets();
$("[rel=tooltip]").tooltip();