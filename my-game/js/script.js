$(document).ready(function () {
    var counter = 0;
    var myInterval = setInterval(function () {
        ++counter;
    }, 1000);

    $("#btn-showFireworks").click(function () {
        $.session.set('module1_time_seconds', counter);
    });
});