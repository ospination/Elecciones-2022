
$(document).ready(function(){
var partidos = ["Perros","Gatos","Caballos","Lobos","Aguilas","Zarigueyas"];
var votos = [];
var i;
for (i = 0; i < partidos.length; i++) {
  var x = Math.floor((Math.random() * 100000) + 100);
  votos.push(x);
}
var partidos = partidos.sort( () => .5 - Math.random() );
var votos = votos.sort(function (a, b) {  return b - a;  });
var bodyString = '';
    $.each(partidos, function(index, partidos) {
        bodyString += ('<tr><td>'+partidos+'</td><td>'+votos[index]+'</td></tr>');
    });
    $('.partidos tbody').html(bodyString);
    });

