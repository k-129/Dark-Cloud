import styled from "styled-components";
import LogoPng from "../../Images/logo.png";

const LogoContainer = styled.div`
  padding: 1vw;
  margin-bottom: 2vw;
  display: flex;
  align-self: top;
  justify-content: center;
`;
const LogoImage = styled.img`
  @media (max-width: 768px) {
    width: 50vw;
    margin-top: 2vh;
    padding-bottom: 1vh;
  }
  width: 19vw;
`;
export default function Logo() {
  return (
    <LogoContainer>
      <LogoImage src={LogoPng} alt="Dark Cloud" draggable={false} />
    </LogoContainer>
  );
}
