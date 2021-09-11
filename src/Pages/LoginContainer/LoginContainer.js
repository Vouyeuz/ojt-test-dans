import React, { Component } from "react";
import { Login } from "../../Components";
import { Card } from 'reactstrap';

class LoginContainer extends Component {

  render() {
    return (
      // <div style= {{display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center"}}>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundColor: "lightblue" }}>
        <Card className="p-2">
          <Login />
        </Card>
      </div>
    );
  }
}

export default LoginContainer;
