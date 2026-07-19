'use strict';
const cl = console.log

cl('testando')

const extratoBancario = {
    datas: [
        "15 Jul 2026", 
        "14 Jul 2026", 
        "12 Jul 2026", 
        "11 Jul 2026", 
        "10 Jul 2026"
    ],
    descricoes: [
        "Pix Recebido - João Silva", 
        "Supermercado Pão de Açúcar", 
        "Posto Ipiranga Combustíveis", 
        "Assinatura Netflix", 
        "Pix Recebido - Empresa XYZ (Salário)"
    ],
    categorias: [
        "Transferência", 
        "Alimentação", 
        "Transporte", 
        "Lazer", 
        "Salário"
    ],
    valores: [
        150.00, 
        -243.50, 
        -80.00, 
        -55.90, 
        4200.00
    ]
};

// Elements
const containerMovements = document.querySelector('.container-tabelaDados');

// ------ 154 - Creating DOM Elements ------
const mostrarMovimentacao = function(arg){
  containerMovements.innerHTML = ''; //limpa o containerMovements antes de inserir os elementos
  // console.log(containerMovements.innerHTML)

  arg.forEach(function(value, index){
    console.log(value,index)
    const type = value > 0 ? 'entrada' : 'saida'
    const constHtml = ` 
        <tr>
            <td>15 Jul 2026</td>
            <td>Pix Enviado/Recebido - João Silva</td>
            <td><span class="categoria">??</span></td>
            <td class="text-right ${type}">${value}</td>
        </tr>
    `
    containerMovements.insertAdjacentHTML('afterbegin',constHtml)
    // containerMovements.insertAdjacentHTML('beforeend',constHtml)

  })
}

mostrarMovimentacao(extratoBancario.valores)