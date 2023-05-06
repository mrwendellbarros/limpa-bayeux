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
    }
     
    console.log(solicitacoes);

    form.reset();
}




