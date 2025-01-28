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
  