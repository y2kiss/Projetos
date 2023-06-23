var jogador = "x";

function jogar(celula){
    //alert("funcionou!");

 if(celula.innerHTML == ""){

    celula.innerHTML = jogador;

    if(jogador == "x"){
        jogador = "o";
        celula.style.background = 'rgb(157, 154, 197)'; 
    }else{
        jogador = "x";
        celula.style.background = 'rgb(164, 194, 212)';
    }
 }

}

function reiniciar(){
    //alert("teste");
    window.location.reload();
}

const nomes = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

function gerarBatalha(){

    const nome1 = nomes[ Math.floor( Math.random() * nomes.length ) ];
    const nome2 = nomes[ Math.floor( Math.random() * nomes.length ) ];
    //alert(nome1);

    while(nome1 === nome2){
        gerarBatalha();
    }
    document.getElementById('jogador1').textContent = nome1;
    document.getElementById('jogador2').textContent = nome2; 
}

function adicionar() {
    // alert('funcionou')
    var nome = document.getElementById("nome").value;
    // alert(nome)
    nomes.push(nome);

    listar()
}

function listar(){
    // alert('listar')
    var listagem = document.getElementById("lista");
    listagem.innerHTML = "";

    for(var i = 0; i < nomes.length; i++){
        // alert('i');
        var item = document.createElement("li");
        var nomeItem = nomes[i];
        item.innerHTML = nomeItem;
        listagem.appendChild(item);                                                                                                         
    }
}

