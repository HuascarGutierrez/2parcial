import React from 'react'
import { user } from '../assets/userAPI'
function Image() {
  return (
    <div>
        <img src={user[0].banner}></img>
    </div>
  )
}

export default Image