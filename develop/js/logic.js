const id = "2172797"
const city = ""

const requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city},id=${id}&cnt=6&appid=65c7600db9ad1618aa7165b36f2c4a6c`;

function save(){
    console.log("heree");
    
}


function getInformation() {

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        });

}
