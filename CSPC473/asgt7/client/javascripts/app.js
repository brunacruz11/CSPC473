/* jshint browser: true, jquery: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, nonew: true, quotmark: double, strict: true, undef: true, unused: true */

var main = function () { 
    "use strict";
    
    var $text;
    var address = {};
    var $link;
    var $list;
    
    $("#formId button").on("click", function (event) {
        
        $text = $("#url").val();
        $("#url").val("");
        address.redirect = $text;
        $("main .output a").remove();
        $("main .list").empty();
        
        $.ajax({
            type: "POST",
            url: "/shorter",
            data: address,
            dataType: 'json',
            success: function (data) {
                console.log("I'm in success function");
                console.log("data " + data);
                $link = $("<a>").text(data);
                if(data.indexOf(".") > 0) {
                    $link.attr('href', "http://"+data);
                } else {
                    $link.attr('href', "http://localhost:3000/"+data);
                }
                
                $link.prependTo($("main .output"));
                
            }
        });       
    });


    $(".output button").on("click", function (event) {
        $("main .output a").remove();
        $("main .list").empty();

        $.ajax({
            type: "POST",
            url: "/populars",
            data: {},
            dataType: 'json',
            success: function (data) {
                console.log("I'm in populars success function!!");
                $list = $("<ol>");
                for (var i = 0; i < data.length; i = i + 2) {
                   console.log("data client side"+ data[i]);
                   $list.append($("<li>").text(data[i] + " - " + data[i+1]));
                };
                
                
                $("main .list").append($list);
                
                
            }
        });   

    });


};

$(document).ready(main);