import React, { useState } from 'react'
import User from './User'

const Admin = ({isAdmin}) => {
  const [id,setId] = useState()
  const [fname,setFname] = useState()
  const [lname,setLname] = useState()
  const [position,setPosition] = useState()
  
  return (
    <>
      <p>Create User Here</p>
      <form>
      <input type="text" id="fname" placeholder="Name" value={fname} onChange={(e)=>setFname(e.target.value)}></input>
      <input type="text" id="lname" placeholder="Last Name" value={lname} onChange={(e)=>setLnameetLname(e.target.value)}></input>
      <input type="text" id="position" placeholder="Position" value={position} onChange={(e)=>setPosition(e.target.value)}></input>
      <button type="submit">Save</button>
      </form>
      <User isAdmin={isAdmin}/>
    </>
  )
}

export default Admin