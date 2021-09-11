import React, { Component } from "react";
import { Header } from "../../Components";
import { Content } from "../../Components";
import { Card } from 'reactstrap';

class JobDetail extends Component {
  render() {
    return (
      <div className="p-2">
        <Header />
        <Card className="p-2">
          <Content />
        </Card>
      </div>
    );
  }
}

export default JobDetail;
