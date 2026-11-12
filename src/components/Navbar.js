//Navbar Component

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar_s1">
                <h1 className="navbar_s1_title">Udemy</h1>
            </div>
            <div className="navbar__s2">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input placeholder="Search for anything here. Tech, Businness, Arts"></input>
            </div>
            <div className="navbar__s3">
                <p>courses</p>
                <div className="mylearning"><p>My Learning</p>
                    <div className="mylearning_popup">
                        <p>You did not purchase anything yet</p>
                    </div>
                </div>
                <i className="fa-solid fa-cart-shopping" style={{color:"black"}}></i>
                <i className="fa-solid fa-bell" style={{color:"black"}}></i>
                <i className="fa-solid fa-user" style={{color:"black"}}></i>

            </div>
            <div class="navbar__s4">
                <i className="fa-mosaic fa-solid fa-bars"></i>
            </div>
        </div>
    )
}

export default Navbar;