const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    console.log(hours, minutes, seconds);

    //added 90 becase of the initial transform 90deg above
    const hoursDegrees = (hours / 12) * 360 + 90;
    const minutesDegrees = (minutes / 60) * 360 + 90;
    const secondsDegrees = (seconds / 60) * 360 + 90;

    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
}
//run function every second
setInterval(setDate, 1000);
