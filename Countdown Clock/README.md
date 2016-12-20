# Countdown Clock

## Module is found at:
/sitecore/content/ngbf_comcast_com/Content/Modules/HTML Content/Countdown Clock/Countdown clock (Please create copy).

## Basic CSS styles can be found: 
/sitecore/media library/2016/Countdown Clock/clock
/~/Media/F323494743BA4ACEACDD93EC83C89613.ashx

Clock has the following functionality out of box:
* Can change on right of clock when time expires
* Can hide text on left when time expires.
* Has threshold timer to be used for "Alert" ability to change styles when clock reaches a certian point (ie. make text red when there are only 15 min left).

## Notes on use:
* Markup - Javascript looks for data-component:clock and the ID of the clock so both must be included.
* Markup - To use clock on a Carousel, the Carousel itself should be placed inside of the clock container. Another way would be to create an seperate instance of the initializeClock function for each slide it is needed on.
* CSS - default class is "countdown-clock", to create with icon in center add class "countdown-clock-icon". For timr inside circles add class "countdown-clock-circle".
* CSS - If using the "Alert" function, classes are ._expired and ._expiring (curently only used in -circle).
* Javascript - At the bottom you will see directions for use with these variables:
    * deadline = “Month Date Year” this is in standard format (“July 4 2017" etc.). You can also use Date.parse(new Date()) to create countdown from when someone lands on the page.
    * $message = false – Setting this to true will cause whatever text inside “lead-text” to hide and the text in “endgame” to be swapped out with #3 when clock reaches zero.
* Javascript - to change the end of time message, change the variable endText.
* Javascript - to set the threshold for expiring, reset the numbers under the section marked //SETS STYLES FOR EXPIRING - EXPIRED 

