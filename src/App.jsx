import { useState } from 'react'
import Editor from './components/Editor';
import ViewForm from './components/ViewForm';
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    setupinfo: 
    {
      firstName: 'John',
      lastName: 'Doe',
      profTitle: 'Classical Singer',
      aboutYou: 'Hello, I am a student of Mozart'
    },
    contactinfo : 
    {
      phone: "XXX XXX XXX",
      email:  "xyz@email.com",
      linkedin: "Linkedin ID",
      website: "Personal Portfolio",
      github: "Github User ID"
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

  return (
    <>
    <div className = 'editor-container'>
      <Editor formData = {formData} handleChange = {handleSetupInfo} handleFormSubmit = {handleFormSubmit} handleDeleteForm={handleDeleteForm} setFormData={setFormData}></Editor>
    </div>
    <hr />
    <hr />
    <div className='cv-container'>
      <ViewForm formData = {formData} />
    </div>
    </>
  )
}

export default App
