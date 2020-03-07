import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Header from "./Header";
import SearchForm from "./SearchForm";
import Table from "./Table";
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

 

  render() {
   
    // let searchResult = this.state.results.filter(employee => {
    //   return (
    //     (employee.name.first + " " + employee.name.last).toLowerCase()
    //       .includes(this.state.search.toLowerCase())
    //   );
    // });

    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Header></Header>
          </Col>
        </Row>
        <Row>
          <div className="col-6 offset-lg-4">
            <SearchForm 
            value={this.state.search}
            handleInputChange={this.handleInputChange}
            />
          </div>
        </Row>
        <Row>
          <Col size="md-12">
            <Table data={this.state.results} />
          </Col>
        </Row>
      </Container>
    )
  }

}

export default EmployeeContainer;