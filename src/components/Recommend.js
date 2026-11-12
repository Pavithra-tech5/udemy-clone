//recommend
function Recommend() {
    return (<div className="recomended">
        <h1 className="recomended_title">Recomended for you</h1>
        <p>Pick the best fit</p>
        <div className="recomended_container">
            <div className="course-card">
                <img src={c1} alt="Course 1"></img>
                <p>2023 Python Data Visualisation Masterclass</p>
                <p>Col Steele</p>
                <p>4.9⭐⭐⭐⭐</p>
                <p>600 <del>1999</del></p>
            </div>
            <div className="course-card">
                <img src={c2} alt="Course 2"></img>
                <p>Web Development Bootcamp 2023</p>
                <p>Col Steele</p>
                <p>3.9 ⭐⭐⭐</p>
                <p>600 <del>1999</del></p>
            </div>
            <div className="course-card">
                <img src={c3} alt="Course 3"></img>
                <p>Basic to Advance Programming with EMC</p>
                <p>Col Steele</p>
                <p>4.7 ⭐⭐⭐⭐</p>
                <p>500 <del>1999</del></p>
            </div>
            <div className="course-card">
                <img src={c4} alt="Course 4"></img>
                <p>UI & UX Designing Master class with Figma</p>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>550 <del>2500</del></p>
            </div>
        </div>
    </div>)
}



export default Recommend;