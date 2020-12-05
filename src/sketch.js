let bubbles = [];
let score = document.getElementById('clicked')
let lives = document.getElementById('lives')
let scoreCount = 0;
let livesCount = 5;
let intervalShow;
let intervalDelete;


function setup() {
    createCanvas(windowWidth, windowHeight / 1.10);
    let randomTime1 = random(1200, 2500);
    let randomTime2 = random(1509, 2800);
    intervalShow = setInterval(() => {
        let b = new Bubble(random(width), random(height), random(80, 120), 256);
        bubbles.push(b);
        if (livesCount <= 0) {
            clearInterval()
            clearInterval()
        }
    }, randomTime1);
    intervalDelete = setInterval(() => {
        bubbles.shift()
        lives.innerHTML = `Lives: ${livesCount -= 1}`;
        if (livesCount <= 0) {
            clearInterval()
            clearInterval()
        }
    }, randomTime2);
}

function draw() {
    background(51);
    if (livesCount <= 0) {
        textSize(40)
        text('GAME OVER', width / 3, height / 2)
        for (let i = 0; i < bubbles.length; i++) {
            bubbles.splice(0, bubbles.length)
        }
        clearInterval(intervalShow)
        clearInterval(intervalDelete)
        noLoop()
    }
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].show();
        if (bubbles[i].x > width) {
            bubbles.splice(i, 1);
            lives.innerHTML = `Lives: ${livesCount -= 1}`;
        }
    }
    if (bubbles.length >= 3) {
        bubbles.shift()
    }
}



function mousePressed() {
    if (livesCount <= 0) {
        return;
    }
    for (let i = bubbles.length - 1; i >= 0; i--) {
        if (bubbles[i].contains(mouseX, mouseY)) {
            bubbles.splice(i, 1);
            type(bubbles.length)
            score.innerHTML = `Score: ${scoreCount += 1} | Click Game, Click the Circles`;
        } else {
            lives.innerHTML = `Lives: ${livesCount -= 1}`;
        }
    }
}

function type(msg) {
    console.log(msg)
}