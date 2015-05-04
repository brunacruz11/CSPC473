/* jshint browser: true, jquery: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, nonew: true, quotmark: double, strict: true, undef: true, unused: true */

var main = function () { 
    "use strict";
    
    var $text;
    var play = {};
    
    $("#formId button").on("click", function (event) {
        
        $text = $("#myselect option:selected").text();
        play.move = $text;
        $("#myselect").val("rock");

        $.ajax({
            type: "POST",
            url: "/play/"+play.move,
            data: play,
            dataType: 'json',
            success: function (data) {
        
                $("main .output p").text("Scores:");
                $("#wins td:first-child").text("Wins:");
                $("#wins td:nth-child(2)").text(data.wins);
                $("#losses td:first-child").text("Losses:");
                $("#losses td:nth-child(2)").text(data.losses);
                $("#ties td:first-child").text("Ties:");
                $("#ties td:nth-child(2)").text(data.ties);
                $("#lastOutcome td:first-child").text("Last outcome:");
                $("#lastOutcome td:nth-child(2)").text(data.lastOutcome);
            
              
            }
        });       
    });
};

$(document).ready(main);