import { solicitacoes } from './solicitacoes.js';

function cepMascara(cep) {
    if (cep.value.length == 5) {
        cep.value = cep.value + '-' 
    }
}

const solicitacoesCards = [];

function submitHandler(event) {
    event.preventDefault();
  
    const form = document.querySelector('form');
  
    const novaSolicitacao = Object.fromEntries(new FormData(form));

    if (solicitacoesCards.filter(solicitacao => solicitacao.cep == novaSolicitacao.cep).length == 0){
        solicitacoesCards.push(novaSolicitacao);
        insertSolicitacaoCard(novaSolicitacao);
    }
     
    console.log(solicitacoesCards);

    form.reset();
}

function insertSolicitacaoCard(solicitacao) {
    const solicitacaoCards = document.querySelector('#cards');
  
    const view = solicitacaoCard(solicitacao);
  
    solicitacaoCards.insertAdjacentHTML('beforeend', view);
  }

function solicitacaoCard(solicitacao) {
    return `            
            <div id="cards">
            <div class="row">
            <div class="col s12 m6">
                <div class="card">
                <div class="card-image">
                    <span class="card-title"> <span class="quest" >Cep:</span> ${solicitacao.cep}</span>
                </div>
                <div class="card-content">
                    <span> <span class="quest" >Endereço:</span> ${solicitacao.endereco}</span>
                    <p> <span class="quest" >Motivo da solicitação:</span> ${solicitacao.justificativa}</p>
                </div>
                </div>
            </div>
            </div>`;
  }

window.submitHandler = submitHandler;
window.cepMascara = cepMascara;

solicitacoes.forEach((solicitacao) => insertSolicitacaoCard(solicitacao));
