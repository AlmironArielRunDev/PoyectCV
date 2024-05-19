function openModal() {
    document.getElementById('profileModal').style.display = "block";
}

function closeModal() {
    document.getElementById('profileModal').style.display = "none";
}

function guardarPerfil() {
    var profileText = document.getElementById('profile').value;
    if (profileText) {
        document.getElementById('profileText').innerText = profileText;
        localStorage.setItem('profile', profileText); // Almacenar en localStorage
    }
    closeModal();
}

window.onload = function() {
    var profile = localStorage.getItem('profile');
    if (profile) {
        document.getElementById('profileText').innerText = profile;
    }
}