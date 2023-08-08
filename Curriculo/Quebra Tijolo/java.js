//definir área do canvas
var canvas = document.getElementById("gameCanvas");
var desenho = canvas.getContext("2d");

//configurar rebatedor

var raqueteAltura = 7;
var raqueteLargura = 75;
var raqueteX = (canvas.width - raqueteLargura) / 2;
var velocidadeRaquete = 7;
 

//configurar a bola

var bolaRadius = 10;
var bolaX = canvas.width / 2;
var bolaY = canvas.height - 30;
var bolaDX = 2;
var bolaDY = -3;

var tijolosPorLinha = 3;
var tijolosPorColuna = 8;
var tijolosLargura = 60;
var tijolosAltura = 20;
var tijolosEspacamento = 8;
var espacamentoSuperiorQuadro = 30;
var espacamentoEsquerdoQuadro = 30;
var tijolos = [];

var totalPontuacao = tijolosPorLinha * tijolosPorColuna * 10;
var pontuacao = 0;

function facil(){
    raqueteLargura = 90;
    tijolosPorLinha = 2;
    tijolosPorColuna = 5;
    tijolosLargura = 60;
    tijolosAltura = 20;
    bolaRadius = 10;      //tamanho da bola
    bolaDX = 2;           //velocidade da bola direita/esquerda
    bolaDY = -2;          //velocidade da bola acima/abaixo

    totalPontuacao = tijolosPorLinha * tijolosPorColuna * 10;
    pontuacao = 0;
    iniciarTijolos();

}


function medio(){
    raqueteLargura = 75;
    tijolosPorLinha = 3;
    tijolosPorColuna = 7;
    tijolosLargura = 60;
    tijolosAltura = 20;
    bolaRadius = 12;      //tamanho da bola
    bolaDX = 2;           //velocidade da bola direita/esquerda
    bolaDY = -3;          //velocidade da bola acima/abaixo

    totalPontuacao = tijolosPorLinha * tijolosPorColuna * 10;
    pontuacao = 0;
    iniciarTijolos();

}

function dificil(){
    raqueteLargura = 70;
    tijolosPorLinha = 4;
    tijolosPorColuna = 10;
    tijolosLargura = 45;
    tijolosAltura = 20;
    bolaRadius = 10;      //tamanho da bola
    bolaDX = 3;           //velocidade da bola direita/esquerda
    bolaDY = -3;          //velocidade da bola acima/abaixo

    totalPontuacao = tijolosPorLinha * tijolosPorColuna * 10;
    pontuacao = 0;
    iniciarTijolos();

}

function impossivel(){
    raqueteLargura = 70;
    tijolosPorLinha = 9;
    tijolosPorColuna = 16;
    tijolosLargura = 33;
    tijolosAltura = 20;
    bolaRadius = 10;      //tamanho da bola
    bolaDX = 4;           //velocidade da bola direita/esquerda
    bolaDY = -6;          //velocidade da bola acima/abaixo

    totalPontuacao = tijolosPorLinha * tijolosPorColuna * 10;
    pontuacao = 0;
    iniciarTijolos();

}












function iniciarTijolos(){




for(var coluna = 0; coluna < tijolosPorColuna; coluna++ ){
    tijolos[coluna] = []

    for (var linha = 0; linha < tijolosPorLinha; linha ++){

        tijolos[coluna][linha] = {x:5, y:5, ativo:1 }
    }
  
  }

}
iniciarTijolos();

 
var setaDireita = false;
var setaEsquerda = false;
 
document.addEventListener("keydown", descerDaTecla);                                                                          
document.addEventListener("keyup", subirDaTecla);

// TECLA

function descerDaTecla(tecla){

    if(tecla.key === "Right" || tecla.key === "ArrowRight" ){
        setaDireita = true;
     }else if(tecla.key === "Left" || tecla.key === "ArrowLeft"){
        setaEsquerda = true;
        }

    }
    function subirDaTecla(tecla){
        if(tecla.key === "Right" || tecla.key === "ArrowRight" ){
            setaDireita = false;
         }else if(tecla.key === "Left" || tecla.key === "ArrowLeft"){
            setaEsquerda = false;
         }
    }


//RAQUETE

function desenharRaquete(){
    desenho.beginPath();
    desenho.rect(raqueteX, canvas.height - raqueteAltura, raqueteLargura, raqueteAltura);
    desenho.fillStyle = "rgb(125, 60, 168)";
    desenho.fill();
    desenho.closePath();
    
}

