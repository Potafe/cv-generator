import { useState } from 'react'
import Editor from './components/Editor';
import ViewForm from './components/ViewForm';
import './App.css'
import { useRef } from "react";
import { useReactToPrint } from 'react-to-print';

function App() {
  const [formData, setFormData] = useState({
    setupinfo: 
    {
      firstName: '',
      lastName: '',
      profTitle: '',
      aboutYou: ''
    },
    contactinfo : 
    {
      phone: "",
      email:  "",
      linkedin: "",
      website: "",
      github: ""
    },
    education: [],
    work: [],
    skills: []
  });

  const handleSetupInfo = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const dataset = e.target.dataset.customValue;

    setFormData((f) => ({
      ...f,
      [dataset]: {
        ...f[dataset], [name]: value
      },
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formType = e.target.dataset.customValue;
    const formData = new FormData(e.target);

    console.log(e.target);

    const receivedData = {};

    formData.forEach((value, key) => {
      receivedData[key] = value;
      e.target[key].value = "";
    })

    console.log(receivedData);
    setFormData((f) => ({
      ...f,
      [formType]: [...f[formType], receivedData],
    }));
    console.log(formData);
  };

  const handleDeleteForm = (e) => {
    const formType = e.target.dataset.customValue;
    const indexValue = e.target.dataset.indexValue;

    setFormData((f) => ({
      ...f, 
      [formType]: [...f[formType].splice(indexValue, 1)],
    }))
  }

  const printRef = useRef();
  const handlePrint = useReactToPrint({ 
    content: () => printRef.current, 
  });

  return (
    <>
    <div className = 'editor-container'>
      <Editor formData = {formData} handleChange = {handleSetupInfo} handleFormSubmit = {handleFormSubmit} handleDeleteForm={handleDeleteForm} setFormData={setFormData} handlePrint={handlePrint}></Editor>
    </div>
    <div className='cv-container'>
      <div ref = {printRef} className='print-container'>
        <ViewForm formData = {formData} />
      </div>
    </div>
    </>
  )
}

export default App
