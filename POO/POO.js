//SEM ORIENTAÇÃO A OBJETOS
var nome1 = 'Blair';
var nome2 = 'Luce';
var nome3 = 'Daniel'

var idade1 = 20;
var idade2 = 19;
var idade3 = 20;

function falar(nome, idade){
    alert('Sem orientação a objetos: Olá sou '+ nome +' e tenho ' + idade +' anos');
}

falar(nome1, idade1);
falar(nome2, idade2);
falar(nome3, idade3);


//COM ORIENTAÇÃO A OBJETOS

//classe

class Pessoa {
    
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }   

    falar(){
        
        alert("Pessoa criada: Olá meu nome é "+this.nome+" e tenho "+ this.idade + " anos")
    }                                                                                    
}

//Instanciando Objeto
 
var Pessoa1 = new Pessoa('America', 17); 
var Pessoa2 = new Pessoa('Maxon', 18);
var Pessoa3 = new Pessoa('Mare', 19);

Pessoa1.falar();
Pessoa2.falar();
alert('Olá '+ Pessoa3.nome);

//HERANÇA E POLIMORFISMO
//criando classe PAI

class Animal {
    constructor(nome){
    this.nome = nome;
    }
    fazerBarulho(){
        alert("Fazendo barulho genérico");
    }
}

//CACHORRO
class Cachorro extends Animal {
    constructor(nome, raca){
        super(nome);
        this.raca = raca;
    }
    fazerBarulho(){
        alert("Cachorro latindo");
    }
}

//GATO
class Gato extends Animal {
    constructor(nome, cor){
        super(nome);
        this.cor = cor;
    }
    fazerBarulho(){
        alert("Gato Miando!");
    }
}

//Cachorro
var objetoCachorro = new Cachorro('Thor', 'Golden Retriever');
alert(objetoCachorro.nome);
alert(objetoCachorro.raca);
objetoCachorro.fazerBarulho();

//Gato
var objetoGato = new Gato('Paris', 'branco');
alert(objetoGato.nome);
alert(objetoGato.cor);
objetoGato.fazerBarulho();

//Encapsulamento, modificador de acesso
class contaBancaria {
    constructor(saldo){
        this._saldo = saldo; // "_" significa privado
    }
    get obterSaldo(){
        return this._saldo;
    }
    depositar(valor){
        this._saldo = this._saldo + valor;
    }
    sacar(valor){
        if(valor <= this._saldo){
            this._saldo = this._saldo - valor;
        } else {
            alert("Valor maior que o saldo!")
        }
    }
}

var minhaConta = new contaBancaria(20000);
alert(minhaConta.obterSaldo);
minhaConta.depositar(100);
alert(minhaConta.obterSaldo);
minhaConta.sacar(10000);
alert(minhaConta.obterSaldo);