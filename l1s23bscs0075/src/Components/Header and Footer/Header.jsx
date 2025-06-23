
function Header(){
    return(
         <div className="HeadDiv">
        <p className="Headp">Flipmart</p>
        <div className="miniDiv1">
            <p className="miniDivp">Women </p>
            <p className="miniDivp">Men </p> 
            <p className="miniDivp">Electronics </p> 
            <p className="miniDivp">Furniture </p> 
            <p className="miniDivp">Pages </p> 
            <p className="miniDivp">Custom </p> 
        </div>
        <div className="miniDiv2">
            <div className="iconDiv">
                <img className="iconDivimg" src="https://icons.veryicon.com/png/o/miscellaneous/big-data-regular-monochrome-icon/search-893.png" />
            </div>
             
            <input className="inputpart" type="text" name="search" placeholder="Search" />
        </div>

        <div className="iconDiv2">
            <i style={{ color: "white" }} className="fa-solid fa-cart-shopping"></i>
        </div>
        <div className="iconDiv3">
            <i style={{ color: "white" }} className="fa-solid fa-bars"></i>
        </div>
    </div>
    )
}

export default Header;