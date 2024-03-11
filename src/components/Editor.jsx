import SetupInfoField from "./SetupInfoField";
import ContactInfoField from './ContactInfoField';
import EducationalInfoField from "./EducationalInfoField";
import WorkInfoField from "./WorkInfoField";


function Editor({ formData, handleChange, handleFormSubmit, setFormData }) {
    return (
        <>
            <h1>CV Generator</h1>
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