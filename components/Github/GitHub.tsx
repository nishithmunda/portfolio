import styled from "styled-components";
const bg = require("../../Assets/background.jpg");
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

export function GitHub() {
  const router = useRouter();
  return (
    <ImageContainer>
      <ImageFrame>
        <GitInfo>
          <HeadingText>
            Development <br /> Repository
          </HeadingText>
          <Text>It currently has around 5 best projects</Text>
          <GitButton>
            <Link href={`https://github.com/nishithmunda`}>
              <a target="_blank">Visit My Github</a>
            </Link>
          </GitButton>
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
`;
export const HeadingText = styled.div`
  color: #ffff;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  margin: 0 0 20px 0;
`;
export const GitButton = styled.button`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  background: #fff;
  cursor: pointer;
  color: #000;
  width: 310px;
  height: 49px;
  opacity: 1;
  border-radius: 6px;
  border: none;
`;
export const Text = styled.div`
  color: #ffff;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  margin: 0 0 20px 0;
`;
