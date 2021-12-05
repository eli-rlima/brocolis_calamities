import Geocode from 'react-geocode'

// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY)

// set response language. Defaults to english.
Geocode.setLanguage('pt')

// set response region. Its optional.
// A Geocoding request with region=es (Spain) will return the Spanish city.
Geocode.setRegion('br')

Geocode.setLocationType('APPROXIMATE')

// Enable or disable logs. Its optional.
Geocode.enableDebug()

// Get latitude & longitude from address.
export const getLatFromAddress = (address) => {
  return Geocode.fromAddress(address)
}
