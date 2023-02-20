import styled from "styled-components";
import { getDocs, setDoc, doc, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Image from "next/image";

export function ProfileImage() {
  const [profile, setProfile] = useState<
    Array<{ experience: Array<any>; imageUrl: String }>
  >([]);

  useEffect(() => {
    const getProfileData = async () => {
      let newArray: any = [];
      const resData = await getDocs(collection(db, "profile"));
      resData.docs.map((doc) => {
        newArray.push({ ...doc.data() });
      });
      setProfile(newArray);
    };
    getProfileData();
  }, []);

  return (
    <>
      <ImageContainer>
        {profile?.[0]?.imageUrl?.length > 0 && (
          <ImageFrame>
            <Image
              src={`https://res.cloudinary.com/demo/image/fetch/${profile?.[0]?.imageUrl}`}
              layout="fill"
              style={{ borderRadius: "16px" }}
            />
          </ImageFrame>
        )}
      </ImageContainer>
    </>
  );
}

const ImageContainer = styled.div`
  width: 100%;
  height: 510px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageFrame = styled.div`
  position: relative;
  width: 71%;
  height: 322px;
  @media (min-width: 1920px) {
     max-width: 1366px;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;

