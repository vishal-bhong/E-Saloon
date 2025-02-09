import React from "react";
import { Table, Button, Form, InputGroup, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HairStyles.css";
import { addNewStyle, deleteHairStyle, getAllStylesByToken } from "../../../api/BarberApi";
import { toast } from "react-toastify";

const HairStyles = () => {
  const [ hair_Styles, setHair_Styles ] = React.useState ([]);
  const [newHairStyle, setNewHairStyle] = React.useState({ style: '', price: '' });

  React.useEffect(() => {
      console.log("in hair styles useEffect !")
      handleGetStyles();
  },[])

  const handleGetStyles = async () => {
      const result = await getAllStylesByToken();
      if (result && result.status === 204) {
        setHair_Styles([]); // Handle the case where there's no content by setting data to an empty array
      } else {
        setHair_Styles(result?.data || []); // Set data to the response data or an empty array if undefined
      }
  }


  const addStyle = async () => {
    if (newHairStyle.style && newHairStyle.price) {
      const result = await addNewStyle(newHairStyle)
      console.log(result); 
      handleGetStyles(); 
      setNewHairStyle({ style: '', price: '' });    
    }
    else {
      toast.warning("fill both fields")
    }
  };

  React.useEffect(() => {
    console.log(hair_Styles);
  },[hair_Styles])

  const deleteHairStyleById = async (hairStyleId) => {
    const result = await deleteHairStyle(hairStyleId);
    toast.success(result?.data?.message);
    handleGetStyles();
  }
  
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
              <td>{sty?.style}</td>
              <td>{sty?.price}</td>
              <td>
                <button className="btn btn-danger" onClick={() => deleteHairStyleById(sty?.id)}>del</button>
              </td>
            </tr>
          ))}
         <tr>
                <td>
                    <input
                    type="text"
                    placeholder="Enter new style"
                    value={newHairStyle.style}
                    onChange={(e) => setNewHairStyle({ ...newHairStyle, style : e.target.value })}
                    className="mr-2 form-control border-0"
                    />
                </td>

                <td>
                    <input
                    type="text"
                    placeholder="Enter price"
                    value={newHairStyle.price}
                    onChange={(e) => setNewHairStyle({ ...newHairStyle, price : e.target.value })}
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

