import { Container } from "./Pricing.styled";
import { Title, Subtitle } from "../Styles/General.styled";
import { FaWhatsappSquare } from "react-icons/fa";

const Pricing = () => {
  return (
   <Container>
    <Title> ✨ Try it today because glowing, confident skin isn't just a luxury, it's your right.</Title>
    <Subtitle>📦 Limited quantities available. Order now and see the visible difference in as little as 4 to 6 weeks.</Subtitle>
    <Subtitle>R280 excluding courier fees.</Subtitle>
    <Subtitle className="contact">Contatct us on Whatsapp </Subtitle>
    <FaWhatsappSquare className="whatsapp"/> 
    
   </Container>
  )
}

export default Pricing