const form = document.getElementById('form-atividade')
let linhas = ''
const imgaprovado = '<img src = "./Projeto3/images/aprovado.png" alt= "emoji celebrabdo"/> '   
const imgReprovado = '<img src = "./Projeto3/images/reprovado.png" alt= "emoji decepcionado" /> '
const notas = []
const atividade = []
const spanAprovado = '<span class = "resultado aprovado">aprovado</span>'
const spanReprovado = '<span class = "resultado reprovado">reprovado</span>'

form.addEventListener('submit', function(e){
    e.preventDefault( );

    adicionarlinha()
    atualizaTabela()
    valorFinal()
    
});

function adicionarlinha (){
    
    const nome = document.getElementById('nome');
    const nota = document.getElementById('nota');
    atividade.push(nome.value)
    notas.push(parseFloat(nota.value))


    //const soma = //
    let linha = '<tr>';
    linha += `<td>${nome.value}</td> `
    linha += `<td>${nota.value}</td>`
    linha+= `<td>${nota.value>=7 ? imgaprovado : imgReprovado}</td>`
    linha+= `<tr>`;
    linhas += linha
    nome.value = ''
    nota.value = ''
}

function atualizaTabela(){
    const corpotabela = document.querySelector('tbody')
    corpotabela.innerHTML= linhas; 
}

function valorFinal(){
    const MMF = mediaFinal()
    document.getElementById('media-valor-final').innerHTML = MMF
    document.getElementById('media-resultado-final').innerHTML = MMF>=7 ? spanAprovado : spanReprovado
}


function mediaFinal (){
    let SomaDasNotas = 0
    let i = 0 

    for(i = 0 ; i < notas.length ; i ++ ){
        SomaDasNotas += notas[i]
    }
    
    return SomaDasNotas / notas.length
}