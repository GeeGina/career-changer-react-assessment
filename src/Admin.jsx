import React, { useEffect, useState } from "react";
import User from "./User";

const Admin = ({ isAdmin, data, addData , removeHandle}) => {
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  const [position, setPosition] = useState("");
  const [id, setId] = useState(3);
  const [formValid, setFormvalid] = useState(false);

  useEffect(() => {
    const checkData =
      fName.trim().length > 0 &&
      lName.trim().length > 0 &&
      position.trim().length > 0;
    setFormvalid(checkData);
  }, [fName, lName, position]);

  const addItem = (e) => {
    setId(Number(id) + 1);
    e.preventDefault();
    const newItem = {
      id: id,
      name: fName,
      lastname: lName,
      position: position,
    };
    setFname("");
    setLname("");
    setPosition("");
    addData(newItem);
  };
  return (
    <>
      <p>Create User Here</p>
      <form>
        <input
          type="text"
          id="fname"
          placeholder="Name"
          value={fName}
          onChange={(e) => setFname(e.target.value)}
        ></input>
        <input
          type="text"
          id="lname"
          placeholder="Last Name"
          value={lName}
          onChange={(e) => setLname(e.target.value)}
        ></input>
        <input
          type="text"
          id="position"
          placeholder="Position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        ></input>
        <button type="submit" className="save" onClick={addItem} disabled={!formValid}>
          Save
        </button>
      </form>
      <User isAdmin={isAdmin} data={data} removeHandle={removeHandle} />
    </>
  );
};

export default Admin;
