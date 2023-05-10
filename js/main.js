function cepMascara(cep) {
    if (cep.value.length == 5) {
        cep.value = cep.value + '-' 
    }
}

const solicitacoes = [];

function submitHandler(event) {
    event.preventDefault();
  
    const form = document.querySelector('form');
  
    const novaSolicitacao = Object.fromEntries(new FormData(form));

    if (solicitacoes.filter(solicitacao => solicitacao.cep == novaSolicitacao.cep).length == 0){
        solicitacoes.push(novaSolicitacao);
        insertSolicitacaoCard(novaSolicitacao);
    }
     
    console.log(solicitacoes);

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

  /*<div class="row">
            <div class="col s12 m6">
            <div class="card">
            <div class="card-image">
            <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.626466790964!2d-34.861530524183976!3d-7.16910607034859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7acc279d9d6f405%3A0xa0e0f84355a1b9cb!2sR.%20Ant%C3%B4nio%20Ximenes%20-%20Jos%C3%A9%20Am%C3%A9rico%20de%20Almeida%2C%20Jo%C3%A3o%20Pessoa%20-%20PB%2C%2058073-410!5e0!3m2!1sen!2sbr!4v1683496178263!5m2!1sen!2sbr"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <span class="card-title">Cep: ${solicitacao.cep}</span>
            </div>
            <div class="card-content">
            <span>Endereço:${solicitacao.endereco}</span>
            <p>Motivo da solicitação: ${solicitacao.justificativa}</p>
            </div>
            </div>
            </div>
            </div>*/