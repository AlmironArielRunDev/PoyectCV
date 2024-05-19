function openPersonalInfoModal() {
    document.getElementById('personalInfoModal').style.display = "block";
}

function closePersonalInfoModal() {
    document.getElementById('personalInfoModal').style.display = "none";
}

function guardarPersonalInfo() {
    var nombreText = document.getElementById('nombre').value;
    if (nombreText) {
        document.getElementById('nombreText').innerText = nombreText;
        localStorage.setItem('nombre', nombreText); // Almacenar en localStorage
    }
    closePersonalInfoModal();
}

window.onload = function() {
    var nombre = localStorage.getItem('nombre');
    if (nombre) {
        document.getElementById('nombreText').innerText = nombre;
    }
}