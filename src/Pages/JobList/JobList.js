import React, { Component } from "react";
import { Header, Search } from "../../Components";
import { Card } from 'reactstrap';

class JobList extends Component {

  render() {
    return (
      <div className="p-2">
        <Header />
        <Card className="p-2">
          <Search />
        </Card>
      </div>
    );
  }
}

export default JobList;
