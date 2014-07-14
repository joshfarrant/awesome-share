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

In post.hbs, add the following at the very end of the file, after all other tags are closed.

```html
<script type="text/javascript" src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
<script type="text/javascript" src="{{asset "awesome-share/js/bootstrap.min.js"}}"></script>
<script type="text/javascript">

[Paste share-bar.js here]

</script>
```

Paste the contents of js/share-bar.js in place of the text in the square brackets in the final <script> tag, ensuring that you enter your Twitter username into the `twitteruser` variable near the top of the file.

```javascript
var twitterUser = "PUT_TWITTER_USERNAME_HERE";
```

The file cannot be referenced in the same way as the bootstrap.min.js as it contains Handlebars properties, and so needs to be run directly within a .hbs file.

Next, place an empty `div` with the class `jf-sharebar` on the page in the position that you would like the sharebar to display.

```html
<div id="jf-sharebar"></div>
```
