import React from "react";
import Flight from "./Flight";
import {connect} from 'react-redux';
import {constructFlightsData} from "../../functions/constructFlightsData";
import Loader from "@/App/components/Loader";

const FlightsList = ({flights, isLoading, favouriteFlights}) => {

  if (!flights['Routes']) {
    return <p>Рейсов на эту дату нет</p>
  }

  const flightsData = constructFlightsData(flights)

  let flightsList = flightsData.map(flight => <Flight flight={flight} key={Math.random()} />)

  return (
    <>
      <div className="flights-favourite">
        Добавлено в избранное: <span>{favouriteFlights}</span> рейсов
      </div>
      <div className="flights-list">
        {isLoading && <Loader />}
        {!isLoading && flightsList}
      </div>
    </>
  )
}

const mapStateToProps = state =>  {
  return {
    flights: state.flights.flights,
    isLoading: state.flights.isLoading,
    favouriteFlights: state.flights.favouriteFlights.length
  }
}

export default connect(mapStateToProps, null)(FlightsList)