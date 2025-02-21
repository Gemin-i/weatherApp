let input = document.getElementById('input')
let btn = document.getElementById('button')
let temp = document.getElementById('temp')
let city = document.getElementById('city')
let date = document.getElementById('date')
let mainIcon = document.getElementById('mainIcon')



btn.addEventListener('click', async function() {
    weather()
})

input.addEventListener('keydown', async function(event) {
    if (event.key === 'Enter') {
        weather()
    }
})

async function weather() {
    const countryName = input.value;
    console.log(countryName)
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=3fc29b973083e0bedc35be438f824cb2&units=metric`
        );
        const data = await response.json();
        console.log(data)
        let temperature = Math.round(data.main.temp)
        temp.textContent = temperature + "\u00B0"
        mainIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        city.textContent = data.name
        dateF(data)
        
      } catch (error) {
        console.error(error);
      }
}

function dateF(data) {
    let dateObj = new Date((data.dt * 1000) + (data.timezone * 1000))
    let utcDate = dateObj.toUTCString()
    let arr = utcDate.split(" ")
    let days = {'Mon': 'Monday', 'Tue': 'Tuesday', 'Wed': 'Wednesday', 'Thu': 'Thursday', 'Fri': 'Friday', 'Sat': 'Saturday', 'Sun': 'Sunday'}  
    let month = arr[2]
    let monthDay = arr[1]
    let year = arr[3]. slice(2, 4)
    let time = arr[4].slice(0, 5)
    let weekday = arr[0].slice(0, 3)
    
    if (days[weekday]) {
        weekday = days[weekday]    
    }

    date.textContent = `${time} - ${weekday}, ${monthDay} ${month} '${year}`
    
}