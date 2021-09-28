var listaFilmes = [
  "https://upload.wikimedia.org/wikipedia/pt/7/79/Yesterday_%282019%29_poster.jpg",
  "https://cineclick-static.flixmedia.cloud/480/69/1080x1620_1600955756.jpg",
  "https://br.web.img2.acsta.net/r_1280_720/medias/nmedia/18/91/90/98/20169244.jpg",
  "https://br.web.img2.acsta.net/medias/nmedia/18/91/08/82/20128877.JPG",
  "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/92/91/32/20224832.jpg"
];

exibeFilmes();

function exibeFilmes() {
  var filmes = document.getElementById("listaExibeFilmes");
  for (var indice = 0; indice < listaFilmes.length; indice++) {
    document.body.innerHTML += "<img src=" + listaFilmes[indice] + ">";
  }
}

function cadastraFilme() {
  var novoFilme = document.getElementById("linkFilme").value;

  if (novoFilme.endsWith(".jpg")) {
    listaFilmes.push(novoFilme);
    exibeFilmes();
  } else {
    var erroFilme = document.getElementById("erro");
    erroFilme.innerHTML =
      "O sistema somente aceita extensões .jpg, favor insIra uma imagem válida!";

    document.getElementById("linkFilme").value = "";
  }
}
function removeFilme() {
  listaFilmes.pop();
}
function limpaCampo() {
  document.getElementById("linkFilme").value = "";
}