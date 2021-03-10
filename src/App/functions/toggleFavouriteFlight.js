export const toggleFavouriteFlight = (favourites, {flightID, flight}) => {

  const isFavourite = !!favourites.find(item => item['flightID'] === flightID)

  if (isFavourite) {
    return favourites.filter(item => item['flightID'] !== flightID)
  } else {
    return [...favourites, {flightID, flight}]
  }
}