import React from 'react'
import {user} from '../assets/userAPI'
import './user.css'
function User() {
  return (
    <div className='back'>
      <img className='photo' src={user[0].photo}></img>
    </div>
  )
}

export default User