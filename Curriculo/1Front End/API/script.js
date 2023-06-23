function buscar() {
    var cep = document.getElementById('cep').value;
    var url = 'https://viacep.com.br/ws/'+cep+'/json/';

    fetch(url)
    .then(Response => Response.json())
    .then(data => {
        // alert('funcionou');

        if(data.erro){
            document.getElementById('resultado').textContent = 'CEP não encontrado!';
        }else{
            document.getElementById('resultado').innerHTML = 
           
            '<strong> CEP: </strong>'+ data.cep +'<br>'
            +'<strong> Logradouro: </strong>'+ data.logadouro +'<br>'
            +'<strong> Bairro: </strong>'+ data.bairro +'<br>'
            +'<strong> Localidade: </strong>'+ data.localidade +'<br>'
            +'<strong> UF: </strong>'+ data.uf +'<br>'
            +'<strong> IBGE: </strong>'+ data.ibge +'<br>'
            +'<strong> gia: </strong>'+ data.gia +'<br>'
            +'<strong> ddd: </strong>'+ data.ddd +'<br>'
            +'<strong> siafi: </strong>'+ data.siafi +'<br>'

       

        }
        



    }).catch(error => alert('deu errado:1,'+ error));
}