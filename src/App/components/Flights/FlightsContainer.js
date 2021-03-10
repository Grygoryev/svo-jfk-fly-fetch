import React from "react";
import FlightsHeader from "./FlightsHeader";
import FlightsList from "./FlightsList";
import PlacesGallery from "./PlacesGallery";
import LogoutButton from "@/App/components/LogoutButton";

export default () => {

  return (
    <div className="screen screen--flights">
      <div className="screen__container">
        <LogoutButton />
        <div className="flights-container">
          <FlightsHeader />
          <PlacesGallery />
          <FlightsList />
        </div>
      </div>
    </div>
  )
}