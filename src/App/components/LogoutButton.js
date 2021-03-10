import React from "react";
import {connect, useDispatch} from "react-redux";
import {logoutUser} from "@/App/redux/actions";

const LogoutButton = () => {
  const dispatch = useDispatch()

  return (
    <div className="logout-btn-box" onClick={() => dispatch(logoutUser())}>
      <span className="logout-btn-box__title">Выйти</span>
      <svg className="logout-btn-box__icon">
        <use xlinkHref="#logout-icon" href="#logout-icon" />
      </svg>

    </div>
  )
}

export default connect()(LogoutButton)