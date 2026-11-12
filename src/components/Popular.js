
import c1 from '../assets/images/c1.jpg';
import c2 from '../assets/images/c2.jpg';
import c3 from '../assets/images/c3.jpg';
import c4 from '../assets/images/c4.jpg';
import c5 from '../assets/images/c5.jpg';
import c6 from '../assets/images/c6.jpg';
import c7 from '../assets/images/c7.jpg';



//Popular
function Popular() {
    return (<div className="popular">
        <h1 className="popular_title">Most Popular</h1>
        <p className="popular_subtitle">Pick the best fit</p>
        <div className="popular_container">
            <div className="course-card">
                <img src={c1} alt="Course 5"></img>
                <p>2023 Python Data Visualisation Masterclass</p>
                <p>Col Steele</p>
                <p>4.9⭐⭐⭐⭐</p>
                <p>600 <del>1999</del></p>
            </div>
            <div className="course-card">
                <img src={c2} alt="Course 6"></img>
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
            <div className="course-card">
                <img src={c5} alt="Course 5"></img>
                <p>2023 Python Data Visualisation Masterclass</p>
                <p>Col Steele</p>
                <p>4.9⭐⭐⭐⭐</p>
                <p>600 <del>1999</del></p>
            </div>
            <div className="course-card">
                <img src={c6} alt="Course 6"></img>
                <p>Web Development Bootcamp 2023</p>
                <p>Col Steele</p>
                <p>3.9 ⭐⭐⭐</p>
                <p>600 <del>1999</del></p>
            </div>
            <div className="course-card">
                <img src={c7} alt="Course 3"></img>
                <p>Basic to Advance Programming with EMC</p>
                <p>Col Steele</p>
                <p>4.7 ⭐⭐⭐⭐</p>
                <p>500 <del>1999</del></p>
            </div>
            <div className="course-card">
                <img src={c5} alt="Course 4"></img>
                <p>UI & UX Designing Master class with Figma</p>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>550 <del>2500</del></p>
            </div>
        </div>
    </div>)
}

export default Popular;