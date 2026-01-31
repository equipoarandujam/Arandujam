const escenas = {
    inicio: {
        fondo: "img/fondos/fondo.jpg",
        personaje: "",
        nombre: "",
        texto: "Un objeto valioso ha sido robado...",
        opciones: [
            { texto: "Comenzar investigación", siguiente: "luison" }
        ]
    },

    luison: {
        fondo: "img/fondos/fondo.jpg",
        personaje: "img/personajes/personaje1.png",
        nombre: "Luisón",
        texto: "Yo vi a Malavisión cerca del objeto.",
        efecto: () => { if (typeof estado !== 'undefined') estado.pistaAna = true; },
        opciones: [
        ]
    },

    malavision: {
        fondo: "img/fondos/fondo.jpg",
        personaje: "img/personajes/personaje2.png",
        nombre: "Malavisión",
        texto: "El objeto ya estaba vacío cuando lo vi.",
        efecto: () => { if (typeof estado !== 'undefined') estado.pistaCarlos = true; },
        opciones: [
        ]
    },
    moñai: {
        fondo: "img/fondos/fondo.jpg",
        personaje: "img/personajes/personaje1.png",
        nombre: "Moñai",
        texto: "El objeto ya estaba vacío cuando lo vi.",
        efecto: () => { if (typeof estado !== 'undefined') estado.pistaCarlos = true; },
        opciones: [
            { texto: "Acusar", siguiente: "acusar" }
        ]
    },

    acusar: {
        fondo: "img/fondos/fondo.jpg",
        personaje: "",
        nombre: "",
        texto: "¿A quién acusar?",
        opciones: [
            { texto: "Ana", siguiente: "final_malo" },
            { texto: "Carlos", siguiente: "final_bueno" }
        ]
    },

    final_bueno: {
        fondo: "img/fondos/fondo.jpg",
        personaje: "",
        nombre: "",
        texto: "Atrapaste al ladrón,isterio fue resuelto.",
        opciones: []
    },

    final_malo: {
        fondo: "img/fondos/fondo.jpg",
        personaje: "",
        nombre: "",
        texto: "El objeto aparece... vacío.",
        opciones: []
    }
};
// Lista de personajes disponible globalmente
const personajes = [
    { 
        nombre: "Luisón", 
        imagen: "img/personajes/personaje1.png", 
        pista: "Vi a Carlos cerca del objeto.", 
        culpable: false, 
        escena: "luison",
        preguntas: [
            { pregunta: "¿Dónde estabas la noche del robo?", respuesta: "Estaba en mi casa, con mi familia. No vi nada raro.", efecto: () => { if (typeof estado !== 'undefined') estado.interrogaronLuison = true; } },
            { pregunta: "¿Viste a alguien cerca?", respuesta: "Vi a Malavisión por la plaza esa noche.", efecto: null }
        ]
    },
    { 
        nombre: "Malavisión", 
        imagen: "img/personajes/personaje2.png", 
        pista: "El objeto ya estaba vacío cuando lo vi.", 
        culpable: true, 
        escena: "malavision",
        preguntas: [
            { pregunta: "¿Qué hacías allí?", respuesta: "Solo pasaba por la zona, no me metí en nada.", efecto: () => { if (typeof estado !== 'undefined') estado.interrogaronMalavision = true; } },
            { pregunta: "¿Conoces al dueño del objeto?", respuesta: "No, nunca lo vi antes.", efecto: null }
        ]
    },
    {
        nombre: "Moñai",
        imagen: "img/personajes/personaje3.png",
        pista: "Tenía una bolsa y miraba alrededor.",
        culpable: false,
        escena: "moñai",
        preguntas: [
            { pregunta: "¿Por qué estabas en ese lugar?", respuesta: "Buscaba una planta medicinal para mi abuela; no tenía nada que ver con eso.", efecto: () => { if (typeof estado !== 'undefined') estado.interrogaronMonai = true; } },
            { pregunta: "¿Viste algo sospechoso?", respuesta: "Vi a alguien con una capa correr hacia el río, pero no distingo rostros.", efecto: null },
            { pregunta: "¿Tienes una coartada?", respuesta: "Mi vecino me vio pasar por su patio; él puede confirmarlo.", efecto: null }
        ]
    },
];

