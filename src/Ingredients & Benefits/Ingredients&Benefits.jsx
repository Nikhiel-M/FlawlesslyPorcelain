import React from "react";
import { Title, Subtitle } from "../Styles/General.styled";
import { Container, GridContainer } from "./IngredientsBenefits.styled";

const IngredientsBenefits = () => {
  return (
    <Container>
      <Title>🔬 Star Ingredients & Their Proven Benefits.</Title>
      <GridContainer>
        <div className="GridItem">
          <Title>Tranexamic Acid</Title>
          <Subtitle>Fades stubborn hyperpigmentation and melasma. Reduces discoloration and prevents new dark spots. Evens out skin tone without irritation</Subtitle>
        </div>
        <div className="GridItem">
          <Title>Glutathione</Title>
          <Subtitle>A master antioxidant that detoxifies and brightens skin. Helps lighten pigmentation from within for a radiant glow. Protects against environmental damage and aging.</Subtitle>
        </div>
        <div className="GridItem">
          <Title>Salicylic Acid</Title>
          <Subtitle>Gently exfoliates and clears out clogged pores. Reduces acne, blemishes, and surface-level roughness. Improves overall skin texture and glow.</Subtitle>
        </div>
        <div className="GridItem">
          <Title>Hydrocortisone</Title>
          <Subtitle>Calms inflammation and redness. Reduces irritation, itching, and skin stress .Promotes rapid healing of irritated or reactive skin.</Subtitle>
        </div>
        <div className="GridItem">
          <Title>Propylene Glycol</Title>
          <Subtitle>Enhances the penetration of active ingredients. Keeps the skin deeply hydrated and smooth. Supports barrier repair and moisture retention.</Subtitle>
        </div>
        <div className="GridItem">
          <Title>Niacinamide (Vitamin B3)</Title>
          <Subtitle>Visibly improves uneven skin tone and dullness. Minimizes the appearance of pores and fine lines. Strengthens the skin barrier and boosts resilience.</Subtitle>
        </div>
      </GridContainer>
    </Container>
  );
};

export default IngredientsBenefits;
