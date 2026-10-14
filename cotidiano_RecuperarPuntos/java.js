document.getElementById("descubriractividad").addEventListener("click", function () {
    let presupuesto = parseInt(document.getElementById("presupuesto").value);
    let numPersonas = parseInt(document.getElementById("numeroPersonas").value);
    let actividadSeleccionada = document.getElementById("actividad").value;
    let resultadoPresupuesto = document.getElementById("resultado");
    let actividadrecomendada = "";
    

    if (numPersonas >= 9) {
        descuento = 0.15;
    } else if (numPersonas >= 5) {
        descuento = 0.10;
    } else {
        descuento = 0;
    }

    let montoDescuento = presupuesto * descuento;
    let totalFinal = presupuesto - montoDescuento;


    switch (actividadSeleccionada) {
        case "deportes":
            if (presupuesto < 8000) {
                actividadrecomendada = "Caminata recreativa";
            } else if (presupuesto <= 15000) {
                actividadrecomendada = "Alquiler de cancha";
            } else {
                actividadrecomendada = "Actividad deportiva especializada";
            }
            break;

        case "entretenimiento":
            if (presupuesto < 8000) {
                actividadrecomendada = "Actividad económica";
            } else if (presupuesto <= 15000) {
                actividadrecomendada = "Entrada al cine";
            } else {
                actividadrecomendada = "Concierto o espectáculo";
            }
            break;

        case "turismo":
            if (presupuesto < 8000) {
                actividadrecomendada = "Visita a parque público";
            } else if (presupuesto <= 15000) {
                actividadrecomendada = "Tour local";
            } else {
                actividadrecomendada = "Excursión de día completo";
            }
            break;

        case "actividades familiares":
            if (presupuesto < 8000) {
                actividadrecomendada = "Picnic familiar";
            } else if (presupuesto <= 15000) {
                actividadrecomendada = "Salida recreativa";
            } else {
                actividadrecomendada = "Parque temático o actividad especial";
            }
            break;

        default:
            actividadrecomendada = "Esto no es válido";
    }

    resultadoPresupuesto.textContent =
        "Su actividad es: " + actividadrecomendada +
        ". Descuento aplicado: " + (descuento * 100) + "%" +
        ". Total con descuento: " + totalFinal;
});

document.getElementById("reinicio").addEventListener("click", function () {
    document.getElementById("presupuesto").value = "";
    document.getElementById("numeroPersonas").value = "";
    document.getElementById("resultado").textContent = "";
});
