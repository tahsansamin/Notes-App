
import React, { createContext } from "react";
import { useContext,useState } from "react";

export const ModalContext = createContext()

export const ModalProvider =({children}) => {
    const [isOpen,setOpen] = useState(false)
    const [updateOpen,setUpdateOpen] = useState(false)
    const[taskList,setList] = useState([])
    const [cur_id,updateID] = useState()
    const [cur_title,setCurTitle] = useState('')
    const [cur_description,setCurDescription] = useState('')
    return(
        <ModalContext.Provider value={{isOpen,setOpen,taskList,setList,updateOpen,setUpdateOpen,cur_id,updateID,cur_title,setCurTitle,cur_description,setCurDescription}}>
            {children}
        </ModalContext.Provider>
    )
}