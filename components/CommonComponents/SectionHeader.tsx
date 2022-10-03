import styled from "styled-components";

interface Prop {
  children: string;
}
export function SectionHeader({ children }: Prop) {
  return (
    <SectionHeaderContainer>
      <SectionTitle>{children}</SectionTitle>
    </SectionHeaderContainer>
  );
}

const SectionHeaderContainer = styled.div`
  height: 61px;
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 40px;
  &:after {
    position: absolute;
    bottom: 0;
    content: "";
    width: 100%;
    height: 4px;
    background-color: #FFF;
  }
`;

const SectionTitle = styled.div`
  color: #ffff;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
`;
