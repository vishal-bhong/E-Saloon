import React from "react";
import { Table, Button, Form, InputGroup, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HairStyles.css";

const HairStyles = () => {
  const [ hair_Styles, setHair_Styles ] = React.useState ([
    { style: "one side", price: "353" },
    { style: "boxer cut", price: "534" },
    { style: "militery cut", price: "533" },
  ]);

  const [newStyle, setNewStyle] = React.useState("");
  const [newPrice, setNewPrice] = React.useState("");

  const addStyle = () => {
    if (newStyle && newPrice) {
      setHair_Styles([...hair_Styles, { style: newStyle, price: newPrice }]);
      setNewStyle("");
      setNewPrice("");
    }
  };
  
  return (
    <Container className="styles-container p- mt-3 col-md-9">
      <Row className="mb-4 p-2">
        <Col><h2 className="styles-title">Hair Styles</h2></Col>
      </Row>
      <Table striped bordered hover className="text-center styles-table">
        <thead className="table-header">
          <tr>
            <th>style</th>  
            <th>Price</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {hair_Styles.map((sty, index) => (
            <tr key={index}>
              <td>{sty.style}</td>
              <td>{sty.price}</td>
              <td>
                <button className="btn btn-danger">del</button>
              </td>
            </tr>
          ))}
         <tr>
                <td>
                    <input
                    type="text"
                    placeholder="Enter new style"
                    value={newStyle}
                    onChange={(e) => setNewStyle(e.target.value)}
                    className="mr-2 form-control border-0"
                    />
                </td>

                <td>
                    <input
                    type="number"
                    placeholder="Enter price"
                    value={newPrice}
                    onChange={(e) => setNewPrice(e.target.value)}
                    className="mr-2 form-control border-0"
                    />
                </td>

                <td>
                    <button className="btn btn-success" onClick={addStyle}>
                        Add
                    </button>
                </td>
          </tr>
        </tbody>
      </Table>

     {/* <div className="d-flex justify-content-center mb-4">
        <button className="btn w-50 btn-primary">Save</button>
     </div> */}
    </Container>
  );
};

export default HairStyles;

