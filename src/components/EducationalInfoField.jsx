import { useState } from "react";

function EducationalInfoField({ handleFormSubmit, educationData, setFormData }) {
    
    const [OnGoing, setOnGoing] = useState(false);
    const [addInfo, setAddInfo] = useState([]);
    const [addInfoVal, setAddInfoVal] = useState('');
    const [schoolVal, setSchoolVal] = useState('');
    const [degreeVal, setDegreeVal] = useState('');
    const [startDateVal, setStartDateVal] = useState('');
    const [endDateVal, setEndDateVal] = useState('');

    const currentDate = new Date();

    const formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1)
        .toString()
        .padStart(2, "0")}`;

    const handleDegreeVal = (e) => setDegreeVal(e.target.value);
    
    const handleEndDateVal = (e) => setEndDateVal(e.target.value);

    const handleStartDateVal = (e) => setStartDateVal(e.target.value);
    
    const handleSchooVal = (e) => setSchoolVal(e.target.value);
    
    const handleAddInfoVal = (e) => setAddInfoVal(e.target.value);

    const handleAddInfo = (e) => {
        if (addInfoVal !== "") {
            setAddInfo((a) => [...a, addInfoVal]);
            setAddInfoVal("");
        }
    };

    const handleRemoveInfo = (e) => {
        setAddInfo((a) => {
            const arrayCopy = [...a];
            arrayCopy.splice(e.target.dataset.indexValue, 1)
            return [...arrayCopy];
        });
    };

    const handleOnGoing = (e) => setOnGoing(e.target.checked);

    const showOnGoing = (<input type = "month" name = "endDate" defaultValue={formattedDate} hidden/>)

    const showNotOnGoing = (
        <div>
            <span>Graduated: </span>
            <input value = {endDateVal} type = "month" name = "endDate" className="F" onChange={handleEndDateVal} required  />
        </div>
    );

    const handleSubmit = (e) => {
        handleFormSubmit(e);
        setSchoolVal("");
        setDegreeVal("");
        setEndDateVal("");
        setStartDateVal("");
        setAddInfo([]);
    }

    const handleDeleteForm = (e) => {
        setFormData((f) => {
            const updatedEducation = [...f.education];
            updatedEducation.splice(e.target.dataset.indexValue, 1);
            return { ...f, education: updatedEducation};
        })
    }

    const handleEditForm = (e) => {
        const editData = educationData[e.target.dataset.indexValue];
        setSchoolVal(editData.school);
        setDegreeVal(editData.degree);
        setStartDateVal(editData.startDateVal);
        setEndDateVal(editData.endDateVal);
        if (editData.addInfo) {
            setAddInfo([...editData.addInfo.split(",")]);
        }
        handleDeleteForm(e);
    }

    return (
        <form data-custom-value = "education" onSubmit = {handleSubmit}>
            <h3>Educational Background</h3>
            {educationData ? educationData.map((element, index) => (
                <div>
                    <span>{element.school}</span>
                    <i data-index-value = {index} data-form-type = "education" onClick = {handleEditForm}></i>/
                    <i data-index-value = {index} data-form-type = "education" onClick = {handleDeleteForm}></i>
                </div>
            )) 
            : ""}

            <fieldset>
                <div>
                    <span>School: </span>
                    <input value = {schoolVal} type = "text" placeholder="School" onChange = {handleSchooVal} required/>
                </div>
                <div>
                    <span>Degree: </span>
                    <input value = {degreeVal} type = "text" placeholder="Degree" onChange = {handleDegreeVal} required/>
                </div>
                <div>
                    <span>Starting Year: </span>
                    <input value = {startDateVal} type = "month" onChange = {handleStartDateVal} name = "startDate" required/>
                </div>
                <div>
                    <span>OnGoing </span>
                    <input type = "checkbox" name = "onGoing" className="" onChange={handleOnGoing} checked = {OnGoing}/>
                </div>
                {OnGoing ? showOnGoing : showNotOnGoing}
                <input value = {addInfo} name = "addInfo" hidden />
                    <div>
                        <span>
                            Additional Info(Awards,etc): 
                        </span>
                        <div>
                            {addInfo.map((item, index) => (
                                <span key = {index}>
                                    {item}{" "}
                                    <i data-index-value = {index} onClick = {handleRemoveInfo}></i>
                                </span>
                            ))}
                        </div>
                        <div>
                            <input type = "text" value = {addInfoVal} onChange = {handleAddInfo}/>
                            <i onClick = {handleAddInfo}></i>
                        </div>
                    </div>
                    <button type = "submitt">Submit</button>
            </fieldset>
        </form>
    )
}

export default EducationalInfoField;