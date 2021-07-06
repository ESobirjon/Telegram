
$(document).ready(function () {

    // $("#chatButton_1").click(function() {
    //     if (this) {
    //         $("#chatButton_1").addClass("active_chat");
    //         $("#chatButton1").show();
    //     } else {
    //         $("#chatButton_1").removeClass("active_chat");
    //         $("#chatButton1").hide();
    //     }
    // });
    //  $("#chatButton_2").click(function() {
    //     if (this) {
    //         $("#chatButton_2").addClass("active_chat");
    //         $("#chatButton2").show();
    //     } else {
    //         $("#chatButton_2").removeClass("active_chat");
    //         $("#chatButton2").hide();
    //     }
    // });
    //  $("#chatButton_3").click(function() {
    //     if (this) {
    //         $("#chatButton_3").addClass("active_chat");
    //         $("#chatButton3").show();
    //     } else {
    //         $("#chatButton_3").removeClass("active_chat");
    //         $("#chatButton3").hide();
    //     }
    // });
    //  $("#chatButton_4").click(function() {
    //     if (this == "") {
    //         $("#chatButton_4").addClass("active_chat");
    //         $("#chatButton4").show();
    //     } else {
    //         $("#chatButton_4").removeClass("active_chat");
    //         $("#chatButton4").hide();
    //     }
    // });
     $("body").click(function(e) {
        if (e.target.id == "chatButton_1") {
            $("#chatButton_1").addClass("active_chat");
            $("#chatButton1").show();
        } else {
            $("#chatButton_1").removeClass("active_chat");
            $("#chatButton1").hide();
        }
        if (e.target.id == "chatButton_2") {
            $("#chatButton_2").addClass("active_chat");
            $("#chatButton2").show();
        } else {
            $("#chatButton_2").removeClass("active_chat");
            $("#chatButton2").hide();
        }
        if (e.target.id == "chatButton_3") {
            $("#chatButton_3").addClass("active_chat");
            $("#chatButton3").show();
        } else {
            $("#chatButton_3").removeClass("active_chat");
            $("#chatButton3").hide();
        }
        if (e.target.id == "chatButton_4") {
            $("#chatButton_4").addClass("active_chat");
            $("#chatButton4").show();
        } else {
            $("#chatButton_4").removeClass("active_chat");
            $("#chatButton4").hide();
        }
    });

    /* small conversation menu */
    $(".otherOptions").click(function () {
        $(".moreMenu").slideToggle("fast");
    });

    /* clicking the search button from the conversation focus the search bar outside it, as on desktop */
    $(".search").click(function () {
        $(".searchChats").focus();
    });

 
});
