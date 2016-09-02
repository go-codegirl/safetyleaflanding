/**
 * Created by SravaniMarupeddi on 8/15/16.
 */
$(document).ready(function(){
    $(window).scroll(function() { // check if scroll event happened
        if ($(document).scrollTop() < 100 )
        {
            // if not, change it back to transparent
            $(".navbar-fixed-top").css("background-color", "transparent");
            $(".navbar-fixed-top").css("box-shadow", "0px 0px 0px #888888");
        }// if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
        else
        {
            // check if user scrolled more than 50 from top of the browser window
            $(".navbar-fixed-top").css("background-color", "white");
            $(".navbar-fixed-top").css("box-shadow", "0px 1px 5px #888888");
        }
    });
});