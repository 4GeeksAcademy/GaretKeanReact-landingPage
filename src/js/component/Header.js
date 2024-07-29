// src/Header.js
import React from 'react';
import { Container, Button } from 'react-bootstrap';
const Header = () => {
  return (
    <header className="bg-light text-center py-5">
    <Container>
      <h1 className="display-4">A Warm Welcome!</h1>
      <p className="lead">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsum,
        eligendi, in quo sunt possimus non incidunt odit vero aliquid
        similique quaerat nam nobis illo aspernatur vitae fugiat numquam
        repellat.
      </p>
      <Button variant="primary" size="lg">Call to action!</Button>
    </Container>
  </header>
  );
};

export default Header;
