var button = document.querySelector("button");

button.onclick = function () {
  var nome = prompt("Qual é o comando para listar os documentos da pasta?");
  if ((nome == "ls")) {
    alert("O " + nome + ", serve para iniciar o git. Parabéns você acertou!");
  }
  else
  {
    alert("O " + nome +" nao serve! ")
  }
  window.location="aula8.html";
};