// Conectar botones persistentes (si existen) para interrogar y acusar
function setupControls() {
    // Los botones se crean dinámicamente en mostrarEscena, así que no hacemos nada aquí
}
// Guarda la escena actual para poder restaurar los controles
let currentScene = 'inicio';

// Renderiza los botones persistentes (Interrogar / Acusar) dentro de #controls
function renderMainControls() {
    const controls = document.getElementById('controls');
    if (!controls) return;

    if (currentScene === 'inicio') {
        controls.innerHTML = '';
        return;
    }

    controls.innerHTML = `
        <button id="btnInterrogar">Interrogar</button>
        <button id="btnAcusar">Acusar</button>
    `;

    const btnI = document.getElementById('btnInterrogar');
    const btnA = document.getElementById('btnAcusar');
    if (btnI) btnI.addEventListener('click', mostrarSospechosos);
    if (btnA) btnA.addEventListener('click', elegirCulpable);
    // Ajustar posición de los controles para que no se solapen con el diálogo/personaje
}
function mostrarSospechosos() {
    // Mostrar la lista dentro del mismo contenedor de controles
    const controls = document.getElementById('controls');
    if (!controls) return;

    controls.innerHTML = '';

    personajes.forEach((p, index) => {
        const btn = document.createElement('button');
        btn.textContent = p.nombre;
        btn.onclick = () => interrogar(index);
        controls.appendChild(btn);
    });

    // botón volver que restaura Interrogar/Acusar
    const btnVolver = document.createElement('button');
    btnVolver.textContent = 'Volver';
    btnVolver.addEventListener('click', () => renderMainControls());
    controls.appendChild(btnVolver);
    // ajustar controles tras cambiar su contenido
}
function interrogar(index) {
    const p = personajes[index];
    const controls = document.getElementById('controls');
    const char = document.getElementById('character');
    const nameEl = document.getElementById('name');
    const textEl = document.getElementById('text');

    // mostrar personaje y nombre
    if (p.imagen) { char.src = p.imagen; char.style.display = 'block'; }
    nameEl.textContent = p.nombre;
    textEl.textContent = '';

    // listar preguntas como botones dentro de controls
    if (!controls) return;
    controls.innerHTML = '';

    if (Array.isArray(p.preguntas) && p.preguntas.length) {
        p.preguntas.forEach((q, qi) => {
            const btn = document.createElement('button');
            btn.textContent = q.pregunta;
            btn.addEventListener('click', () => {
                textEl.textContent = q.respuesta;
                if (q.efecto && typeof q.efecto === 'function') q.efecto();
                // opcional: destacar botón seleccionado
                // limpiar selección previa
                Array.from(controls.querySelectorAll('button')).forEach(b=> b.classList.remove('selected'));
                btn.classList.add('selected');
            });
            controls.appendChild(btn);
        });
    } else {
        const msg = document.createElement('div');
        msg.textContent = 'No hay preguntas disponibles.';
        msg.style.color = '#ccc';
        controls.appendChild(msg);
    }

    // botón volver para restaurar controles principales
    const btnVolver = document.createElement('button');
    btnVolver.textContent = 'Volver';
    btnVolver.addEventListener('click', () => {
        renderMainControls();
        // opcional: restaurar texto de la escena actual
    });
    controls.appendChild(btnVolver);

    // reajustar posición de controles
    adjustControlsPosition();
}
function elegirCulpable() {
    // Mostrar la lista de acusar dentro de #controls
    const controls = document.getElementById('controls');
    if (!controls) return;

    controls.innerHTML = '';

    personajes.forEach(p => {
        const btn = document.createElement('button');
        btn.textContent = p.nombre;
        btn.onclick = () => final(p.culpable);
        controls.appendChild(btn);
    });

    const btnVolver = document.createElement('button');
    btnVolver.textContent = 'Volver';
    btnVolver.addEventListener('click', () => renderMainControls());
    controls.appendChild(btnVolver);
    // ajustar controles tras cambiar su contenido
}



