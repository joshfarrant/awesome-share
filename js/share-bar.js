$(document).ready(function() {

  // Define your site's root URL, and your Twitter username here
  var rootUrl = "http://blog.farrant.me/";
  var twitterUser = "farpixel"

  var url = window.location.pathname;
  var title = "{{{title}}}";

  var twitterUrl = "https://twitter.com/share?via=" + twitterUser + "&related=" + twitterUser + "&url=" + url;
  var googlePlusUrl = "https://plus.google.com/share?url=" + url;
  var facebookUrl = "https://www.facebook.com/sharer/sharer.php?u=" + url;
  var redditUrl = "http://www.reddit.com/submit?url=" + url + "&title=" + title;
  var linkedinUrl = "http://www.linkedin.com/shareArticle?url=" + url + "&title=" + title;
  var tumblrUrl = "http://www.tumblr.com/share?u=" + url + "&t=" + title;
  var stumbleuponUrl = "http://www.stumbleupon.com/submit?url=" + url + "&title=" + title;
  var bufferUrl = "http://bufferapp.com/add?url=" + url + "&text=" + title;
  var rssUrl = rootUrl + "rss";

  $('#jf-twitter').attr("href", twitterUrl);
  $('#jf-google-plus').attr("href", googlePlusUrl);
  $('#jf-facebook').attr("href", facebookUrl);
  $('#jf-reddit').attr("href", redditUrl);
  $('#jf-linkedin').attr("href", linkedinUrl);
  $('#jf-tumblr').attr("href", tumblrUrl);
  $('#jf-stumbleupon').attr("href", stumbleuponUrl);
  $('#jf-buffer').attr("href", bufferUrl);
  $('#jf-rss').attr("href", rssUrl);

  // Uncomment the line below to use coloured icons
  // $("#jf-sharebar").children("a").addClass("colour");

  $('.jf-link').hover(
    function() {
      $(this).attr("data-placement", "bottom");
      var socialNetwork = $(this).attr("jf-network");
      var popoverText ="";
      if (socialNetwork != "RSS") {
        popoverText =  "Share to " + socialNetwork;
      } else {
        popoverText = "Subscribe to RSS";
      };

      $(this).attr("data-content", popoverText);
      $(this).popover('show');
    }, function() {
      $(this).popover('hide');
    }
  );

});
