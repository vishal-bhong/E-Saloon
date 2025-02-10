import React from "react";
import { Table, Button, Form, InputGroup, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BarberDashboard.css";
import { getAllAppointments, updateAppointmentStatus } from "../../../api/BarberApi";
import { toast } from "react-toastify";


const BarberDashboard = () => {
  const [data, setData] = React.useState([]);

  //React.StrictMode intentionally mounts components twice in development to help identify potential side effects and other issues in your components.
  React.useEffect(() => {
      console.log("in get appointments useEffect !")
      handleGetAppointments();
  },[])


  const handleGetAppointments = async () => {
      const result = await getAllAppointments();              
      if (result && result.status === 204) {
      setData([]); // Handle the case where there's no content by setting data to an empty array
      } else {
      setData(result || []); // Set data to the response data or an empty array if undefined
      }
  }

  React.useEffect(() => {
      console.log(data)
  },[data])


  const handleStatusChange = async (appointmentId, newStatus) => {
    try {
     const result = await updateAppointmentStatus(appointmentId, newStatus);
      
     if(result?.message == "Status updated...."){
        toast.success(result?.message);
        handleGetAppointments();
     }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };
  
  return (
    <Container className="appointments-container p-4 mt-5 col-11">
      <Row className="mb-4">
        <Col><h2 className="dashboard-title">Appointments</h2></Col>
      </Row>
      <Table striped bordered hover className="text-center appointments-table">
        <thead className="table-header">
          <tr>
            <th>customer name</th>
            <th>mobile no</th>
            <th>email</th>
            <th>Customer address</th>
            <th>Appointment date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((appointment, index) => (
            <tr key={index}>
              <td>{appointment?.customerName}</td>
              <td>{appointment?.customerMobile}</td>
              <td>{appointment?.customerEmail}</td>
              <td>{appointment?.customerAddress}</td>
              <td>{appointment?.appointmentDate}</td>
              <td>
              <Form.Select
                  value={appointment?.appointmentStatus}
                  onChange={(e) => handleStatusChange(appointment.id, e.target.value)}
                >
                  <option className="" value="PENDING">PENDING</option>
                  <option className="" value="COMPLETED">COMPLETED</option>
                </Form.Select>
                {/* <span className="status-badge bg-warning text-dark">{appointment?.appointmentStatus}</span> */}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default BarberDashboard;

