import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Success from "../assets/Misc/Success.png"
import './PaymentSuccessful.css'


function PaymentSuccessful(){
return(
    <>
    <NavBar />

    <div className="payment-container">
        <div className="payment-icon">
            <img src={Success}></img>
        </div>
        
        <h1>Payment Successful</h1>
        
        <button className="back-menu"><a href="/">Back to Menu</a></button>
    </div>
    
    <Footer/>
    
    </>
)
}

export default PaymentSuccessful