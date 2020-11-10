const secondsDiv = document.getElementById('seconds');
const minutesDiv = document.getElementById('minutes');
const hoursDiv = document.getElementById('hours');
/*
  allNumbers gera através do método Array.from um array, de acordo com o 
  comprimento passado, desta forma, gerando um array com 12 posições. 
  O valor inicial do array é 30 e o final sendo 360.
*/ 
const allNumbersToTransform = Array.from({ length: 12 }, (v, k) => (k + 1) * 30);

//Executar a função updateOfClock a cada 1 segundo.
setInterval(updateOfClock, 1000);

/*
  É feito um loop na variável allNumbers para criar o html com os horários definidos 
  utilizando o transform rotate para deixar no formato correto.
*/ 
allNumbersToTransform.map((item, index) => (
  document.getElementById("updateOfClock").innerHTML +=
  `<div class='num' style="transform: rotate(${item}deg)">` +
  `<div style="transform: rotate(${-item}deg)">` +
  (index + 1) +
  "</div>" +
  "</div>"
));

/*
  A função utiliza os elementos de Date para contabilizar os segundos, minutos e
  desta forma organizando os ponteiros para cada um utilizando o transform.
*/ 

function updateOfClock() {
  const date = new Date();
  const seconds = date.getSeconds() / 60;
  const minutes = (date.getMinutes() + seconds) / 60;
  const hours = (date.getHours() + minutes) / 12;

  secondsDiv.style.transform = "rotate(" + (seconds * 360) + "deg)";
  minutesDiv.style.transform = "rotate(" + (minutes * 360) + "deg)";
  hoursDiv.style.transform = "rotate(" + (hours * 360) + "deg)";
}

updateOfClock();