import Navbar from './Components/Navbar/Navbar'
import Main from './Components/Main/Main'
import './App.css'

function App() {

  return (
    <>
      <div className='w-full h-[100vh] bg-gray-800 flex-1 flex-row'>
      <Navbar/>
        <Main/>
      </div>
    </>
  )
}

export default App
