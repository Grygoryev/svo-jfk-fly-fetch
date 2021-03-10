export const constructFlightsData = (flights) => {
  let flightsData = []

/*
 * data template:

  placeFromName: '',
  placeFromPortName: '',
  placeFromCountry: '',
  placeToName: '',
  placeToPortName: '',
  placeToCountry: '',
  price: '',
  carriers: [],
  departureTime: '',
  departureDate: ''
  flightID: ''
*/

  flights['Quotes'].map(item => {

    let destinationID = item['OutboundLeg']['DestinationId'],
        originID = item['OutboundLeg']['OriginId'],
        price = item['MinPrice'],
        departureTime = item['QuoteDateTime'].slice(item['QuoteDateTime'].indexOf('T') + 1).slice(0, -3),
        departureDate = item['OutboundLeg']['DepartureDate'].slice(0, item['OutboundLeg']['DepartureDate'].indexOf('T'))

    let carriers = flights['Carriers'].map(item => item['Name'])
    let flightID = flights['Routes'][0]['QuoteDateTime'] + price

    let placeFrom = flights['Places'].filter(item => item['PlaceId'] === originID),
        placeFromName = placeFrom[0]['CityName'],
        placeFromPortName = placeFrom[0]['IataCode'],
        placeFromCountry = placeFrom[0]['CountryName']

    let placeTo = flights['Places'].filter(item => item['PlaceId'] === destinationID),
        placeToName = placeTo[0]['CityName'],
        placeToPortName = placeTo[0]['IataCode'],
        placeToCountry = placeTo[0]['CountryName']

    return flightsData.push({
      placeToName,
      placeToPortName,
      placeToCountry,
      placeFromName,
      placeFromPortName,
      placeFromCountry,
      price,
      departureTime,
      departureDate,
      carriers,
      flightID,
    })
  })

  return flightsData
}