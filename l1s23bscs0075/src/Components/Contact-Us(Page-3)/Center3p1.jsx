import { Link } from "react-router-dom";

function Center3() {
  return (
    <div>
      <div className="maincenter3">
        <div className="centerdiv3">
          <form>
            <div className="centerdivw">
              <div className="centerdivm1">
                <p>
                  <span className="star">*</span> Name
                </p>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  defaultValue="john doe"
                  required
                />
              </div>
              <div className="centerdivm1">
                <p>
                  <span className="star">*</span> Email
                </p>
                <input
                  type="email"
                  name="em"
                  placeholder="Enter Email"
                  defaultValue="john.doe@gmail.com"
                  required
                />
              </div>
            </div>

            <p>Telephone</p>
            <input
              className="centerdivm1inputTele"
              type="number"
              name="num"
            />

            <p>
              <span className="star">*</span> Comment
            </p>
            <textarea
              className="centerdivm1inputCom"
              name="coment"
              required
            ></textarea>

            <p>
              <span className="star">* Required Fields</span>
            </p>

            <button className="centerdivB" type="submit">
              <i className="fa-solid fa-play"></i> Submit
            </button>
          </form>

          <br />
          <br />
        </div>

        <div className="centerDiv2">
          <p className="centerDiv2Co">Company</p>
          <hr className="centerDiv2Line" />
          
          <p className="centerDiv2p">
            <i className="fa-solid fa-chevron-right"></i>{" "}
            <Link
              to="/page2"
              style={{
                paddingLeft: "2px",
                textDecoration: "none",
                color: "inherit",
                cursor: "pointer"
              }}
            >
              About Us
            </Link>
          </p>

          <p className="centerDiv2p">
            <i className="fa-solid fa-chevron-right"></i> Sitemap
          </p>

          <p className="centerDiv2p">
            <i className="fa-solid fa-chevron-right"></i> Terms of Service
          </p>

          <p className="centerDiv2p">
            <i className="fa-solid fa-chevron-right"></i> Search Team
          </p>

          <p className="centerDiv2p2">
            <i className="fa-solid fa-chevron-right"></i>{" "}
            <Link
              to="/page3"
              style={{
                paddingLeft: "2px",
                textDecoration: "none",
                color: "inherit",
                cursor: "pointer"
              }}
            >
              Contact Us
            </Link>
          </p>

          <br />
          <br />
        </div>
      </div>
    </div>
  );
}

export default Center3;
