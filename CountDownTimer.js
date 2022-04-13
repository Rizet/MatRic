var countDownDate = new Date("July 23, 2022 15:00:00").getTime();

var x = setInterval(function () {
    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
    var seconds = Math.floor(distance % (1000 * 60) / 1000);

    document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";
    if (distance < 0){
        document.getElementById("countdown").innerHTML = "The wedding has commenced"
    }
},1000);