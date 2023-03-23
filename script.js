const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const sizeinfo = document.getElementById('size');
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');

let size = 30;
let isPressed = false;

increase.addEventListener('click', ()=> {
    size+=5;
    if(size > 50) size=50;
    updateSize();
});

decrease.addEventListener('click', ()=> {
    size-=5;
    if(size < 5) size=5;
    updateSize();
});

function updateSize() {
    sizeinfo.innerHTML = size;
}

canvas.addEventListener('mousedown', (e)=> {
    isPressed = true;
    drawCircle(e.offsetX,e.offsetY);
});

canvas.addEventListener('mouseup', ()=> {
    isPressed = false;
});

canvas.addEventListener('mousemove', (e)=> {
    if(isPressed) {
        drawCircle(e.offsetX,e.offsetY);
    }
});

function drawCircle(x,y) {
    ctx.beginPath();
    ctx.arc(x,y,size,0,2*Math.PI);
    ctx.fill();
}