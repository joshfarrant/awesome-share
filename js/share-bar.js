$(document).ready(function() {

  // You will need to change these three values as specified below
  var twitterUser = "TWITTER_USERNAME"; // Enter your Twitter username
  var rootUrl = "{{@blog.url}}"; // If using Ghost leave this line as it is, if not, enter your site's root URL, eg. "http://blog.farrant.me"
  var title = "{{{title}}}"; // If using Ghost leave this line as it is, if not, enter the name of your site/blog


  // Builds html and inserts it into div
  var html =""
  html += '<a id="jf-twitter" class="jf-link" target="_blank" jf-network="Twitter"><i class="fa fa-fw fa-twitter fa-2x"></i></a>';
  html += '<a id="jf-google-plus" class="jf-link" target="_blank" jf-network="Google+"><i class="fa fa-fw fa-google-plus fa-2x"></i></a>';
  html += '<a id="jf-facebook" class="jf-link" target="_blank" jf-network="Facebook"><i class="fa fa-fw fa-facebook fa-2x"></i></a>';
  html += '<a id="jf-reddit" class="jf-link" target="_blank" jf-network="Reddit"><i class="fa fa-fw fa-reddit fa-2x"></i></a>';
  html += '<a id="jf-linkedin" class="jf-link" target="_blank" jf-network="LinkedIn"><i class="fa fa-fw fa-linkedin fa-2x"></i></a>';
  html += '<a id="jf-tumblr" class="jf-link" target="_blank" jf-network="Tumblr"><i class="fa fa-fw fa-tumblr fa-2x"></i></a>';
  html += '<a id="jf-stumbleupon" class="jf-link" target="_blank" jf-network="StumbleUpon"><i class="fa fa-fw fa-stumbleupon fa-2x"></i></a>';
  html += '<a id="jf-buffer" class="jf-link" target="_blank" jf-network="Buffer"><img src="{{asset "icons/buffer.ico"}}"></a>'; <!-- Need to source a Buffer icon -->
  html += '<a id="jf-rss" class="jf-link" target="_blank" jf-network="RSS"><i class="fa fa-fw fa-rss fa-2x"></i></a>';
  $("#jf-sharebar").html(html);

  var url = window.location.pathname;

  // Builds share links in correct format
  var twitterUrl = "https://twitter.com/share?via=" + twitterUser + "&related=" + twitterUser + "&url=" + url;
  var googlePlusUrl = "https://plus.google.com/share?url=" + url;
  var facebookUrl = "https://www.facebook.com/sharer/sharer.php?u=" + url;
  var redditUrl = "http://www.reddit.com/submit?url=" + url + "&title=" + title;
  var linkedinUrl = "http://www.linkedin.com/shareArticle?url=" + url + "&title=" + title;
  var tumblrUrl = "http://www.tumblr.com/share?u=" + url + "&t=" + title;
  var stumbleuponUrl = "http://www.stumbleupon.com/submit?url=" + url + "&title=" + title;
  var bufferUrl = "http://bufferapp.com/add?url=" + url + "&text=" + title;
  var rssUrl = rootUrl + "rss";

  // Inserts share links into respective anchors
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

  // Builds and renders popover on hover
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