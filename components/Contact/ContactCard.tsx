import styled from "styled-components";
import { EmailIcon } from "../../icons/EmailIcon";
import { PhoneIcon } from "../../icons/PhoneIcon";

type IconType = "phone" | "email";
interface ContactCardProp {
  list: Array<string>;
  iconType: IconType;
}

export function ContactCard({ list, iconType }: ContactCardProp) {
  function iconRender(type: IconType) {
    switch (type) {
      case "email":
        return <EmailIcon />;
      case "phone":
        return <PhoneIcon />;
      default:
        return "";
    }
  }

  return (
    <Card>
      <IconContainer>{iconRender(iconType)}</IconContainer>
      {list.map((text) => (
        <CardText>{text}</CardText>
      ))}
    </Card>
  );
}

const Card = styled.div`
  height: 220px;
  width: 35%;
`;

const CardText = styled.div`
  display: flex;
  align-items: center;
  color: #ffff;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  height: 53px;
  border-bottom: 1px solid rgba(75, 101, 161, 0.53);
`;

const IconContainer = styled.div``;
