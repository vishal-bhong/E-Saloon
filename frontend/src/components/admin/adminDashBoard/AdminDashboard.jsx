import React from "react";
import { Table, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AdminDashboard.css";
import { deleteCustomer, getAllCustomers } from "../../../api/AdminApi";
import { toast } from "react-toastify";

const AdminDashboard = () => {
      const [data, setData] = React.useState([]);

      //React.StrictMode intentionally mounts components twice in development to help identify potential side effects and other issues in your components.
      React.useEffect(() => {
          console.log("in admin dashboard useEffect !")
          handleGetCustomers();
      },[])
  
  
      const handleGetCustomers = async () => {
          const result = await getAllCustomers();
          if (result && result.status === 204) {
            setData([]); // Handle the case where there's no content by setting data to an empty array
          } else {
            setData(result?.data || []); // Set data to the response data or an empty array if undefined
          }
      }
  
      React.useEffect(() => {
          console.log(data)
      },[data])


      const deleteCustomerById = async(id) => {
        console.log(id);
        const result = await deleteCustomer(id);
        toast.success(result?.data?.message);
        handleGetCustomers();
      }
  
  return (
    <Container className="-container p-4 mt-5 col-11">
      <Row className="mb-4">
        <Col><h2 className="dashboard-title">customers data :</h2></Col>
      </Row>
      <Table striped bordered hover className="text-center customers-table">
        <thead className="table-header">
          <tr>
            <th>full name</th>
            <th>email</th>
            <th>mobile</th>
            <th>dob</th>
            <th>address</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((customer, index) => (
            <tr key={index}>
              <td>{customer.fullName}</td>
              <td>{customer.email}</td>
              <td>{customer.mobile}</td>
              <td>{customer.dob}</td>
              <td>{customer.address}</td>
              <td>
                  <button className="btn btn-danger" onClick={() => deleteCustomerById(customer.id)}>
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

export default AdminDashboard;

