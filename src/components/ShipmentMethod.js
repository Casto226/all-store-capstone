import React, { useState } from "react";
import { Form } from "react-bootstrap";

function ShipmentMethod({ onSelect }) {
  const [selectedMethod, setSelectedMethod] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedMethod(value);
    onSelect(value); // Notify parent about the selected shipping method
  };

  return (
    <Form.Group controlId="shipmentSelect" className="mt-4">
      <Form.Label>Select Shipping Method</Form.Label>
      <Form.Select value={selectedMethod} onChange={handleChange}>
        <option value="">-- Select a shipping method --</option>
        <option value="standard">Standard Shipping (5-7 days)</option>
        <option value="express">Express Shipping (2-3 days)</option>
        <option value="overnight">Overnight Shipping (1 day)</option>
      </Form.Select>
    </Form.Group>
  );
}

export default ShipmentMethod;
