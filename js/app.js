const cityForm = document.querySelector('[data-js="change-location"]')

cityForm.addEventListener('submit', async e => {
  e.preventDefault()

  const inputValue = e.target.city.value
  
  const [{ Key, LocalizedName }] = await getCityData(inputValue)
  const [{ WeatherText, Temperature }] = await getCityDataWeather(Key)

  cityForm.reset()  

  console.log(WeatherText, Temperature.Metric.Value)
})