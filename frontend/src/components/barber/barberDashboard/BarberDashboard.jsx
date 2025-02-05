import React from "react";
import { Table, Button, Form, InputGroup, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AppointmentsDashboard.css";
const BarberDashboard = () => {
  const appointments = [
    { date: "03.03.2021", time: "09:00 PM", service: "Martial Arts", customer: "Isabella Thompson", duration: "30min", status: "Pending", employee: "img1.png" },
    { date: "03.03.2021", time: "09:00 PM", service: "Martial Arts", customer: "Liam Williams", duration: "30min", status: "Pending", employee: "img2.png" },
    { date: "03.03.2021", time: "09:00 PM", service: "Martial Arts", customer: "Sofia Martinez", duration: "30min", status: "Pending", employee: "img3.png" },
  ];
  
  return (
    <Container className="appointments-container p-4 mt-5 col-11">
      <Row className="mb-4">
        <Col><h2 className="dashboard-title">Appointments</h2></Col>
      </Row>
      <Table striped bordered hover className="text-center appointments-table">
        <thead className="table-header">
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Service</th>
            <th>Customer</th>
            <th>Duration</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appt, index) => (
            <tr key={index}>
              <td>{appt.date}</td>
              <td>{appt.time}</td>
              <td>{appt.service}</td>
              <td>{appt.customer}</td>
              <td>{appt.duration}</td>
              <td><span className="status-badge bg-warning text-dark">{appt.status}</span></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default BarberDashboard;

