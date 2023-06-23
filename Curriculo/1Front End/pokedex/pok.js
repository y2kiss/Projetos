var contador= 0;
function buscar(){
    var entrada = document.getElementById("entrada").value.toLowerCase();
    
    
    if(entrada.length < 1){
        entrada = contador;

    }

    var url = "https://pokeapi.co/api/v2/pokemon/"+entrada;

   fetch(url)
   .then(response => response.json())
   .then(data => { 

    var tela = document.getElementById("tela");
    tela.innerHTML = 
    '<h1 class="pokemonName">'+ data.name +'</h1>'
    +'<p> Id:' + data.id +'</p>'
    +'<p> Tipo:' + data.types.map(type => type.type.name) +'</p>'
    +'<p> Habilidades:' + data.abilities.map(ability => ability.ability.name) + '</p>'
    +' <img class="pokemon" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/'+data.id+'.gif" > '

   

   contador = data.id;
   document.getElementById("entrada").value="";
    
    // alert("deu certo")
    

   }).catch(error => {
    var tela = document.getElementById("tela");
    tela.innerHTML = "<p> Pokémon não encontrado! </p>"+error;
   })


}
contador = 0;

    function proximo(){
        contador = contador + 1
          buscar();


    }


    function anterior(){
        contador = contador - 1;
          buscar();

       
    }