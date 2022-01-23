import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import HomeIcon from '@mui/icons-material/Home'
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import AttachEmailRoundedIcon from '@mui/icons-material/AttachEmailRounded';
import Map from "../components/Map/Map";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact">
      <Map
        source="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1008.0293540058523!2d8.718483342832059!3d50.11471335687358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd0e8866c7d899%3A0xeca38f7504a410d0!2sK818%20211%2C%2060314%20Frankfurt%20am%20Main!5e0!3m2!1sde!2sde!4v1642844872622!5m2!1sde!2sde"
        width="800"
        height="500"
        loading="lazy"
        allowFullScreen=""
      />
      <h2>Get in Touch</h2>

      <div className="contact-main">
        <Form>
          <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" rows={5} placeholder="Enter Message" />
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-5"
            controlId="exampleForm.ControlInput1"
          >
            <Col className="" sm="6">
              <Form.Control required type="text" placeholder="Enter your name" />
            </Col>
            <Col className="" sm="6">
              <Form.Control required type="email" placeholder="Enter your email" />
            </Col>
          </Form.Group>
          <Form.Control className="mb-5" type="text" placeholder="Enter Subject" />
          <Button className="btn" variant="primary" type="submit">
    SEND MESSAGE
  </Button>
        </Form>
        <div className="right-side">
          <ul>
              <li className="mb-3">
                  <HomeIcon fontSize="large"/>
                  <div>
                      <strong>Buttonwood, Frankfurt am Main.</strong>
                      <p>Rosemead, FRA 91770</p>
                  </div>
              </li>
              <li className="mb-3">
                  <PermPhoneMsgIcon  fontSize="large"/>
                  <div>
                      <strong>00 (440) 9865 562</strong>
                      <p>Mon to Fri 9am to 6pm</p>
                  </div>
              </li>
              <li className="mb-3">
                  <AttachEmailRoundedIcon  fontSize="large"/>
                  <div>
                      <strong>support@bestshop.com.</strong>
                      <p>Send us your query anytime</p>
                  </div>
              </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
