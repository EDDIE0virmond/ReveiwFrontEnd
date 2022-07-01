var button = document.querySelector("button");

button.onclick = function () {
  var nome = prompt("Qual é o comando para propor o repositorio remoto o git?");
  if ((nome == "git remote")) {
    alert("O " + nome + ", serve para iniciar o repositorio remoto. Parabéns você acertou!");
  }
  else
  {
    alert("O" + nome +" nao serve! ")
  }
  window.location="aula3.html";
};
