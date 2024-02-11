function ViewForm({ formData }) {
    return (
        <div>
            <h1>CV</h1>
            <ul>
                {Object.entries(formData.setupinfo).map(([key, value]) => (
                    <li key = {key}>
                        {key}: {value}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ViewForm;