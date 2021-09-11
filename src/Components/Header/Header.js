import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

const Header = (props) => {
  return (
    <div>
      <Navbar style={{ backgroundColor: "lightblue" }} color="faded" light className="p-2">
        <NavbarBrand href="/" className="mr-auto"><strong>GitHub</strong> Jobs</NavbarBrand>
      </Navbar>
    </div>
  );
}

export default Header;

