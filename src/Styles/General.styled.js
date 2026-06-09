import styled from "styled-components";

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.text};
  font-size: clamp(1.8rem, 5vw, 3rem);
  background-color: transparent;
  margin-bottom: 0.75rem;
  line-height: 1.2;
  letter-spacing: -0.02em;
  font-family: "DM Serif Text", serif;
  font-weight: 400;
  font-style: normal;
`;
export const Subtitle = styled.h2`
  color: ${(props) => props.theme.colors.text};
  font-size: clamp(1rem, 3.5vw, 2rem);
  line-height: 1.55;
  background-color: transparent;
  max-width: 70ch;
  margin: 0 auto;
  font-weight: 400;
`;
