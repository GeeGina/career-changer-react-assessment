import { useState } from 'react'
import Layout from './Layout'
import User from './User'
import Admin from './Admin'

const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: 'mocklastname',
    position: "Manager"
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer"
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer"
  },
]

const Home = () => {
  const [display,setDisplay] = useState("reset")
  return(
    <Layout>
      <h1>Generation Thailand</h1>
      <h2>React - Assessment</h2>
      <button onClick={()=>setDisplay("user")}>User Home Sector</button>
      <button onClick={()=>setDisplay("admin")}>Admin Home Sector</button>
      {display == "user" && <User isAdmin={false} data={mockEmployees}/>}
      {display =="admin" && <Admin isAdmin={true} data={mockEmployees}/>}
    </Layout>
  )
}



export default Home
