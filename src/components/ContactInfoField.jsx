import styles from '../styles/style.module.css'
function ContactInfoField({ contactinfo, handleChange }) {
    return (
        <form>
            <h3>Contact Information</h3>
            <fieldset className={styles.fieldSet}>
                <div className={styles.inputFieldContainer}>
                    <span className={styles.inputLabel}>
                        Phone: 
                    </span>   
                    <input type = "text" placeholder="Phone" name = "phone" className={styles.inputField} value = {contactinfo.phone} onChange={handleChange} data-custom-value="contactinfo"/>
                </div>
                <div className={styles.inputFieldContainer}>
                    <span className={styles.inputLabel}>
                        Email Address: 
                    </span>
                    <input type = "email" placeholder="Email" name = "email" className={styles.inputField}  value = {contactinfo.email} onChange={handleChange} data-custom-value="contactinfo"/>
                </div>
                <div className={styles.inputFieldContainer}>
                    <span className={styles.inputLabel}>
                        LinkedIn: 
                    </span>
                    <input type = "text" placeholder="LinkedIn" name = "linkedin" className={styles.inputField}  value = {contactinfo.linkedin} onChange={handleChange} data-custom-value="contactinfo"/>
                </div>
                <div className={styles.inputFieldContainer}>
                    <span className={styles.inputLabel}>
                        Website: 
                    </span>
                    <input type = "text" placeholder="Website" name = "website" className={styles.inputField}  value = {contactinfo.website} onChange={handleChange} data-custom-value="contactinfo"/>
                </div>
                <div className={styles.inputFieldContainer}>
                    <span className={styles.inputLabel}>
                        Github: 
                    </span>
                    <input type = "text" placeholder="Github" name = "github" className={styles.inputField}  value = {contactinfo.github} onChange={handleChange} data-custom-value="contactinfo"/>
                </div>
            </fieldset>
        </form>
    )
}

export default ContactInfoField;