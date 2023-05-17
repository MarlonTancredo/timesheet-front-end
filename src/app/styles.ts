import styled from "styled-components";
import colors from "../components/styles/colors/styles";

const { fullGrey, white } = colors;

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Content = styled.div`
  margin-top: 3rem;
`;

//Navbar section
export const NavWrapper = styled.div`
  width: 100%;
  display: flex;
  background-color: ${fullGrey};
  color: ${white};
  height: 5rem;
  align-items: center;
`;

export const LogoSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 20%;
`;

export const Title = styled.div`
  margin-left: 1rem;
  font-size: 20px;
  font-weight: bold;
`;

export const PagesSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  justify-content: end;
`;

export const Links = styled.ul`
  display: flex;
  list-style: none;
`;
