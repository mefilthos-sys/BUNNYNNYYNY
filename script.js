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
    // Activation logic for the 5th
    if (today.getDate() === 5) {
        document.getElementById('anniversary-overlay').style.display = 'flex';
    }
    placeStickers();
    nextThought();
}

function nextThought() {
    document.getElementById('thought-text').innerText = thoughts[currentThought];
    currentThought = (currentThought + 1) % thoughts.length;
}

function placeStickers() {
    const container = document.getElementById('sticker-layer');
    container.innerHTML = ''; // Clear old stickers on section change
    
    // Generates 12 random stickers across the screen
    for (let i = 0; i < 12; i++) {
        const img = document.createElement('img');
        img.src = stickerFiles[Math.floor(Math.random() * stickerFiles.length)];
        img.className = 'sticker';
        
        // Random positioning
        img.style.top = Math.random() * 85 + 'vh';
        img.style.left = Math.random() * 85 + 'vw';
        
        // Random tilt left or right
        const tilt = Math.random() * 30 - 15; 
        img.style.transform = `rotate(${tilt}deg)`;
        
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
    
    // Re-shuffle stickers when moving to a new section
    placeStickers();
    
    if(event) event.currentTarget.classList.add('active');
}

window.onload = init;
