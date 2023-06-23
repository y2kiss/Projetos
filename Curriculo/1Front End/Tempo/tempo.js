async function buscarClima(){
    var cidade = document.getElementById("cidade").value 
    var chave = '8991ce782549488a8c1ace288f2b06e3';
    var url = 'https://api.openweathermap.org/data/2.5/weather?q='+cidade+'&appid='+chave+'&units=metric';

    try{
        var resposta = await fetch(url);
        var dado = await resposta.json();
        
       var resultado = document.getElementById("resultado");
       resultado.innerHTML = 
       '<h3 class="tituloJs" > Previsão de tempo Para '+ dado.name +' </h3>' 
       +'<p> Temperatura: ' + dado.main.temp +'C° '  
       +'<p> Temperatura máxima: ' + dado.main.temp_max +'C° '  
       +'<p> Temperatura mínima: ' + dado.main.temp_min +'C° '
       +'<p> Temperatura ambiente: ' + dado.main.feels_like +'C° ' 
       +'<p> Humidade: '+ dado.main.humidity +' % '  
       +'<p> Velocidade do vento: ' + dado.wind.speed+'Km/h '
       +'<p> Nuvens: '+ dado.clouds.all +'% ' 
       +'<p> Condição: '+ dado.weather[0].description +'</p> '     
       +'<img class="imgTempo" src="https://openweathermap.org/img/wn/'+dado.weather[0].icon+'@2x.png">';
         
      



    }catch(error){
        var resultado = document.getElementsByName.ById("resultado");
        resultado.innerHTML = "<p>Erro ao buscar o clima: "+error;
    }
    

}