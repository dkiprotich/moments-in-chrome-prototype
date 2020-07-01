const date = document.getElementById("timer")
const container = document.querySelector(".container")
const remaining = document.getElementById("rem")

function happyBirthday() {
    let d_day = new Date(2020, 6, 16, 0, 0, 0);

    let now = new Date()
    const remTime = d_day - now

    let days = Math.floor(remTime / (1000 * 60 * 60 * 24))
    const hours = Math.floor((remTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((remTime % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((remTime % (1000 * 60)) / (1000))

    document.getElementById("days").innerHTML = days
    document.getElementById("hours").innerHTML = hours
    document.getElementById("minutes").innerHTML = minutes
    document.getElementById("seconds").innerHTML = seconds

    if (hours < 10) {
        hours.innerHTML = "0" + hours;
    } else {
        return hours
    }
    if (minutes < 10) {
        minutes.innerHTML = "0" + [minutes];
    }
    if (seconds < 10) {
        seconds.innerHTML = "0" + [seconds];
    } else {
        return seconds
    }
    for (i = 0; i <= days; i--) {
        document.getElementById("rem").innerHTML = days;
    }
    setInterval(happyBirthday, 1000)

}
happyBirthday()