
const escenas = {
    "1am_cerro_yaguaron": {
        fondo: "img/fondos/estanque.png", // Asegúrate de que la imagen exista
        personaje: "",
        nombre: "Narrador",
        texto: "–Estabas durmiendo placidamente entre los yuyales cercanos del Ykua, un cielo estrellado adornaba la noche y el silencio del lugar te hacía sentir seguro.\n\n–De repente un ruido extraño entre las plantas hace que te despiertes, confundido miras a todos lados y te das cuenta de que tu ración de Caña y Miel no están.\n\n–Te acercas al agua y notas a un ente enmascarado corriendo hacia el otro lado del estanque.",
        opciones: [
            { texto: "¿Quién es ese?", siguiente: "pombero_sorprendido" }
        ]
    },
    pombero_sorprendido: {
        fondo: "img/fondos/estanque.png", // O el fondo que prefieras
        personaje: "img/personajes/pombero_sorprendido.png", // Asegúrate de que la imagen exista
        nombre: "Pombero",
        texto: "–¿Qué pasó acá?\n–De seguro esos ñembotavy ya otra vez me están rompiendo las bolas, voy a ir a hablar con ellos.",
        opciones: [
            { texto: "Continuar", siguiente: "escena_perros_montes" }
        ]
    },

    escena_perros_montes: {
        fondo: "img/fondos/fondo_monte.png", // Cambia el fondo si tienes uno específico
        personaje: "",
        nombre: "Narrador",
        texto: "De repente escuchás perros ladrando a lo lejos, donde hay algunas casas casi al final del monte, al dar la vuelta para curiosear, podés ver algo que brilla, como una luz o un reflejo, así que decidís ir hacia ahí.",
        opciones: [
            { texto: "Acercarse", siguiente: "moñai_dialogo" }
        ]
    },

    moñai_dialogo: {
        fondo: "img/fondos/fondo_monte.png", // Cambia el fondo si tienes uno específico
        personaje: "img/personajes/moñai.png", // Cambia si tienes una imagen específica de Moñái
        nombre: "Moñái",
        texto: "–Por vos hina ladran ya otra vez los perros, yo quería saber por donde ya otra vez andabas, algo te pasó por eso venís hacia acá ¿Qué querés?",
        opciones: [
            { texto: "Responder", siguiente: "inicio" }
        ]
    },
    inicio: {
        fondo: "img/fondos/fondo.jpg",
        personaje: "",
        nombre: "",
        texto: "Un objeto valioso ha sido robado...",
        opciones: [
            { texto: "QUIEN TOMO MI CAÑA", siguiente: "investigacion" }
        ]
    },

    investigacion: {
        fondo: "img/fondos/fondo.jpg",
        personaje: "",
        nombre: "",
        texto: "Empezás a recorrer la zona en busca de pistas. Nadie aparece todavía.",
        opciones: [
            
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
            fondo: "img/fondos/final_bueno.png",
            personaje: "",
            nombre: "Final",
            texto: "Atrapaste al ladrón. El misterio fue resuelto.",
            opciones: []
    },

    final_malo: {
            fondo: "img/fondos/final_malo.png",
            personaje: "",
            nombre: "Final",
            texto: "El objeto aparece... vacío. Te equivocaste de acusado.",
            opciones: []
    }
};
// Lista de personajes disponible globalmente
const personajes = [
    { 
        nombre: "Luisón", 
        fondo: "img/fondos/fondo_luison.png",
        imagen: "img/personajes/personaje1.png", 
        pista: "", 
        culpable: false, 
        escena: "luison",
        preguntas: [
            { pregunta: "¿Dónde estabas la noche del robo?", respuesta: "Estaba en mi casa, con mi familia. No vi nada raro.", efecto: () => { if (typeof estado !== 'undefined') estado.interrogaronLuison = true; } },
            { pregunta: "¿Viste a alguien cerca?", respuesta: "Vi a Malavisión por la plaza esa noche.", efecto: null }
        ]
    },
    { 
        
        nombre: "Malavisión",
        fondo: "img/fondos/fondo_malavision.png", 
        imagen: "img/personajes/personaje2.png", 
        pista: "", 
        culpable: true, 
        escena: "malavision",
        preguntas: [
            { pregunta: "¿Qué hacías allí?", respuesta: "Solo pasaba por la zona, no me metí en nada.", efecto: () => { if (typeof estado !== 'undefined') estado.interrogaronMalavision = true; } },
            { pregunta: "¿Conoces al dueño del objeto?", respuesta: "No, nunca lo vi antes.", efecto: null }
        ]
    },
    {
        nombre: "Moñai",
        fondo: "img/fondos/fondo_moñai.png",
        imagen: "img/personajes/personaje3.png",
        pista: "",
        culpable: false,
        escena: "moñai",
        preguntas: [
            { pregunta: "¿Por qué estabas en ese lugar?", respuesta: "Buscaba una planta medicinal para mi abuela; no tenía nada que ver con eso.", efecto: () => { if (typeof estado !== 'undefined') estado.interrogaronMonai = true; } },
            { pregunta: "¿Viste algo sospechoso?", respuesta: "Vi a alguien con una capa correr hacia el río, pero no distingo rostros.", efecto: null },
            { pregunta: "¿Tienes una coartada?", respuesta: "Mi vecino me vio pasar por su patio; él puede confirmarlo.", efecto: null }
        ]
    },
    {
        nombre: "Jasyjatere",
        fondo: "img/fondos/fondo_moñai.png",
        imagen: "img/personajes/jasyjatere.png",
        pista: "",
        culpable: false,
        escena: "jasyjatere",
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
let currentScene = '1am_cerro_yaguaron';

// Duración de las transiciones (ms) — mantener sincronizada con CSS
const TRANSITION_MS = 360;

// Máquina de escribir: control de estado para poder cancelar
let _currentTyping = null;
function cancelTyping() {
    if (_currentTyping) { clearTimeout(_currentTyping); _currentTyping = null; }
}

// Typewriter audio (WebAudio synth) — no archivos necesarios
let _audioCtx = null;
let typeSoundEnabled = true; // controlar reproducción
function initTypeAudio() {
    if (_audioCtx) return;
    try {
        _audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        // resume on some browsers
        _audioCtx.resume().catch(()=>{});
    } catch (e) {
        _audioCtx = null;
    }
}

function playTypeSound() {
    if (!typeSoundEnabled) return;
    try {
        if (!_audioCtx) initTypeAudio();
        if (!_audioCtx) return;
        const now = _audioCtx.currentTime;
        const osc = _audioCtx.createOscillator();
        const gain = _audioCtx.createGain();
        osc.type = 'square';
        osc.frequency.value = 320 + Math.random() * 120; // slight variation
        gain.gain.setValueAtTime(0.001, now);
        gain.gain.linearRampToValueAtTime(0.03, now + 0.001);
        gain.gain.linearRampToValueAtTime(0.001, now + 0.04);
        osc.connect(gain);
        gain.connect(_audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.06);
    } catch (e) {
        // ignore audio errors
    }
}

function typeWriter(el, text, speed = 20, callback) {
    if (!el) { if (callback) callback(); return; }
    cancelTyping();
    el.textContent = '';
    el.classList.add('typewriter');
    let i = 0;

    function step() {
        el.textContent += text.charAt(i);
        // reproducir sonido por carácter
        playTypeSound();
        i++;
        if (i < text.length) {
            _currentTyping = setTimeout(step, speed);
        } else {
            _currentTyping = null;
            // mantener caret unos instantes
            setTimeout(() => el.classList.remove('typewriter'), 300);
            if (callback) callback();
        }
    }

    // comenzar inmediatamente
    _currentTyping = setTimeout(step, speed);
}

// Renderiza los botones persistentes (Interrogar / Acusar) dentro de #controls
function renderMainControls() {
    const controls = document.getElementById('controls');
    if (!controls) return;
    // Si es una escena final, mostrar solo Reiniciar
    if (currentScene && (currentScene === 'final_bueno' || currentScene === 'final_malo' || currentScene.startsWith('final'))) {
        controls.innerHTML = `
            <button id="btnReiniciar">Reiniciar</button>
        `;
        const btnR = document.getElementById('btnReiniciar');
        if (btnR) btnR.addEventListener('click', () => mostrarEscena('inicio'));
        return;
    }

    // Solo mostrar los controles en escenas permitidas
    // Por ejemplo, solo después de 'investigacion' (puedes agregar más escenas si lo deseas)
    const escenasConControles = ['investigacion'];
    if (!escenasConControles.includes(currentScene)) {
        controls.innerHTML = '';
        return;
    }

    controls.innerHTML = `
        <button id="btnInterrogar">Interrogar</button>
        <button id="btnAcusar">Acusar</button>
    `;

    // Al volver a los controles principales, bajar la caja de diálogo
    const dialogue = document.getElementById('dialogue');
    if (dialogue) dialogue.classList.remove('dialogue-up');

    const btnI = document.getElementById('btnInterrogar');
    const btnA = document.getElementById('btnAcusar');
    if (btnI) btnI.addEventListener('click', () => {
        const dialogue = document.getElementById('dialogue');
        if (dialogue) dialogue.classList.add('dialogue-up');
        mostrarSospechosos();
    });
    if (btnA) btnA.addEventListener('click', () => {
        const dialogue = document.getElementById('dialogue');
        if (dialogue) dialogue.classList.add('dialogue-up');
        elegirCulpable();
    });
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
    btnVolver.addEventListener('click', () => {
        // Al volver, bajar la caja de diálogo
        const dialogue = document.getElementById('dialogue');
        if (dialogue) dialogue.classList.remove('dialogue-up');
        renderMainControls();
    });
    controls.appendChild(btnVolver);
    // ajustar controles tras cambiar su contenido
}
// Cambia el personaje con un fade suave
function changeCharacter(src) {
    const char = document.getElementById('character');
    if (!char) return;
    const duration = TRANSITION_MS - 45; // slightly shorter than scene fade

    if (!src) {
        // ocultar con fade
        char.classList.add('fade-hidden');
        setTimeout(() => { char.style.display = 'none'; }, duration);
        return;
    }

    // si ya visible, fade-out -> cambiar src -> fade-in
    char.classList.add('fade-hidden');
    setTimeout(() => {
        char.src = src;
        char.style.display = 'block';
        // forzar reflow
        void char.offsetWidth;
        char.classList.remove('fade-hidden');
    }, duration);
}

// Aplica una transición (fade-out), ejecuta updateFn, y hace fade-in
function transitionSceneUpdate(updateFn) {
    const gameEl = document.getElementById('game');
    const char = document.getElementById('character');
    const dialogue = document.getElementById('dialogue');
    const controls = document.getElementById('controls');
    const choices = document.getElementById('choices');
    const elems = [gameEl, char, dialogue, controls, choices].filter(Boolean);

    elems.forEach(el => el.classList.add('fade-hidden'));

    setTimeout(() => {
        try { updateFn(); } catch (e) { console.error(e); }

        setTimeout(() => {
            elems.forEach(el => el.classList.remove('fade-hidden'));
            adjustLayoutForMobile();
        }, 30);
    }, TRANSITION_MS);
}
function interrogar(index) {
    const p = personajes[index];
    const controls = document.getElementById('controls');
    const char = document.getElementById('character');
    const nameEl = document.getElementById('name');
    const textEl = document.getElementById('text');

    // Hacer una transición completa entre interrogaciones
    transitionSceneUpdate(() => {
        // aplicar fondo del personaje si existe, si no usar fondo de la escena actual
        const gameEl = document.getElementById('game');
        if (p.fondo && gameEl) {
            gameEl.style.backgroundImage = `url(${p.fondo})`;
        } else if (gameEl && escenas[currentScene] && escenas[currentScene].fondo) {
            gameEl.style.backgroundImage = `url(${escenas[currentScene].fondo})`;
        }

        // mostrar personaje y nombre (con transición)
        if (p.imagen) { changeCharacter(p.imagen); } else { changeCharacter(null); }
        nameEl.textContent = p.nombre;
        // cancelar y limpiar texto antes de escribir
        cancelTyping();
        textEl.textContent = '';

        // SUBIR la caja de diálogo para que no se solape
        if (dialogue) dialogue.classList.add('dialogue-up');

        // listar preguntas como botones dentro de controls
        if (!controls) return;
        controls.innerHTML = '';

        if (Array.isArray(p.preguntas) && p.preguntas.length) {
            p.preguntas.forEach((q, qi) => {
                const btn = document.createElement('button');
                btn.textContent = q.pregunta;
                btn.addEventListener('click', () => {
                    cancelTyping();
                    typeWriter(textEl, q.respuesta, 28);
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
            // restaurar la posición de la caja de diálogo
            if (dialogue) dialogue.classList.remove('dialogue-up');
        });
        controls.appendChild(btnVolver);

        // reajustar posición de controles
    });
}
function elegirCulpable() {
    // Mostrar la lista de acusar dentro de #controls
    const controls = document.getElementById('controls');
    if (!controls) return;

    controls.innerHTML = '';

    personajes.forEach(p => {
        const btn = document.createElement('button');
        btn.textContent = p.nombre;
        btn.onclick = () => mostrarEscena(p.culpable ? 'final_bueno' : 'final_malo');
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

    const gameEl = document.getElementById("game");
    const char = document.getElementById("character");
    const dialogue = document.getElementById('dialogue');
    const controls = document.getElementById('controls');
    const choices = document.getElementById('choices');

    // elementos que queremos fundir (fade)
    const elems = [gameEl, char, dialogue, controls, choices].filter(Boolean);

    // arrancar fade-out
    elems.forEach(el => el.classList.add('fade-hidden'));

    // esperar a que termine el fade-out antes de cambiar contenido
    setTimeout(() => {
        // aplicar fondo (preferir fondo del personaje si existe)
        let bg = e.fondo;
        const personajeData = personajes.find(p => p.escena === id && p.fondo);
        if (personajeData && personajeData.fondo) bg = personajeData.fondo;
        if (gameEl) gameEl.style.backgroundImage = `url(${bg})`;

        // personaje (usar transición)
        if (char) {
            if (e.personaje) changeCharacter(e.personaje);
            else changeCharacter(null);
        }

        // texto y nombre (usar máquina de escribir para el texto)
        const nameEl = document.getElementById('name');
        const textEl = document.getElementById('text');
        if (nameEl) nameEl.textContent = e.nombre;
        if (textEl) {
            cancelTyping();
            typeWriter(textEl, e.texto, 28);
        }

        if (e.efecto) e.efecto();

        // ocultar paneles modales cuando mostramos escena principal
        const sceneModal = document.getElementById('scene');
        const optionsModal = document.getElementById('options');
        if (sceneModal) sceneModal.style.display = 'none';
        if (optionsModal) optionsModal.style.display = 'none';

        // reconstruir opciones
        if (choices) {
            choices.innerHTML = '';
            e.opciones.forEach(op => {
                const btn = document.createElement('button');
                btn.textContent = op.texto;
                btn.onclick = () => mostrarEscena(op.siguiente);
                btn.classList.add('option-button');
                choices.appendChild(btn);
            });
        }

        // actualizar escena actual y controles
        currentScene = id;
        renderMainControls();

        // permitir un pequeño delay para que el DOM se estabilice antes del fade-in
        setTimeout(() => {
            elems.forEach(el => el.classList.remove('fade-hidden'));
            // reajustar layout si es necesario
            adjustLayoutForMobile();
        }, 30);

    }, 360);
}

window.addEventListener('DOMContentLoaded', () => {

    // Sonido de ambiente
    const ambiente = new Audio('audio/ambiente.mp3');
    ambiente.loop = true;
    ambiente.volume = 0.5; // Puedes ajustar el volumen
    // Reproducir al cargar (algunos navegadores requieren interacción)
    ambiente.play().catch(() => {
        // Si el navegador bloquea la reproducción automática, reproducir al primer click
        const playOnUserGesture = () => {
            ambiente.play();
            window.removeEventListener('click', playOnUserGesture);
        };
        window.addEventListener('click', playOnUserGesture);
    });

    mostrarEscena('1am_cerro_yaguaron');
    setupControls();
});



