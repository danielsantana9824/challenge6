const id = "2172797";
const city = "Louisa";

// const test = $('#data');

const test = document.getElementById("#data");



const requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city},id=${id}&cnt=6&appid=`;

function save() {
    console.log("heree");

}


function getInformation() {

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // console.log(data);
             let ver = data.list;

             for (let i = 0; i < ver.length; i++) {
                console.log(ver[i].wind.speed);
                
                
             }
        
        console.log(ver);

        });
}

getInformation();