const id = "2172797";
const city = "Louisa";
const apeKey = "";

const titleId = document.getElementById("title");
const tempId = document.getElementById("temp");
const windId = document.getElementById("wind");
const humidityId = document.getElementById("humidity");


const requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city},id=${id}&cnt=6&appid=${apeKey}`;

function save() {
    console.log("heree");

}


function getInformation() {

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            const date = dayjs().format('(MM/DD/YYYY)');

            let city = data.city.name;
            let wheaterDay = data.list[0];

            let title = city + " " + date;

            let temp = "Temp: "+wheaterDay.main.temp+" °F";

            let wind = "Wind: "+wheaterDay.wind.speed+" MPH";

            let humidity = "Humidity: "+wheaterDay.main.humidity+" %";

            const titleEl = document.createElement("h1");
            titleEl.textContent = title;
            titleId.appendChild(titleEl);

            const tempEl = document.createElement("p");
            tempEl.textContent = temp;
            tempId.appendChild(tempEl);

            const windEl = document.createElement("p");
            windEl.textContent = wind;
            windId.appendChild(windEl);

            const humidityEl = document.createElement("p");
            humidityEl.textContent = humidity;
            humidityId.appendChild(humidityEl);

            let ver = data.list;

            for (let i = 1; i < data.list.length; i++) {
               console.log(data.list[i]);
               

            }

            // console.log(ver);

        });
}

getInformation();