var generar = document.getElementById('ejecutar');
var tablero = document.getElementById('tablero');
var boton = document.getElementById('pasos');

var inicio = 1;
generar.onclick = function () {
    tablero.innerHTML = '';
    var n = parseInt(document.getElementById('lados').value);

    var tabla = document.createElement('table');
    tabla.cellspacing = "0";
    for (var i = 0; i < n; i++) {
        var fila = document.createElement('tr');
        for (var j = 0; j < n; j++) {
            var celda = document.createElement('td');
            if (i % 2 == 0 && j % 2 != 0 || i % 2 != 0 && j % 2 == 0) {
                celda.setAttribute('class', 'negro');
            }
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }
    tablero.appendChild(tabla);

}

var solucion=document.getElementById('solucion');
solucion.onclick=function() {
  boton.innerHTML='';

  var n = parseInt(document.getElementById('lados').value);
  var M = solution(n);

  var filas = document.getElementsByTagName('tr');
  for (var i = 0; i < n; i++) {
      var celdas = filas[i].childNodes;
      for (var j = 0; j < n; j++) {
          celdas[j].innerHTML = M[i][j];
      }
  }
}


var s_paso = document.getElementById('paso');
s_paso.onclick=function () {
  ocultar();

  var n = parseInt(document.getElementById('lados').value);
  var M = solution(n);

  var filas = document.getElementsByTagName('tr');
  for (var i = 0; i < n; i++) {
      var celdas = filas[i].childNodes;
      for (var j = 0; j < n; j++) {
          celdas[j].id = M[i][j];
      }
  }

  boton.innerHTML='';
  var btn_siguiente= document.createElement('button');
  btn_siguiente.setAttribute('id', 'siguiente');
  btn_siguiente.setAttribute('onclick', 'pasos(this)');
  btn_siguiente.appendChild(document.createTextNode('Empezar'));
  boton.appendChild(btn_siguiente);

  inicio=1;
}

function ocultar() {
  var celda = document.getElementsByTagName('td');
  for(var j in celda){
    celda[j].innerHTML='';
  }
}

function pasos (e) {
  var texto = document.createTextNode('Siguiente');
  e.replaceChild(texto, e.firstChild);

  var celdas = document.getElementsByTagName('td');
  var imagen = document.createElement('img');
  imagen.setAttribute('src','https://www-lucaschess.rhcloud.com/static/images/bn.png');
  imagen.setAttribute('width','35');

  var numero=document.createTextNode(inicio);
  for(var j in celdas){
      if(celdas[j].id==inicio){
        celdas[j].appendChild(imagen);
        celdas[j].appendChild(numero);
      }
  }
  inicio++;
}
