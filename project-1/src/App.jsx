import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import { decrement, increment } from './features/createSlice'

const App = () => {

  const data = useSelector((store) => store.counter)  
  const dispatch = useDispatch()

  return (
    <div>
      <h1>count:{data.count}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement("hello"))}>decrement</button>
    </div>
  )
}

export default App