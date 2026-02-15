const text = "Wishing you joy, success and happiness on your special day! 💖✨";
let i = 0;

const partyBtn = document.getElementById("partyBtn");

partyBtn.addEventListener("click", () => {
    typeEffect();
    createBalloons();
    startConfetti();
});

function typeEffect(){
    if(i < text.length){
        document.getElementById("message").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 40);
    }
}

/* Balloons */
function createBalloons(){
    for(let i=0;i<15;i++){
        let balloon = document.createElement("div");
        balloon.classList.add("balloon");
        balloon.style.left = Math.random()*100 + "vw";
        balloon.style.background = `hsl(${Math.random()*360},70%,60%)`;
        balloon.style.animationDuration = (5 + Math.random()*5) + "s";
        document.body.appendChild(balloon);
    }
}

/* Confetti */
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

function resizeCanvas(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let confetti = [];

function startConfetti(){
    confetti = [];
    for(let i=0;i<150;i++){
        confetti.push({
            x: Math.random()*canvas.width,
            y: Math.random()*canvas.height,
            r: Math.random()*6+2,
            color: `hsl(${Math.random()*360},100%,50%)`
        });
    }
    drawConfetti();
}

function drawConfetti(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    confetti.forEach(c=>{
        ctx.beginPath();
        ctx.arc(c.x,c.y,c.r,0,Math.PI*2,false);
        ctx.fillStyle = c.color;
        ctx.fill();
        c.y += 2;
        if(c.y > canvas.height){
            c.y = 0;
        }
    });
    requestAnimationFrame(drawConfetti);
}
