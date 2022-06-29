var button = document.querySelector("button");

button.onclick = function () {
  var nome = prompt("Qual é o comando para mandar para o git?");
  if ((nome == "git push")) {
    alert("O " + nome + ", serve para iniciar o git. Parabéns você acertou!");
  }
  else
  {
    alert("O" + nome +" nao serve! ")
  }
  window.location="aula6.html";
};
