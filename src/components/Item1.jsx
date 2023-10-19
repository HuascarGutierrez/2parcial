import React from 'react'
import Item from './Item0'
import {user} from '../assets/userAPI'

function Item1() {
  return (
    <div>
        <img className={user[0].items[1]} src={user[0].items[1]}></img>
    </div>
  )
}

export default Item1