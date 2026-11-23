function mostrarInicio() {

    document.getElementById("inicio").style.display = "block";
    document.getElementById("juego").style.display = "none";
    document.getElementById("estadisticas").style.display = "none";

    let musica = document.getElementById("musica");

    if (musica) {
        musica.play();
    }

}


function mostrarJuego() {

    document.getElementById("inicio").style.display = "none";
    document.getElementById("juego").style.display = "block";
    document.getElementById("estadisticas").style.display = "none";

    let musica = document.getElementById("musica");

    if (musica) {
        musica.pause();
    }

}

function mostrarEstadisticas() {

    document.getElementById("inicio").style.display = "none";
    document.getElementById("juego").style.display = "none";
    document.getElementById("estadisticas").style.display = "block";

    let musica = document.getElementById("musica");

    if (musica) {
        musica.pause();
    }

}

let tiempo = 40;
let puntos = 0;
let respuestaCorrecta = "";

let n1;
let d1;
let n2;
let d2;

function mcd(a, b) {

    while (b !== 0) {

        let temp = b;
        b = a % b;
        a = temp;

    }

    return a;

}

function generarEjercicio() {

    n1 = Math.floor(Math.random() * 9) + 1;
    d1 = Math.floor(Math.random() * 9) + 1;

    n2 = Math.floor(Math.random() * 9) + 1;
    d2 = Math.floor(Math.random() * 9) + 1;

    document.getElementById("ejercicio").textContent =
        `${n1}/${d1} + ${n2}/${d2}`;

    let numerador =
        (n1 * d2) + (n2 * d1);

    let denominador =
        d1 * d2;

    let divisor =
        mcd(numerador, denominador);

    numerador =
        numerador / divisor;

    denominador =
        denominador / divisor;

    if (denominador === 1) {

        respuestaCorrecta = `${numerador}`;

    } else {

        respuestaCorrecta =
            `${numerador}/${denominador}`;

    }

}

function verificar() {

    let respuesta =
        document.getElementById("respuesta").value;

    if (respuesta === respuestaCorrecta) {

        tiempo += 15;

        document.getElementById("tiempo").textContent =
            tiempo;

        puntos++;

        document.getElementById("puntaje").innerHTML =
            `Puntos: ${puntos}`;

        document.getElementById("resultado").innerHTML =
            "✅ Correcto (+15 segundos)";

        document.getElementById("respuesta").value = "";

        generarEjercicio();

    } else {

        tiempo -= 5;

        document.getElementById("tiempo").textContent =
            tiempo;

        document.getElementById("resultado").innerHTML =
            "❌ Incorrecto (-5 segundos)";

    }

}
function iniciarMusica() {

    let musica = document.getElementById("musica");

    if (musica) {
        musica.play();
    }

}

let cronometro = setInterval(() => {

    tiempo--;

    document.getElementById("tiempo").textContent =
        tiempo;

    if (tiempo <= 0) {

        clearInterval(cronometro);

        document.getElementById("resultado").innerHTML =

        `
        ⏰ Tiempo agotado

        <br><br>

        <button onclick="reiniciarJuego()">
        🔄 Volver a jugar
        </button>
        `;

        mostrarExplicacion();

    }

}, 1000);
generarEjercicio();
function reiniciarJuego() {

    location.reload();

}

function mostrarExplicacion() {

    document.getElementById("explicacion").innerHTML = `

    <h2>📚 Procedimiento de Resolución</h2>

    <p>
    Paso 1: Obtener un denominador común.
    </p>

    <p>
    Paso 2: Convertir las fracciones equivalentes.
    </p>

    <p>
    Paso 3: Sumar los numeradores.
    </p>

    <p>
    Paso 4: Simplificar el resultado.
    </p>

    <p>
    ✅ Resultado correcto:
    ${respuestaCorrecta}
    </p>

    `;

}

function reiniciarJuego() {

    window.location.reload(true);

}