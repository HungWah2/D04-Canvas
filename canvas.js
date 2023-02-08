let canvas = document.getElementById('myCanvas')
/**@type {HTMLVideoElement} */
let video = document.getElementById('video')

let item = document.querySelector("#moveItem")
let itemRect = item.getBoundingClientRect()
let happy = document.querySelector("#happy")
let cry = document.querySelector("#sad")
let Heart = document.querySelector("#heart")
let Pacman = document.querySelector("#pacman")
let cancel = document.querySelector("#cancel")
let badApple = document.querySelector("#badApple")

document.addEventListener("mousemove", followMouse, 1000/120);



let xPos = 0, yPos = 0
let curX = 0, curY = 0
let speed = 0.05;

function animate(){
    let distX = xPos - curX
    let distY = yPos - curY

    curX = curX + (distX * speed)
    curY = curY + (distY * speed)

    item.style.left = curX + "px"
    item.style.top = curY + "px"


requestAnimationFrame(animate)
}

animate()

function followMouse(e){
    xPos = e.clientX
    yPos = e.clientY

    console.log((xPos+ " " + yPos));

    item.style.transform = "translate3d("+xPos+"px, "+yPos+"px, 0)"
}

/**
 * @param {any} canvas
 * @returns {CanvasRenderingContext2D}
 */
function createPaper(canvas) {
    return canvas.getContext("2d");
}

let paper = createPaper(canvas);

let x = 200, y = 200
let currentTime = Date.now();
let velocityX = 100;
let omega = 1;

setInterval(() => {
    let delta = (Date.now() - currentTime) / 1000
    let fps = 1 / delta
    currentTime = Date.now();
    // paper.clearRect(0, 0, canvas.width, canvas.height)
    // paper.beginPath();
    // paper.stroke();
    if (x > 400) {
        velocityX *= -1
    }
    if (x < 0) {
        velocityX *= -1
    }


    // x = 200 + (30)*Math.tan((omega*currentTime+0)/1000);
    // y = 200 + (30)*Math.tan((omega*currentTime+0)/1000);

}, 1000 / 120)

let dir = -10, open = 100;

function dots(){
    paper.fillStyle = "white";
    paper.beginPath();
    for (let i = 0; i < 4; i++) {
      paper.fillRect(x-20 + i * 54, y-15, 5, 5);
    }
    paper.fill();
}

function ghost1()
{  
    paper.fillStyle = "yellow";
    paper.beginPath();
    paper.moveTo(x+50, y);
    paper.lineTo(x+50, y-14);
    paper.bezierCurveTo(x+50, y-22, x+55, y-28, x+64, y-28);
    paper.bezierCurveTo(x+72, y-28, x+78, y-22, x+78, y-14);
    paper.lineTo(x+78, y);
    paper.lineTo(x+73.333, y-4.667);
    paper.lineTo(x+68.666, y);
    paper.lineTo(x+64, y-4.667);
    paper.lineTo(x+59.333, y);
    paper.lineTo(x+54.666, y-4.667);
    paper.lineTo(x+50, y);
    paper.fill();

    paper.fillStyle = "white";
    paper.beginPath();
    paper.moveTo(x+58, y-20);
    paper.bezierCurveTo(x+55, y-20, x+54, y-17, x+54, y-15);
    paper.bezierCurveTo(x+54, y-13, x+55, y-10, x+58, y-10);
    paper.bezierCurveTo(x+61, y-10, x+62, y-13, x+62, y-15);
    paper.bezierCurveTo(x+62, y-17, x+61, y-20, x+58, y-20);
    paper.moveTo(x+70, y-20);
    paper.bezierCurveTo(x+67, y-20, x+66, y-17, x+66, y-15);
    paper.bezierCurveTo(x+66, y-13, x+67, y-10, x+70, y-10);
    paper.bezierCurveTo(x+73, y-10, x+74, y-13, x+74, y-15);
    paper.bezierCurveTo(x+74, y-17, x+73, y-20, x+70, y-20);
    paper.fill();

    paper.fillStyle = "black";

    paper.beginPath();
    paper.arc(x+68, y-14, 2, 0, Math.PI * 2, true);
    paper.fill();

    paper.beginPath();
    paper.arc(x+56, y-14, 2, 0, Math.PI * 2, true);
    paper.fill();

}

