var frase = "Os braços de uma mãe são feitos de ternura, e os filhos dormem profundamente neles.";

function gerarFrase(){
    var texto = document.getElementById("frase");
    texto.innerHTML = frase;
}

function lerFrase(){
    var som = window.speechSynthesis;
    var discurso = new SpeechSynthesisUtterance(frase);
    som.speak(discurso);
}