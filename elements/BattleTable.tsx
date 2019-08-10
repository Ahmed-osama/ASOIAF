import styled, { css } from "styled-components";
import { Card } from ".";
const CardDiv = Card("div");
export const Comaprison = styled(CardDiv)`
  overflow: hidden;
  background: white;
  max-width: 800px;
  overflow-y: scroll;
  max-height: 80vh;
`;
export const ComaprisonSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ComaprisonTitle = styled.h4`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid ${({ theme }) => theme.divider};
  font-size: 20px;
  margin: 0;
`;
export const ComaprisonBody = styled.div`
  flex-grow: 1;
  display: flex;
  flex-wrap: nowrap;
  border-bottom: 3px solid ${({ theme }) => theme.divider};
`;
export const ComaprisonSide = styled.div`
  flex-basis: 50%;
  flex-grow: 1;
  padding: 15px 25px;
  & + & {
    border-left: 1px solid ${({ theme }) => theme.divider};
  }
  &:first-child {
    text-align: right;
  }
  :only-child {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`;
