import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const Edit = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const { id } = useParams();
  const contacts = useSelector((state) => state);
  const currentContact = contacts.find(
    (contact) => contact.id === parseInt(id)
  );

  useEffect(() => {
    if (currentContact) {
      setName(currentContact.name);
      setEmail(currentContact.email);
      setNumber(currentContact.number);
    }
  }, [currentContact]);

  const dispatch = useDispatch();

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkEmail = contacts.find(
      (contact) => contact.id !== parseInt(id) && contact.email === email
    );
    const checkNumber = contacts.find(
      (contact) =>
        contact.number !== parseInt(number) &&
        contact.number === parseInt(number)
    );

    if (!email || !number || !name) {
      return toast.warning("Please fill in all Fields!");
    }
    if (checkNumber) {
      return toast.error("this Number is already Exists!");
    }
    if (checkEmail) {
      return toast.error("this email is already Exists!");
    }

    const data = {
      id: parseInt(id),
      name,
      email,
      number,
    };
    dispatch({ type: "UPDATE_CONTACT", payload: data });
    toast.success("Contact UPDATE!");
    history.push("/");
  };

  return (
    <div className="container">
      {currentContact ? (
        <>
          <h1 className="display-3 my-3 text-center">Edit Contact {id}</h1>
          <div className="row">
            <div className="col-md-6 shadow mx-auto p-5">
              <form onSubmit={handleSubmit}>
                <div className="form-group" style={{margin:"5px"}}>
                  <input
                    type="text"
                    placeholder="Name"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group" style={{margin:"5px"}}>
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group" style={{margin:"5px"}}>
                  <input
                    type="number"
                    placeholder="Phone Number"
                    className="form-control"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </div>
                <div className="form-group" style={{ marginTop: "12px" }}>
                  <input
                    type="submit"
                    value="Update Contact"
                    className="btn btn-dark"
                  />
                  <Link
                    to="/"
                    className="btn btn-danger"
                    style={{ marginLeft: "5px" }}
                  >
                    Cancle
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : (
        <h1 className="display-3 my-3 text-center">
          Edit Contact id {id} is not exist
        </h1>
      )}
    </div>
  );
};

export default Edit;
