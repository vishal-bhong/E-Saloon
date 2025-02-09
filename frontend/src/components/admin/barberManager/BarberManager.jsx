import React from "react";
import { Table, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BarberManager.css";
import { deleteBarber, getAllBarbers } from "../../../api/AdminApi";
import { toast } from "react-toastify";

const BarberManager = () => {
      const [data, setData] = React.useState([]);

      //React.StrictMode intentionally mounts components twice in development to help identify potential side effects and other issues in your components.
      React.useEffect(() => {
          console.log("in BarberManager useEffect !")
          handleGetBarbers();
      },[])
  
  
      const handleGetBarbers = async () => {
          const result = await getAllBarbers();
          if (result && result.status === 204) {
            setData([]); // Handle the case where there's no content by setting data to an empty array
          } else {
            setData(result?.data || []); // Set data to the response data or an empty array if undefined
          }
      }
  
      React.useEffect(() => {
          console.log(data)
      },[data])


    const deleteBarberById = async(id) => {
        console.log(id);
        const result = await deleteBarber(id); 
        toast.success(result?.data?.message);
        handleGetBarbers();
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
          {data.map((barber, index) => (
            <tr key={index}>
              <td>{barber.shopName}</td>
              <td>{barber.email}</td>
              <td>{barber.mobile}</td>
              <td>{barber.address}</td>
              <td>
                  <button className="btn btn-danger" onClick={() => deleteBarberById(barber.id)}>
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

