import { useState } from "react";
import styled from "styled-components";
import { Contact as ContactImage } from "../../icons/Contact";
import { DownloadIcon } from "../../icons/DownloadIcon";
import { SectionHeader } from "../CommonComponents/SectionHeader";
import { Anchor, DownloadButton } from "../NameSection/NameSection";
import { ContactCard } from "./ContactCard";
import { resumeLink } from "../data";

export function ContactSection() {
  const [activeDownload, setActiveDownload] = useState<boolean>(false);
  return (
    <ContactSectionContainer>
      <ContactSectionFrame>
        <SectionHeader direction="bottom">
          <TitleText>Get in touch</TitleText>
        </SectionHeader>
        <ContactDetailContainer>
          <ContactDetail>
            <CardContainer>
              <ContactCard
                iconType="email"
                list={["nishithmunda9212@gmail.com"]}
              />
              <ContactCard
                iconType="phone"
                list={["8084-322-406", "9123-470-950"]}
              />
            </CardContainer>
            <Anchor
              href={resumeLink}
              target={"_blank"}
            >
              <DownloadButton
                onMouseEnter={() => setActiveDownload(true)}
                onMouseOut={() => setActiveDownload(false)}
              >
                <div>
                  Download Resume{" "}
                  <DownloadIcon
                    style={{ pointerEvents: "none" }}
                    active={activeDownload}
                  />
                </div>
              </DownloadButton>
            </Anchor>
          </ContactDetail>
          <SVGContainer>
            <ContactImage />
          </SVGContainer>
        </ContactDetailContainer>
      </ContactSectionFrame>
    </ContactSectionContainer>
  );
}
const ContactSectionContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const ContactSectionFrame = styled.div`
  width: 71%;
  height: auto;
  @media (min-width: 1920px) {
    max-width: 1366px;
  }
`;
const SVGContainer = styled.div`
  display: flex;
  width: 40%;
  align-items: center;
  justify-content: center;
`;

const ContactDetailContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ContactDetail = styled.div`
  width: 60%;
`;
const CardContainer = styled.div`
  display: flex;
  gap: 20px;
`;
const TitleText = styled.div`
  margin-top: 30px;
  color: #ffff;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
`;
