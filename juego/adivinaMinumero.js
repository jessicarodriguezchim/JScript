
var min = 1;
var max = 100;
var guess = 0;

var play = document.getElementById('inicio');
var botonDiv = document.getElementById('button');
var numeroDiv = document.getElementById('numero');
var siDiv = document.getElementById('si');
var grandeDiv = document.getElementById('grande');
var pequeñoDiv = document.getElementById('pequeño');
var reiniciaDiv = document.getElementById('reinicia');
var juegoDiv = document.getElementById('juego');
var guessText = document.getElementById('numero');

play.addEventListener('click', function() {
    play.classList.add('d-none');
    reiniciaDiv.classList.remove('d-none');
    juegoDiv.classList.remove('d-none');
    guess = Math.floor((min + max) / 2);
    numeroDiv.textContent = '¿Es ' + guess + ' tu número?';
    reiniciaDiv.classList.add('d-none');
});

siDiv.addEventListener('click', function() {
    numeroDiv.textContent = '¡Adiviné el número!';
    reiniciaDiv.classList.remove('d-none');
});

grandeDiv.addEventListener('click', function() {
    min = guess + 1;
    guess = Math.floor((min + max) / 2);
    numeroDiv.textContent = '¿Es ' + guess + ' tu número?';
});

pequeñoDiv.addEventListener('click', function() {
    max = guess - 1;
    guess = Math.floor((max + min) / 2);
    numeroDiv.textContent = '¿Es ' + guess + ' tu número?';
});

reiniciaDiv.addEventListener('click', function() {
    play.classList.remove('d-none');
    reiniciaDiv.classList.add('d-none');
    min = 1;
    max = 100;
    guess = 0;
});
