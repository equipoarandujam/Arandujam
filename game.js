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
        texto: "Atrapaste al ladrón, isterio fue resuelto.",
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
    { nombre: "Luisón", imagen: "img/personajes/personaje1.png", pista: "Vi a Carlos cerca del objeto.", culpable: false, escena: "luison" },
    { nombre: "Malavisión", imagen: "img/personajes/personaje2.png", pista: "El objeto ya estaba vacío cuando lo vi.", culpable: true, escena: "malavision" }
];

// Conectar botones persistentes (si existen) para interrogar y acusar
function setupControls() {
    // Los botones se crean dinámicamente en mostrarEscena, así que no hacemos nada aquí
}
function mostrarSospechosos() {
    const scene = document.getElementById("scene");
    const options = document.getElementById("options");

    scene.style.display = 'flex';
    scene.innerHTML = "<h2>¿A quién querés interrogar?</h2>";
    options.innerHTML = "";
    options.style.display = 'flex';

    personajes.forEach((p, index) => {
        const btn = document.createElement("button");
        btn.textContent = p.nombre;
        btn.onclick = () => {
            console.log("Click en:", p.nombre);
            interrogar(index);
        };
        options.appendChild(btn);
    });
    
    // Agregar botón de cerrar/volver
    const btnVolver = document.createElement("button");
    btnVolver.textContent = "Volver";
    btnVolver.onclick = () => {
        scene.style.display = 'none';
        options.style.display = 'none';
    };
    options.appendChild(btnVolver);
}
function interrogar(index) {
    const p = personajes[index];
    const scene = document.getElementById("scene");
    const options = document.getElementById("options");

    // Cerrar el modal de interrogar
    scene.style.display = 'none';
    options.style.display = 'none';
    
    // Ir a la escena del personaje
    mostrarEscena(p.escena);
}
function elegirCulpable() {
    const scene = document.getElementById("scene");
    const options = document.getElementById("options");

    scene.style.display = 'flex';
    options.style.display = 'flex';
    scene.innerHTML = "<h2>¿A quién quieres acusar?</h2>";
    options.innerHTML = "";

    personajes.forEach(p => {
        const btn = document.createElement("button");
        btn.textContent = p.nombre;
        btn.onclick = () => final(p.culpable);
        options.appendChild(btn);
    });
    
    // Agregar botón de cerrar/volver
    const btnVolver = document.createElement("button");
    btnVolver.textContent = "Volver";
    btnVolver.onclick = () => {
        scene.style.display = 'none';
        options.style.display = 'none';
    };
    options.appendChild(btnVolver);
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
    if (id === 'inicio') {
        controls.innerHTML = "";
    } else {
        controls.innerHTML = `
            <button id="btnInterrogar">Interrogar</button>
            <button id="btnAcusar">Acusar</button>
        `;
        // Reconectar listeners después de crear los botones
        const btnI = document.getElementById('btnInterrogar');
        const btnA = document.getElementById('btnAcusar');
        if (btnI) btnI.addEventListener('click', mostrarSospechosos);
        if (btnA) btnA.addEventListener('click', elegirCulpable);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    mostrarEscena('inicio');
    setupControls();
});



