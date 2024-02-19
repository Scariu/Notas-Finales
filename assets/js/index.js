var htmlNota1 = document.getElementById("htmlNota1");
var htmlNota2 = document.getElementById("htmlNota2");
var htmlNota3 = document.getElementById("htmlNota3");
var htmlPromedio = document.getElementById("htmlPromedio");

htmlNota1.innerHTML = prompt("Ingrese nota 1 [HTML]: ");
htmlNota2.innerHTML = prompt("Ingrese nota 2 [HTML]: ");
htmlNota3.innerHTML = prompt("Ingrese nota 3 [HTML]: ");

var promedioHtml = ((parseInt(htmlNota1.innerHTML) + parseInt(htmlNota2.innerHTML) + parseInt(htmlNota3.innerHTML))/3);
htmlPromedio.innerHTML = promedioHtml;

var cssNota1 = document.getElementById("cssNota1");
var cssNota2 = document.getElementById("cssNota2");
var cssNota3 = document.getElementById("cssNota3");
var cssPromedio = document.getElementById("cssPromedio");

cssNota1.innerHTML = prompt("Ingrese nota 1 [CSS]: ");
cssNota2.innerHTML = prompt("Ingrese nota 2 [CSS]: ");
cssNota3.innerHTML = prompt("Ingrese nota 3 [CSS]: ");

var promedioCss = ((parseInt(cssNota1.innerHTML) + parseInt(cssNota2.innerHTML) + parseInt(cssNota3.innerHTML))/3);
cssPromedio.innerHTML = promedioCss;

var jsNota1 = document.getElementById("jsNota1");
var jsNota2 = document.getElementById("jsNota2");
var jsNota3 = document.getElementById("jsNota3");
var jsPromedio = document.getElementById("jsPromedio");

jsNota1.innerHTML = prompt("Ingrese nota 1 [JavaScript]: ");
jsNota2.innerHTML = prompt("Ingrese nota 2 [JavaScript]: ");
jsNota3.innerHTML = prompt("Ingrese nota 3 [JavaScript]: ");

var promedioJs = ((parseInt(jsNota1.innerHTML) + parseInt(jsNota2.innerHTML) + parseInt(jsNota3.innerHTML))/3);
jsPromedio.innerHTML = promedioJs;