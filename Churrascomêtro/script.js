// Carne - 400 gramas por pessoa + de 6 horas - 650
// Cerveja - 1200 ml por pessoa + 6 horas - 2000 ml
// Refrigeramte/agua - 1000ml por pessoa + 6 horas 1500 ml

// Crianças valem por 0,5

let inputAdultos = document.getElementById('adultos');
let inputCrianca = document.getElementById('crianca');
let inputDuracao = document.getElementById('duracao');

let resultado = document.getElementId('resultado');

function testeFuncao(){
    console.log('teste')
}


function calcular() {
    let adultos = inputAdultos.value;
    let criancas = inputCrianca.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qtdTotalCerveja = cervejaPP(duracao) * adultos;
    let qtdTotalBebida = bebidaPP(duracao) * adultos + (bebidaPP(duracao) / 2 * criancas);

    console.log(qtdTotalCarne)
}

function carnePP(duracao){
    let carne = 400;
    if(duracao >= 6){
        return  650;
    } else {
        return 400;
    }
}

function cervejaPP(duracao){
    let cerveja = 1200;
    if(duracao >= 6){
        return  2000;
    } else {
        return 1200;
    }
}

function bebidaPP(duracao){
    let bebida = 1000;
    if(duracao >= 6){
        return  1500;
    } else {
        return 1000;
    }
}