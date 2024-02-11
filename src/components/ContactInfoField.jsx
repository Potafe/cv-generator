function ContactInfoField({ contactinfo, handleChange }) {
    return (
        <form>
            <h1>Contact Information</h1>
            <fieldset>
                <div>
                    <span>
                        Phone: 
                    </span>
                    <input type = "text" placeholder="Phone" name = "phone" className="input-field" value = {contactinfo.phone} onChange={handleChange} data-custom-value="contactinfo"/>
                    <span>
                        Email Address: 
                    </span>
                    <input type = "text" placeholder="Email" name = "Email" className="input-field" value = {contactinfo.email} onChange={handleChange} data-custom-value="contactinfo"/>
                    <span>
                        LinkedIn: 
                    </span>
                    <input type = "text" placeholder="LinkedIn" name = "LinkedIn" className="input-field" value = {contactinfo.linkedin} onChange={handleChange} data-custom-value="contactinfo"/>
                    <span>
                        Website: 
                    </span>
                    <input type = "text" placeholder="Website" name = "Website" className="input-field" value = {contactinfo.website} onChange={handleChange} data-custom-value="contactinfo"/>
                    <span>
                        Github: 
                    </span>
                    <input type = "text" placeholder="Github" name = "Github" className="input-field" value = {contactinfo.github} onChange={handleChange} data-custom-value="contactinfo"/>
                </div>
            </fieldset>
        </form>
    )
}

export default ContactInfoField;