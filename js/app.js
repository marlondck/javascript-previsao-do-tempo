const cityForm = document.querySelector('[data-js="change-location"]')
const cityNameContainer  = document.querySelector('[data-js="city-name"]')
const cityWeatherContainer  = document.querySelector('[data-js="city-weather"]')
const cityTemperatureContainer  = document.querySelector('[data-js="city-temperature"]')
const cityCard = document.querySelector('[data-js="city-card"]')

let timeImg = document.querySelector('[data-js="time"]')
let timeIconContainer = document.querySelector('[data-js="time-icon"]')

const showCityCard = () => {
  if(cityCard.classList.contains('d-none')) {
    cityCard.classList.remove('d-none')
  }
}

const showCityWeatherInfo = async cityName => {
  const [{ Key, LocalizedName }] = await getCityData(cityName)
  const [{ WeatherText, Temperature, IsDayTime, WeatherIcon }] = await getCityDataWeather(Key)
  const timeIcon = `<img src="./src/icons/${WeatherIcon}.svg"/>`

  timeImg.src = IsDayTime ? './src/day.svg' : './src/night.svg'
  timeIconContainer.innerHTML = timeIcon
  cityNameContainer.textContent =  LocalizedName
  cityWeatherContainer.textContent = WeatherText
  cityTemperatureContainer.textContent = Temperature.Metric.Value
}

cityForm.addEventListener('submit', e => {
  e.preventDefault()

  const inputValue = e.target.city.value

  showCityCard()
  showCityWeatherInfo(inputValue)
 
  cityForm.reset()  
})