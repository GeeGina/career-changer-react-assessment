import React from "react";
import "./style.css";

const User = ({ isAdmin, data }) => {
  return (
    <>
      <table>
        <tr>
          <th>Name</th>
          <th>Last Name</th>
          <th>Position</th>
          {isAdmin && <th>Action</th>}
        </tr>
        {data.map((member) => {
          return (
            <tr key={member.id}>
              <td>{member.name}</td>
              <td>{member.lastname}</td>
              <td>{member.position}</td>
              {isAdmin && (
                <th>
                  <button>Delete</button>
                </th>
              )}
            </tr>
          );
        })}
      </table>
    </>
  );
};

export default User;
