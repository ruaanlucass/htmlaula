function mostrarnome() {
    var nome = document.getElementById("nome").value;

    document.getElementById("resposta").textContent = "Olá " + nome + " Seja Bem Vind@";
}
var mostrar = document.getElementById("mostrar");
mostrar.addEventListener("click", mostrarnome);