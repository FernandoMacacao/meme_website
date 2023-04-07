import React from "react";
import { Hero } from "./components/Hero";
import { Banner } from "./components/Banner";
import { Info } from "./components/Info";
import { Accommodations } from "./components/Accommodations";

const data = [
  {
    title: "Alojamentos Locais",
    text: "Donec vitae pulvinar leo. Sed interdum laoreet ornare. Phasellus convallis euismod volutpat. In lacus felis",
    image: "acc_2.jpg",
    link: "/",
  },
  {
    title: "Alojamentos de média e longa duração",
    text: "Donec vitae pulvinar leo. Sed interdum laoreet ornare. Phasellus convallis euismod volutpat. In lacus felis",
    image: "acc_1.jpg",
    link: "/",
  },
];

export const Home = () => {
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
      <Accommodations data={data} />
    </div>
  );
};
