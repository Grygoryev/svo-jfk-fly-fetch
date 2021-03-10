import React, {useState} from 'react';
import {connect, useDispatch} from "react-redux";
import {isCyrillic, validateEmail} from "@/App/functions/validateLogin";
import {loginUser} from "@/App/redux/actions";

const Login = () => {
  const dispatch = useDispatch()
  const [login, setLogin] = useState('')
  const [pass, setPass] = useState('')
  const [passError, setPassError] = useState('')
  const [loginError, setLoginError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    if (!validateEmail(login)) {
      return setLoginError('Используйте почту для логина')
    } else {
      setLoginError(null)
    }

    if (!passError && !loginError) {
     dispatch(loginUser())
    }
  }

  const handleLoginEnter = e => {
    let login = e.target.value
    setLogin(login)
  }

  const handlePassEnter = e => {
    let pass = e.target.value

    if (isCyrillic(pass)) {
      return setPassError('Кириллица для пароля не подходит')
    }

    setPassError(null)
    setPass(pass)
  }

  return (
    <div className="screen screen--login">
     <div className="screen__container">
       <form className="login" onSubmit={handleSubmit}>
         <h2 className="login__title">Simple flight check</h2>
         <label htmlFor="" className="input-box">
           <p className="input-box__title">Логин:</p>
           <input type="text" onChange={handleLoginEnter} className={`input-box__input ${loginError ? '--error' : ''}`}/>
           {loginError && <p className="input-box__error-msg">{loginError}</p> }
         </label>
         <label htmlFor="" className="input-box">
           <p className="input-box__title">Пароль:</p>
           <input onChange={handlePassEnter} type="password" minLength={8} className={`input-box__input ${passError ? '--error' : ''}`}/>
           {passError &&  <p className="input-box__error-msg">{passError}</p>}
         </label>
         <button className="btn login__btn">Войти</button>
       </form>
     </div>
    </div>
  )
}

export default connect(null, null)(Login)