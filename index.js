const mensagemDesaldo = 'O Herói tem de saldo de ';
const niveldoheroi=  ' está no nível de '
const quantidadeDeVitorias= 200 ;
const quantidadesDeDerrotas= 1 ;

const saldoDeVitorias= quantidadeDeVitorias-quantidadesDeDerrotas;

function ResultadoFinal (){
    if (saldoDeVitorias<=10){
        console.log(mensagemDesaldo+saldoDeVitorias+niveldoheroi+'Ferro')
    }else if (saldoDeVitorias >=11 && saldoDeVitorias<=20){
        console.log(mensagemDesaldo+saldoDeVitorias+niveldoheroi+'Bronze') 
    }else if (saldoDeVitorias >=21 && saldoDeVitorias<=50){
        console.log(mensagemDesaldo+saldoDeVitorias+niveldoheroi+'Prata') 
    }else if (saldoDeVitorias >=51 && saldoDeVitorias<=80){
        console.log(mensagemDesaldo+saldoDeVitorias+niveldoheroi+'Ouro') 
    }else if (saldoDeVitorias >=81 && saldoDeVitorias<=90){
        console.log(mensagemDesaldo+saldoDeVitorias+niveldoheroi+'Diamante') 
    }else if (saldoDeVitorias >=91 && saldoDeVitorias<=100){
        console.log(mensagemDesaldo+saldoDeVitorias+niveldoheroi+'Lendário') 
    }else{
        console.log(mensagemDesaldo+saldoDeVitorias+niveldoheroi+'Imortal') 
    }

}

ResultadoFinal()