//BOLA

function desenharBola(){
    desenho.beginPath();
    desenho.arc(bolaX, bolaY, bolaRadius, 0, Math.PI * 2);
    desenho.fillStyle = "black";
    desenho.fill();
    desenho.closePath();
}

//TIJOLOS

function desenharTijolos(){
    for(var coluna=0; coluna < tijolosPorColuna; coluna++){
        for(var linha=0; linha < tijolosPorLinha; linha ++){

            if(tijolos[coluna][linha].ativo == 1){
                
                var tijoloX = (coluna * (tijolosLargura + tijolosEspacamento)+ espacamentoEsquerdoQuadro);
                var tijoloY = (linha * (tijolosAltura + tijolosEspacamento)+ espacamentoSuperiorQuadro);

                tijolos[coluna][linha].x = tijoloX;
                tijolos[coluna][linha].y = tijoloY;

                desenho.beginPath();
                desenho.rect(tijoloX, tijoloY, tijolosLargura, tijolosAltura);
                desenho.fillStyle = "rgb(201, 123, 142)";
                desenho.fill();
                desenho.closePath();


                

            }
        }
    }
}

//COLISAO

function detectarColisao(){
    for(var coluna=0; coluna < tijolosPorColuna; coluna++){
        for(var linha=0; linha < tijolosPorLinha; linha++){

            var tijolo = tijolos[coluna][linha];

            if(tijolo.ativo === 1){

                if(bolaX > tijolo.x
                    && bolaX - bolaRadius < tijolo.x + tijolosLargura
                    && bolaY + bolaRadius > tijolo.y
                    && bolaY - bolaRadius < tijolo.y + tijolosAltura){
                        bolaDY = -bolaDY;
                        tijolo.ativo = 0;
                        tela = document.getElementById("ponto");
                        pontuacao = pontuacao + 10;
                        tela.innerHTML = "Score: "+ pontuacao;
                        gerarEfeitoSonoro('moeda.mp3');
                        

                        if(pontuacao === totalPontuacao){
                            vitoria();
                        }
                    }
                }
            }
        }
    }


    contador = 0;


//GAMEOVER

function gameover(){
    var gameover = document.getElementById("gameover");
    gameover.style.display = "block";
     
    if(contador < 1){
        gerarEfeitoSonoro('gameOver.mp3')

        bolaDX = 0;
        bolaDY = 0;

    }
    contador = contador + 1;

}

//REINICIAR

function reiniciar(){
    document.location.reload();

}

//VITORIA

function vitoria(){
    var mensagem = document.getElementById("vitoria");
    mensagem.style.display = "block";
    gerarEfeitoSonoro('vitoria.mp3')

    bolaDX = 0;
    bolaDY = 0;

}

//SOM

function gerarEfeitoSonoro(som){
    var contexto = new (window.AudioContext)();
    var requisicao = new XMLHttpRequest();
    requisicao.open('GET',som,true);
    requisicao.responseType = 'arraybuffer';

    requisicao.onload = function(){ 
        contexto.decodeAudioData(requisicao.response, function( buffer ){ 
            var fonte = contexto.createBufferSource();
            fonte.buffer = buffer;
            fonte.connect(contexto.destination);
            fonte.start(0);
         });
    }
    requisicao.send();
}

function desenhar(){
    desenho.clearRect(0 ,0, canvas.width, canvas.height);
    desenharRaquete();
    desenharBola();
    desenharTijolos();
    detectarColisao();

    if (bolaX + bolaDX > canvas.width - bolaRadius || bolaX + bolaDX < bolaRadius){
        
        bolaDX = -bolaDX;

        gerarEfeitoSonoro('lateral.mp3');

    }

    if(bolaY + bolaDY < bolaRadius){

        bolaDY = -bolaDY;

    } else if(bolaY + bolaRadius + bolaDY > canvas.height - bolaRadius){

        if(bolaX > raqueteX && bolaX < raqueteX + raqueteLargura){

            bolaDY = -bolaDY;

            }else{

                gameover();
            }
        }

        if(setaDireita === true && raqueteX < canvas.width - raqueteLargura){
            raqueteX = raqueteX + velocidadeRaquete;
    
        }
        else if(setaEsquerda === true && raqueteX > 0){
            raqueteX = raqueteX - velocidadeRaquete;
        }
        bolaX = bolaX + bolaDX;
        bolaY = bolaY + bolaDY;

        requestAnimationFrame(desenhar)

    }

 
    





desenhar(); 