import React, { useContext } from "react";
import { LinkWithScroll } from "common/components/LinkWithScroll";
import { LanguageContext } from "configuration/app-context-manager/LanguageContext";
import BannerContent from "./BannerContent";

const Accommodation = ({ data }) => {
  const { language } = useContext(LanguageContext);

  return (
    <>
      {data.available === "True" ? (
        <LinkWithScroll to={`/${language}/accommodations/${data.link}`}>
          <BannerContent data={data} />
        </LinkWithScroll>
      ) : (
        <BannerContent data={data} />
      )}
    </>
  );
};

export default Accommodation;
