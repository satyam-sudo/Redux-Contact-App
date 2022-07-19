import React from "react";
import { Button, Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ContactTable = () => {
  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();

  const deleteContact = (id) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
    toast.success("Contact Deleted!");
  };
  return (
    <>
      <Container style={{ marginTop: "20px" }}>
        <div className="addcontact_button">
          <Link to="/addcontact" className="btn btn-outline-dark my-2">
            Add Contact
          </Link>
        </div>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, id) => (
              <tr key={id}>
                <td>{id + 1}</td>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.number}</td>
                <td>
                  <Link
                    to={`/edit/${contact.id}`}
                    className="btn btn-small btn-primary"
                    style={{ marginRight: "12px" }}
                  >
                    Edit
                  </Link>
                  <Button
                    type="button"
                    onClick={() => deleteContact(contact.id)}
                    className="btn btn-small btn-danger"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default ContactTable;
