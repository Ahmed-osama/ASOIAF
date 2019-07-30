import styled, { css, createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css?family=Lato:400,700&display=swap');
  *{
    box-sizing:border-box;
  }
  body {
   margin : 0;
   padding:0;
   font-family:'Lato', sans-serif;
   color:${props => props.theme.primary}
  }
  img{
    max-width:100%;
  }
  a {
    cursor:pointer;
    color:${props => props.theme.primary};
    :hover{
      color:${props => props.theme.secondary};
    }
  }
`;

export const Container = styled.div`
  max-width: ${props => (props.width ? props.width : 800)}px;
  flex-basis: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: auto;
  padding: 0 15px;
  ${props =>
    props.main &&
    css`
      padding-top: 80px;
    `}
`;
export const Card = as =>
  styled[as]`
    flex-basis: 100%;
    margin: auto;
    padding: ${props => props.padding}px;
    box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.1);
    list-style-type: none;
    ${props =>
      props.mb &&
      css`
        margin-bottom: ${props.mb}px;
      `}
  `;

export const BorderedList = styled.li`
  font-size: 16px;
  padding: 15px 15px;
  flex-basis: 100%;
  cursor: pointer;
  a {
    text-decoration: none;
  }
  & + & {
    border-top: 1px solid #dfdfdf;
  }
  &:hover {
    background: ${props => props.theme.primary};
    color: ${props => props.theme.colors.light};
  }
`;
export const PageSection = styled.section`
  padding: 15px 0;
  flex-basis: 100%;
  & + & {
    border-top: 3px solid #dfdfdf;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-width: 100%;
  flex-basis: 100%;
  margin: 0 -15px;
`;

export const Col = styled.div`
  padding: 0 15px;
  flex-basis: ${props => (props.cols / 12) * 100}%;
  max-width: ${props => (props.cols / 12) * 100}%;
`;

export const Label = styled.a`
  padding: 0 10px;
  height: 30px;
  font-size: 12px;
  border-radius: 3px;
  border: 1px solid ${props => props.theme.secondary};
  color: ${props => props.theme.secondary};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  background: #d3effe;
  cursor: pointer;
  text-decoration: none;
`;
