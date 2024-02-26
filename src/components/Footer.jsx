import phoneImage from "../assets/icons/phone-call.png";
import fbImage from "../assets/icons/facebook.png";
import webImage from "../assets/icons/global.png";
const Footer = () => {
  return (
    <footer>
      <div>
        <img className="icon" src={phoneImage} alt="" />
        Toll free 1800 200 1234
      </div>
      <div>
        <img className="icon" src={fbImage} alt="" />
        www.facebook.com/cripumps
      </div>
      <div>
        <img className="icon" src={webImage} alt="" />
        www.crigroups.com
      </div>
    </footer>
  );
};

export default Footer;
