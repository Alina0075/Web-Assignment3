import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="EndDiv">
            <div className="EndDiv1">
                <p className="EndDivMainp">Contact Us</p>
                <div className="EndContactRow">
                    <div className="IconCircle">
                        <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <p className="Endp">ThemesGround, Anytown, CA 12345 USA</p>
                </div>
                <div className="EndContactRow">
                    <div className="IconCircle">
                        <i className="fa-solid fa-phone"></i>
                    </div>
                    <p className="Endp">+(888) 123-4567</p>
                </div>
                <div className="EndContactRow">
                    <div className="IconCircle">
                        <i className="fa-solid fa-envelope"></i>
                    </div>
                    <p className="Endp">Flipmart@themesground.com</p>
                </div>
                <div className="EndContactRow1">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-google-plus-g"></i>
                    <i className="fa-solid fa-wifi"></i>
                    <i className="fa-brands fa-square-pinterest"></i>
                    <i className="fa-brands fa-linkedin-in"></i>
                    <i className="fa-brands fa-youtube"></i>
                </div>
            </div>

            <div className="EndDiv2">
                <p className="EndDivMainp">Customer Service</p>
                <p className="Endp">My Account</p>
                <p className="Endp">Order History</p>
                <p className="Endp">FAQ</p>
                <p className="Endp">Specials</p>
                <p className="Endp">Help Center</p>
            </div>

            <div className="EndDiv2">
                <p className="EndDivMainp">Corporation</p>
                <p className="Endp"><Link to="/page2" className="Endp" style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
                    About Us
                </Link></p>
                <p className="Endp">Customer Service</p>
                <p className="Endp">Company</p>
                <p className="Endp">Investor Relations</p>
                <p className="Endp">Advanced Search</p>
            </div>

            <div className="EndDiv2">
                <p className="EndDivMainp">Why Choose Us</p>
                <p className="Endp">Shopping Guide</p>
                <p className="Endp">Blog</p>
                <p className="Endp">Company</p>
                <p className="Endp">Investor Relations</p>
                <p className="Endp"><Link to="/page3" className="Endp" style={{ paddingLeft:'2px',textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
                    Contact Us
                </Link></p>
            </div>
        </div>
    );
}

export default Footer;
