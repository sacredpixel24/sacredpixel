import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { MailchimpForm } from './MailchimpForm';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col xs={12} sm={6}>
            <img src={logo} alt="BYTE STUDIOS" style={{ width: '200px', height: 'auto' }} />
          </Col>
          <Col xs={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/sacred-pixel-92623b2a9/"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/sacredpxl/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <div className="contact-info" style={{ color: 'black' }}>
              <p style={{ color: 'black' }}>Phone: +91 951-271-8132</p>
              <p style={{ color: 'black' }}>sacredpixel@gmail.com</p>
            </div>
            <p style={{ color: 'black' }}>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
