import { HeaderWrapper } from "./Header.styled";
import logo from "../../Assets/Flawlessly-porclien-cut.jpg";

const Header = () => {
  return (
    <HeaderWrapper>
   
     <a href="#home" className="logo">   <img src={logo} alt="Flawlessly Porcelain Logo" /></a>
    
      <nav className="nav">
        <ul className="nav-links">
          <li>
            <a href="#ingredients-benefits">Ingredients & Benefits</a>
          </li>
          <li>
            <a href="#pricing-contact">Pricing & Contact</a>
          </li>
        </ul>
      </nav>
    </HeaderWrapper>
  );
};

export default Header;
