var button = document.querySelector("button");

button.onclick = function () {
  var nome = prompt("Qual é o comando para commitar o git?");
  if ((nome == "git commit")) {
    alert("O " + nome + ", serve para iniciar o git. Parabéns você acertou!");
  }
  else
  {
    alert("O" + nome +" nao serve! ")
  }
  window.location="aula5.html";
};
