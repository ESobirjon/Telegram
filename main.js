
$(document).ready(function () {
     $(".leftPanel").click(function(e) {
        if (e.target.id == "chatButton_1" || $(e.target).parents("#chatButton_1").length) {
            $("#chatButton_1").addClass("active_chat");
            $("#chatButton1").show();
        } else {
            $("#chatButton_1").removeClass("active_chat");
            $("#chatButton1").hide();
        }
        if (e.target.id == "chatButton_2" || $(e.target).parents("#chatButton_2").length) {
            $("#chatButton_2").addClass("active_chat");
            $("#chatButton2").show();
        } else {
            $("#chatButton_2").removeClass("active_chat");
            $("#chatButton2").hide();
        }
        if (e.target.id == "chatButton_3" || $(e.target).parents("#chatButton_3").length) {
            $("#chatButton_3").addClass("active_chat");
            $("#chatButton3").show();
        } else {
            $("#chatButton_3").removeClass("active_chat");
            $("#chatButton3").hide();
        }
        if (e.target.id == "chatButton_4" || $(e.target).parents("#chatButton_4").length) {
            $("#chatButton_4").addClass("active_chat");
            $("#chatButton4").show();
        } else {
            $("#chatButton_4").removeClass("active_chat");
            $("#chatButton4").hide();
        }
    });

    $(".otherOptions").click(function () {
        $(".moreMenu").slideToggle("fast");
    });

   //Search panel
    $(".search").click(function () {
        $(".searchChats").focus();
    });
    $("#mySearch").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $(".chats .chatButton").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
        $(".convHistory .msg").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
    
    $("body").click(function(e) {
        if(e.target.id == "btn" || $(e.target).parents(".btn").length) {
            $(".sidebar").addClass("active");
        } else {
            $(".sidebar").removeClass("active");
        }
    });
   
    //Channel notification icon
    $("#bell").click(function() {
        $(this).toggleClass("bx-bell-off");
    });

    //chatButton1 write panel
    $('#panel_1').keypress(function(e) {
        var message_1 =  e.target.value;
        var dt = new Date();
        console.log(message_1)

        if(message_1) {

            if(e.keyCode === 13) {
                $("#chatPanel_1").append(`
                    <div class="msg messageSent msg_2">
				        ${message_1}
				        <i class="material-icons readStatus">done</i>
				        <span class="timestamp">${dt.getHours() + ":" + dt.getMinutes()}</span>
			        </div>
                `);

                $("p[id='person_1']").attr("style", "display: none;");
                $("#one").append(`
                    <p class='message' id='person_1'>${message_1}</p>
                `);

                $("p[id='data_1']").attr("style", "display: none;");
                $("#data1").append(`
                    <p class="date" id="data_1">${dt.getHours() + ":" + dt.getMinutes()}</p>
                `);

                e.target.value = "";
            }
        }

    });

    //chatButton2 write panel
    $('#panel_2').keypress(function(e) {
        var message_2 =  e.target.value;
        var dt = new Date();
        console.log(message_2)

        if(message_2) {

            if(e.keyCode === 13) {
                $("#chatPanel_2").append(`
                    <div class="msg messageSent msg_2">
				        ${message_2}
				        <i class="material-icons readStatus">done</i>
				        <span class="timestamp">${dt.getHours() + ":" + dt.getMinutes()}</span>
			        </div>
                `);

                $("p[id='person_2']").attr("style", "display: none;")
                $("#two").append(`
                    <p class='message' id="person_2">${message_2}</p>
                `);

                $("p[id='data_2']").attr("style", "display: none;");
                $("#data2").append(`
                    <p class="date" id="data_2">${dt.getHours() + ":" + dt.getMinutes()}</p>
                `);

                e.target.value = "";
            }
        }
    });

    //Send file
    $("#uploadFile").change(function(e) {
        var file = URL.createObjectURL(e.target.files[0]);
        var dt = new Date();
        console.log(e);
        $("#chatPanel_1").append(`
        <div class="msg messageSent msg_2">
            <img src=${file} style="min-width: 100px; max-width: 100%; border-radius: 15px;">
            <i class="material-icons readStatus">done</i>
            <span class="timestamp">${dt.getHours() + ":" + dt.getMinutes()}</span>
        </div>
        `);
        $("p[id='person_1']").attr("style", "display: none;")
        $("#one").append(`
            <p class='message' id="person_1">Photo</p>
        `);
        $("p[id='data_1']").attr("style", "display: none;");
        $("#data1").append(`
            <p class="date" id="data_1">${dt.getHours() + ":" + dt.getMinutes()}</p>
        `);
    });
    $("#uploadFile").change(function(e) {
        var file = URL.createObjectURL(e.target.files[0]);
        var dt = new Date();
        console.log(e);
        $("#chatPanel_2").append(`
            <div class="msg messageSent msg_2">
                <img src=${file} style="min-width: 100px; max-width: 100%; border-radius: 15px;">
                <i class="material-icons readStatus">done</i>
                <span class="timestamp">${dt.getHours() + ":" + dt.getMinutes()}</span>
            </div>
        `);
        $("p[id='person_2']").attr("style", "display: none;")
        $("#two").append(`
            <p class='message' id="person_2">Photo</p>
        `);
        $("p[id='data_2']").attr("style", "display: none;");
        $("#data2").append(`
            <p class="date" id="data_2">${dt.getHours() + ":" + dt.getMinutes()}</p>
        `);
    });
});
