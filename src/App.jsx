import React from 'react'
import { useState } from 'react'
const key = "saludandoAmoises"
export default function App() {
  const [isValid, setIsValid] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [value, setValue] = useState("")

  function validateKey() {
    setLoading(true)
    setTimeout(() => {
      try {
        if (key !== value) {
          throw { message: "Key incorrecta" }
        }
        setIsValid(true)

      } catch (error) {
        setError(true) 
      } finally {
        setValue("")
        setLoading(false)
      }
    }, 3000)
  }

  function onChange(e) {
    setError(false)
    setValue(e.target.value)
  }

  function onLogout() {
    setLoading(true)
    setTimeout(() => {
      setIsValid(false)
      setLoading(false)
    }, 3000)
  }

  return (
    <>
      {isValid ?
        <Welcome
          loading={loading}
          onLogout={onLogout}
        />
        :
        <Validate
          loading={loading}
          error={error}
          value={value}
          onChange={onChange}
          onValdation={validateKey}
        />
      }
    </>

  )
}


export function Validate({ loading, error, onChange, value, onValdation }) {

  return (
    <div className='w-full h-screen bg-slate-100 flex items-center justify-center'>

      <div className='w-4/5  bg-white shadow-md py-8 rounded-md'>
        <h1 className='text-center text-2xl font-bold'>Validation</h1>

        <input
          type="text"
          placeholder='Type your key'
          className='w-4/5 mx-auto flex mt-4 h-9 border rounded-md px-2 focus:bg-slate-100'
          value={value}
          onChange={onChange}
        />

        {loading &&
          <p className='w-4/5 block mx-auto my-2'>Loading...</p>
        }
        {error &&
          <p className='w-4/5 block mx-auto my-2 text-red-600'>Error: Key incorrecta</p>
        }


        <div className='flex w-4/5 mx-auto justify-end gap-8 pt-8'>
          <button className='h-9 bg-red-600 px-3 rounded-md text-white font-semibold hover:bg-red-700 cursor-pointer'>Cancelar</button>

          <button className='h-9 bg-blue-600 px-3 rounded-md text-white font-semibold hover:bg-blue-700 cursor-pointer' onClick={onValdation}>Aceptar</button>
        </div>

      </div>

    </div>
  )
}

export function Welcome({ loading, onLogout }) {
  return (
    <div className='w-full h-screen bg-slate-100 flex items-center justify-center'>

      <div className='w-4/5  bg-white shadow-md py-8 rounded-md'>
        <h1 className='text-center text-2xl font-bold'>Welcom usuario</h1>

        {loading &&
          <p className='w-4/5 block mx-auto my-2'>Loading...</p>
        }

        <div className='flex w-4/5 mx-auto justify-end gap-8 pt-8'>
          <button className='h-9 bg-blue-600 px-3 rounded-md text-white font-semibold hover:bg-blue-700 cursor-pointer' onClick={onLogout}>Cerrar session</button>
        </div>

      </div>

    </div>
  )
}
