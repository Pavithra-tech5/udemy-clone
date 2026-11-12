import sale from '../assets/images/sale.jpg';

//Saleimage Component
function Saleimage() {
    return (
        <div className="sale-image">
            <img src={sale} alt="sale-image"></img>
            <div className="sale-image_offer">
                <h1>udemy Flash sale! 24 hours to save.</h1>
                <p>Get the top courses for jsut 499. Just one day to save but a lifetime to learn</p>
            </div>
        </div>)
}


export default Saleimage;