import React from "react";
import MainNav from "../Components/MainNav";
import MiniBox from "../Components/MiniBox";
import Slider from "../Components/Slider";
import "../Styles/Home.css";
import Stack_pic from "../Images/Stack.png";
import Bloody_pic from "../Images/Bloody.png";
import Rect from "../Images/Rectangle 24.png";
import About from "../Components/About";
import NextPro from "../Components/NextPro";
import Footer from "../Components/Footer";
import { useMediaQuery } from "react-responsive";

const Featured_games = [
  { image: { url: Stack_pic, alt: "Stack Pattern" } },
  { image: { url: Bloody_pic, alt: "Bloody Circle" } },
];

const games = [
  {
    name: "Bloody Circle",
    description: "A brief description of the game In 2 to 3 lines.",
    image: { url: Rect, alt: "Just Rectangle" },
  },
  {
    name: "Stack Pattern",
    description: "A brief description of the game In 2 to 3 lines.",
    image: { url: Rect, alt: "Just Rectangle" },
  },
  {
    name: "Space Guy",
    description: "A brief description of the game In 2 to 3 lines.",
    image: { url: Rect, alt: "Just Rectangle" },
  },
  {
    name: "Lost",
    description: "A brief description of the game In 2 to 3 lines.",
    image: { url: Rect, alt: "Just Rectangle" },
  },
];

export default function Home() {
  const isLittleLap = useMediaQuery({ query: "(max-width: 1024px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 768px)" });
  const extraMobile = useMediaQuery({ query: "(max-width: 576px)" });
  const middleMobile = useMediaQuery({ query: "(max-width: 425px)" });

  let Length_featured = () => {
    let num = null;
    if (extraMobile) {
      num = 1;
    } else {
      num = 2;
    }
    return num;
  };

  let Length_games = () => {
    let num = null;
    if (isLittleLap) {
      if (isTablet) {
        if (middleMobile) {
          num = 1;
        } else {
          num = 2;
        }
      } else {
        num = 3;
      }
    } else {
      num = 4;
    }
    return num;
  };
  return (
    <div className="Home">
      <div className="home-cont mb-3">
        <div className="home-back">
          <MainNav />
        </div>
      </div>
      <MiniBox heading={"Featured games"} link={"/"}>
        <Slider
          data={Featured_games}
          model={"mini"}
          interval={true}
          interval_time={3500}
          arrows={Featured_games.length > Length_featured() ? true : false}
          slices={Length_featured()}
        />
      </MiniBox>
      <About />
      <MiniBox heading={"Games"} link={"/"}>
        <Slider
          data={games}
          model={"mini"}
          interval={true}
          interval_time={3500}
          arrows={games.length > Length_games() ? true : false}
          slices={Length_games()}
          details={true}
        />
      </MiniBox>
      <NextPro />
      <Footer />
    </div>
  );
}
