const boton = document.getElementById('mainBtn');
const icono = document.getElementById('iconoVolador');

boton.addEventListener('click', () => {
  icono.classList.remove('animar');  
  void icono.offsetWidth;            
  icono.classList.add('animar');    
});



const mensajes = [
  "Eres mi bebita hermosa",
  "TE QUIERO MUCHO❤️",
  "Eres la mejor😘",
  "Seras una gran arquietecta",
  "Mi princesa",
  "Mi reina👑",
  "Mi chiki",
  "TE QUIEROOOOOOO",
  "LA RAZON DE MI FELICIDAD",
  "ME ENCANTAS","SIEMPRE A TU LADO","LA MEJOR ENAMORADA",
  "LA REINA DE MI CORAZON",
];

boton.addEventListener('click', () => {
  const texto = mensajes[Math.floor(Math.random() * mensajes.length)];
  crearMensaje(texto);
});

function crearMensaje(texto) {
  const mensaje = document.createElement('div');
  mensaje.className = 'mensaje-flotante';
  mensaje.textContent = texto;

  const x = Math.random() * (window.innerWidth - 150);
  const y = Math.random() * (window.innerHeight - 50);
  mensaje.style.left = `${x}px`;
  mensaje.style.top = `${y}px`;

  document.body.appendChild(mensaje);

  setTimeout(() => {
    mensaje.remove();
  }, 3000);
}

