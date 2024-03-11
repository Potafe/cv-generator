import '../styles/ViewForm.css'
function ViewForm({ formData }) {

    const formattedDate = (inDate) => {
        const [year, month] = inDate.split("-");
        const formattedDate = new Date(`${month}-01-${year}`);
        const monthName = formattedDate.toLocaleString("en-US", { month: "long" });
        return `${monthName} ${year}`;
    }

    //********************EDUCATION-SECTION*********************//
    const EducationItemCreate = (educationItem, index) => (
        <div key = {index} className="education-info">
            <div className="education-heading">
                <h2 className="education-school">{educationItem.school}</h2>
                <span className="education-date">
                    {formattedDate(educationItem.startDate)} -{" "}
                    {educationItem.onGoing ? "present" : formattedDate(educationItem.endDate)}
                </span>
            </div>
            <div>
                <span>{educationItem.degree}</span>
                {educationItem.addInfo ? (
                    <ul>
                        {educationItem.addInfo.split(",").map((item, index) => (
                            <li key = {index}>{item}</li>
                        ))}
                    </ul>
                ) : (" ")}
            </div>
        </div>
    );

    const educationItemEmpty = (
        <div className = "education-info">
            <div className = "education-heading">
                <h2 className="education-school">CIA Headquarter</h2>
                <span className="education-date">March 2024 - March 2025</span>
            </div>
            <div>
                <span>BA in Spyism</span>
                <ul>
                    <li>Graduated with Honors</li>
                    <li>Suma Cum Laude</li>
                </ul>
            </div>
        </div>
    );

    //********************WORK-SECTION*********************//
    const WorkItemCreate = (workData, index) => (
        <div key = {index} className = "work-info">
            <div className="work-heading">
                <h2 className="work-position">{workData.position}</h2>
                <span className = "work-date">
                    {formattedDate(workData.startDate)} -{" "}
                    {workData.onGoing ? "present" : formattedDate(workData.endDate)}
                </span>
            </div>
            <div>
                <span>{workData.company}</span>
                {workData.duty ? (
                    <ul>
                        <span>
                            <i>Duties</i>
                        </span>
                        {workData.duty.split(",").map((item, index) => (
                            <li key = {index}>{item}</li>
                        ))}
                    </ul>
                ) : ("")}
            </div>
        </div>
    );

    const workItemEmpty = (
        <div className = "work-info">
            <div className = "work-heading">
                <h2 className="work-school">CIA Headquarter</h2>
                <span className="work-date">March 2024 - March 2025</span>
            </div>
            <div>
                <span>Phineas and Ferb Pet Scientist Co-Op</span>
                <ul>
                    <span>
                        <i>Duties</i>
                    </span>
                    <li>Sabotage</li>
                    <li>Undercover</li>
                </ul>
            </div>
        </div>
    );

    const skillItemEmpty = (
        <>
            <h5>Breaking In</h5>
            <h5>Breaking Bad</h5>
            <h5>Charm</h5>
        </>
    );


    //********************VIEW-FORM-SECTION*********************//                      
    return (    
        <>
            <div className="info-container">
                <div className="basicInfo-container">
                    <div className="basicInfo-fullname">
                        <span>
                            {formData.setupinfo.firstName ? formData.setupinfo.firstName : "Platypus"}{" "}
                            {formData.setupinfo.lastName ? formData.setupinfo.lastName : "Perry"}{" "}
                        </span>
                    </div>
                    <div className="basicInfo-profTitle">
                        <span> 
                            {formData.setupinfo.profTitle ? formData.setupinfo.profTitle : "The Best Spy"}
                        </span>
                        <div className="basicInfo-about">
                            {formData.setupinfo.aboutYpu ? formData.setupinfo.aboutYou : "Lorem Ipsum dolor sit amet consectetur adipisicing elit. Nulla architecto enim voluptatibus consequatur doloribus. Quibusdam consequatur laudantium tenetur minima iure eligendi praesentium iste fugiat saepe, error veniam fugit porro ea!"}
                        </div>
                    </div>
                </div>
                <div className="contactinfo-container">
                    <div className="contactinfo-item">
                        <i className = "bi bi-envelope-fill"></i>
                        <span>
                            {formData.contactinfo.email ? formData.contactinfo.email : "perry.platypus@CIA.com"}
                        </span>
                    </div>
                    <div className="contactinfo-item">
                        <i className = "bi bi-telephone-fill"></i>
                        <span>
                            {formData.contactinfo.phone ? formData.contactinfo.phone : "+9-001-001-001"}
                        </span>
                    </div>
                    <div className="contactinfo-item">
                        <i className = "bi bi-browser-chrome"></i>
                        <span>
                            {formData.contactinfo.website ? formData.contactinfo.website : "www.perry.com"}
                        </span>
                    </div>
                    <div className="contactinfo-item">
                        <i className="bi bi-linkedin"></i>
                        <span>
                            {formData.contactinfo.linkedin ? formData.contactinfo.linkedin : "perry's-LinkedIn"}
                        </span>
                    </div>
                    <div className="contactinfo-item">
                        <i className="bi bi-github"></i>
                        <span>
                            {formData.contactinfo.github ? formData.contactinfo.github : "perry's-Github"}
                        </span>
                    </div>
                </div>
            </div>

            <div className="lower-bottom">
                <div className="left-side">
                    <div className = "educationalInfo-container">
                        <h3>Educational Background</h3>
                        <hr />
                        {formData.education && formData.education.length > 0 ? formData.education.map((educationaItem, index) => EducationItemCreate(educationaItem, index)) : educationItemEmpty}
                    </div>
                    <div className= "workInfo-container">
                        <h3>Work Experience</h3>
                        <hr />
                        {formData.work && formData.work.length > 0 ? formData.work.map((workItem, index) => WorkItemCreate(workItem, index) ) : workItemEmpty}
                    </div>
                </div>
                <div className = "right-side">
                    <div className = "skillInfo-container">
                        <h3>Skills</h3>
                        <hr />
                        {formData.skills && formData.skills.length > 0 ? formData.skills.map((skillItem, index) => (<h5 key={index}>{skillItem.skill}</h5>)) : skillItemEmpty}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ViewForm;