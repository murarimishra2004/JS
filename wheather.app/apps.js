const apiKey = "54687443c77ff60ed2dd7a27037bba96";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox= document.querySelector(".search input");
const searchbtn= document.querySelector(".search button");

async function checkWeather(city) {
    const response = await fetch(apiurl + city +`&appid=${apiKey}`);
    if(response.status ==404){
        alert("Invalid city name")
    }
    const data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp +"°c";
    document.querySelector(".humiditypara").innerHTML = data.main.humidity +"%";
    document.querySelector(".windpara").innerHTML = data.wind.speed +" Km/h";
}


searchbtn.addEventListener("click" ,()=>{
    checkWeather(searchbox.value);

})
