function ViewForm({ formData }) {
    return (
        <div>
            <h1>CV</h1>
            <h3>Basic Information</h3>
            <ul>
                {Object.entries(formData.setupinfo).map(([key, value]) => (
                    <li key = {key}>
                        {key}: {value}
                    </li>
                ))}
            </ul>
            <hr />
            <h3>Contact Information</h3>
            <ul>
                {Object.entries(formData.contactinfo).map(([key, value]) => (
                    <li key = {key}>
                        {key}: {value}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ViewForm;