import React from 'react'

import { useSelector, useDispatch } from 'react-redux'

const DemoRedux = () => {
  
  const count = useSelector((state) => state.counter.value)
  return (
    <div>
      Counter: {count}...Sent from app.jsx
    </div>
  )
}

export default DemoRedux
