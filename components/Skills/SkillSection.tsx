import styled from "styled-components";
import { SkillImage } from "../../icons/SkillImage";
import { SectionHeader } from "../CommonComponents/SectionHeader";
import { projects, skill } from "../data";
import Image from "next/image";
import { ViewIcon } from "../../icons/ViewIcon";
import { Anchor } from "../NameSection/NameSection";
import { Space } from "../Experience/Experience";

export function SkillSection() {
  return (
    <>
      <SkillSectionContainer>
        <SkillSectionFrame>
          <SectionHeader>skills & projects</SectionHeader>
          <SkillProjectContainer>
            <SkillList>
              {projects.map((project, index) => (
                <ProjectContainer key={index}>
                  <Space />
                  <ProjectHead>
                    <ProjectName>{project?.title}</ProjectName>
                    <Anchor href={project?.view} target={"_blank"}>
                      <ViewButton>
                        <ViewIcon />
                      </ViewButton>
                    </Anchor>
                  </ProjectHead>

                  {project?.summary?.map((summary, index) => (
                    <ProjectSummary key={index}>{summary}</ProjectSummary>
                  ))}
                </ProjectContainer>
              ))}
            </SkillList>
            <SkillCard>
              {/* Absolute Image   */}
              <SVGContainer>
                <SkillImage />
              </SVGContainer>
              <ItemContainer>
                {skill.map((val, index) => (
                  <SkillCardItem key={index}>
                    <SkillIcon>
                      <Image src={val?.icon} layout="fill" objectFit="cover" />
                    </SkillIcon>
                    <SkillName>{val?.name}</SkillName>
                  </SkillCardItem>
                ))}
              </ItemContainer>
            </SkillCard>
          </SkillProjectContainer>
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
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const SkillList = styled.div`
  width: 40%;
  height: 650px;
  @media (max-width: 600px) {
    width: 100%;
    height: auto;
  }
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
  margin-left: auto;
  display: flex;
  width: 50%;
  max-width: 536px;
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
  @media (max-width: 600px) {
    margin-top: 25px;
    width: 100%;
  }
`;

const SkillProjectContainer = styled.div`
  display: flex;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
const ItemContainer = styled.div`
  //Wrap Items
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

//Project Section

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 30%;
  border-bottom: 1px solid rgba(64, 64, 64, 0.65); ;
`;
const ProjectHead = styled.div`
  display: flex;
  align-item: center;
  justify-content: space-between;
`;
const ProjectName = styled.span`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-style: normal;
  font-weight: 600;
  color: #fff;
  font-size: 24px;
  letter-spacing: -0.6px;
`;
const ViewButton = styled.button`
  margin-left: auto;
  background: transparent;
  border: none;
  cursor: pointer;
`;
const ProjectSummary = styled.p`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-style: normal;
  font-weight: 400;
  color: #fff;
`;
