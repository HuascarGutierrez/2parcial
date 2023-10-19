import React from 'react'
import {user} from '../assets/userAPI'
function Item0() {
  return (
    <div>
        <img className={user[0].items[0]} src={user[0].items[0]}></img>
    </div>
  )
}

export default Item0