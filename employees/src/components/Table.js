import React from 'react';
import "../styles/style.css"


const headers = [
    { id: 1, label: "Image" },
    { id: 2, label: "Name" },
    { id: 3, label: "Phone" },
    { id: 4, label: "Email" },
    { id: 5, label: "DOB" },
];



function Table(props) {

   
    return (
      <div>
        <table id="table">
          <thead>
            <tr>
              {headers.map(column => (
                <th key={column.id}>
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {props.data.map(item => (
              <tr key={item.email}>
                <td><img src={item.picture.medium} /></td>
                <td>{item.name.first} {item.name.last}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
                <td>{item.dob.date.split("T")[0]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
}

export default Table