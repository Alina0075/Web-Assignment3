
function EndDiv(){
    return (
         <div className="FooterDiv">
        <img className="Footerimg" src="https://static-00.iconduck.com/assets.00/paypal-icon-2048x1313-2rx1ayax.png" />
        <img className="Footerimg2" src="https://static-00.iconduck.com/assets.00/payment-card-visa-icon-2048x1636-jaypg786.png" />
        <img className="Footerimg2" src="https://static-00.iconduck.com/assets.00/amex-icon-2048x1286-jssggdy1.png" />
        <img className="Footerimg2" src="https://static-00.iconduck.com/assets.00/mastercard-icon-512x329-xpgofnyv.png" />
        <p className="Footerp">Sign up for emails</p>
        <input className="FooterEmail" type="text" name="email" placeholder="Enter your email address" />
        
        <div className="FooterEmailS">
             <i style={{ color: "white" }} className="fa-solid fa-envelope"></i>
             <p className="FooterEmailSp">SUSCRIBE</p>
        </div>
    </div>
    )
}
export default EndDiv;