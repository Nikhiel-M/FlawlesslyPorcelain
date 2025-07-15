import { Title, } from '../Styles/General.styled'
import { Container } from './Home.styled'
import { GlobalStyles } from '../Styles/Global.styled'
import IngredientsBenefits from '../Ingredients & Benefits/Ingredients&Benefits'

const Home = () => {
  return (
    <>
    <Container>
      <GlobalStyles />
    <Title>Flawlessly Porcelain</Title>
    <h1>✨ Flawlessly Porcelain Night cream. Pharmacist-Formulated Brightening & Corrective Cream ✨ Reveal Radiance. Restore Confidence.</h1>
    </Container>
    <IngredientsBenefits />
    </>
  )
}

export default Home