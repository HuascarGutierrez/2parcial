import React from 'react'
import { user } from '../assets/userAPI'

function Name() {
  return (
    <div>
        <p>{user[0].name}</p>
    </div>
  )
}

export default Name