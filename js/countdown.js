//---Min---
// The date you want to count down to
var targetDate = new Date("2019/2/5 00:00:00");

var days;
var hour;
var min;
var sec;

$(function() {
    timeToLaunch();
    // Transition the current countdown from 0 
    numberTransition('#days .number', days,1000, 'easeOutQuad');
    numberTransition('#hours .number', hour, 1000, 'easeOutQuad');
    numberTransition('#minutes .number', min, 1000, 'easeOutQuad');
    numberTransition('#seconds .number', sec, 1000, 'easeOutQuad');
    //Begin countdown
    setTimeout(countDownTimer,1001);
});

function timeToLaunch(){
    // Get the current date
    var currentDate = new Date();

    // Find the difference between dates
    var diff = (currentDate - targetDate)/1000;
    var diff = Math.abs(Math.floor(diff));  

    // Check number of days until target
    days = Math.floor(diff/(24*60*60));
    sec = diff - days * 24*60*60;

    // Check number of hours until target
    hrs = Math.floor(sec/(60*60));
    sec = sec - hrs * 60*60;

    // Check number of minutes until target
    min = Math.floor(sec/(60));
    sec = sec - min * 60;
}
function countDownTimer(){
    timeToLaunch();
    // Write to countdown component
    $("#days .number").text(days);
    $("#hours .number").text(hour);
    $("#minutes .number").text(min);
    $("#seconds .number").text(sec);
    // Repeat check per 1 second
    setTimeout(countDownTimer,1000);
}


function numberTransition(id, endPoint, transitionDuration, transitionEase){
    // Transition numbers from 0 to the final number
    $({numberCount: $(id).text()}).animate({numberCount: endPoint}, {
        duration: transitionDuration,
        easing:transitionEase,
        step: function() {
            $(id).text(Math.floor(this.numberCount));
        },
        complete: function() {
            $(id).text(this.numberCount);
        }
    }); 
};

