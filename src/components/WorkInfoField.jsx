import { useState } from "react"
import style from '../styles/style.module.css'
import '../styles/WorkInfo.css'

function WorkInfoField({ handleFormSubmit, workData, setFormData }) {

    const [posVal, setPosVal] = useState('')
    
    const [compVal, setCompVal] = useState('')

    const [startDate, setStartDateVal] = useState('')

    const [endDate, setEndDateVal] = useState('')

    const [OnGoing, setOnGoing] = useState(false)

    const [dutyVal, setDutyVal] = useState('')

    const [dutyArray, setDutyArray] = useState([])


    const handlePosVal = (e) => {
        setPosVal(e.target.value)
    }

    const handleCompanyVal = (e) => {
        setCompVal(e.target.value)
    }

    const handleStartVal = (e) => {
        setStartDateVal(e.target.value)
    }

    const handleEndVal = (e) => {
        setEndDateVal(e.target.value)
    }

    const handleOnGoing = (e) => {
        setOnGoing(e.target.checked)
    }

    const handleDutyVal = (e) => {
        setDutyVal(e.target.value)
    }

    const handleDutyArray = () => {
        if(dutyVal !== '') {
            setDutyArray((d) => [...d, dutyVal])
            setDutyVal('')
        }
    }

    const handleRemoveDutyArray = (e) => {
        setDutyArray((d) => {
            const arrayCpy = [...d]
            arrayCpy.splice(e.target.dataset.indexValue, 1)
            return [...arrayCpy]
        })
    }

    const handleSubmit = (e) => {
        handleFormSubmit(e)
        setPosVal('')
        setCompVal('')
        setStartDateVal('')
        setEndDateVal('')
        setDutyArray([])
    };

    const handleDeleteForm = (e) => {
        setFormData((f) => {
            const updateWork = [...f.work]
            updateWork.splice(e.target.dataset.indexValue, 1)
            return { ...f, work: updateWork}
        });
    };

    const handleEditForm = (e) => {
        const editData = workData[e.target.dataset.indexValue]
        setPosVal(editData.position)
        setCompVal(editData.company)
        setStartDateVal(editData.startDate)
        setEndDateVal(editData.endDate)
        if (editData.duty) {
            setDutyArray([...editData.duty.split(',')])
        }
        handleDeleteForm(e)
    }

    const showNotOnGoing = (
        <div className={style.inputFieldContainer}>
            <span className={style.inputLabel}>End Date: </span>
            <input type="month" value={endDate} name="endDate" className={style.inputField} onChange={handleEndVal} required/>
        </div>
    )

    return (
        <form data-custom-value = "work" onSubmit = {handleSubmit}>
            <h3>
                Work Experience
            </h3>
            <div className = "workItems-container">
                {workData ? workData.map((el,index) => (
                    <div className="workItem">
                        <span className="workItem-name">
                            {el.position}
                        </span>
                        <i className="bi bi-pencil" data-index-value = {index} data-form-type="work" onClick={handleEditForm}></i>/
                        <i className="bi bi-trash" data-index-value = {index} data-form-type="work" onClick={handleDeleteForm}></i>
                        </div>
                )) : "" }

                <div>
                    <fieldset className = {style.fieldset}>
                        <div className = {style.inputFieldContainer}>
                            <span className={style.inputLabel}>Position: </span>
                            <input value = {posVal} type = "text" placeholder="Title" name = "position" className={style.inputField} onChange={handlePosVal}/>
                        </div>
                        <div className = {style.inputFieldContainer}>
                            <span className={style.inputLabel}>Company: </span>
                            <input value = {compVal} type = "text" placeholder="Company" name = "company-name" className={style.inputField} onChange={handleCompanyVal}/>
                        </div>
                        <div className = {style.inputFieldContainer}>
                            <span className={style.inputLabel}>Start Date: </span>
                            <input value = {startDate} type = "month" placeholder="Start-Date" name = "startDate" className={style.inputField} onChange={handleStartVal}/>
                        </div>
                        <div className={style.inputFieldContainer}>
                            <span>On Going: </span>
                            <input type = "checkbox" name = "Ongoing" className="" checked = {OnGoing} onChange={handleOnGoing} value={OnGoing}/>
                        </div>

                        {!OnGoing && showNotOnGoing}

                        <input hidden value = {dutyArray} name = "duties"/>

                        <div className={style.inputFieldContainer}>
                            <span>
                                Duties: 
                            </span>
                            <div className="dutiesItems-container">
                                {dutyArray.map((item, index) => (
                                <div className="dutiesItem">
                                    <span className="dutiesItem-name" key={index}>
                                    {item}{" "}
                                    </span>
                                    <i
                                    className="bi bi-trash"
                                    data-index-value={index}
                                    onClick={handleRemoveDutyArray}
                                    ></i>
                                </div>
                                ))}    
                            </div>
                            <div className="dutiesInput-container">
                                <input
                                type="text"
                                value={dutyVal}
                                placeholder="List Duties and Responsibilities"
                                className={style.inputField}
                                onChange={handleDutyVal}
                                />
                                <img
                                onClick={handleDutyArray}
                                className="cirlce-image"
                                />
                            </div>
                        </div>

                    <button type="submit" className={style.button}>
                    Submit
                    </button>
                    </fieldset>
                </div>
            </div>
        </form>
    );
}

export default WorkInfoField