import { Card, Button } from "react-bootstrap";
import React from "react";
import axios from "axios";
import { ModalContext } from "../context/modalcontext";
import { useContext } from "react";

export default function Note_card(props) {
  const Title = props.title;
  const Description = props.description;
  const ID = props.id;
  const { cur_id, updateID } = useContext(ModalContext);
  const { cur_title, setCurTitle } = useContext(ModalContext);
  const { cur_description, setCurDescription } = useContext(ModalContext);
  const { updateOpen, setUpdateOpen } = useContext(ModalContext);

  function handleDelete() {
    let url = `http://127.0.0.1:8000/notes/${ID}`;
    axios.delete(url);

    // location.reload()
  }
  function handleUpdate() {
    setUpdateOpen(true);
    updateID(ID);
    setCurTitle(Title);
    setCurDescription(Description);
  }

  return (
    <div>
      <Card>
        <Card.Header>
          <div className="row">
            <div className="col">
              <h1>{Title}</h1>
            </div>
            <div className="col">
              <Button className="bg-danger mt-1" onClick={handleDelete}>
                Delete
              </Button>
            </div>
            <div className="col">
              <Button className="bg-primary mt-1" onClick={handleUpdate}>
                Update
              </Button>
            </div>
          </div>
        </Card.Header>
        <Card body>
          <p>{Description}</p>
        </Card>
      </Card>
    </div>
  );
}
