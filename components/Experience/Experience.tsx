import styled from "styled-components";
import { SectionHeader } from "../CommonComponents/SectionHeader";
import { experience } from "../data";

export function Experience() {
  return (
    <ExperienceSectionContainer>
      <ExperienceSectionFrame>
        <SectionHeader>experience</SectionHeader>
        {experience.map((exp, index) => (
          <div key={index}>
            <Space />
            <ExperienceSection>
              <ExperienceSectionItem>
                <ExperienceDuration>
                  <DurationText>{exp?.duration}</DurationText>
                </ExperienceDuration>
                <ExperienceCompany>
                  <CompanyTitleText>{exp?.company?.name}</CompanyTitleText>
                  <DesignationText>{exp?.company?.designation}</DesignationText>
                </ExperienceCompany>
                <ExperienceSummary>
                  {exp?.summary.map((text, index) => {
                    return (
                      <div key={index}>
                        <SummaryText> {text}</SummaryText>
                        <Space />
                      </div>
                    );
                  })}
                </ExperienceSummary>
              </ExperienceSectionItem>
            </ExperienceSection>
          </div>
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
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const ExperienceSection = styled.div``;
const ExperienceSectionItem = styled.div`
  min-height: 178px;
  border-bottom: 1px solid #222222;
  display: flex;
  @media (max-width: 600px){
    flex-direction: column;
  }
`;
const ExperienceDuration = styled.div`
  width: 25%;
  @media (max-width: 600px){
    width: 100%;
  }
`;
const ExperienceCompany = styled.div`
  width: 35%;
  @media (max-width: 600px){
    width: 100%;
  }
`;
const ExperienceSummary = styled.div`
  width: 40%;
  @media (max-width: 600px){
    width: 100%;
  }
`;

const Text = styled.div`
  color: #ffff;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
`;
const SummaryText = styled(Text)`
  color: rgb(184, 184, 184);
`;
const CompanyTitleText = styled(Text)`
  color: rgb(224, 224, 224);
  font-size: 28px;
`;
const DurationText = styled(Text)`
  color: rgb(184, 184, 184);
`;

const DesignationText = styled(Text)`
  color: rgb(125, 163, 252);
  font-weight: 300;
  font-size: 18px;
`;

export const Space = styled.div`
  margin-top: 20px;
`;
