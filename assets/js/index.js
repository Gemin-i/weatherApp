let input = document.getElementById('input')
let btn = document.getElementById('button')
let weather = document.getElementById('description')

btn.addEventListener('click', async function() {
    const countryName = input.value;
    console.log(countryName)
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=3fc29b973083e0bedc35be438f824cb2&units=metric`
        );
        const data = await response.json();
        console.log(data)
        weather.innerHTML = data.weather[0].icon
      } catch (error) {
        console.error(error);
      }
})
    

