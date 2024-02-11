function SetupInfoField({ setupinfo, handleChange}) {
    return (
        <form>
            <h1>Basic Information</h1>
            <fieldset>
                <div>
                    <span>
                        First Name: 
                    </span>
                    <input type = 'text' placeholder="First Name" name = 'firstName' value = {setupinfo.firstName} onChange={handleChange} />
                </div>
                <div>
                    <span> 
                        Last Name: 
                    </span>
                    <input type = 'text' placeholder="Last Name" name = 'lasttName' value = {setupinfo.lastName} onChange={handleChange}/>
                </div>
                <div>
                    <span> 
                        Professional Title: 
                    </span>
                    <input type="text" placeholder="Professional Title" name="profTitle" value={setupinfo.profTitle} onChange={handleChange}/>
                </div>
                <div>
                    <span>
                        About You: 
                    </span>
                    <input type="text" placeholder="About You" name="aboutYou" value={setupinfo.aboutYou} onChange={handleChange}/>
                </div>
            </fieldset>
        </form>
    );
}

export default SetupInfoField;