function ghost2()
{  
    paper.fillStyle = "blue";
    paper.beginPath();
    paper.moveTo(x+50-50, y);
    paper.lineTo(x+50-50, y-14);
    paper.bezierCurveTo(x+50-50, y-22, x+55-50, y-28, x+64-50, y-28);
    paper.bezierCurveTo(x+72-50, y-28, x+78-50, y-22, x+78-50, y-14);
    paper.lineTo(x+78-50, y);
    paper.lineTo(x+73.333-50, y-4.667);
    paper.lineTo(x+68.666-50, y);
    paper.lineTo(x+64-50, y-4.667);
    paper.lineTo(x+59.333-50, y);
    paper.lineTo(x+54.666-50, y-4.667);
    paper.lineTo(x+50-50, y);
    paper.fill();

    paper.fillStyle = "white";
    paper.beginPath();
    paper.moveTo(x+58-50, y-20);
    paper.bezierCurveTo(x+55-50, y-20, x+54-50, y-17, x+54-50, y-15);
    paper.bezierCurveTo(x+54-50, y-13, x+55-50, y-10, x+58-50, y-10);
    paper.bezierCurveTo(x+61-50, y-10, x+62-50, y-13, x+62-50, y-15);
    paper.bezierCurveTo(x+62-50, y-17, x+61-50, y-20, x+58-50, y-20);
    paper.moveTo(x+70-50, y-20);
    paper.bezierCurveTo(x+67-50, y-20, x+66-50, y-17, x+66-50, y-15);
    paper.bezierCurveTo(x+66-50, y-13, x+67-50, y-10, x+70-50, y-10);
    paper.bezierCurveTo(x+73-50, y-10, x+74-50, y-13, x+74-50, y-15);
    paper.bezierCurveTo(x+74-50, y-17, x+73-50, y-20, x+70-50, y-20);
    paper.fill();

    paper.fillStyle = "black";

    paper.beginPath();
    paper.arc(x+68-50, y-14, 2, 0, Math.PI * 2, true);
    paper.fill();

    paper.beginPath();
    paper.arc(x+56-50, y-14, 2, 0, Math.PI * 2, true);
    paper.fill();
}

function ghost3()
{  
    paper.fillStyle = "red";
    paper.beginPath();
    paper.moveTo(x+50+50, y);
    paper.lineTo(x+50+50, y-14);
    paper.bezierCurveTo(x+50+50, y-22, x+55+50, y-28, x+64+50, y-28);
    paper.bezierCurveTo(x+72+50, y-28, x+78+50, y-22, x+78+50, y-14);
    paper.lineTo(x+78+50, y);
    paper.lineTo(x+73.333+50, y-4.667);
    paper.lineTo(x+68.666+50, y);
    paper.lineTo(x+64+50, y-4.667);
    paper.lineTo(x+59.333+50, y);
    paper.lineTo(x+54.666+50, y-4.667);
    paper.lineTo(x+50+50, y);
    paper.fill();

    paper.fillStyle = "white";
    paper.beginPath();
    paper.moveTo(x+58+50, y-20);
    paper.bezierCurveTo(x+55+50, y-20, x+54+50, y-17, x+54+50, y-15);
    paper.bezierCurveTo(x+54+50, y-13, x+55+50, y-10, x+58+50, y-10);
    paper.bezierCurveTo(x+61+50, y-10, x+62+50, y-13, x+62+50, y-15);
    paper.bezierCurveTo(x+62+50, y-17, x+61+50, y-20, x+58+50, y-20);
    paper.moveTo(x+70+50, y-20);
    paper.bezierCurveTo(x+67+50, y-20, x+66+50, y-17, x+66+50, y-15);
    paper.bezierCurveTo(x+66+50, y-13, x+67+50, y-10, x+70+50, y-10);
    paper.bezierCurveTo(x+73+50, y-10, x+74+50, y-13, x+74+50, y-15);
    paper.bezierCurveTo(x+74+50, y-17, x+73+50, y-20, x+70+50, y-20);
    paper.fill();

    paper.fillStyle = "black";

    paper.beginPath();
    paper.arc(x+68+50, y-14, 2, 0, Math.PI * 2, true);
    paper.fill();

    paper.beginPath();
    paper.arc(x+56+50, y-14, 2, 0, Math.PI * 2, true);
    paper.fill();
}

function pacman(open){
    paper.fillStyle = "yellow";
    let current = open/100;
    paper.clearRect(0, 0, canvas.width, canvas.height)
       
        paper.beginPath();
        paper.arc(x-75, y-15, 30, (current*0.2)*Math.PI, (2-current*0.2)*Math.PI);
        paper.lineTo(x-75, y-15);
        paper.fill();
        paper.closePath();

}

