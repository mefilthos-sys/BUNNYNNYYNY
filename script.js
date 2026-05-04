// Thoughts array
const thoughts = [
    "Isnt it kinda obvious honey that I'd take care of you no matter how drunk you are or how much you throw up on me while you are hehehehehehehehe",
    "I wonder how I'd look with a bikini on",
    "Babe I wanf tiramisu tera susu"
];

// The general sticker filenames
const stickerFiles = [
    'assets/Screenshot_20260504-221452~2.jpg',
    'assets/Screenshot_20260504-221452.jpg',
    'assets/Screenshot_20260504-221648.jpg'
];

// NEW: The specific specific floating image for the overlay
const specialFloaterFile = 'assets/Screenshot_20260504-230204.jpg';

let currentThought = 0;

function init() {
    const today = new Date();
    // Activation logic. CHANGE 4 to 5 BEFORE SLEEP.
    if (today.getDate() === 4) {
        document.getElementById('anniversary-overlay').style.display = 'flex';
        // Add the floating images to the green opening screen
        placeSpecialFloaters();
    }
    
    // Set up standard site
    placeStickers();
    document.getElementById('thought-text').innerText = thoughts[0];
}

// NEW: Generates 5 instances of the specific image to float randomly on the overlay
function placeSpecialFloaters() {
    const overlayLayer = document.getElementById('overlay-sticker-layer');
    if (!overlayLayer) return;
    overlayLayer.innerHTML = ''; 
    
    for (let i = 0; i < 5; i++) {
        const img = document.createElement('img');
        img.src = specialFloaterFile;
        img.className = 'special-floater';
        
        // Random starting positions
        img.style.top = Math.random() * 70 + 'vh';
        img.style.left = Math.random() * 70 + 'vw';
        
        // Random small starting tilt (the animation will tilt it more)
        const tilt = Math.random() * 20 - 10; 
        img.style.transform = `rotate(${tilt}deg)`;
        
        // NEW: Assign a random duration (8s to 13s) to each float so they aren't synced
        img.style.animationDuration = (Math.random() * 5 + 8) + 's';
        
        overlayLayer.appendChild(img);
    }
}

// Thoughts next option
window.nextThought = function() {
    currentThought = (currentThought + 1) % thoughts.length;
    document.getElementById('thought-text').innerText = thoughts[currentThought];
};

// Standard random scatter (used on main site)
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
};

window.onload = init;
