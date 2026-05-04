const thoughts = [
    "Isnt it kinda obvious honey that I'd take care of you no matter how drunk you are or how much you throw up on me while you are hehehehehehehehe",
    "I wonder how I'd look with a bikini on",
    "Babe I wanf tiramisu tera susu"
];

const stickerFiles = [
    'assets/Screenshot_20260504-221452~2.jpg',
    'assets/Screenshot_20260504-221452.jpg',
    'assets/Screenshot_20260504-221648.jpg'
];

let currentThought = 0;

function init() {
    const today = new Date();
    if (today.getDate() === 4) {
        document.getElementById('anniversary-overlay').style.display = 'flex';
    }
    placeStickers();
    // Start with the first thought immediately
    document.getElementById('thought-text').innerText = thoughts[0];
}

window.nextThought = function() {
    currentThought = (currentThought + 1) % thoughts.length;
    document.getElementById('thought-text').innerText = thoughts[currentThought];
};

function placeStickers() {
    const container = document.getElementById('sticker-layer');
    if (!container) return;
    container.innerHTML = ''; 
    
    for (let i = 0; i < 10; i++) {
        const img = document.createElement('img');
        img.src = stickerFiles[Math.floor(Math.random() * stickerFiles.length)];
        img.className = 'sticker';
        img.style.top = Math.random() * 80 + 'vh';
        img.style.left = Math.random() * 80 + 'vw';
        img.style.transform = `rotate(${Math.random() * 40 - 20}deg)`;
        container.appendChild(img);
    }
}

function closeOverlay() {
    document.getElementById('anniversary-overlay').style.display = 'none';
}

function showSection(id) {
    document.querySelectorAll('.content-section').forEach(s => s.style.display = 'none');
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(id).style.display = 'block';
    placeStickers();
    if(event) event.currentTarget.classList.add('active');
}

window.onload = init;

