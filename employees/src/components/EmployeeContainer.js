import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Table from "./Table";
import Form from "react-bootstrap/Form";
import API from "../utils/API";
import "bootstrap/dist/css/bootstrap.min.css";

class EmployeeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      search: "",
    };
  }
  // getting response from API
  componentDidMount() {
    this.getAllUsers();
  }
  getAllUsers = () => {
    API.search()
      .then((res) => {
        console.log(res);
        this.setState({ results: res.data.results });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ search: "" });
      });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <>
        <Navbar expand="lg">
          <Navbar.Brand>Employee Directory</Navbar.Brand>
        </Navbar>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 offset-sm-4 col-sm-12">
              <br></br>
              <Form>
                <Form.Group controlId="formGridEmail">
                  <Form.Control
                    type="search"
                    placeholder="Search employee..."
                    value={this.state.search}
                    onChange={this.handleInputChange}
                  />
                </Form.Group>
              </Form>
            </div>

            <br></br>
            <div className="col-md-12">
              <Table data={this.state.results} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default EmployeeContainer;
