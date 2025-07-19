import { Container } from "./Pricing.styled";
import { Title, Subtitle } from "../Styles/General.styled";
import { FaWhatsappSquare } from "react-icons/fa";

const Pricing = () => {
  return (
    <Container>
      <Title>
        {" "}
        ✨ Try it today because glowing, confident skin isn't just a luxury,
        it's your right.
      </Title>
      <Subtitle className="quantity">
        📦 Limited quantities available. Order now and see the visible
        difference in as little as 4 to 6 weeks.
      </Subtitle>
      <Subtitle>R299 excluding courier fees.</Subtitle>

      <Subtitle className="contact">Contatct us on Whatsapp </Subtitle>
      <a
  href="https://wa.me/27760189613/?text=I'm%20interested%20in%20your%20product%20for%20sale."
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Chat on WhatsApp"
>
  <FaWhatsappSquare className="whatsapp" />
</a>

    </Container>
  );
};

export default Pricing;
