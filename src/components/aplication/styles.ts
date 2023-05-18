import styled from "styled-components";
import colors from "../styles/colors/styles";
const { grey } = colors;

export const CalendarWrapp = styled.div`
  display: flex;
  flex-direction: row;
  max-width: auto;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 0.5rem;
  box-shadow: 0 6px 20px 0 ${grey};
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 2.5rem;
  .MuiStack-root {
    margin-top: 1rem;
    margin-left: auto;
    margin-right: auto;
  }
  @media only screen and (max-width: 850px) {
    max-width: auto;
    flex-direction: column;
  }
`;
