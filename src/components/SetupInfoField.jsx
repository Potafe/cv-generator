import styles from '../styles/style.module.css'

function SetupInfoField({ setupinfo, handleChange}) {
    return (
        <form>
            <h3>Basic Information</h3>
            <fieldset>
                <div>
                    <span>
                        First Name: 
                    </span>
                    <input type = 'text' placeholder="First Name" name = 'firstName' value = {setupinfo.firstName} onChange={handleChange} data-custom-value = 'setupinfo' className={styles.inputField} />
                </div>
                <div>
                    <span> 
                        Last Name: 
                    </span>
                    <input type = 'text' placeholder="Last Name" name = 'lastName' value = {setupinfo.lastName} onChange={handleChange} data-custom-value = 'setupinfo' className={styles.inputField}/>
                </div>
                <div>
                    <span> 
                        Professional Title: 
                    </span>
                    <input type="text" placeholder="Professional Title" name="profTitle" value={setupinfo.profTitle} onChange={handleChange} data-custom-value = 'setupinfo' className={styles.inputField}/>
                </div>
                <div>
                    <span>
                        About You: 
                    </span>
                    <input type="text" placeholder="About You" name="aboutYou" value={setupinfo.aboutYou} onChange={handleChange} data-custom-value = 'setupinfo' className={styles.inputField}/>
                </div>
            </fieldset>
        </form>
    );
}

export default SetupInfoField;