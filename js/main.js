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
    <div id="cards" class= "">
    <div class="row">
      <div class="col s12 m6">
        <div class="card">
          <div class="card-header">
            <h5 class="card-title">Cep: ${solicitacao.cep}</h5>
          </div>
          <div class="card-body">
            <p class="card-text">Endereço: ${solicitacao.endereco}</p>
            <p class="card-text">Motivo da solicitação: ${solicitacao.justificativa}</p>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  }

window.submitHandler = submitHandler;
window.cepMascara = cepMascara;

solicitacoes.forEach((solicitacao) => insertSolicitacaoCard(solicitacao));
