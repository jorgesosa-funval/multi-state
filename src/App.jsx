import React, { useReducer } from 'react'
import { Validate } from "./components/Validate"
import { Welcome } from "./components/Welcome"

const key = "saludandoAmoises"

const init = {
  isValid: false,
  loading: false,
  error: false,
  value: "",
}

const reduce = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true
      }
    case "VALIDATE_SUCCESS":
      return {
        ...state,
        loading: false,
        isValid: true,
        value: ""
      }
    case "VALIDATE_ERROR":
      return {
        ...state,
        loading: false,
        error: true,
        value: ""
      }
    case "CHANGE":
      return {
        ...state,
        error: false,
        value: action.payload
      }
    case "LOGOUT":
      return {
        ...state,
        loading: false,
        isValid: false
      }
    case "CANCEL":
      return {
        ...state,
        value: ""
      }
    default:
      return state
  }


}


export default function App() {
  
  const [state, dispatch] = useReducer(reduce, init)
 
  function validateKey() {
    dispatch({ type: "LOADING" })
    setTimeout(() => {

      if (key !== state.value) {
        dispatch({ type: "VALIDATE_ERROR" })
        return;
      }

      dispatch({ type: "VALIDATE_SUCCESS" })

    }, 3000)
  }

  function onChange(e) {
    dispatch({type: "CHANGE", payload: e.target.value})
  }

  function onLogout() {
    dispatch({type: "LOADING"})
    setTimeout(() => {
      dispatch({type: "LOGOUT"})
    }, 3000)
  }

  function onCancel() {
    dispatch({type: "CANCEL"})
  }

  return (
    <>
      {state.isValid ?
        <Welcome
          loading={state.loading}
          onLogout={onLogout}
        />
        :
        <Validate
          loading={state.loading}
          error={state.error}
          value={state.value}
          onChange={onChange}
          onValdation={validateKey}
          onCancel={onCancel}
        />
      }
    </>

  )
}




