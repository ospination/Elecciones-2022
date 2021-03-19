
var partidos = ["Perros","Gatos","Caballos","Lobos","Aguilas","Zarigueyas"];
var votos = [];
var i;
for (i = 0; i < partidos.length; i++) {
  var x = Math.floor((Math.random() * 100000) + 100);
  votos.push(x);
} 
document.getElementById("partidos").innerHTML = partidos;
document.getElementById("votos").innerHTML = votos;
table = document.querySelector('table tbody');
var tabla = [partidos,votos.sort(function (a, b) {  return b - a;  })];
var r = partidos.map(function(col, i) {
  return tabla.map(function(row) {
    return row[i];
  });
});
r.forEach(function(e) {
  table.innerHTML += '<tr><td>' + e[0] + '</td><td>' + e[1] + '</td></tr>'
})
document.getElementById("tabla").innerHTML = tabla;
