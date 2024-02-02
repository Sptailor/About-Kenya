
document.addEventListener("DOMContentLoaded",main);

function main(){

let pics=["images/Ke-city.jpeg","images/Ke-rift.jpeg","images/Ke-victoria.png","images/Ke-wild.jpeg","images/Ke-clim.png"];

let desc=["Nairobi City",'Rift Valley','Lake Victoria','Sunset at a Kenyan national park','Climate across Kenya'];

let pic_location=document.getElementById("rep-img");
let para=document.getElementById("desc");
const cities=document.getElementById("city");
let landform=document.getElementById("land");
let rivers=document.getElementById("lake");
let wild=document.getElementById("wildlife");


function get_photo_src(k){
pic_location.src=pics[k-1];

};
cities.addEventListener("click",function(){
    get_photo_src(1)
    para.textContent=desc[0]

});


landform.addEventListener("click",function(){get_photo_src(2);
    para.textContent=desc[1];
});

rivers.addEventListener("click",function(){get_photo_src(3);
    para.textContent=desc[2];
});
wild.addEventListener("click",function(){get_photo_src(4);
    para.textContent=desc[3];
});

const clim=document.getElementById("climate");
clim.addEventListener("click",function(){
            get_photo_src(5);
            para.textContent=desc[4];
            const apiUrl = "https://api.open-meteo.com/v1/forecast?latitude=-1.2833&longitude=36.8167&current=temperature_2m,relative_humidity_2m,rain,weather_code,wind_speed_10m,wind_direction_10m&temperature_unit=fahrenheit&wind_speed_unit=mph&forecast_days=1";
        
            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                      const weatherInfoDiv = document.getElementById('climateBox');

    const temperature = data.current.temperature_2m;
    const humidity = data.current.relative_humidity_2m;
    const rain = data.current.rain;
    
    const windSpeed = data.current.wind_speed_10m;
    const windDirection = data.current.wind_direction_10m;

    const content = `


                    <p><u>Current climate</u></p>
                    <p> City: Nairobi<p>
                    <p>Temperature: ${temperature}°F</p>
                    <p>Humidity: ${humidity}%</p>
                    <p>Rain: ${rain}mm</p>
                    
                    <p>Wind Speed ${windSpeed}mp/h</p>
                    <p>Wind Direction: ${windDirection}°</p>
                    <p>source: Open-Meteo.com</p>
            
                    

                `;



    
    
    weatherInfoDiv.innerHTML = content;
                })
                .catch(error => console.error('Error fetching weather data:', error));

            
        });


}

