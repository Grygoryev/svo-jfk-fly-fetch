import React, {useState, useRef} from 'react';
import {connect, useDispatch} from 'react-redux'
import {fetchFlights} from "../../redux/actions";

const FlightsHeader = ({departureData}) => {
  let [date, setDate] = useState('Дата не выбрана')
  const dispatch = useDispatch()

  let monthes=[
    'Января',
    'Февраля',
    'Марта',
    'Апреля',
    'Мая',
    'Июня',
    'Июля',
    'Августа',
    'Сентября',
    'Ноября',
    'Декабря',
  ];

  const handleDatePick = (e) => {
    let transformedDate = e.target.value.split('-')
    let [ year, month, day ] = transformedDate
    setDate(`${day} ${monthes[+month - 1]} ${year}`)
    dispatch(fetchFlights(e.target.value))
  }

  return (
    <header className="flights-header">
      <div className="flights-header__title">
        <span className="flights-header__flight-type">Вылеты</span>
        <span className="flights-header__terminals">SVO - JFK</span>
      </div>
      <div className="flights-header__travel-date">{date}</div>
      <div className="datepicker-toggle">
        <span className="datepicker-toggle-button"/>
        <input type="date" className="datepicker-input" onChange={handleDatePick}/>
      </div>
    </header>
  )
}

export default connect(null, {fetchFlights})(FlightsHeader)