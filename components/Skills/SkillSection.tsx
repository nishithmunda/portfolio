import styled from "styled-components";
import { SkillImage } from "../../icons/SkillImage";
import { SectionHeader } from "../CommonComponents/SectionHeader";
import { skill } from "../data";
import Image from "next/image";

export function SkillSection() {
  return (
    <>
      <SkillSectionContainer>
        <SkillSectionFrame>
          <SectionHeader>skills & expertise</SectionHeader>
          <div style={{ display: "flex", width: "100%" }}>
            <SkillList></SkillList>
            <SkillCard>
              {/* Absolute Image   */}
              <SVGContainer>
                <SkillImage />
              </SVGContainer>
              <ItemContainer>
                {skill.map((val) => (
                  <SkillCardItem>
                    <SkillIcon>
                      <Image src={val?.icon} layout="fill" objectFit="cover" />
                    </SkillIcon>
                    <SkillName>{val?.name}</SkillName>
                  </SkillCardItem>
                ))}
              </ItemContainer>
            </SkillCard>
          </div>
        </SkillSectionFrame>
      </SkillSectionContainer>
    </>
  );
}

const SkillSectionContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const SkillSectionFrame = styled.div`
  width: 71%;
  height: auto;
  @media (min-width: 1920px) {
    max-width: 1366px;
  }
`;

const SkillList = styled.div`
  width: 50%;
  height: 650px;
`;
const SkillIcon = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;
const SkillName = styled.div`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-style: normal;
  font-weight: 500;
  color: rgb(184, 184, 184);
  font-size: 16px;
`;
const SkillCard = styled.div`
  display: flex;
  width: 50%;
  height: auto;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  background-color: transparent;
  position: relative;
  cursor: pointer;
  transition: all 0.35s ease-in-out;

  &:hover {
    border: 1px solid rgba(97, 132, 214, 1);
    background-color: rgb(0, 14, 41);
  }
`;
const ItemContainer = styled.div`
  //Wrap Items
  max-width: 536px;
  min-height: 334px;
  height: auto;
  width: 100%;
  display: flex;
  gap: 10px;
  margin-top: auto;
  flex-wrap: wrap;
  justify-content: center;
  padding: 25px;
`;
const SkillCardItem = styled.div`
  z-index: 1;
  min-width: 48%;
  height: 62px;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  background-color: whitesmoke;
  border: 1px solid rgb(13, 26, 53);
  background-color: rgb(1, 11, 29);
  border-radius: 10px;
`;
const SVGContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;
