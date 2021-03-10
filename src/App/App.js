import React, {useEffect} from 'react'
import FlightsContainer from "./components/Flights/FlightsContainer";
import {connect, useSelector} from "react-redux";
import Login from "@/App/components/Login";

function App({isLoggedIn}) {

  let content
  if (isLoggedIn) {
    content = <FlightsContainer/>
  } else {
    content =  <Login/>
  }

  return (<>{ content }</>)
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.app.login
  }
}

export default connect(mapStateToProps, null)(App)

