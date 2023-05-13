import styled from "styled-components";

export const ContactGrid = styled.div`
  display: grid;
  grid-template: auto / 40% 60%;
  padding: 5.5% 9.3% 15.5% 9.3%;

  @media ${props => props.theme.breakpoints.md}{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-column: 2 / 3;
  grid-row: 1 / span 3;
  margin: 0%;
  width: 100%;
  justify-self: left;
  align-self: flex-start;

  @media ${props => props.theme.breakpoints.md}{
    margin: 5%;
  }
`;

export const UL = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 24px;
  font-size: 15px;
  font-weight: 400;
  grid-column: 2 / 3;
  grid-row: 1 / span 3;
  margin: 0%;
  width: 100%;
  justify-self: left;
  align-self: flex-start;

  @media ${props => props.theme.breakpoints.md}{
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 24px;
    font-size: 15px;
    font-weight: 400;
  }
`;

export const LI = styled.li`
  padding: 1rem;
`;

export const Input = styled.input`
  border: 1px solid #9cc9e3;
  border-radius: 15px;
  padding: 1rem;
  color: #091e42;
  width: 98%;
`;

export const TextArea = styled.textarea`
  border: 2px solid #9cc9e3;
  border-radius: 15px;
  width: 98%;
  height: 15vh;
  padding: 1rem;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  color: #091e42;
  text-align: left;
`;

export const RedButton = styled.button`
  border: 2px solid #0f1624;
  border-radius: 15px;
  color: #fff;
  display: flex;
  width: fit-content;
  padding: 1rem 1.5rem;
  margin: 1rem;
  background: ${({ alt }) => alt ? 'linear-gradient(270deg, #F46737 0%, #945DD6 100%)' : 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)'};
  opacity: ${({ disabled }) => disabled ? '.5' : '1'};
  transition: .4s ease;
  font-size: 1.8rem;
  font-weight: 600;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: ${({ disabled }) => disabled ? 'inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)' : 'none'};

  &:hover {
    border: 2px solid #9cc9e3;
  }
  &:focus {
    outline: none;
  }
  &:active {
    opacity: 1;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  &:disabled{
    background: linear-gradient(270deg, #00DBD8 0%, #B133FF 100%);
    opacity: 0.5;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${({ alt }) => alt ? '20px' : '16px'};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
  }
`;
