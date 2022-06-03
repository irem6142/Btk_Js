function ornek() {
    document.getElementById("btk").style.filter = "none"
    document.getElementById("btk3").style.filter = "none"
    document.getElementById("saat").style.filter = "none"
}


function ornek1() {
    document.getElementById("btk").classList.add("a")
    document.getElementById("btk3").classList.add("a")
    document.getElementById("saat").classList.add("a")
}

function ornek2() {

    document.getElementById("btk1").style.filter = "none"
    document.getElementById("btk4").style.filter = "none"
    document.getElementById("dk").style.filter = "none"
}


function ornek3() {

    document.getElementById("btk1").classList.add("a")
    document.getElementById("btk4").classList.add("a")
    document.getElementById("dk").classList.add("a")
}

function ornek4() {

    document.getElementById("btk2").style.filter = "none"
    document.getElementById("btk5").style.filter = "none"
    document.getElementById("saniye").style.filter = "none"

}


function ornek5() {

    document.getElementById("btk2").classList.add("a")
    document.getElementById("btk5").classList.add("a")
    document.getElementById("saniye").classList.add("a")

}
//Saat fonksiyonu

var saat = document.getElementById("saat")
var dk = document.getElementById("dk")
var saniye = document.getElementById("saniye")

setInterval(function() {
    var S = new Date
    var hour = S.getHours()
    var minutes = S.getMinutes()
    var second = S.getSeconds()

    saat.innerHTML = hour
    dk.innerHTML = minutes
    saniye.innerHTML = second
    if (second < 10) {
        saniye.innerHTML = "0" + second
    }
    if (minutes < 10) {
        dk.innerHTML = "0" + minutes
    }
    if (hour < 10) {
        saat.innerHTML = "0" + hour
    }

}, 1000)