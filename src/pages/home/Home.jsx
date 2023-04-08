import React, { useContext } from "react";
import { Hero } from "./components/Hero";
import { Banner } from "./components/Banner";
import { Info } from "./components/Info";
import { Accommodations } from "./components/Accommodations";
import { Details } from "./components/Details";
import { MessageForm } from "common";
import { LanguageContext } from "configuration/app-context-manager/LanguageContext";
import Data from "./data/index.json";

export const Home = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div>
      <Hero />
      <Banner />
      <Info
        title="Lorem ipsum dolor sit amet"
        text="Pellentesque orci eros, accumsan vitae facilisis ut, pharetra vitae enim. Aliquam tempus blandit placerat. Nam suscipit fermentum neque, non congue ligula iaculis in. Ut tempor auctor arcu. Sed mauris dolor, ullamcorper quis vulputate eu, gravida quis eros. Praesent feugiat ornare dui non consequat."
        imageFirst
      />
      <Info
        title="Lorem ipsum dolor sit amet"
        text="Pellentesque orci eros, accumsan vitae facilisis ut, pharetra vitae enim. Aliquam tempus blandit placerat. Nam suscipit fermentum neque, non congue ligula iaculis in. Ut tempor auctor arcu. Sed mauris dolor, ullamcorper quis vulputate eu, gravida quis eros. Praesent feugiat ornare dui non consequat."
      />
      <Accommodations data={Data[language].accommodations} />
      <Details />
      <Banner hasImage image="serra.jpg" />
      <MessageForm />
    </div>
  );
};
