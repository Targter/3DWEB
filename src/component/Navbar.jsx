import { BsMoonStarsFill } from "react-icons/bs";
import { BsMoonStars } from "react-icons/bs";
const Navbar = ({ setbackground, changebackground }) => {
  return (
    <>
      <div className="Navcontainer">
        <div className="navitems">
          <ul>
            <li>Blog</li>
            <li>News</li>
            <li>Webstories</li>
            <li>Glossary</li>

            <li>FAQs</li>
          </ul>
        </div>
        <button className="creditbtn">Check Credit Score for free</button>
        <div className="darkmode">
          {changebackground === true ? (
            <BsMoonStars onClick={() => setbackground(!changebackground)} />
          ) : (
            <BsMoonStarsFill onClick={() => setbackground(!changebackground)} />
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
