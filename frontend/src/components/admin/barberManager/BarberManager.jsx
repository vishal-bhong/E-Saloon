import React from "react";
import { Table, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BarberManager.css";

const BarberManager = () => {
  const barbers = [
    { date: "03.03.2021", time: "09:00 PM", service: "Martial Arts", customer: "Isabella Thompson", duration: "30min", status: "Pending", employee: "img1.png" },
    { date: "03.03.2021", time: "09:00 PM", service: "Martial Arts", customer: "Liam Williams", duration: "30min", status: "Pending", employee: "img2.png" },
    { date: "03.03.2021", time: "09:00 PM", service: "Martial Arts", customer: "Sofia Martinez", duration: "30min", status: "Pending", employee: "img3.png" },
  ];


  const deleteBarber = async() => {
    
  }
  
  return (
    <Container className="barbers-container p-4 mt-5 col-11">
      <Row className="mb-4">
        <Col><h2 className="dashboard-title">barbers data :</h2></Col>
      </Row>
      <Table striped bordered hover className="text-center barbers-table">
        <thead className="table-header">
          <tr>
            <th>shop name</th>
            <th>email</th>
            <th>mobile</th>
            <th>address</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {barbers.map((appt, index) => (
            <tr key={index}>
              <td>{appt.date}</td>
              <td>{appt.time}</td>
              <td>{appt.service}</td>
              <td>{appt.customer}</td>
              <td>
                  <button className="btn btn-danger" onClick={deleteBarber}>
                      delete
                  </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default BarberManager;