function sad (){
    paper.clearRect(0, 0, canvas.width, canvas.height)
    paper.beginPath()
    paper.arc(x, y, 50, 0, 2 * Math.PI, true);//face
    paper.moveTo(x-15, y+40)
    paper.fillStyle = "yellow";
    paper.fill();
    
    paper.beginPath()
    paper.fillStyle = "red";
    paper.arc(x, y+40, 15, 0, Math.PI, true);//mouth
    paper.fill();

    paper.beginPath()
    paper.moveTo(x-10, y-35)
    paper.fillStyle = "black";
    paper.quadraticCurveTo(x-15, y-20, x-40, y-10)
    paper.fill();

    paper.beginPath()
    paper.fillStyle = "white";
    paper.moveTo(x-3, y-5)
    paper.arc(x-15, y-5, 12, 0, 2 * Math.PI, true);//left eye
    paper.fill();

    paper.beginPath()
    paper.moveTo(x-10, y-10)
    paper.fillStyle = "black";
    paper.arc(x-15, y-10, 5, 0, 2 * Math.PI, true);
    paper.fill();
    
    paper.beginPath()
    paper.fillStyle = "black";
    paper.moveTo(x+10, y-35)
    paper.quadraticCurveTo(x+15, y-20, x+40, y-10)
    paper.fill();

    paper.beginPath()
    paper.moveTo(x+27, y-5)
    paper.arc(x + 15, y - 5, 12, 0, 2 * Math.PI, true);//right eye
    paper.fillStyle = "white";
    paper.fill();
    
    paper.beginPath()
    paper.fillStyle = "black";
    paper.moveTo(x+20,y-10)
    paper.arc(x+15, y-10, 5, 0, 2 * Math.PI,true);
    paper.fill();

    paper.strokeStyle = "black";
    paper.fill();
}

function smile()
{
    paper.clearRect(0, 0, canvas.width, canvas.height)

    paper.beginPath();
    paper.arc(x, y, 50, 0, 2 * Math.PI, true);
    paper.fillStyle = "yellow";
    paper.fill();

    paper.beginPath();
    paper.moveTo(x-35,y)
    paper.arc(x, y, 35, 0, Math.PI, false);
    paper.fillStyle = "red";
    paper.fill();

    paper.beginPath();
    paper.moveTo(x-10, y-10)
    paper.arc(x-15, y-20, 15, 0, 2 * Math.PI, true);
    paper.fillStyle = "white";
    paper.fill();

    paper.beginPath()
    paper.moveTo(x-10, y-10)
    paper.fillStyle = "black";
    paper.arc(x-15, y-20, 5, 0, 2 * Math.PI, true);
    paper.fill();

    paper.beginPath();
    paper.moveTo(x+20,y-10)
    paper.arc(x+15, y-20, 15, 0, 2 * Math.PI,true);
    paper.fillStyle = "white";
    paper.fill();

    paper.beginPath()
    paper.fillStyle = "black";
    paper.moveTo(x+20,y-10)
    paper.arc(x+15, y-20, 5, 0, 2 * Math.PI,true);
    paper.fill();
}

function heart()
{
    paper.clearRect(0, 0, canvas.width, canvas.height)

    paper.beginPath();
    paper.moveTo(x, y);
    paper.fillStyle = "red";
    paper.bezierCurveTo(x, y-3, x-5, y-15, x-25, y-15);
    paper.bezierCurveTo(x-55, y-15, x-55, y+22.5, x-55, y+22.5);
    paper.bezierCurveTo(x-55, y+40, x-35, y+62, x, y+80);
    paper.bezierCurveTo(x+35, y+62, x+55, y+40, x+55, y+22.5);
    paper.bezierCurveTo(x+55, y+22.5, x+55, y-15, x+25, y-15);
    paper.bezierCurveTo(x+10, y-15, x, y-3, x, y);
    paper.fill();
}

function roundedRect(paper, x, y, width, height, radius) {
    paper.beginPath();
    paper.moveTo(x, y + radius);
    paper.arcTo(x, y + height, x + radius, y + height, radius);
    paper.arcTo(x + width, y + height, x + width, y + height - radius, radius);
    paper.arcTo(x + width, y, x + width - radius, y, radius);
    paper.arcTo(x, y, x, y + radius, radius);
    paper.stroke();
}


