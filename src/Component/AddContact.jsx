import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const AddContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkEmail = contacts.find(
      (contact) => contact.email === email && email
    );
    const checkNumber = contacts.find(
      (contact) => contact.number === parseInt(number)
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
      id: contacts[contacts.length - 1].id + 1,
      name,
      email,
      number,
    };
    dispatch({ type: "ADD_CONTACT", payload: data });
    toast.success("Contact Added!");
    history.push("/");
  };
  return (
    <>
      <div className="container">
        <h1 className="display-3 text-center">Add Contact</h1>
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
                  value="Add Contact"
                  className="btn btn-block btn-dark"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddContact;
