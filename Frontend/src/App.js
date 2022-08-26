import React from 'react';
import './App.css';
import 'react-bootstrap'
import {Button, Modal} from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useContext,useState,createContext,useEffect } from 'react';
import { ModalContext } from './context/modalcontext';
import Modal_add from './components/modal';
import Note_card from './components/note_card';
import axios from 'axios';
import Modal_update from './components/updatemodal';

function App() {
  const{taskList,setList} = useContext(ModalContext)
  const{isOpen,setOpen} = useContext(ModalContext)
  const{updateOpen,setUpdateOpen} = useContext(ModalContext)
  const {cur_title,setCurTitle} = useContext(ModalContext)
  const {cur_description,setCurDescription} = useContext(ModalContext)
  const {cur_id,updateID} = useContext(ModalContext)

  function handleOpen(){
    setOpen(true)

  }
  function refreshList() {
    axios   //Axios to send and receive HTTP requests
      .get("http://127.0.0.1:8000/notes/")
      .then(res => console.log(setList(res.data)))
    

  };

 
  useEffect(() => {
    // Update the document title using the browser API
    refreshList();
  });


  


  return (
    <div className="App">
      { isOpen?(
        <Modal_add />

      ):null}
      { updateOpen?(
        <Modal_update ID={cur_id}  />

      ):null}


      <div className='d-flex justify-content-between'>
        
        <div className='h1 text-white'>Notes App</div>
        <div>
          <Button className='me-5 mt-2' onClick={handleOpen}>Add Note</Button>
          
          

        </div>
      </div>
      <div className='d-flex flex-wrap justify-content-center'>`
        
        
        {
        taskList.map(task =>
          <div className='m-3'><Note_card title={task.title} description={task.description} id={task.id} /></div>
          
        )
        }
      </div>
      
      <p className='text-danger'>© 2022 Tahsan Samin</p>

      
      

    </div>
  );
}

export default App;
