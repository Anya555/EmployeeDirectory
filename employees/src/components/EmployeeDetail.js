import React from "react";

function EmployeeDetail(props) {
    return (
        <div>
            <table>
                <tbody>
                   
                        {props.data.map(item => (

                            <tr key={item.id}>
                                <td>{item.picture}</td>
                                <td>{item.name}</td>
                                <td>{item.phone}</td>
                                <td>{item.email}</td>
                                <td>{item.dob}</td>
                            </tr>
                        ))};
               
                </tbody>
            </table>
        </div>
    );
}

export default EmployeeDetail;
