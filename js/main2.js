function check (i, j, n) {
   if (  i >= 0 && j >= 0 && i < n && j < n)
       return true;
   return false;
}
function randInt (n) {
   return Math.floor(Math.random () * n);
}


function gen_heuristic (n){
  var M = initMatrix (n);
  var p = 1;
  while (p <= n / 2 + 1 ) {
    for (var i = p-1; i <= n - p; i++){
      M[p - 1][i] = p;
      M[i][p - 1] = p;
      M[i][n - p] = p;
      M[n - p][i] = p;
    }
    p++;
  }
  M[0][0] = 0;
  M[0][n - 1] = 0;
  M[n - 1][0] = 0;
  M[n - 1][n - 1] = 0;
  return M;
}


function shuffleArray(d) {
  for (var c = d.length - 1; c > 0; c--) {
    var b = Math.floor(Math.random() * (c + 1));
    var a = d[c];
    d[c] = d[b];
    d[b] = a;
  }
  return d
};

function use_helper (soluciones, helper) {
   var pos = -1;
   var min = 10000;
   soluciones = shuffleArray (soluciones);
   for (var i = 0; i < soluciones.length; i++) {
      var x = soluciones[i].x;
      var y = soluciones[i].y;
      if ( helper[x][y] < min) {
         min = helper[x][y] ;
         pos = i;
      }
   }
   return pos;
}

function gen_solution (M, helper, n) {
    var mov_x = [-2, -1, +1, +2, +2, +1, -1, -2];
    var mov_y = [-1, -2, -2, -1, +1, +2, +2, +1];
    var step = 1;
    var x = 0; var y = 0;

    M[x][y] = step;
    while ( true ) {
        if ( step == n * n) {
            return true;
        }
        var soluciones = [];
        for (var index = 0; index < mov_x.length; index++) {
            var i = x + mov_x[index];
            var j = y + mov_y[index];
            if (check (i, j, n) && M [i][j] == 0) {
               soluciones.push ( {x:i, y:j});
            }
        }
        if (soluciones.length == 0) {
           break;
        }
        var idx = use_helper (soluciones, helper) ;
        x =  soluciones[ idx ].x;
        y =  soluciones[ idx ].y;
        step++;
        M[x][y] = step;
    }
    return false;
}


function initMatrix (n) {
    var matrix = [];
    for (var i = 0; i < n; i++) {
        var fila = [];
        for (var j = 0; j < n; j++) {
            fila[j] = 0;
        }
        matrix[i] = fila;
    }
    return matrix;
}



var inicio = 1;

function solution(n) {
  for( var i = 0; i < 1000; i++) {
      var M = initMatrix (n);
      var helper = gen_heuristic (n);
      if (gen_solution (M, helper, n) ) {
          break;
      }
  }
  return M;
}
