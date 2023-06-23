alert('Olá Mundo');

var numero = -5;

if(numero > 20){
    //alert('numero maior 10');
    }else if(numero < 0){
     //alert('numero invalido);
    }else {
    //alert('numero menor que 10');

}
var contador = 0
while(contador < 5){
   // alert('numero:'+ contador);
    contador = contador + 1;
}
 var nomes = ['Fulano','Ciclano','Deltrano'];
 //alert(nomes[0]);
 
 for(contador=0; contador < nomes.length; contador++){
   // alert(nomes[1]);

    if(nomes[contador] === 'Ciclano'){
       // alert('Pessoa Encontrada!')
    }
 }
  
 function baixarEstoque(){
  alert("Baixou Estoque!");
 }

 function movimentarCaixa(){
    alert("Caixa movimentado");
 }

function fazerVenda(){
baixarEstoque();
movimentarCaixa();


//DOM
var titulo = document.getElementById('texto');
titulo.innerHTML = 'novo texto';
}
//objeto
 var pessoa = { idade:17, nome:'Kaori', altura:1.60};
 alert(pessoa.nome);



