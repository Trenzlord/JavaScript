const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){
    const now = new Date();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees})`
    const seconds = now.getSeconds()

    const mins = now.getMinutes()
    const minsDegrees = ((mins / 60) * 360) + 90;
    minsHand.style.transform = `rotate(${minsDegrees})`

    const hours = now.getHours()
    const minsDegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${minsDegrees})`
    

}
setInterval(setDate, 1000)