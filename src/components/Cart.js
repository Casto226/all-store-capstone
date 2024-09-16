import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

//The cart component is meant to showcase all the items the users have added to the cart, before they proceed to the final checkout.
const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  //The page automatically calculates the total amount the users will be spending, and showcase a list of all the added items.
  const [shippingMethod, setShippingMethod] = useState("");

  //After the user has looked at the list of items, they will be able to select their desired shipping time option.
  const handleShippingChange = (e) => {
    setShippingMethod(e.target.value);
  };
  const handleCheckout = () => {
    if (!shippingMethod) {
      alert("Please select a shipping method before proceeding to checkout");
      return;
    }
    console.log("Proceeding to checkout with shipping method:", shippingMethod);
  };

  //The cart will start as empty, and will update when the user adds new items.
  return (
    <div className="container">
      <Container>
        <Row>
          <Col>
            <h2>Your Cart</h2>
            {items.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <>
                <ul>
                  {items.map((item, index) => (
                    <li key={index}>
                      {item.name} - ${item.price}
                    </li>
                  ))}
                </ul>
                <h3>Total: ${totalAmount}</h3>

                {/* Shipping Method Selection */}
                <Form.Group controlId="shippingMethod" className="mt-4">
                  <Form.Label>Select Shipping Method</Form.Label>
                  <Form.Select
                    value={shippingMethod}
                    onChange={handleShippingChange}
                  >
                    <option value="">-- Select a shipping method --</option>
                    <option value="standard">
                      Standard Shipping (5-7 days)
                    </option>
                    <option value="express">
                      Express Shipping (2-3 days)(+$5)
                    </option>
                    <option value="overnight">
                      Overnight Shipping (1 day)(+$50)
                    </option>
                  </Form.Select>
                </Form.Group>

                {/* Display selected shipping method */}
                <p className="mt-3">
                  Selected Shipping Method:{" "}
                  {shippingMethod ? shippingMethod : "None"}
                </p>

                {/* Checkout Button */}
                {/* The checkout button only becomes available when the users have selected a delivery method. */}
                <Button
                  variant="primary"
                  onClick={handleCheckout}
                  disabled={!shippingMethod} // Disabled button if no shipping method is selected.
                >
                  Proceed to Checkout
                </Button>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cart;
