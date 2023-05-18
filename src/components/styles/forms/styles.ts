import styled, { keyframes } from "styled-components";

import colors from "../colors/styles";
const { grey, fullGrey, white } = colors;

export const Wrapper = styled.div`
  width: 25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 3rem;
  box-shadow: 0 6px 20px 0 ${grey};
  border-radius: 0.5rem;
  padding: 1rem;
  @media only screen and (max-width: 450px) {
    width: 19.5rem;
  }
`;

export const FormWrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.label`
  color: ${fullGrey};
  font-size: 35px;
  margin-bottom: 0.5rem;
`;

export const Break = styled.div`
  border-bottom: ${grey} solid 1px;
  margin-bottom: 3rem;
`;

export const FieldsNames = styled.label`
  color: ${fullGrey};
  margin-bottom: 0;
`;

export const Input = styled.input`
  outline: none;
  height: 3rem;
  margin-bottom: 1rem;
  border: ${grey} solid 1px;
  border-radius: 0.25em;
`;

export const StyledLink = styled.div`
  a {
    margin-right: 1rem;
    text-decoration: transparent;
    color: ${white};
    cursor: pointer;
    transition: 0.3s;
  }
  a:hover {
    text-decoration: underline;
  }
`;

//Home page styles
const leftSlide = keyframes`
 from { 
  transform: translateX(-400px);
 }
 to { 
  transform: translateX(0px);
 }
 `;

export const HomeWrapper = styled(Wrapper)`
  animation-name: ${leftSlide};
  animation-duration: 0.3s;
  animation-timing-function: linear;
  animation-iteration-count: 1;
  @media only screen and (max-width: 450px) {
    max-width: 18rem;
  }
`;

export const HomeStyledLink = styled(StyledLink)`
  a {
    color: ${fullGrey};
  }
`;
