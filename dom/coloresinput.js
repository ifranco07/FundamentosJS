const body = document.querySelector('body');
const red = document.getElementById('red');
const green = document.getElementById('green');
const blue = document.getElementById('blue');
const trasparent = document.getElementById('trasparent');

function getColor (){
    const redVal= Math.floor((red.value/100)*255);
    const greenVal=Math.floor((green.value/100)*255);
    const blueVal=Math.floor((blue.value/100)*255);
    const trasparentVal = parseFloat((trasparent.value / 100).toFixed(1));
    return `rgb(${ redVal}, ${ greenVal }, ${ blueVal}, ${ trasparentVal})`;
}

function setColor(){
    body.style.background = getColor();
}
setColor()

red.addEventListener('change',setColor);
green.addEventListener('change',setColor);
blue.addEventListener('change',setColor);
trasparent.addEventListener('change',setColor);
