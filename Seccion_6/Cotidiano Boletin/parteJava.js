let notas = [7, 4, 8, 9, 6];

function listarNotas() {
  document.getElementById("listaNotas").innerHTML =
    "<li>" + notas[0] + "</li>" +
    "<li>" + notas[1] + "</li>" +
    "<li>" + notas[2] + "</li>" +
    "<li>" + notas[3] + "</li>" +
    "<li>" + notas[4] + "</li>";
}

function calcularPromedio() {
  let suma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4];
  let promedio = suma / notas.length;
  document.getElementById("resultadoPromedio").innerHTML = promedio;
}

function notaMasAlta() {
  let alta = Math.max(notas[0], notas[1], notas[2], notas[3], notas[4]);
  document.getElementById("resultadoAlta").innerHTML = alta;
}

function hayAplazados() {
  let baja = Math.min(notas[0], notas[1], notas[2], notas[3], notas[4]);
  if (baja < 4) {
    document.getElementById("resultadoAplazados").innerHTML = "Sí";
  } else {
    document.getElementById("resultadoAplazados").innerHTML = "No";
  }
}

