import React from 'react'
import Loader from "react-loader-spinner";

export default () => {
  const style = {
    margin: '20px auto',
    display: 'flex',
    justifyContent: 'center'
  }
  return (
    <Loader
      style={style}
      type="Puff"
      color="#00BFFF"
      height={100}
      width={100}
    />
  )
}