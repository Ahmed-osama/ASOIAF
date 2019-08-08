import styled from "styled-components";
import { Card } from ".";
import { CharacterLink } from "../components/CharacterLink";
const anonymous = `https://themerkle.com/wp-content/uploads/2017/02/shutterstock_153830195.jpg`;
const CharName = styled.h4`
  font-size: 16px;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: 700;
  padding: 0 10px;
  a {
    display: block;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    text-decoration: none;
  }
`;

const Avatar = styled.img.attrs(props => ({
  src: props.src
}))`
  min-width: 100%;
  min-height: 100%;
  min-width: 100px;
  max-height: 100px;
  marginautoborder-raius: 50%;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
`;
const AvatarContainer = styled.div`
  position: relative;
  margin: auto;
  margin-top: 10px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
`;

const ColumnFlex = styled.div`
  display: flex;
  flex-direction: column;
`;
const Pointer = styled.a`
  cursor: pointer;
`;

const NormalCard = Card("div");
const CharacterCard = props => {
  return (
    <NormalCard mb={30}>
      <CharacterLink {...props}>
        <Pointer>
          <ColumnFlex>
            <AvatarContainer>
              <Avatar src={props.image} />
            </AvatarContainer>
            <CharName>{props.name}</CharName>
          </ColumnFlex>
        </Pointer>
      </CharacterLink>
    </NormalCard>
  );
};
CharacterCard.defaultProps = {
  image: anonymous
};
export default CharacterCard;
