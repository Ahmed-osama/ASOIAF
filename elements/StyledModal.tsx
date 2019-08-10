import Modal from "react-modal";
import styled from "styled-components";

export default styled(Modal)`
  margin: auto;
  top: 100px;
  display: contents;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  overflow-y: scroll;
  position: absolute;
  left: 0;
  right: 0;

  img {
    max-width: 80vw;
    max-height: 80vh;
  }
`;
