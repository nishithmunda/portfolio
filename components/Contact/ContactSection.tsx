import styled from "styled-components";
import { Contact as ContactImage } from "../../icons/Contact";

export function ContactSection() {
  return (
    <ContactSectionContainer>
      <ContactSectionFrame>
        <ContactDetailContainer>
        <ContactDetail></ContactDetail>
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

const ContactDetail=styled.div`
  width: 60%;  
`