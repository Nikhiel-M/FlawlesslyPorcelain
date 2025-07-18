import {  HeaderWrapper } from "./Header.styled";
import logo from "../../Assets/Flawlessly-porclien-cut.jpg"



const Header = () => {
  return (
    <HeaderWrapper>
        <img src={logo} alt="Flawlessly Porcelain Logo" className="logo" />
        <nav className="nav"> 
          <ul className="nav-links">
            <li href="">Ingredients & Benefits</li>
            <li>Pricing & Contact</li>
          </ul>
        </nav>
    </HeaderWrapper>
  );
};

export default Header;