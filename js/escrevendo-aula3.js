var button = document.querySelector("button");

button.onclick = function () {
  var nome = prompt("Qual é o comando para clonar o git?");
  if ((nome == "git clone")) {
    alert("O " + nome + ", serve para iniciar o git. Parabéns você acertou!");
  }
  else
  {
    alert("O" + nome +" nao serve! ")
  }
  window.location="aula4.html";
};
