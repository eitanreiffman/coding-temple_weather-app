// F = (({Kelvin Data}-273.15)*1.8)+32

// var myAPIKey = '2b221b6a43f10f3fef621452833698fe'

let welcomeHeader = document.getElementById('welcomeHeader');

function handleWelcomeEvent(event){
    console.log(event);
    if (welcomeHeader.className === 'fs-1 m-5 p-4 badge bg-primary'){
        welcomeHeader.className = 'fs-1 m-5 p-4 badge bg-warning-subtle text-secondary';
    } else {
        welcomeHeader.className = 'fs-1 m-5 p-4 badge bg-primary';
    };
};

welcomeHeader.addEventListener('mouseover', handleWelcomeEvent);

let form = document.getElementById('cityForm');

// let weatherHeader = document.getElementById('weatherHeader')

async function handleSubmitEvent(event){
    event.preventDefault();
    weatherHeader.innerHTML = ''
    weatherColumn1.innerHTML = ''
    weatherColumn2.innerHTML = ''
    weatherColumn3.innerHTML = ''
    let cityName = event.target.cityName.value;
    let cityWeather = await getCityWeather(cityName);
    console.log(cityWeather)
    if (cityWeather.name !== undefined){
        weatherHeader.innerHTML = `Here's The Weather Info For ${cityWeather.name}:`
    } else {
        weatherHeader.innerHTML = "Sorry, the city you entered is invalid. Please try again"
    };
    buildCardHigh(cityWeather);
    buildCardLow(cityWeather);
    buildCardFeelsLike(cityWeather);
    event.target.cityName.value = '';
};

form.addEventListener('submit', handleSubmitEvent);

async function getCityWeather(cityName){
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${myAPIKey}`);
    let data = await response.json();
    return data;
};


function buildCardHigh(cityWeather){
    let cardHigh = document.createElement('div');
    cardHigh.className = 'card';
    cardHigh.style = 'width: 14rem; height: 14rem;';
    
    let cardHighBody = document.createElement('div');
    cardHighBody.className = 'card-body bg-danger';
    
    let cardHighTitle = document.createElement('h4');
    cardHighTitle.className = 'card-title';
    cardHighTitle.innerHTML = 'High';
    
    let cardHighText = document.createElement('h1');
    cardHighText.className = 'card-text';
    cardHighText.style = 'font-size: 8em;';
    cardHighText.innerHTML = parseInt((((cityWeather.main.temp_max)-273.15)*1.8)+32)

    cardHighBody.append(cardHighTitle);
    cardHighBody.append(cardHighText);
    cardHigh.append(cardHighBody);

    let weatherColumn1 = document.getElementById('weatherColumn1');
    weatherColumn1.append(cardHigh);
};

function buildCardLow(cityWeather){
    let cardLow = document.createElement('div');
    cardLow.className = 'card';
    cardLow.style = 'width: 14rem; height: 14rem;';
    
    let cardLowBody = document.createElement('div');
    cardLowBody.className = 'card-body bg-info-subtle';
    
    let cardLowTitle = document.createElement('h4');
    cardLowTitle.className = 'card-title';
    cardLowTitle.innerHTML = 'Low';
    
    let cardLowText = document.createElement('h1');
    cardLowText.className = 'card-text';
    cardLowText.style = 'font-size: 8em;';
    cardLowText.innerHTML = parseInt((((cityWeather.main.temp_min)-273.15)*1.8)+32)
    
    cardLowBody.append(cardLowTitle);
    cardLowBody.append(cardLowText);
    cardLow.append(cardLowBody);

    let weatherColumn2 = document.getElementById('weatherColumn2');
    weatherColumn2.append(cardLow);
};

function buildCardFeelsLike(cityWeather){
    let cardFeelsLike = document.createElement('div');
    cardFeelsLike.className = 'card';
    cardFeelsLike.style = 'width: 14rem; height: 14rem;';
    
    let cardFeelsLikeBody = document.createElement('div');
    cardFeelsLikeBody.className = 'card-body bg-success-subtle';
    
    let cardFeelsLikeTitle = document.createElement('h4');
    cardFeelsLikeTitle.className = 'card-title';
    cardFeelsLikeTitle.innerHTML = 'Feels Like';
    
    let cardFeelsLikeText = document.createElement('h1');
    cardFeelsLikeText.className = 'card-text';
    cardFeelsLikeText.style = 'font-size: 8em;';
    cardFeelsLikeText.innerHTML = parseInt((((cityWeather.main.feels_like)-273.15)*1.8)+32)
    
    cardFeelsLikeBody.append(cardFeelsLikeTitle);
    cardFeelsLikeBody.append(cardFeelsLikeText);
    cardFeelsLike.append(cardFeelsLikeBody);
    
    let weatherColumn3 = document.getElementById('weatherColumn3');
    weatherColumn3.append(cardFeelsLike);
};

// Mockup of Weather Display in HTML

/* <div class="row mt-5" id="weatherDisplay">
    <div class="col-4 d-flex justify-content-center">
        <div class="card" style="width: 14rem; height: 14rem;">
            <div class="card-body">
            <h4 class="card-title">High</h4>
            <h1 class="card-text" style="font-size: 8em;">67</h1>
            </div>
        </div>
    </div>
    <div class="col-4 d-flex justify-content-center">
        <div class="card" style="width: 14rem; height: 14rem;">
            <div class="card-body">
            <h4 class="card-title">Low</h4>
            <h1 class="card-text" style="font-size: 8em;">45</h1>
            </div>
        </div>  
    </div>
    <div class="col-4 d-flex justify-content-center">
        <div class="card" style="width: 14rem; height: 14rem;">
            <div class="card-body">
            <h4 class="card-title">Feels Like</h4>
            <h1 class="card-text" style="font-size: 8em;">46</h1>
            </div>
        </div>
    </div>
</div> */
