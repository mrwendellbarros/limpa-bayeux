


var map = L.map('mapid').setView([-7.139059, -34.931185], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

circleMap()


/*L.marker([lati, long]).addTo(map)
.bindPopup('Local com entulho/lixo.')
.openPopup();*/

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
            let lati = endereco.location.coordinates.latitude;
            let long = endereco.location.coordinates.longitude;
            circleMap(long, lati);
        }
    }
}

function circleMap(longitude, latitude) {
    var long = longitude
    var lati = latitude

    return `
    var circle = L.circle([${lati}, ${long}], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 200
    }).addTo(map);
    `
}