const faqs = document.querySelectorAll('.faq');

faqs.forEach((faq) => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active');
    });
});

var minutos = 14;
var segundos = 00;

function atualizaContador() {
  var minutosElemento = document.getElementById("minutos");
  var segundosElemento = document.getElementById("segundos");

  // Subtrai um segundo dos minutos e segundos restantes
  if (segundos > 0) {
    segundos--;
  } else if (minutos > 0) {
    minutos--;
    segundos = 59;
  } else {
    // Acabou o tempo, para a contagem
    clearInterval(intervalId);
    alert("Tempo acabou!");
    return;
  }

  // Atualiza os elementos HTML com o novo valor
  var segundosTexto = segundos < 10 ? "0" + segundos : segundos;
  minutosElemento.innerHTML = minutos;
  segundosElemento.innerHTML = segundosTexto;
}

// Inicia a contagem
var intervalId = setInterval(atualizaContador, 1000);

// Pegar geo
var colocarGeo = document.getElementById("#colocarGeo");
fetch('https://freegeoip.app/json/')
  .then(response => response.json())
  .then(data => {
    const city = data.city;
    colocarGeo.innerText = city;
  });