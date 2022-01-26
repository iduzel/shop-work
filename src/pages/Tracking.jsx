import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import './Tracking.css'

const Tracking = () => {
    const [orderid,setOrderid] = useState("")
    const [email, setEmail] = useState("")
  return (
    <div className="tracking">
      <div className="container p-5">
          <h2><strong>Track It!</strong></h2>
        <p>
          To track your order please enter your Order ID in the box below and
          press the "Track" button. This was given to you on your receipt and in
          the confirmation email you should have received.
        </p>
        
            <Form>

              <Form.Control
                  className="mb-5"
                  type="text"
                  onChange ={e=> setOrderid(e.target.value)}
                  required
                  minLength={2}
                  value={orderid}
                  placeholder="Order ID"
                />
                <Form.Control
                  className="mb-5"
                  type="text"
                  onChange ={e=> setEmail(e.target.value)}
                  required
                  value={email}
                  minLength={5}
                  placeholder="Email"
                />
              

                <Button className="track-order login" variant="primary" type="submit">
                   Track Order
                </Button>
            </Form>
      </div>
    </div>
  );
};

export default Tracking;
