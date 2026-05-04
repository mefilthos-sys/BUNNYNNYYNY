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
    // SET TO 4 FOR TESTING. CHANGE TO 5 BEFORE YOU SLEEP.
    if (today.getDate() === 4) {
        document.getElementById('anniversary-overlay').style.display = 'flex';
    }
    placeStickers();
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
    for (let i = 0; i < 12; i++) {
        const img = document.createElement('img');
        img.src = stickerFiles[Math.floor(Math.random() * stickerFiles.length)];
        img.className = 'sticker';
        img.style.top = Math.random() * 85 + 'vh';
        img.style.left = Math.random() * 85 + 'vw';
        img.style.transform = `rotate(${Math.random() * 40 - 20}deg)`;
        container.appendChild(img);
    }
}

function closeOverlay() {
    document.getElementById('anniversary-overlay').style.display = 'none';
}

window.showSection = function(id) {
    document.querySelectorAll('.content-section').forEach(s => s.style.display = 'none');
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(id).style.display = 'block';
    placeStickers();
    // Fixed: handle navigation active state
    const btns = document.querySelectorAll('.nav-btn');
    btns.forEach(btn => {
        if(btn.innerText.toLowerCase() === id.replace('-', ' ').toLowerCase()) {
            btn.classList.add('active');
        }
    });
};

window.onload = init;
