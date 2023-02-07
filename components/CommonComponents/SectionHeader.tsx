import { type } from "os";
import { ReactNode } from "react";
import styled, { css } from "styled-components";

type Direction = "top" | "bottom";
interface Prop {
  children: string | ReactNode;
  direction?: Direction;
}
export function SectionHeader({ children, direction }: Prop) {
  return (
    <SectionHeaderContainer direction={direction}>
      <SectionTitle>{children}</SectionTitle>
    </SectionHeaderContainer>
  );
}

type SectionHeaderProps = {
  direction?: Direction;
};

function getDirection(dir: Direction) {
  let direction = {
    bottom: css`
      top: 0;
    `,
    top: css`
      bottom: 0;
    `,
  };

  return direction[dir];
}
const SectionHeaderContainer = styled.div<SectionHeaderProps>`
  height: 61px;
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 40px;
  &:after {
    position: absolute;
    ${(prop) =>
      prop.direction
        ? getDirection(prop.direction)
        : css`
            bottom: 0;
          `};
    content: "";
    width: 100%;
    height: 4px;
    background-color: #fff;
  }
`;

const SectionTitle = styled.div`
  color: #ffff;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
`;
