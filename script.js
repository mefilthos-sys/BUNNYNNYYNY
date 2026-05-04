function init() {
    const today = new Date();
    // Activation logic for the 5th
    if (today.getDate() === 5) {
        document.getElementById('anniversary-overlay').style.display = 'flex';
    }
}

function closeOverlay() {
    document.getElementById('anniversary-overlay').style.display = 'none';
}

function showSection(id) {
    document.querySelectorAll('.content-section').forEach(s => s.style.display = 'none');
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(id).style.display = 'block';
    if(event) event.currentTarget.classList.add('active');
}

window.onload = init;

