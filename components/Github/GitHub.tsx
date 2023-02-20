import { useState } from "react";
import styled from "styled-components";
const bg = require("../../Assets/background.jpg");
import Image from "next/image";
import { GitHubIcon } from "../../icons/GitHubIcon";

import { Anchor, DownloadButton } from "../NameSection/NameSection";

export function GitHub() {
  const [activeDownload, setActiveDownload] = useState<boolean>(false);
  return (
    <ImageContainer>
      <ImageFrame>
        <GitInfo>
          <HeadingText>
            Development <br /> Repository
          </HeadingText>
          <Text>It currently has around 5 best projects</Text>
          <Anchor href="https://github.com/nishithmunda" target={"_blank"}>
            <GitButton
              onMouseEnter={() => setActiveDownload(true)}
              onMouseOut={() => setActiveDownload(false)}
            >
              <div>
                Visit My Github
                <GitHubIcon
                  style={{ pointerEvents: "none" }}
                  active={activeDownload}
                />
              </div>
            </GitButton>
          </Anchor>
        </GitInfo>
        <Image src={bg} layout="fill" objectFit="cover" />
      </ImageFrame>
    </ImageContainer>
  );
}

const ImageContainer = styled.div`
  width: 100%;
  height: 510px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageFrame = styled.div`
  position: relative;
  width: 71%;
  height: 428px;
  @media (min-width: 1920px) {
    max-width: 1366px;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const GitInfo = styled.div`
  width: fit-content;
  height: fit-content;
  position: absolute;
  right: 40px;
  top: 0;
  bottom: 0;
  margin: auto 0;
  z-index: 1;
  @media (max-width: 600px) {
    right: unset;
  }
`;
export const HeadingText = styled.div`
  color: #ffff;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  margin: 0 0 20px 0;
`;
export const GitButton = styled(DownloadButton)``;
export const Text = styled.div`
  color: #ffff;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  margin: 0 0 20px 0;
`;
