# Awesome Share

![](http://www.imgur.com/UzQpxQ2.png)

A clean, minimalistic sharing bar that grabs relevant page data to dynamically build unique and appropriate sharing messages for the current page. Awesome-share currently supports the following platforms:

- Twitter
- Google+
- Facebook
- Reddit
- LinkedIn
- Tumblr
- StumbleUpon
- Buffer

as well as a link to the site's RSS feed.

## Installation Instructions

To use, simply add the following links to the page head.

```html
<link href="css/bootstrap.min.css" rel="stylesheet">
<link href="css/font-awesome.min.css" rel="stylesheet">
<link href="css/share-bar.css" rel="stylesheet">
```

Add the following after `</html>`.

```html
<script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/share-bar.js"></script>
```

Then place the sharebar anywhere on your page by just adding an empty `div` where you would like the share bar to be created, with the class `jf-sharebar`

```html
<div id="jf-sharebar"></div>
```

Finally, in js/share-bar.js you will need to edit the three lines at the top of the file to contain the correct details for your website.

```javascript
var twitterUser = "TWITTER_USERNAME";
var rootUrl = "{{@blog-url}}";
var title = "{{{title}}}";

```


If you are using Awesome Share with Ghost, the only variable that you need to change is `twitterUser`, which needs to be set to your Twitter username, not including the @ symbol, eg "FarPixel".

If you are not using Ghost, then in addition to the `twitterUser` variable, you will also need to enter your blog's root URL (eg. http://blog.farrant.me), as well as your blog's title into the `rootUrl` and `title` variables respectively.
