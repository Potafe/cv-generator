import SetupInfoField from "./SetupInfoField";
import ContactInfoField from './ContactInfoField';
import EducationalInfoField from "./EducationalInfoField";
import WorkInfoField from "./WorkInfoField";
import style from '../styles/style.module.css';

function Editor({ formData, handleChange, handleFormSubmit, setFormData, handlePrint }) {
    return (
        <>
            <div style={{display: "flex", alignItems: "center"}}>
                <h1 style={{marginRight: "auto"}}>CV Generator</h1>
                <button onClick={handlePrint} className={style.button} >Save</button>
            </div>
            <SetupInfoField setupinfo={formData.setupinfo} handleChange={handleChange} />
            <hr />
            <ContactInfoField contactinfo = {formData.contactinfo} handleChange = {handleChange} />
            <hr />
            <EducationalInfoField handleFormSubmit={handleFormSubmit} educationData={formData.education} setFormData={setFormData}/>
            <hr />
            <WorkInfoField handleFormSubmit={handleFormSubmit} workData={formData.work} setFormData={setFormData} />
            <hr />
            
        </>
    );
}

export default Editor;