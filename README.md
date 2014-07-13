# Awesome Share

![](http://www.imgur.com/UzQpxQ2.png)

A clean, minimalistic sharing bar designed for use with Ghost.

The Awesome Share bar grabs relevant page data to dynamically build unique and appropriate sharing messages for the current page, and currently supports the following social networks:

- Twitter
- Google+
- Facebook
- Reddit
- LinkedIn
- Tumblr
- StumbleUpon
- Buffer

It will also generate a link to the site's RSS feed.

## Installation Instructions

To use, simply add the following links to the bottom of the page head in default.hbs within your Ghost theme.

```html
<link href="{{asset "awesome-share/css/bootstrap.min.css"}}" rel="stylesheet" />
<link href="{{asset "awesome-share/css/font-awesome.min.css"}}" rel="stylesheet" />
<link href="{{asset "awesome-share/css/share-bar.css"}}" rel="stylesheet" />
```

Add the following after `</html>`.

```html
<script type="text/javascript" src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
<script type="text/javascript" src="{{asset "awesome-share/js/bootstrap.min.js"}}"></script>
<script type="text/javascript" src="{{asset "awesome-share/js/share-bar.js"}}"></script>
```

Next, place an empty `div` with the class `jf-sharebar` on all pages that you would like the sharebar to display.

```html
<div id="jf-sharebar"></div>
```

Finally, in js/share-bar.js you will need to edit the line at the top of the file to include your Twitter username (not including the @ symbol).

```javascript
var twitterUser = "PUT_TWITTER_USERNAME_HERE";
```
