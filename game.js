       

const escenas = {
        interrogatorio_monai: {
            fondo: "img/fondos/fondo_moñai.png",
            personaje: "img/personajes/moñai_nervioso.png",
            nombre: "Moñái",
            texto: "[Interrogar]",
            opciones: [
                { texto: "¿Por qué estabas cerca?", siguiente: "respuesta_monai_1" },
                { texto: "¿Viste algo sospechoso?", siguiente: "respuesta_monai_2" },
                { texto: "¿Tenés una coartada?", siguiente: "respuesta_monai_3" },
                { texto: "Terminar interrogatorio", siguiente: "monai_sugiere_luison" }
            ]
        },
        respuesta_monai_1: {
            fondo: "img/fondos/fondo_moñai.png",
            personaje: "img/personajes/moñai_nervioso.png",
            nombre: "Moñái",
            texto: "Buscaba un remedio yuyo para mi abuela. No tengo nada que ver con eso.",
            opciones: [
                { texto: "Volver a interrogar", siguiente: "interrogatorio_monai" }
            ]
        },
        respuesta_monai_2: {
            fondo: "img/fondos/fondo_moñai.png",
            personaje: "img/personajes/moñai_nervioso.png",
            nombre: "Moñái",
            texto: "Vi a alguien con una capa correr hacia el río, pero no vi su cara.",
            opciones: [
                { texto: "Volver a interrogar", siguiente: "interrogatorio_monai" },
            ]
        },

        monai_sugiere_luison: {
            fondo: "img/fondos/fondo_moñai.png",
            personaje: "img/personajes/moñai.png",
            nombre: "Moñái",
            texto: "–¿Por qué no le preguntás a Luisón? Le vi por ahí cerquita también.",
            opciones: [
                { texto: "Ir al monte", siguiente: "camino_al_monte" }
            ]
        },
        camino_al_monte: {
            fondo: "img/fondos/fondo_luison.png",
            personaje: "img/personajes/luison_sombra.png",
            nombre: "Narrador",
            texto: "Te vas adentrando al monte, cada vez la naturaleza se va apoderando de la escena. El sonido de los grillos y otros animales, indistinguibles por la oscuridad, se alzan en unísono en una melodía enigmática, pero vos estás acostumbrado a este ambiente.\n\nLlegaste hasta un claro. En la lejanía escuchás un aullido.",
            opciones: [
                { texto: "Avanzar", siguiente: "luison_dialogo" }    
            ],
        efecto: function() {
        if (window._pasosAudio) {
            window._pasosAudio.pause();
            window._pasosAudio.currentTime = 0;
        }
        window._pasosAudio = new Audio('audio/pasos.mp3');
        window._pasosAudio.loop = true;
        window._pasosAudio.volume = 0.7;
        window._pasosAudio.play().catch(() => {
            const playOnUserGesture = () => {
                window._pasosAudio.play();
                window.removeEventListener('click', playOnUserGesture);
            };
            window.addEventListener('click', playOnUserGesture);
        });
    }
        },
        luison_dialogo: {
            fondo: "img/fondos/fondo_luison.png",
            personaje: "img/personajes/luison.png",
            nombre: "Luisón",
            texto: "Luisón: – Ha’i, ¿Qué pa vos hacés por acá?",
            opciones: [
                { texto: "Siguiente", siguiente: "luison_repuesta_pombero" }
            ],
            efecto: function() {
                if (window._pasosAudio) {
            window._pasosAudio.pause();
            window._pasosAudio.currentTime = 0;
        }
    }
        },
        luison_repuesta_pombero: {
            fondo: "img/fondos/fondo_luison.png",
            personaje: "img/personajes/pombero.png",
            nombre: "Pombero",
            texto: "Me robaron mis cosas, kape. Me dijeron que vos estabas por ahí.",
            opciones: [
                { texto: "Siguiente", siguiente: "luison_dialogo2" }
            ]
        },
        luison_dialogo2: {
            fondo: "img/fondos/fondo_luison.png",
            personaje: "img/personajes/luison_enojado.png",
            nombre: "Luisón",
            texto: "Ndetavy, desastre la inseguridad en este país.",
            opciones: [
                { texto: "Interrogar a Luisón", siguiente: "interrogatorio_luison" }
            ]
        },
        interrogatorio_luison: {
            fondo: "img/fondos/fondo_luison.png",
            personaje: "img/personajes/luison_nervioso.png",
            nombre: "Luisón",
            texto: "[Interrogar]",
            opciones: [
                { texto: "¿Por qué estabas cerca?", siguiente: "respuesta_luison_1" },
                { texto: "¿Viste algo sospechoso?", siguiente: "respuesta_luison_2" },
                { texto: "¿Tenés una coartada?", siguiente: "respuesta_luison_3" },
                { texto: "Terminar interrogatorio", siguiente: "luison_sugiere_malavision" }
            ]
        },
        respuesta_luison_1: {
            fondo: "img/fondos/fondo_luison.png",
            personaje: "img/personajes/luison_nervioso.png",
            nombre: "Luisón",
            texto: "Me fui al cementerio, sabés luego mi estilo. Quería comer algo.",
            opciones: [
                { texto: "Volver a interrogar", siguiente: "interrogatorio_luison" }
            ]
        },
        respuesta_luison_2: {
            fondo: "img/fondos/fondo_luison.png",
            personaje: "img/personajes/luison_nervioso.png",
            nombre: "Luisón",
            texto: "Le vi a alguien, parecía una persona de poca estatura. Pero tenía una máscara. Pensé que era un chespi y no le di importancia.",
            opciones: [
                { texto: "Volver a interrogar", siguiente: "interrogatorio_luison" }
            ]
        },
        respuesta_luison_3: {
            fondo: "img/fondos/fondo_luison.png",
            personaje: "img/personajes/luison_nervioso.png",
            nombre: "Luisón",
            texto: "El tipo del cementerio es mi kape, a él le podés preguntar si querés. Le saludé cuando entré.",
            opciones: [
                { texto: "Volver a interrogar", siguiente: "interrogatorio_luison" }
            ]
        },
        luison_sugiere_malavision: {
            fondo: "img/fondos/fondo_luison.png",
            personaje: "img/personajes/luison.png",
            nombre: "Luisón",
            texto: "Pero podés preguntarle a Mala visión, cuando me iba le vi por el camino.",
            opciones: [
                { texto: "Buscar a Mala visión", siguiente: "camino_malavision" }
            ]
        },
        camino_malavision: {
            fondo: "img/fondos/fondo_malavision.png",
            personaje: "img/personajes/malavision_sombra.png",
            nombre: "narrador",
            texto: "Te apartas un poco del bosque, llegando a un camino. Caminás un tramo que parece eterno hasta que una luz se ve a la distancia. A medida que te acercas, aquello parece tomar forma, pero…¿Será una persona o un árbol? ",
            opciones: [
                { texto: "Acercarce", siguiente: "malavision_encuentro" }
            ]
        },
         // Escenas de Malavisión
        malavision_encuentro: {
            fondo: "img/fondos/fondo_malavision.png",
            personaje: "img/personajes/malavision.png",
            nombre: "Malavisión",
            texto: "– ¡Uy, kore! Me asustaste todito mal. Pensé que era un chespi.",
            opciones: [
                { texto: "Siguiente", siguiente: "malavision_pombero_dialogo" }
            ]
        },
        malavision_pombero_dialogo: {
            fondo: "img/fondos/fondo_malavision.png",
            personaje: "img/personajes/pombero.png",
            nombre: "Pombero",
            texto: "– Estoy buscándole a alguien que me robó toito mis cosas sique.",
            opciones: [
                { texto: "Siguiente", siguiente: "malavision_ndis" }
            ]
        },
        malavision_ndis: {
            fondo: "img/fondos/fondo_malavision.png",
            personaje: "img/personajes/malavision.png",
            nombre: "Malavisión",
            texto: "– Ndis.",
            opciones: [
                { texto: "Siguiente", siguiente: "malavision_luison" }
            ]
        },
        malavision_luison: {
            fondo: "img/fondos/fondo_malavision.png",
            personaje: "img/personajes/pombero.png",
            nombre: "Pombero",
            texto: "– Luison me dijo que te vio por ahí…",
            opciones: [
                { texto: "Siguiente", siguiente: "malavision_enojado" }
            ]
        },
        malavision_enojado: {
            fondo: "img/fondos/fondo_malavision.png",
            personaje: "img/personajes/malavision_enojado.png",
            nombre: "Malavisión",
            texto: "– A la pinta, ko jagua chismoso chera’a.",
            opciones: [
                { texto: "Interrogar", siguiente: "interrogatorio_malavision" }
            ]
        },
        interrogatorio_malavision: {
            fondo: "img/fondos/fondo_malavision.png",
            personaje: "img/personajes/malavision_enojado.png",
            nombre: "Pombero",
            texto: "[Interrogar]",
            opciones: [
                { texto: "¿Por qué estabas cerca?", siguiente: "malavision_resp_cerca" },
                { texto: "¿Viste algo sospechoso?", siguiente: "malavision_resp_sospechoso" },
                { texto: "¿Tenés una coartada?", siguiente: "malavision_resp_coartada" },
                { texto: "Terminar interrogatorio", siguiente: "malavision_sugiere_jasy" }
            ]
        },
        malavision_resp_cerca: {
            fondo: "img/fondos/fondo_malavision.png",
            personaje: "img/personajes/malavision_enojado.png",
            nombre: "Malavisión",
            texto: "Estaba ko esperando mi motogolt. Me iba a verle a mi ñorso, pero el de la moto se asustó y se fue corriendo.",
            opciones: [
                { texto: "Volver a interrogar", siguiente: "interrogatorio_malavision" }
            ]
        },
        malavision_resp_sospechoso: {
            fondo: "img/fondos/fondo_malavision.png",
            personaje: "img/personajes/malavision_enojado.png",
            nombre: "Malavisión",
            texto: "Creo que vi un palo…bastón, tirado por ahí.",
            opciones: [
                { texto: "Volver a interrogar", siguiente: "interrogatorio_malavision" }
            ]
        },
        malavision_resp_coartada: {
            fondo: "img/fondos/fondo_malavision.png",
            personaje: "img/personajes/malavision_enojado.png",
            nombre: "Malavisión",
            texto: "Y si le encontrás al de la moto le pódes pregunta, Tule’i González le dicen.",
            opciones: [
                { texto: "Volver a interrogar", siguiente: "interrogatorio_malavision" }
            ]
        },
        malavision_sugiere_jasy: {
            fondo: "img/fondos/fondo_malavision.png",
            personaje: "img/personajes/malavision_enojado.png",
            nombre: "Malavisión",
            texto: "Sabés a quién tenés que preguntarle, a Jasy Jatere, ese mita’i akahata siempre anda rompiendo las pelotas por ahí.",
            opciones: [
                { texto: "Buscar a Jasy Jatere", siguiente: "narrador_jasy_intro" }
            ]
        },

        // Escenas de Jasy Jatere
        narrador_jasy_intro: {
            fondo: "img/fondos/fondo_jasy.png",
            personaje: "img/personajes/jasy_sombra.png",
            nombre: "Narrador",
            texto: "Vas caminando y te adentras a una parte del monte en la que el pastizal se extiende libremente, evocando la sensación de manos que se alzan desde el suelo para agarrar los cielos.",
            opciones: [
                { texto: "Siguiente", siguiente: "narrador_jasy_movimiento" }
            ]
        },
        narrador_jasy_movimiento: {
            fondo: "img/fondos/fondo_jasy.png",
            personaje: "img/personajes/jasy_sombra.png",
            nombre: "Narrador",
            texto: "Escuchás que algo se mueve entre el pastizal.",
            opciones: [
                { texto: "Siguiente", siguiente: "jasy_saludo" }
            ]
        },
        jasy_saludo: {
            fondo: "img/fondos/fondo_jasy.png",
            personaje: "img/personajes/jasy.png",
            nombre: "JasyJatere",
            texto: "–Hola, rey, ¿Qué hacés por acá, boludo?",
            opciones: [
                { texto: "Siguiente", siguiente: "pombero_explica_jasy" }
            ]
        },
        pombero_explica_jasy: {
            fondo: "img/fondos/fondo_jasy.png",
            personaje: "img/personajes/pombero.png",
            nombre: "Pombero",
            texto: "–Alguien con una máscara me robó mis cosas y le estoy buscando, ¿Vos no sabés nada?",
            opciones: [
                { texto: "Siguiente", siguiente: "jasy_sorprendido" }
            ]
        },
        jasy_sorprendido: {
            fondo: "img/fondos/fondo_jasy.png",
            personaje: "img/personajes/jasy_sorprendido.png",
            nombre: "JasyJatere",
            texto: "–Ehh.. No sé nada rey, yo estaba recorriendo mi chacra",
            opciones: [
                { texto: "Interrogar", siguiente: "interrogatorio_jasy" }
            ]
        },
        interrogatorio_jasy: {
            fondo: "img/fondos/fondo_jasy.png",
            personaje: "img/personajes/Jasy_nervioso.png",
            nombre: "JasyJatere",
            texto: "[Interrogar]",
            opciones: [
                { texto: "¿Viste algo sospechoso?", siguiente: "jasy_resp_sospechoso" },
                { texto: "¿Por qué estabas cerca?", siguiente: "jasy_resp_cerca" },
                { texto: "¿Tenés una coartada?", siguiente: "jasy_resp_coartada" },
                { texto: "Acusar", siguiente: "acusar" }
            ]
        },
        jasy_resp_sospechoso: {
            fondo: "img/fondos/fondo_jasy.png",
            personaje: "img/personajes/Jasy_nervioso.png",
            nombre: "JasyJatere",
            texto: "Ehh.. Legalemente no ami, yo vi que Luison anda de malas tambien",
            opciones: [
                { texto: "Volver a interrogar", siguiente: "interrogatorio_jasy" }
            ]
        },
        jasy_resp_cerca: {
            fondo: "img/fondos/fondo_jasy.png",
            personaje: "img/personajes/Jasy_nervioso.png",
            nombre: "JasyJatere",
            texto: "Y ya te dije, boludo, estaba vapeando con una minita.",
            opciones: [
                { texto: "Volver a interrogar", siguiente: "interrogatorio_jasy" }
            ]
        },
        jasy_resp_coartada: {
            fondo: "img/fondos/fondo_jasy.png",
            personaje: "img/personajes/Jasy_nervioso.png",
            nombre: "JasyJatere",
            texto: "Confía nomas en lo que te digo ami.",
            opciones: [
                { texto: "Volver a interrogar", siguiente: "interrogatorio_jasy" }
            ]
        },
        respuesta_monai_3: {
            fondo: "img/fondos/fondo_moñai.png",
            personaje: "img/personajes/moñai_nervioso.png",
            nombre: "Moñái",
            texto: "Mi vecino me vio pasar por su patio. Él puede confirmar.",
            opciones: [
                { texto: "Volver a interrogar", siguiente: "interrogatorio_monai" }
            ]
        },
        escena_interrogatorio: {
            fondo: "img/fondos/fondo_moñai.png",
            personaje: "img/personajes/pombero.png",
            nombre: "Pombero",
            texto: "Mmm, así pio luego. Me robaron ko mis cosas.",
            opciones: [
                { texto: "Siguiente", siguiente: "escena_interrogatorio2" }
            ]
        },
        escena_interrogatorio2: {
            fondo: "img/fondos/fondo_moñai.png",
            personaje: "img/personajes/moñai_enojado.png",
            nombre: "Moñái",
            texto: "¿Y qué pio yo tengo que ver con eso?",
            opciones: [
                { texto: "Interrogar a Moñái", siguiente: "interrogatorio_monai" }
            ]
        },
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
        personaje: "img/personajes/pombero.png", // Asegúrate de que la imagen exista
        nombre: "Pombero",
        texto: "–¿Qué pasó acá?\n–De seguro esos ñembotavy ya otra vez me están rompiendo las bolas, voy a ir a hablar con ellos.",
        opciones: [
            { texto: "Continuar", siguiente: "escena_perros_montes" }
        ]
    },

    escena_perros_montes: {
        fondo: "img/fondos/fondo_monte.png", // Cambia el fondo si tienes uno específico
        personaje: "img/personajes/moñai_sombra.png",
        nombre: "Narrador",
        texto: "De repente escuchás perros ladrando a lo lejos, donde hay algunas casas casi al final del monte, al dar la vuelta para curiosear, podés ver algo que brilla, como una luz o un reflejo, así que decidís ir hacia ahí.",
        opciones: [
            { texto: "Acercarse", siguiente: "moñai_dialogo" }
        ],
        efecto: function() {
        if (window._pasosAudio) {
            window._pasosAudio.pause();
            window._pasosAudio.currentTime = 0;
        }
        window._pasosAudio = new Audio('audio/Ladridos.mp3');
        window._pasosAudio.loop = true;
        window._pasosAudio.volume = 0.7;
        window._pasosAudio.play().catch(() => {
            const playOnUserGesture = () => {
                window._pasosAudio.play();
                window.removeEventListener('click', playOnUserGesture);
            };
            window.addEventListener('click', playOnUserGesture);
        });
    }
    },

    moñai_dialogo: {
        fondo: "img/fondos/fondo_monte.png", // Cambia el fondo si tienes uno específico
        personaje: "img/personajes/moñai.png", // Cambia si tienes una imagen específica de Moñái
        nombre: "Moñái",
        texto: "–Por vos hina ladran ya otra vez los perros, yo quería saber por donde ya otra vez andabas, algo te pasó por eso venís hacia acá ¿Qué querés?",
        opciones: [
            { texto: "Responder", siguiente: "escena_interrogatorio" }
        ],
        efecto: function() {
        if (window._pasosAudio) {
            window._pasosAudio.pause();
            window._pasosAudio.currentTime = 0;
        }
    }
    },

    acusar: {
        fondo: "img/fondos/fondo.jpg",
        personaje: "",
        nombre: "",
        texto: "¿A quién acusar?",
        opciones: [
            { texto: "Acusar a Jasy Jatere", siguiente: "acusar_jasy" },
            { texto: "Acusar a Moñái", siguiente: "final_malo_moñai" },
            { texto: "Acusar a Malavisión", siguiente: "final_malo_malavision" },
            { texto: "Acusar a Luisón", siguiente: "final_malo_luison" }
        ]
    },

    acusar_jasy: {
        fondo: "img/fondos/fondo_jasy.png",
        personaje: "img/personajes/jasy.png",
        nombre: "JasyJatere",
        texto: "Mmm, chore chera’a, yo ko keria probar nomás.",
        opciones: [
            { texto: "Siguiente", siguiente: "jasy_asadito" }
        ]
    },
    jasy_asadito: {
        fondo: "img/fondos/fondo_jasy.png",
        personaje: "img/personajes/jasy.png",
        nombre: "JasyJatere",
        texto: "Aninati nde pochy, chamigo, jahata ja'u asadito por 10 mil Ña Pochope.",
        opciones: [
            { texto: "Mbore, ahoraite dame mis cosas.", siguiente: "final_bueno" },
            { texto: "Dale, ja’u.", siguiente: "final_bueno" },
            { texto: "¡Nderakore ojeroky pio la nde asadito!", siguiente: "final_bueno" },
            { texto: "¡Por 10 mil no me vas a llevar!", siguiente: "final_bueno" }
        ]
    },
    final_bueno: {
        fondo: "img/fondos/fondo_bueno.png",
        personaje: "img/personajes/jasy.png",
        nombre: "Final",
        texto: "ENCONTRASTE AL LADRÓN",
        opciones: [
            { texto: "Creditos", siguiente: "creditos" }
        ]
    },
    final_malo_moñai: {
        fondo: "img/fondos/fondo_malo.png",
        personaje: "img/personajes/moñai_enojado.png",
        nombre: "Final",
        texto: "– MMM, no confias luego en lo que te digo, despues vas a ver que no era yo",
        opciones: [
            { texto: "Siguiente", siguiente: "final_malo" }
        ]
    },
    final_malo_malavision: {
        fondo: "img/fondos/final_malo.png",
        personaje: "img/personajes/malavision_enojado.png",
        nombre: "Final",
        texto: "– MMM, no confias luego en lo que te digo, despues vas a ver que no era yo",
        opciones: [
            { texto: "Siguiente", siguiente: "final_malo" }
        ]
    },
    final_malo_luison: {
        fondo: "img/fondos/final_malo.png",
        personaje: "img/personajes/luison_enojado.png",
        nombre: "Final",
        texto: " MMM, no confias luego en lo que te digo, despues vas a ver que no era yo",
        opciones: [
            { texto: "Siguiente", siguiente: "final_malo" }
        ]
    },
    final_malo: {
        fondo: "img/fondos/fondo_malo.png",
        personaje: "img/personajes/pombero.png",
        nombre: "Final",
        texto: "Haso kp no era ra'e",
        opciones: [
            { texto: "Creditos", siguiente: "creditos" }
        ]
    },
     creditos: {
            fondo: "img/fondos/fondo.jpg",
            personaje: "",
            nombre: "Créditos",
            texto: "Juego realizado por [AranduTeam](Artistas, Escritores)Samunator, batzeiliris, A-r-i, It's a me Chino, Toki. (Musica y Ambientación) Gáryth-Moll. (Programadores)Fernando10104¡Gracias por jugar!",
            opciones: [
                { texto: "Volver al inicio", siguiente: "1am_cerro_yaguaron" }
            ]
        },

};
// Lista de personajes disponible globalmente
const personajes = [
    { 
        nombre: "Luisón", 
        fondo: "img/fondos/fondo_luison.png",
        imagen: "img/personajes/luison.png", 
        pista: "", 
        culpable: false, 
        escena: "luison",
        preguntas: [
        ]
    },
    { 
        
        nombre: "Malavisión",
        fondo: "img/fondos/fondo_malavision.png", 
        imagen: "img/personajes/malavision.png", 
        pista: "", 
        culpable: false, 
        escena: "malavision",
        preguntas: [
        ]
    },
    {
        nombre: "Moñai",
        fondo: "img/fondos/fondo_moñai.png",
        imagen: "img/personajes/moñai.png",
        pista: "",
        culpable: false,
        escena: "moñai",
        preguntas: [
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
        osc.frequency.value = 300 + Math.random() * 150; // slight variation
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
    // Si es una escena final, no mostrar controles
    if (currentScene && (currentScene === 'final_bueno' || currentScene === 'final_malo' || currentScene.startsWith('final'))) {
        controls.innerHTML = '';
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



