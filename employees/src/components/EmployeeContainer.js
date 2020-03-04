import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Header from "./Header";
import SearchForm from "./SearchForm";
import API from "../utils/API";


class EmployeeContainer extends Component {
  state = {
    results: {},
    search: ""
  };

  componentDidMount = query => {
    API.search(query)
      .then(res => {
        console.log(res)
        this.setState({ results: res.data.results })
      })
      .catch(err =>
        console.log(err));
  }

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Header data={this.state.results}></Header>
            <SearchForm></SearchForm>
          </Col>
        </Row>
      </Container>
    )
  }



}

export default EmployeeContainer;