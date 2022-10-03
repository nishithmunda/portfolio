import styled from "styled-components";

export function NameSection() {
  return (
    <NameSectionContainer>
      <NameSectionFrame>
        <TitleBox>
          <NameText>
            Nishith <br />
            Munda
          </NameText>
          <DesignationText>Front-End Developer</DesignationText>
        </TitleBox>
        <ResumeSection>
          <SummaryText>
            Transforming data into the graphical interface & layouts schema for
            React applications
          </SummaryText>
          <DownloadButton>Download Resume</DownloadButton>
        </ResumeSection>
      </NameSectionFrame>
    </NameSectionContainer>
  );
}

const NameSectionContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 210px;
`;

const NameSectionFrame = styled.div`
  width: 71%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1920px) {
    max-width: 1366px;
  }
`;

const TitleBox = styled.div`
  width: 598px;
  height: 210px;
`;
const NameText = styled.div`
  color: #ffff;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 80px;
  line-height: 1;
`;
const DesignationText = styled.div`
  color: #ffff;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-style: normal;
  font-weight: 200;
  font-size: 48px;
`;

const SummaryText = styled.div`
  color: #ffff;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  margin: 0 0 20px 0;
`;
const ResumeSection = styled.div`
  width: 310px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding: 48px 0px 11px;
`;
const DownloadButton = styled.button`
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


