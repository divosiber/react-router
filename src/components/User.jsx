import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {

    const {id} = useParams()
  return (
    <div>User Id: {id}</div>
  )
   
  
}

export default User