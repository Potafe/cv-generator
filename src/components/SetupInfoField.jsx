import styles from '../styles/style.module.css'

function SetupInfoField({ setupinfo, handleChange}) {
    const fieldContent = (
        <form>
            <fieldset className={styles.fieldset}>
                <div className={styles.infoFieldContainer}>
                    <span className={styles.inputLabel}>
                        First Name: 
                    </span>
                    <input type = 'text' placeholder="First Name" name = 'firstName' value = {setupinfo.firstName} onChange={handleChange} data-custom-value = 'setupinfo' className={styles.inputField} />
                </div>
                <div className={styles.infoFieldContainer}>
                    <span className={styles.inputLabel}> 
                        Last Name: 
                    </span>
                    <input type = 'text' placeholder="Last Name" name = 'lastName' value = {setupinfo.lastName} onChange={handleChange} data-custom-value = 'setupinfo' className={styles.inputField}/>
                </div>
                <div className={styles.infoFieldContainer}>
                    <span className={styles.inputLabel}> 
                        Professional Title: 
                    </span>
                    <input type="text" placeholder="Professional Title" name="profTitle" value={setupinfo.profTitle} onChange={handleChange} data-custom-value = 'setupinfo' className={styles.inputField}/>
                </div>
                <div className={styles.infoFieldContainer}>
                    <span className={styles.inputLabel}>
                        About You: 
                    </span>
                    <input type="text" placeholder="About You" name="aboutYou" value={setupinfo.aboutYou} onChange={handleChange} data-custom-value = 'setupinfo' className={styles.inputField}/>
                </div>
            </fieldset>
        </form>
    )

    return (
       <div>
        <h3>Basic Information</h3>
        {fieldContent}
       </div> 
    );
}

export default SetupInfoField;