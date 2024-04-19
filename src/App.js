import {React ,createContext , useState}from 'react'
import A from './A'
import Reducer from './Reducer'
import './App.css'
export const UsedContext =  createContext()

const App = () => {
  const [Jop , setJop] = useState('Frontend')
  return (
    <div>
      <UsedContext.Provider value= {Jop}>
        <A/>
      </UsedContext.Provider>

      <Reducer/>

    </div>
  )
}

export default App