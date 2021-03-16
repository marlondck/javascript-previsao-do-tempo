const APIKey = 'GrZtnorC3Pt16ZH3pUQJBDD51HLyMs6j'
const getCityUrl = cityName =>
  `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`

const getCityData = async cityName => {
  try {
    const cityUrl = getCityUrl(cityName)
    const response = await fetch(cityUrl)

    if(!response.ok) {
      throw new Error('Não foi possível obter os dados.')
    }

    const [cityData] = await response.json()
    return cityData

  } catch ({ name, message }) {
    console.log(`${name}: ${message}`)
  }
}

getCityData('Campo Novo do Parecis')