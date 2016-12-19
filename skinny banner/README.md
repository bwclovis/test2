# NGBF SKINNY BANNER

* Code can be found  - /sitecore/content/ngbf_comcast_com/Content/Modules/HTML Content/FED/Skinny Banner Template
* CSS is - <link href="/~/Media/4E1384D72D1F412698A86D1D18CA8D15.ashx" rel='stylesheet'>
* JavaScript for sticky functionality - <script src="/~/Media/16D815107FF549B59914734AE08EC18E.ashx"></script>

** PLEASE MAKE A COPY OF BANNER AND ADD IT TO PAGE – This is meant to be its own component/module. **

Default banner is 80px high, white with blue button and 24px text (black). To alter banner, ADD the following classes to the following areas.

## Basic banner settings
 * For a black banner - ADD  s-banner_black to s-banner ( this will flip the text color to white and change the color of the button to the accessible on black color automatically).
 * For a gray banner – ADD s_banner_gray to s-banner.
 * Add border to top and bottom – ADD has-border to s-banner.
 * Add border to top – ADD has-border_top to s-banner.
 * Add border to bottom – ADD has-border_bottom to s-banner.
 * Add shadow to bottom of banner – ADD has-shadow to s-banner.
 * Make banner sticky – ADD class is-sticky. Also add the JS file above the code snipit in the markup (further directions there).

## Banner Text Sizes
* Change to 16px text – ADD s-banner_text-16 to s-banner_text.
* Change to 18px text – ADD s-banner_text-18 to s-banner_text.
* Change to 32px text – ADD s-banner_text-32 to s-banner_text.
* To center text – ADD text-center to s-banner_text ( this will not work if a button is there for obvious reasons.

## Button Variations
* Make “Ghost” button (transparent background) – ADD btn-ghost to btn.
* Make blue “ghost” button – ADD btn-ghost_blue to btn.
* Make just a link – ADD  btn-blank to btn.

## Code Examples
* Black banner with 32px text center aligned:

```
	<div class="s-banner s-banner_black">
		<div class="s-banner-container">
		 	<p class="s-banner_text s-banner_text-32 text-center">this is space for text</p>
		</div>
	</div>
```

* Grey banner with a top border, drop shadow, 24px text, blue ghost button and is sticky:

```
	<div class="s-banner s-banner_gray has-border_top has-shadow is-sticky">
    	<div class="s-banner-container">
        	<p class="s-banner_text">this is space for text</p>
			<a href="" class="btn btn-ghost_blue">Link Text</a>
    	</div>
	</div>
```

* White banner with 18px text, border on top and bottom and just a link to the right:

```
	<div class="s-banner has-border">
    	<div class="s-banner-container">
        	<p class="s-banner_text s-banner_text-18">this is space for text</p>
			<a href="" class="btn btn-blank">Link Text</a>
    	</div>
	</div>
```