canvas.addEventListener("click", (event) => {
    let positionPX = event.x - canvas.getBoundingClientRect().left
    let positionX = (positionPX / canvas.offsetWidth * 100)

    let positionPY = event.y - canvas.getBoundingClientRect().top
    let positionY = (positionPY / canvas.offsetHeight * 100)

    console.log(positionPX);
    console.log(positionPY);

})

happy.addEventListener("click", ()=> {
    cry.style.display = "none"
    Pacman.style.display = "none"
    Heart.style.display = "none"
    happy.style.display = "none"
    badApple.style.display = "none"
    cancel.style.display = "block"
    let happy2 = setInterval(function(){
    smile()
    x = 200 + (30)*Math.tan((omega*currentTime+0)/1000);
    y = 200 + (30)*Math.tan((omega*currentTime+0)/1000);
    cancel.addEventListener("click", ()=> {
        clearInterval(happy2)
        paper.clearRect(0, 0, canvas.width, canvas.height)
    })
    },1000/120)
    
})

cry.addEventListener("click", ()=> {
    happy.style.display = "none"
    Pacman.style.display = "none"
    Heart.style.display = "none"
    cry.style.display = "none"
    badApple.style.display = "none"
    cancel.style.display = "block"
    let sad2 = setInterval(function(){
    sad()
    x = 200 + (30)*Math.cos((omega*currentTime+0)/1000);
    y = 200 + (30)*Math.tan((omega*currentTime+0)/1000);
    cancel.addEventListener("click", ()=> {
        clearInterval(sad2)
        paper.clearRect(0, 0, canvas.width, canvas.height)
    })
    },1000/120)
})

Heart.addEventListener("click", ()=> {
    Pacman.style.display = "none"
    cry.style.display = "none"
    happy.style.display = "none"
    Heart.style.display = "none"
    badApple.style.display = "none"
    cancel.style.display = "block"
    let heart2 = setInterval(function(){
    heart()
    x = 200 + (30)*Math.cos((omega*currentTime+0)/1000);
    y = 200 + (30)*-Math.tan((omega*currentTime+0)/1000);
    cancel.addEventListener("click", ()=> {
        clearInterval(heart2)
        paper.clearRect(0, 0, canvas.width, canvas.height)
    })
    },1000/115)
    
})

Pacman.addEventListener("click", ()=> {
    happy.style.display = "none"
    cry.style.display = "none"
    Heart.style.display = "none"
    Pacman.style.display = "none"
    badApple.style.display = "none"
    cancel.style.display = "block"
    let Pacman2 =setInterval(function(){   
    pacman(open+=dir)
    ghost1()
    ghost2()
    ghost3()
    dots()
    if(open%100==0)
    dir=-dir
    x = 200 + (30)*Math.tan((omega*currentTime+0)/1000);
    y = 200 + (30)*Math.cos((omega*currentTime+0)/1000);
    cancel.addEventListener("click", ()=> {
        clearInterval(Pacman2)
        paper.clearRect(0, 0, canvas.width, canvas.height)
    })
    },1000/115)
})

badApple.addEventListener("click", ()=> {
    happy.style.display = "none"
    cry.style.display = "none"
    Pacman.style.display = "none"
    Heart.style.display = "none"
    badApple.style.display = "none"
    cancel.style.display = "block"
    video.play()
    video.addEventListener("play", ()=> {
        update()
    })
    video.addEventListener("pause", ()=> {
        navigator.mediaSession.metadata.artwork = [
            { src: "https://i.imgur.com/3q3r3Yr.png", type: "image/png" }
        ]
    })
    cancel.addEventListener("click", ()=> {
        video.pause()
        video.currentTime = 0
        paper.clearRect(0, 0, canvas.width, canvas.height)
    })
})

cancel.addEventListener("click", ()=> {
    happy.style.display = "block"
    cry.style.display = "block"
    Pacman.style.display = "block"
    Heart.style.display = "block"
    badApple.style.display = "block"
    cancel.style.display = "none"
})

if ('mediaSession' in navigator) {
	navigator.mediaSession.metadata = new MediaMetadata({
		title: 'Bad Apple!!',
		album: 'Lovelight',
		artist: 'nomico'
	})
}

function update() {
	if (video.paused || video.ended) return
	paper.drawImage(video, 0, 0, canvas.width, canvas.height)
	navigator.mediaSession.metadata.artwork = [
		{ src: canvas.toDataURL(), type: "image/png" }
	]
	setTimeout(() => update(), 0)
}

paper.font = "20px Arial";

