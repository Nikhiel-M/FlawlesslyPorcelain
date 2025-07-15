import styled from "styled-components";

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.text};
  font-size: 3rem;
  background-color: transparent;
  margin-bottom: 0.5rem;
  font-family: "DM Serif Text", serif;
  font-weight: 400;
  font-style: normal;
`;
export const Subtitle = styled.h2`
  color: ${(props) => props.theme.colors.text};
  font-size: 2rem;
  background-color: transparent;
`;