// En pantallas pequeñas, posicionar el diálogo entre el personaje y los controles
function adjustLayoutForMobile() {
    const dialogue = document.getElementById('dialogue');
    const character = document.getElementById('character');
    const controls = document.getElementById('controls');
    if (!dialogue || !character || !controls) return;

    const mobileMax = 480; // px
    if (window.innerWidth > mobileMax) return; // solo aplicar en móviles
    if (character.style.display === 'none') return;

    const gap = 12; // espacio entre personaje y diálogo
    const charRect = character.getBoundingClientRect();
    const dialogRect = dialogue.getBoundingClientRect();

    // calcular top deseado del diálogo (desde la parte superior de la ventana)
    const desiredDialogTop = charRect.top + charRect.height + gap;
    // calcular top y aplicar usando top (evita conflictos con bottom)
    const topPx = Math.round(desiredDialogTop);
    dialogue.style.top = topPx + 'px';
    dialogue.style.removeProperty('bottom');

    // asegurarse que los controles queden debajo del diálogo
    // posicionar controles explícitamente en móvil (usar top, no bottom)
    const gapBetween = 12;
    // recalcular rect del diálogo después de aplicar top
    const newDialogRect = dialogue.getBoundingClientRect();
    const controlsRect = controls.getBoundingClientRect();
    const controlsHeight = Math.round(controlsRect.height) || 0;

    let desiredControlsTop = Math.round(newDialogRect.bottom + gapBetween);

    // si los controles se salen de la pantalla, ajustarlos y mover diálogo si hace falta
    if (desiredControlsTop + controlsHeight > window.innerHeight - 8) {
        desiredControlsTop = window.innerHeight - controlsHeight - 8;
        const newDialogTop = Math.max(8, Math.round(desiredControlsTop - newDialogRect.height - gapBetween));
        dialogue.style.top = newDialogTop + 'px';
    }

    // aplicar top a controles y eliminar bottom
    controls.style.top = desiredControlsTop + 'px';
    controls.style.removeProperty('bottom');
}

function final(acierto) {
    const scene = document.getElementById("scene");
    const options = document.getElementById("options");

    scene.style.display = 'flex';
    options.style.display = 'flex';

    if (acierto) {
        scene.innerHTML = "<h2>Atrapaste al ladrón</h2><p style='color:#0f0; font-size:1.2em;'>El misterio fue resuelto.</p>";
    } else {
        scene.innerHTML = "<h2>El objeto estaba vacío</h2><p style='color:#f00; font-size:1.2em;'>No fue el culpable.</p>";
    }

    options.innerHTML = "";
    const btn = document.createElement("button");
    btn.textContent = "Reiniciar";
    btn.onclick = () => location.reload();
    options.appendChild(btn);
}
function mostrarEscena(id) {
    const e = escenas[id];

    // si la escena no existe, evitar error y retornar
    if (!e) return;

    // aplicar fondo en el contenedor principal
    const gameEl = document.getElementById("game");
    if (gameEl) gameEl.style.backgroundImage = `url(${e.fondo})`;

    const char = document.getElementById("character");
    if (e.personaje) {
        char.src = e.personaje;
        char.style.display = "block";
    } else {
        char.style.display = "none";
    }

    document.getElementById("name").textContent = e.nombre;
    document.getElementById("text").textContent = e.texto;

    if (e.efecto) e.efecto();

    // ocultar paneles modales cuando mostramos escena principal
    const scene = document.getElementById("scene");
    const options = document.getElementById("options");
    if (scene) scene.style.display = 'none';
    if (options) options.style.display = 'none';

    const choices = document.getElementById("choices");
    choices.innerHTML = "";

    e.opciones.forEach(op => {
        const btn = document.createElement("button");
        btn.textContent = op.texto;
        btn.onclick = () => mostrarEscena(op.siguiente);
        choices.appendChild(btn);
    });

    // Mostrar botones de Interrogar/Acusar solo si NO es la escena de inicio
    const controls = document.getElementById("controls");
    // actualizar escena actual y renderizar controles
    currentScene = id;
    renderMainControls();
}

window.addEventListener('DOMContentLoaded', () => {
    mostrarEscena('inicio');
    setupControls();
});



