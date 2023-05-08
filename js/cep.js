function buscaCep(){
    let cep = document.getElementById('cep').value;
    if (cep.length == 5) {
        cep = cep - '-' 
    }
    if ( cep !== "") {
        let url = `https://brasilapi.com.br/api/cep/v2/${cep}`;

        let req = new XMLHttpRequest();
        req.open("GET", url);
        req.send();

        // tratando a resposta da requisição
        req.onload = function() {
            if(req.status === 200) {
                let endereco = JSON.parse(req.response);
                document.getElementById("endereco").value = endereco.street;
                /*document.getElementById("").value = endereco.location.coordinates.longitude;
                document.getElementById("").value = endereco.location.coordinates.latitude;*/
            } else if (req.status === 404) {
                alert("CEP inválido!")
            } else {
                alert("Erro ao fazer a requisição!")
            }
        }
    }
}

window.onload = function() {
    let txtcep = document.getElementById('cep');
    txtcep.addEventListener("blur", buscaCep);
}