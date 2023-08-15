let counter1 = 1;
setInterval(function() {
  document.getElementById('idradio' + counter1).checked = true;
  counter1++;
  if (counter1 > 3) {
    counter1 = 1;
  }
}, 3000);

let counter2 = 4;
setInterval(function() {
  document.getElementById('idradio' + counter2).checked = true;
  counter2++;
  if (counter2 > 6) {
    counter2 = 4;
  }
}, 3000);

let counter3 = 7;
setInterval(function() {
  document.getElementById('idradio' + counter3).checked = true;
  counter3++;
  if (counter3 > 9) {
    counter3 = 7;
  }
}, 3000);

let counter4 = 10;
setInterval(function() {
  document.getElementById('idradio' + counter4).checked = true;
  counter4++;
  if (counter4 > 12) {
    counter4 = 10;
  }
}, 3000);

const botaoMobile = document.getElementById('menuMobile');
botaoMobile.addEventListener('click', alternaMenuMobile);

function alternaMenuMobile(){
  const nav = document.getElementById('nav');
  nav.classList.toggle('ativarMenu');
  if(nav.classList.contains('ativarMenu')){
    document.getElementById('iconeMenu').src = "/img/FecharMenuMobile.svg";
  } else {
    document.getElementById('iconeMenu').src = "/img/AbrirMenuMobile.svg";
  }

}