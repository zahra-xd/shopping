//menu
window.addEventListener('scroll', () => {

    var menoo = document.getElementById('meno-navbar');
    if (window.pageYOffset > 10) {
        menoo.classList.add('menoadd');
    } else {
        menoo.classList.remove('menoadd');
    }
})

// btn 
var mybutt = document.getElementById('but1');

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.addEventListener('scroll', () => {

        var menoo1 = document.getElementById('but1');
        if (window.pageYOffset > 280) {

            menoo1.style.display = "block"
        } else {
            menoo1.style.display = "none"
        }
    })
    //loader
window.addEventListener("load", function() {
    var loadScreen = document.querySelector(".preloader-container");
    document.body.removeChild(loadScreen);
})


(function() {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let birthday = "Sep 30, 2021 00:00:00",
        countDown = new Date(birthday).getTime(),
        x = setInterval(function() {

            let now = new Date().getTime(),
                distance = countDown - now;

            document.getElementById("dayss").innerText = Math.floor(distance / (day)),
                document.getElementById("hourss").innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById("minutess").innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById("secondss").innerText = Math.floor((distance % (minute)) / second);

            //do something later when date is reached
            if (distance < 0) {
                let headline = document.getElementById("headline"),
                    countdown = document.getElementById("countdown"),
                    content = document.getElementById("content");

                headline.innerText = "It's my birthday!";
                countdown.style.display = "none";
                content.style.display = "block";

                clearInterval(x);
            }
            //seconds
        }, 0)
}());




//