import React from 'react'
import {user} from '../assets/userAPI'

function Codigo() {
  return (
    <div>
      <p>{user[0].id}</p>
    </div>
  )
}

export default Codigo