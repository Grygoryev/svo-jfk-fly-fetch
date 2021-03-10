import React, {useState, useEffect} from 'react'
import {toggleFavouriteFlight} from "../../functions/toggleFavouriteFlight";
import {connect} from 'react-redux'
import {toggleFavourite} from "../../redux/actions";

const Flight = ({flight, favouriteFlights, toggleFavourite}) => {
  let {
    placeFromName,
    placeFromPortName,
    placeFromCountry,
    placeToName,
    placeToPortName,
    placeToCountry,
    price,
    carriers,
    departureTime,
    departureDate,
    flightID
  } = flight

  let carriersList = carriers.map(carrier => <span key={Math.random()}>{carrier} </span>)

  if (price.toString().length === 5) price = price.toString().slice(0, 2) + ' ' + price.toString().slice(2)

  let infoForFavourite = {
    flightID,
    flight
  }

  let isFavourite = favouriteFlights.find(item => item.flightID === flightID)

  const handleToggleFavourite = (e) => {
    let newFavorites = toggleFavouriteFlight(favouriteFlights, infoForFavourite)
    toggleFavourite(newFavorites)
  }

  return (
    <div className="flight">
      <div className="flight__pic">
        <svg>
          <use xlinkHref="#plane-icon" href="#plane-icon" />
        </svg>
      </div>
      <div className="flight__description">
        <div className="flight__info-row --places">
          <span className="flight__place-from-name">{placeFromName} ({placeFromPortName})</span>
          <span>{placeToName} ({placeToPortName})</span>
        </div>
        <div className="flight__info-row">
          {departureDate} - {departureTime}
        </div>
        <div className="flight__info-row">
          { carriersList }
        </div>
      </div>
      <div className="flight__price-block">
        <div className={`flight__like ${isFavourite ? '--liked' : ''}`} onClick={e => handleToggleFavourite(e)}>
          <svg>
            <use xlinkHref="#heart-icon" href="#heart-icon"/>
          </svg>
        </div>
        <div className="flight__price"><span>Цена:</span> {price} ₽</div>
      </div>
    </div>
  )
}

let mapStateToProps = (state) => {
  return {
    favouriteFlights: state.flights.favouriteFlights
  }
}

export default connect(mapStateToProps, {toggleFavourite})(Flight)