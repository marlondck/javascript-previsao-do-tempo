const APIKey = 'GrZtnorC3Pt16ZH3pUQJBDD51HLyMs6j'
const baseUrl = 'http://dataservice.accuweather.com'

const getCityUrl = cityName =>
  `${baseUrl}/locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`

const getWeatherUrl = ({ Key }) => 
  `${baseUrl}/currentconditions/v1/${Key}?apikey=${APIKey}&language=pt-br`

const fetchData = async url => {
  try {
    const response = await fetch(url)

    if(!response.ok) {
      throw new Error('Não foi possível obter os dados.')
    }

    return response.json()
  } catch ({ name, message }) {
    console.log(`${name}: ${message}`)
  }
}

const getCityData = cityNameInput => fetchData(getCityUrl(cityNameInput))

const getCityDataWeather = async cityNameInput => {
  const [cityData] = await getCityData(cityNameInput)
  return fetchData(getWeatherUrl(cityData))
}

getCityDataWeather('Campo Novo do Parecis')
.then(console.log)
