var generar = document.getElementById('ejecutar');
var tablero = document.getElementById('tablero');


generar.onclick= function(){
  var tabla=document.createElement('table');
  tabla.border="1";
  var nlados=document.getElementById('lados').value;
  for(var i = 0; i < nlados; i++){
    var fila= document.createElement('tr');
    for (var j = 0; j < nlados; j++) {
      var celda = document.createElement('td');
      if(i%2==0&&j%2!=0||i%2!=0&&j%2==0){
        celda.setAttribute('class','negro');
      }
      fila.appendChild(celda);
    }
    tabla.appendChild(fila);
  }
  tablero.appendChild(tabla);
}
