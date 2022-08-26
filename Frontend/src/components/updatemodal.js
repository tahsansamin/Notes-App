import React from "react";
import { Modal, Button, InputGroup, Form, textarea } from "react-bootstrap";
import { useContext, useState } from "react";
import { ModalContext } from "../context/modalcontext";
import axios from 'axios'

export default function Modal_update(props) {
  
  const ID = props.id
  const { updateOpen, setUpdateOpen } = useContext(ModalContext);
  const{cur_id,updateID} = useContext(ModalContext)
  const{cur_description,setCurDescription} = useContext(ModalContext)
  const{cur_title,setCurTitle} = useContext(ModalContext)
  
  const [title, setTitle] = useState(cur_title);
  const [description, setDescription] = useState(cur_description);
  
  
  function handleClose() {
    setUpdateOpen(false);
  }
  function handleUpdate() {
    
    
    
    
    axios
    .put(`http://127.0.0.1:8000/notes/${cur_id}/`, {
        title: title,
        description: description,
      })
      
      
    setUpdateOpen(false)

    // location.reload();
  }

  return (
    <>
      <Modal show={true} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Note Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Title</InputGroup.Text>
            <Form.Control
              placeholder="Title"
              aria-label="Title"
              aria-describedby="basic-addon1"
              onChange={(e) => setTitle(e.target.value)}
              defaultValue={cur_title}
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
              defaultValue={cur_description}
              
            ></textarea>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}