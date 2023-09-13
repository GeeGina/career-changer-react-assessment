import { useState } from "react";
import Layout from "./Layout";
import User from "./User";
import Admin from "./Admin";

const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: "mocklastname",
    position: "Manager",
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer",
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer",
  },
];

const Home = () => {
  const [display, setDisplay] = useState();
  const [topic, setTopic] = useState("React - Assessment");
  const [data, setData] = useState(mockEmployees);

  const addData = (newItem) => {
    setData((prevItem) => [...prevItem, newItem]);
  };

  const removeHandle = (update) => {
    setData(update);
  };

  return (
    <Layout>
      <h1>
        Generation Thailand
        <br />
        {topic}
      </h1>
      <button
        className="btnDisplay"
        onClick={() => {
          setDisplay("user");
          setTopic("Home - User Sector");
        }}
      >
        User Home Sector
      </button>
      <button
        className="btnDisplay"
        onClick={() => {
          setDisplay("admin");
          setTopic("Home - Admin Sector");
        }}
      >
        Admin Home Sector
      </button>
      {display == "user" && (
        <User isAdmin={false} data={data} removeHandle={removeHandle} />
      )}
      {display == "admin" && (
        <Admin isAdmin={true} data={data} addData={addData} removeHandle={removeHandle}/>
      )}
    </Layout>
  );
};

export default Home;
