import React , {useReducer} from 'react'

const Reducer = () => {
    const initialState = {count:0}
    const [state ,dispatch] = useReducer((state ,action)=>{
        switch(action.type){
            case 'plus':
                return {count:state.count+1}
            case 'delete':
                return {count:state.count-1}
            case 'reset':
                return initialState
            default :return {count:state.count+10}
        }
    },initialState)
  return (
    
    <div>
        <h1>{state.count}</h1>
        <br />
        <button onClick={()=> dispatch({type:'plus'})}>+</button>
        <button onClick={()=> dispatch({type:'delete'})}>-</button>
        <button onClick={()=> dispatch({type:'reset'})}>Reset</button>
    </div>
  )
}

export default Reducer