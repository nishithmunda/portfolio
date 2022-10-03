import styled from "styled-components";
import { LinkedIn } from "../../icons/LinkedIn";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderFrame>
        <Logo>Nis</Logo>
        <Media>
          <MediaItem>
            <LinkedIn />
          </MediaItem>
        </Media>
      </HeaderFrame>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.nav`
  display: flex;
  justify-content: center;
  height: 100px;
`;

const HeaderFrame = styled.div`
  width: 71%;
  height: 100%;
  display: flex;
  @media (min-width: 1920px){
    max-width: 1366px;
  }
`;

const Logo = styled.div`
  margin-right: auto;
`;

const Media = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 10px;
`;

const MediaItem = styled.a``;
