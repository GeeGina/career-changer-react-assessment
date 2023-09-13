import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <ul>
        <li><a href="/">Home</a></li>
        <li><Link to="/owner">Owner</Link></li>
    </ul>
  )
}

export default Nav