import React from "react";
import { Modal, Button, InputGroup, Form, textarea } from "react-bootstrap";
import { useContext, useState } from "react";
import { ModalContext } from "../context/modalcontext";
import axios from 'axios'

export default function Modal_add() {
  const { isOpen, setOpen } = useContext(ModalContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  function handleClose() {
    setOpen(false);
  }
  function handleSave() {
    if((title==="") || (description==="")){
      alert("Please fill out both fields")

    }else{
      axios
    
      .post("http://127.0.0.1:8000/notes/", {
        title: title,
        description: description,
      })

      setOpen(false)

    }
    
    
      
      
    

    // location.reload();
  }

  return (
    <>
      <Modal show={true} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Title</InputGroup.Text>
            <Form.Control
              placeholder="Title"
              aria-label="Title"
              aria-describedby="basic-addon1"
              onChange={(e) => setTitle(e.target.value)}
            />
          </InputGroup>
          <div className="mb-3">
            <label className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              maxLength="500"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
