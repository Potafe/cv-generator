import SetupInfoField from "./SetupInfoField";
import ContactInfoField from './ContactInfoField';
import EducationalInfoField from "./EducationalInfoField";

function Editor({ formData, handleChange, handleFormSubmit, handleDeleteForm, setFormData }) {
    return (
        <>
            <h1>CV Generator</h1>
            <SetupInfoField setupinfo={formData.setupinfo} handleChange={handleChange} />
            <hr />
            <ContactInfoField contactinfo = {formData.contactinfo} handleChange = {handleChange} />
            <hr />
            <EducationalInfoField handleFormSubmit={handleFormSubmit} educationData={formData.education} handleDeleteForm = {handleDeleteForm} setFormData={setFormData}/>
            <hr />
            <h3>Work Experience</h3>
            <hr />
        </>
    );
}

export default Editor;