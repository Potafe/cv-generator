function SetupInfoField({ setupinfo, handleChange}) {
    return (
        <form>
            <h1>Basic Information</h1>
            <fieldset>
                <div>
                    <span>
                        First Name: 
                    </span>
                    <input type = 'text' placeholder="First Name" name = 'firstName' value = {setupinfo.firstName} onChange={handleChange} data-custom-value = 'setupinfo' className="input-field" />
                </div>
                <div>
                    <span> 
                        Last Name: 
                    </span>
                    <input type = 'text' placeholder="Last Name" name = 'lastName' value = {setupinfo.lastName} onChange={handleChange} data-custom-value = 'setupinfo' className="input-field"/>
                </div>
                <div>
                    <span> 
                        Professional Title: 
                    </span>
                    <input type="text" placeholder="Professional Title" name="profTitle" value={setupinfo.profTitle} onChange={handleChange} data-custom-value = 'setupinfo' className="input-field"/>
                </div>
                <div>
                    <span>
                        About You: 
                    </span>
                    <input type="text" placeholder="About You" name="aboutYou" value={setupinfo.aboutYou} onChange={handleChange} data-custom-value = 'setupinfo' className="input-field"/>
                </div>
            </fieldset>
        </form>
    );
}

export default SetupInfoField;