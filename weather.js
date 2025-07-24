let CityInput;
let cityValue;
let Actual_tempIn_C;
function Get_weather_info(){
    
    CityInput=document.querySelector(".CityInput");
    cityValue=CityInput.value;
    if(cityValue){
            let API_KEY=`***I removed my API for Privacy reasons***`;
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${API_KEY}`)
                .then(response => response.json())
                .then(data =>{ 
                if(data.cod>299){
                    throw new Error(`Something went wrong!`);
                }
                else{
                    //console.log(data);
                    
                    document.querySelector(".guide").style.display="none";
                    document.querySelector(".humidity").style.display="flex";
                    document.querySelector(".wind").style.display="flex";
                    document.querySelector(".CityName").innerHTML=data.name;
                    WeatherImage(data.weather[0].id);
                    document.querySelector(".temp_info").innerHTML=data.weather[0].description;
                    Actual_tempIn_C=data.main.temp;
                    document.querySelector(".description").innerHTML=(((Actual_tempIn_C-273).toFixed(1))+"॰C");
                    document.querySelector(".Humidity_text").innerHTML="Humidity";
                    document.querySelector(".Humiditiy_pic").innerHTML="💧";
                    document.querySelector(".Humidity_value").innerHTML=(data.main.humidity+"%");
                    document.querySelector(".wind_text").innerHTML="Wind";
                    document.querySelector(".wind_pic").innerHTML="🪁";
                    document.querySelector(".wind_value").innerHTML=(data.wind.speed+" Km/h");
                    document.querySelector(".CityInput").value="";
                    
                }})
                .catch((error) => {console.log(error.message)
                    document.querySelector(".guide").style.display="block";
                    document.querySelector(".guide").innerHTML="Something Went Wrong!";
                    document.querySelector(".guide").style.color="red";
                    document.querySelector(".humidity").style.display="none";
                    document.querySelector(".wind").style.display="none";
                    document.querySelector(".CityName").innerHTML="";
                    document.querySelector(".description").innerHTML="";
                    document.querySelector(".Humidity_text").innerHTML="";
                    document.querySelector(".temp_info").innerHTML="";
                    document.querySelector(".Humiditiy_pic").innerHTML="";
                    document.querySelector(".wind_text").innerHTML="";
                    document.querySelector(".wind_pic").innerHTML="";
                    document.querySelector(".wind_value").innerHTML="";
                    document.querySelector(".CityInput").value="";
                    document.querySelector(".images").innerHTML = "";
                });
    }
    else{
        document.querySelector(".guide").style.display="block";
        document.querySelector(".guide").innerHTML="Search for any place in USA";
        document.querySelector(".guide").style.color="black";
        document.querySelector(".humidity").style.display="none";
        document.querySelector(".wind").style.display="none";
        document.querySelector(".CityName").innerHTML="";
        document.querySelector(".description").innerHTML="";
        document.querySelector(".Humidity_text").innerHTML="";
        document.querySelector(".temp_info").innerHTML="";
        document.querySelector(".Humiditiy_pic").innerHTML="";
        document.querySelector(".wind_text").innerHTML="";
        document.querySelector(".wind_pic").innerHTML="";
        document.querySelector(".wind_value").innerHTML="";
        document.querySelector(".CityInput").value="";
        document.querySelector(".images").innerHTML = "";
    }
}


function WeatherImage(weatherID){
    if (weatherID >= 200 && weatherID < 300) {
        document.querySelector(".images").innerHTML = "⛈️";
    } else if (weatherID >= 300 && weatherID < 322) {
        document.querySelector(".images").innerHTML = "🌧️";
    } else if (weatherID >= 500 && weatherID < 532) {
        document.querySelector(".images").innerHTML = "☔";
    } else if (weatherID >= 600 && weatherID < 622) {
        document.querySelector(".images").innerHTML = "❄️";
    } else if (weatherID >= 701 && weatherID < 772) {
        document.querySelector(".images").innerHTML = "☁️";
    } else if (weatherID === 781) {
        document.querySelector(".images").innerHTML = "🌪️";
    } else if (weatherID === 800) {
        document.querySelector(".images").innerHTML = "☀️";
    } else if (weatherID >= 801 && weatherID < 805) {
        document.querySelector(".images").innerHTML = "🌥️";
    } else {
        document.querySelector(".images").innerHTML = "🌥️";
    }
}

function Expand_info(){
    document.querySelector(".Expaned_card").style.display="block";
}           
function Close_Expand_info(){
    document.querySelector(".Expaned_card").style.display="none";
}
