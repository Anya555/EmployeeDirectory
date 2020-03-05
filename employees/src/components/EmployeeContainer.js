import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Header from "./Header";
import SearchForm from "./SearchForm";
import Table from "./Table";
// import EmployeeDetail from "./EmployeeDetail";
import API from "../utils/API";

class EmployeeContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      results: [],
      search: ""
    };
  }

  searchUsers = () => {
    API.search().then(res => {
        console.log(res)
        this.setState({ results: res.data.results })
    }).catch(err => {
        console.log(err);
        this.setState({search: ""});
    })
  }

  // getting response from API
  componentDidMount(){
   this.searchUsers() 
  }

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };


//  sortEmployee = () => {
// let employees = this.state.results.filter(user => {
//   return user.name ???
// })
//  }

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Header></Header>
          </Col>
        </Row>
        <Row>
          <Col size="md-12 offset-4">
            <SearchForm 
            value={this.state.search}
            handleInputChange={this.handleInputChange}
            />
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Table data={this.state.results} />


            {/* <EmployeeDetail
            data={this.state.results}
            // picture = {this.state.results.picture}
            // name = {this.state.results.name}
            // phone = {this.state.results.phone}
            // email = {this.state.results.email}
            // dob = {this.state.results.dob}
             /> */}
              
            
          </Col>
        </Row>
      </Container>
    )
  }

}

export default EmployeeContainer;