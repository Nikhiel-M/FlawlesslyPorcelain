import { Title, } from '../Styles/General.styled'
import { Container } from './Home.styled'
import { GlobalStyles } from '../Styles/Global.styled'
import IngredientsBenefits from '../Ingredients & Benefits/Ingredients&Benefits'
import Pricing from '../Pricing/Pricing'
import Information from '../Information/Information'

const Home = () => {
  return (
    <>
    <div id='home'>
    <Container>
      <GlobalStyles />
    <Title className='homeTitle'>Flawlessly Porcelain</Title>
    <h1 className='homeTitle'>✨ Flawlessly Porcelain Night cream. Pharmacist-Formulated Brightening & Corrective Cream ✨ Reveal Radiance. Restore Confidence.</h1>
    </Container>
    </div>

    <div id='ingredients-benefits'>
    <IngredientsBenefits />
    </div>

    <div id='pricing-contact'>
    <Information />
    <Pricing />
    </div>

    </>
  )
}

export default Home