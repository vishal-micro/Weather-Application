const  apiKey = "32383ed1986b1d8d13cb86029501fa99";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const wheatherIcon = document.querySelector(".wheather-icon"); 

async function cheakWheather(city){
    const response = await fetch(apiurl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".wheather").style.display = "none";
    }
    else{
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if(data.weather[0].main == "Clouds"){
            wheatherIcon.src = "images/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            wheatherIcon.src = "images/clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            wheatherIcon.src = "images/rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            wheatherIcon.src = "images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            wheatherIcon.src = "images/mist.png";
        }  

        document.querySelector(".wheather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", ()=> {
cheakWheather(searchBox.value);
})