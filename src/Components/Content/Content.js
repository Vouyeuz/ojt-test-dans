import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Col, Row, Button, Card } from 'reactstrap';

class Content extends Component {
    constructor(props) {
        super(props);
    
        this.state={
          detailApi: null,
        };
      }
    
      async componentDidMount() {
        const url = "http://dev3.dansmultipro.co.id/api/recruitment/positions/" + window.location.pathname.split("/")[2];
        return await fetch(url)
          .then(res => res.json())
          .then(res => {
            const detail = res;
            this.setState({
              detailApi: detail,
            });
          })
      }
    
      backButton() {
        return (
          <Link to="/job-search" style={{ textDecoration: 'none' }} className="shadow"><Button>Back</Button></Link>
        );
      }
    
      render() {
        const { detailApi } = this.state;
        console.log(detailApi);
        if( detailApi === null) {
          return null;
        }
        return (
          <div>
            {this.backButton()}
            <Card className="mt-4 p-4 shadow p-3 mb-5 bg-white rounded">
            <div>
              <span>{detailApi.type} / {detailApi.location}</span>
              <h4 className="text-success">{detailApi.title}</h4>
            </div>
            <Row>
                <Col md = {8}>
                    <div className="jobDetail__left">
                        <div dangerouslySetInnerHTML={{ __html: detailApi.description }}/>
                    </div>
                </Col>
                <Col>
                <Card className="shadow p-2 my-2">
                <div className="jobDetail__right">
                <img 
                    src={detailApi.company_logo}
                    alt="APILogo"
                    />
                    <div>{detailApi.company_url}</div>
                    <hr/>
                </div>
                </Card>
                <Card className="shadow p-2 my-2" style= {{backgroundColor: "hsl(60, 100%, 90%)"}}>
                <div>
                    <strong>How to apply</strong>
                    <hr/>
                    <div  dangerouslySetInnerHTML={{ __html: detailApi.how_to_apply }} />
                </div>
                </Card>
                </Col>
              </Row>
            </Card>
          </div>
        );
      }
}

Content.propTypes = {
    match: PropTypes.object,
}

export default Content;