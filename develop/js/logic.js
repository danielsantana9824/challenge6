const id = "2172797";
const apeKey = "65c7600db9ad1618aa7165b36f2c4a6c";
let city = "";

const titleId = document.getElementById("title");
const tempId = document.getElementById("temp");
const windId = document.getElementById("wind");
const humidityId = document.getElementById("humidity");
const cardId = document.querySelector(".cards");
const daysTemp = document.querySelector('.days');

function getInformation() {

    if (city) {
        city = document.getElementById("city").value;
    } else {
        city = "Miami";
    }


    const requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city},id=${id}&cnt=6&appid=${apeKey}`;

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            const date = dayjs().format('(MM/DD/YYYY)');

            let city = data.city.name;
            let wheaterDay = data.list[0];

            let title = city + " " + date;

            let tempCal = tempCalculo(wheaterDay.main.temp);

            let temp = `Temp: ${tempCal.toFixed(2)} °F`;

            let wind = "Wind: " + wheaterDay.wind.speed + " MPH";

            let humidity = "Humidity: " + wheaterDay.main.humidity + " %";

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



            for (let i = 1; i < data.list.length; i++) {

                let temp = tempCalculo(data.list[i].main.temp);

                let fechaHoy = new Date();
                let fechaSumada = sumarDias(fechaHoy, i);

                daysTemp.innerHTML += createCard(fechaSumada, temp.toFixed(2), data.list[i].wind.speed, data.list[i].main.humidity);
            }

        });
}

getInformation();

function createCard(fechaSumada, temp, wind, humidity) {

    return `
         <div class="col-sm-4 bottom">
             <div class="card bg-primary text-white">
                 <div class="card-body">
                     <h4 class="card-title">${fechaSumada}</h4>
                     <p class="card-text">Temp: ${temp}</p>
                    <p class="card-text">Wind: ${wind}</p>
                    <p class="card-text">Humidity: ${humidity} %</p>
                 </div>
             </div>
         </div>
     `;
}

function tempCalculo(temp) {
    let FandC = (temp - 273.15) * 9 / 5 + 32;
    return FandC;
}


function sumarDias(fecha, dias) {
    let nuevaFecha = new Date(fecha);
    nuevaFecha.setDate(nuevaFecha.getDate() + dias);
    return nuevaFecha.toLocaleDateString('en-US');;
}