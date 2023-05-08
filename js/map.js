
function buscaLongitudeLatitude() {
    let cep = document.getElementById("cep").value;
    cep.replace("-", "")
    if (cep != "") {
        let url = `https://brasilapi.com.br/api/cep/v2/${cep}`;

        let req = new XMLHttpRequest();
        req.open("GET", url);
        req.send();

        // tratando a resposta da requisição
        req.onload = function ()  {
            let endereco = JSON.parse(req.response);
            var lati = endereco.location.coordinates.latitude;
            var long = endereco.location.coordinates.longitude;
            buscaMap(long, lati);
        }
    }
}


function buscaMap(longitude, latitude) {
    var long = longitude
    var lati = latitude
    var map = L.map('mapid').setView([long, lati], 13);

            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            L.marker([long, lati]).addTo(map)
            .bindPopup('A pretty CSS popup.<br> Easily customizable.')
            .openPopup();
}

window.onload = function() {
    let txtcep = document.getElementById('cep');
    txtcep.addEventListener("blur", buscaLongitudeLatitude);
}