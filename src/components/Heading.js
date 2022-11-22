import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Container } from 'reactstrap';


const Heading = () => {
    return (
        <Navbar color='dark' dark>
            <Container>
                <NavbarBrand href="/">My Team</NavbarBrand>  
                <Link className='btn btn-primary' to="/add">Add User</Link>  
            </Container>
        </Navbar>
    )
};

export default Heading;