import React, { Component } from 'react';
import "../styles/style.css"

const headers = [
    { id: 1, label: "Image" },
    { id: 2, label: "Name" },
    { id: 3, label: "Phone" },
    { id: 4, label: "Email" },
    { id: 5, label: "DOB" },
];

class Table extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        console.log(this.props.data)
    }

    renderTableData() {
        return (
            <>
                {this.props.data.map(item => (

                    <tr key={item.id}>
                        {/* <td>{item.picture.thumbnail}</td> */}
                        <td>{item.name.first + " " + item.name.last}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td>{item.dob.date}</td>
                    </tr>

                ))};
        
             </>
        );
    }



    render() {
        return (
            <div>

                <table id="table">
                    <thead>
                        <tr>
                            {headers.map(column => (
                                <th key={column.id}>{column.label}</th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                {/* {this.renderTableData()} */}
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>
        )
    }

}

export default Table