import {React , useContext} from 'react'
import { UsedContext } from './App'

const D = () => {
    const Jop = useContext(UsedContext)
  return (
    <div>
        {Jop}
    </div>
  )
}

export default D