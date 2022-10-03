import styled from "styled-components";
import { SectionHeader } from "../CommonComponents/SectionHeader";
import { experience } from "../data";

export function Experience() {
  return (
    <ExperienceSectionContainer>
      <ExperienceSectionFrame>
        <SectionHeader>experience</SectionHeader>
        {experience.map((exp) => (
          <>
            <Space />
            <ExperienceSection>
              <ExperienceSectionItem>
                <ExperienceDuration>
                  <Text>{exp?.duration}</Text>
                </ExperienceDuration>
                <ExperienceCompany>
                  <Text>{exp?.company?.name}</Text>
                  <DesignationText>{exp?.company?.designation}</DesignationText>
                </ExperienceCompany>
                <ExperienceSummary>
                  <Text>{exp?.summary}</Text>
                </ExperienceSummary>
              </ExperienceSectionItem>
            </ExperienceSection>
          </>
        ))}
      </ExperienceSectionFrame>
    </ExperienceSectionContainer>
  );
}
const ExperienceSectionContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const ExperienceSectionFrame = styled.div`
  width: 71%;
  height: auto;
  @media (min-width: 1920px) {
    max-width: 1366px;
  }
`;

const ExperienceSection = styled.div``;
const ExperienceSectionItem = styled.div`
  height: 178px;
  border-bottom: 1px solid #222222;
  display: flex;
`;
const ExperienceDuration = styled.div`
  width: 25%;
`;
const ExperienceCompany = styled.div`
  width: 35%;
`;
const ExperienceSummary = styled.div`
  width: 40%;
`;

const Text = styled.div`
  color: #ffff;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
`;

const DesignationText = styled(Text)`
  color: rgb(125, 163, 252);
  font-weight: 300;
  font-size: 18px;
`;

const Space = styled.div`
  margin-top: 20px;
`;
