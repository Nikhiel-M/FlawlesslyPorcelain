import { Container, GridContainer } from "./Information.styled";
import { Title, Subtitle } from "../Styles/General.styled";

const Information = () => {
  return (
       <Container>
        <Title> Information </Title>
        <GridContainer>
          <div className="GridItem"> 
            <Subtitle>
             ✅Perfect For: Hyperpigmentation & dark spots.
             Blemish-prone or uneven skin.
             Dull, tired, or aging skin.
             Anyone seeking a pharmacist-approved,
             effective solution that works
             </Subtitle>
             </div>
          <div className="GridItem"> 
             <Subtitle>
             💎Professionally Compounded by a Qualified Pharmacist
             Your skin deserves more than guesswork.
             This formula was designed with care, expertise,
             and your transformation in mind.
             </Subtitle>
             </div>
        </GridContainer>
       </Container>
  )
}

export default Information