const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');

let width, height, stars = [];
const COUNT = 150; // Number of stars
const SPEED = 0.5; // Star speed

function init() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    stars = [];
    for (let i = 0; i < COUNT; i++) {
        stars.push({
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * 2,
            opacity: Math.random()
        });
    }
}

function draw() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = 'white';

    stars.forEach(star => {
        ctx.globalAlpha = star.opacity;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        // Move star upward
        star.y -= SPEED;

        // Reset star to bottom if it leaves the screen
        if (star.y < 0) {
            star.y = height;
            star.x = Math.random() * width;
        }
    });

    requestAnimationFrame(draw);
}

window.addEventListener('resize', init);
init();
draw();