
$(document).ready(function () {

    /* small conversation menu */
    $(".otherOptions").click(function () {
        $(".moreMenu").slideToggle("fast");
    });

    /* clicking the search button from the conversation focus the search bar outside it, as on desktop */
    $(".search").click(function () {
        $(".searchChats").focus();
    });

 
});
