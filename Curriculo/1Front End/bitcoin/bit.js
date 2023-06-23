function buscar(){
    var seletor = document.getElementById('moeda').value;
    var resultado = document.getElementById('resultado');

    

    fetch('https://api.coingecko.com/api/v3/simple/price?ids='+seletor+'&vs_currencies=brl')
    .then(response => response.json())
    .then(data => {

        var preco = data[seletor].brl;
        resultado.textContent = formatar(preco);
        mudarImagem(seletor);

        
    }).catch(error => resultado.textContent = error);
}

function formatar(valor){
    valor = Number(valor).toFixed(2).replace('.',',');
    valor = "R$ "+valor;


    return valor;
}
function mudarImagem(seletor){
    var moeda = document.getElementById('imagem');
    if(seletor == "bitcoin"){
    moeda.innerHTML = '<img width="200" src="https://static.vecteezy.com/system/resources/previews/008/822/064/original/3d-design-bitcoin-cryptocurrency-white-background-free-png.png">'
    }
else if(seletor == "ethereum"){
    moeda.innerHTML = '<img width="200" src="https://drakemall-files-new.s3.eu-central-1.amazonaws.com/Ethereum-ckmwgdvb000su01ow1rpi3tne.png">'
}
else if(seletor == "litecoin"){
    moeda.innerHTML = '<img width="200" src="https://drakemall-files-new.s3.eu-central-1.amazonaws.com/Litecoin-ckmwgnppx00t101owdoqwfjlx.png">'
}
else if(seletor == "dogecoin"){
    moeda.innerHTML = '<img width="200" src="https://static.wixstatic.com/media/c9f345_03ddc283f78f4f43b4528ec0e1c3995d~mv2.png/v1/fill/w_2500,h_2500,al_c/c9f345_03ddc283f78f4f43b4528ec0e1c3995d~mv2.png">'
}
}
