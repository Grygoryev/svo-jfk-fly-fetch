import React from "react";
import {connect} from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react';

const PlacesGallery = ({gallery}) => {
  let slides = gallery.map(slide => <SwiperSlide key={Math.random()} className="flights-gallery__img-box"><img src={slide} /></SwiperSlide>)

  const style = {
    width: '100%'
  }
  return (
    <div className="flights-gallery">
      <Swiper
        style={style}
        spaceBetween={12}
        slidesPerView={3}
      >
      { slides }
      </Swiper>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    gallery: state.flights.photoGallery
  }
}

export default connect(mapStateToProps, null)(PlacesGallery);