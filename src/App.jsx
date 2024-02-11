import { useState } from 'react'
import Editor from './components/Editor';
import ViewForm from './components/ViewForm';
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    setupinfo: {
      firstName: 'John',
      lastName: 'Doe',
      profTitle: 'Classical Singer',
      aboutYou: 'Hello, I am a student of Mozart'
    },
  });

  const handleSetupInfo = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((f) => ({
      ...f,
      setupinfo : {
        ...f.setupinfo, [name]: value
      },
    }));
  };

  return (
    <>
    <div className = 'editor-container'>
      <Editor formData = {formData} handleChange = {handleSetupInfo}></Editor>
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
