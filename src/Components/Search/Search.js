import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Button, Form, FormGroup, Label, Input, Card } from 'reactstrap';

class Search extends Component {
  constructor() {
    super();
    this.state={
      responseApi: [],
      descApi: null,
      locApi: null,
    }
    this.searchFunc = this.searchFunc.bind(this);
    this.seachDesc = this.seachDesc.bind(this);
    this.searcLoc = this.searcLoc.bind(this);
  }

  seachDesc = (event) => {
    const value = event.currentTarget.value;

    this.setState({ descApi: value === "" ? null : value });
  };

  searcLoc = (event) => {
    const value = event.currentTarget.value;

    this.setState({ locApi: value === "" ? null : value });
  };

  async searchFunc(event) {
    const {descApi, locApi} = this.state;

    let url = "http://dev3.dansmultipro.co.id/api/recruitment/positions.json";
    if (descApi != null && locApi != null) {
      url = url + "?description=" + descApi + "&location=" + locApi;
    } else if (descApi != null) {
      url = url + "?description=" + descApi;
    } else if (locApi != null) {
      url = url + "?location=" + locApi
    }
    
    event.preventDefault();
    return await fetch(url)
      .then(res => res.json())
      .then(res => {
        const jobs = res;
        this.setState({
          responseApi: jobs,
        });
      })
  }

  renderRow(data) {
    return (
      <div key={data.id}>
        
          <Link to={`/job-detail/${data.id}`} style={{ textDecoration: 'none' }}>
        <Row> 
          <Col className="text-primary">
            <strong>{data.title}</strong>
          </Col>
          <Col className="text-muted">
          <strong>{data.location}</strong>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
            <span className="text-muted">{data.company}</span>-<strong className="text-success">{data.type}</strong>
            </p>
          </Col>
          <Col>
          <span className="text-muted">{data.created_at}</span>
          </Col>
        </Row>
          </Link>         
        <hr/>
        
      </div>
    );
  }

  renderBodyHeader(response) {
    if (response.length > 0) {
      return (
        <div>
          <h3>Job List</h3>
          <hr/>
        </div>
      );
    }

    return null;
  }

  renderList(response) {

    const rows = [];
    for (let i = 0; i < response.length; i++) {
      rows.push(this.renderRow(response[i]));
    }

    return rows;    
  }

  renderBody(response) {
    if (response.length > 0) {
      return (
        <Card className="mt-4 p-4 shadow p-3 mb-5 bg-white rounded">
          {this.renderBodyHeader(response)}
          {this.renderList(response)}
        </Card>
      );
    }
    return null;
  }

  render() {
    const { responseApi } = this.state;
    return (
      <div className = "mt-4">

        <Form>
          <FormGroup row>
            <Col md={4}>
              <FormGroup>
                <Label for="JDesc"><strong>Job Description</strong></Label>
                <Input type="text" className="shadow" name="desc" id="jdesc" placeholder="Filter by title, companies ..." onChange={this.seachDesc}/>
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="JLoc"><strong>Location</strong></Label>
                <Input type="text" className="shadow" name="loc" id="jloc" placeholder="Filter by city, state ..." onChange={this.searcLoc}/>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup className="mt-4">
                <Input type="checkbox" className="shadow" name="fulltime" id="jfulltime"/>
                <Label for="jfulltime" check>Full Time Only</Label>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup className="mt-4">
                <Button type="submit" className="shadow" onClick={this.searchFunc}>
                  Search
                </Button>
              </FormGroup>
            </Col>
          </FormGroup>
        </Form>
        <div>
          {this.renderBody(responseApi)}
        </div>
      </div>
    );
  }
}
  


export default Search;