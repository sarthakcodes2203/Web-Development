import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const params = useParams()
  return (
    <div>
      This is User component
      <p>My name is {params.username}</p>
    </div>
  )
}

export default User
