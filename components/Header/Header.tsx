import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import { LinkedIn } from "../../icons/LinkedIn";

type HeaderType = "footer" | "header";

interface Props {
  mode?: HeaderType;
}
export function Header({ mode }: Props) {
  let router = useRouter();
  return (
    <>
      {mode === "footer" && <HorizontalLine />}
      <HeaderContainer>
        <HeaderFrame>
          <Logo></Logo>
          <Media>
            <MediaItem
              href="https://www.linkedin.com/in/nishithmunda/"
              target={"_blank"}
            >
              <LinkedIn />
            </MediaItem>
          </Media>
        </HeaderFrame>
      </HeaderContainer>
    </>
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
  @media (min-width: 1920px) {
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

const HorizontalLine = styled.hr`
  margin-top: 30px;
  background: #222222;
  border: none;
  height: 1px;
`;
