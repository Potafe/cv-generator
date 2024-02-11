import SetupInfoField from "./SetupInfoField";
import ContactInfoField from './ContactInfoField';

function Editor({ formData, handleChange, handleFormSubmit }) {
    return (
        <>
            <h1>CV Generator</h1>
            <SetupInfoField setupinfo={formData.setupinfo} handleChange={handleChange} />
            <hr />
            <ContactInfoField contactinfo = {formData.contactinfo} handleChange = {handleChange} />
            <hr />
            <h3>Educational Information</h3>
            <hr />
            <h3>Work Experience</h3>
            <hr />
            <h3>Achievements</h3>
        </>
    );
}

export default Editor;