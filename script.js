// CONFIGURATION: Set the date you guys started
const startDate = new Date('2025-09-05'); 

function init() {
    const today = new Date();
    const dayOfMonth = today.getDate();

    // Check if it's the 5th
    if (dayOfMonth === 5) {
        document.getElementById('anniversary-overlay').style.display = 'flex';
    }

    updateTimer();
    setInterval(updateTimer, 1000);
    newThought();
}

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById('timer').innerText = days + " Days Together";
}

function closeOverlay() {
    document.getElementById('anniversary-overlay').style.display = 'none';
}

function showSection(id) {
    document.querySelectorAll('.content-section').forEach(s => s.style.display = 'none');
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(id).style.display = 'block';
    event.currentTarget.classList.add('active');
}

function newThought() {
    const thoughts = [
        "8 months down, a lifetime to go.",
        "Still my favorite person.",
        "Happy 8 months, asshole.",
        "Can't wait until we can actually call."
    ];
    const r = thoughts[Math.floor(Math.random() * thoughts.length)];
    document.getElementById('thought').innerText = r;
}

window.onload = init;

