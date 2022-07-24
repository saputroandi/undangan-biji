import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { CSSTransition } from "react-transition-group";
import ReactHowler from "react-howler";

import Akad from "../components/akad";
import Couple from "../components/couple";
import CoupleDetails from "../components/coupledetails";
import Gift from "../components/gift";
import Maps from "../components/maps";
import Prologue from "../components/prologue";
import Protokol from "../components/protokol";
import Resepsi from "../components/resepsi";
import Timeline from "../components/timeline";
import Ucapan from "../components/ucapan";
import Background from "../components/background";
import GiftIcon from "../components/giftIcon";
import MusicIcon from "../components/musicIcon";
import WelcomePage from "../components/welcomepage";
import Navigation from "../components/navigation";
import DisplayedGift from "../components/gift-container";

export default function Home() {
  const [visible, setVisible] = useState(false);
  const [displayWelcomePage, setDisplayWelcomePage] = useState(true);
  const [displayRekening, setDisplayRekening] = useState(false);
  const [displayLoveStory, setDisplayLoveStory] = useState(false);
  const [playing, setPlaying] = useState(true);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 212) {
      setVisible(true);
    } else if (scrolled <= 212) {
      setVisible(false);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", toggleVisible);
  }

  useEffect(() => {
    AOS.init({
      duration: 700,
      delay: 200,
    });
  }, []);

  if (displayWelcomePage) {
    return (
      <CSSTransition
        in={displayWelcomePage}
        unmountOnExit
        timeout={500}
        classNames="fade"
      >
        <WelcomePage
          setDisplayWelcomePage={(visible) => setDisplayWelcomePage(visible)}
        />
      </CSSTransition>
    );
  }

  return (
    <div className="home-wrapper">
      <ReactHowler
        src={["/sound/MarryYourDaughter-BrianMcKnight(cut).mp3"]}
        playing={playing}
        loop={true}
        volume={0.18}
      />
      <div className="home">
        <div className="image-top">
          <img src="/asset/corner-flower-2.png" alt="corner-flower-2.png" />
        </div>
        <div className="home-background"></div>

        <Couple />

        <Prologue />

        <CoupleDetails
          setDisplayLoveStory={(visible) => setDisplayLoveStory(visible)}
        />

        <Akad />

        <Resepsi />

        <Maps />

        <Protokol />

        <DisplayedGift />

        <Ucapan />

        <div className="image-bot">
          <img src="/asset/corner-flower-3.png" alt="corner-flower-3.png" />
        </div>

        {/* Modal Component below */}

        <MusicIcon
          playing={playing}
          setPlaying={(state) => setPlaying(state)}
        />

        <CSSTransition in={visible} unmountOnExit timeout={0} classNames="fade">
          <Navigation />
        </CSSTransition>

        {/* <CSSTransition
          in={visible}
          unmountOnExit
          timeout={500}
          classNames="fade"
        >
          <GiftIcon
            setDisplayRekening={(visible) => setDisplayRekening(visible)}
          />
        </CSSTransition> */}

        <CSSTransition
          in={visible}
          unmountOnExit
          timeout={500}
          classNames="fade"
        >
          <Background />
        </CSSTransition>

        <CSSTransition
          in={displayLoveStory}
          unmountOnExit
          timeout={500}
          classNames="fade"
        >
          <Timeline
            setDisplayLoveStory={(visible) => setDisplayLoveStory(visible)}
          />
        </CSSTransition>

        <CSSTransition
          in={displayRekening}
          unmountOnExit
          timeout={50}
          classNames="fade"
        >
          <Gift setDisplayRekening={(visible) => setDisplayRekening(visible)} />
        </CSSTransition>
      </div>

      <style global jsx>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Alex+Brush&family=Alice&family=Great+Vibes&display=swap");

          * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            // border: solid 1px red;
          }

          html,
          body {
            position: relative;
          }

          .container {
            position: relative;
            width: 86%;
            margin: 0 auto;
            background-color: rgba(255, 255, 255, 0.75);
            padding: 2.5rem 2rem;
            border: 2px solid rgb(102, 51, 0);
            box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
              rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
            z-index: 10;
          }

          .flower {
            width: 55%;
            // width: 14rem;
            position: absolute;
            bottom: -2.8rem;
            left: -3rem;
            z-index: 20;
          }

          .home {
            font-family: "Alice", serif;
            color: rgb(68, 73, 65);
            // background-color: rgb(191, 146, 112);
            background-color: rgba(0, 0, 0, 0);
            padding: 3rem 0;
          }

          .image-top {
            position: fixed;
            width: 15rem;
            top: -2rem;
            left: -3rem;
            z-index: 1;
          }

          .image-top > img {
            width: inherit;
          }

          .image-bot {
            width: 13rem;
            position: fixed;
            bottom: -3rem;
            right: 0;
            z-index: 1;
            overflow: hidden;
          }

          .image-bot > img {
            width: inherit;
          }

          .fade-enter {
            opacity: 0;
            z-index: -30;
          }

          .fade-enter-active {
            opacity: 1;
            transition: opacity 300ms;
            z-index: -30;
          }

          .fade-exit {
            opacity: 1;
            z-index: -30;
          }

          .fade-exit-active {
            transition: opacity 300ms;
            opacity: 0;
            z-index: -30;
          }

          .home-background {
            display: block;
            width: 100vw;
            height: 100vh;
            z-index: -31;
            background-color: rgb(244, 223, 186);
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
          }

          @media only screen and (min-width: 768px) {
            .home-wrapper {
              margin: 0 auto;
              width: 23.4375rem;
            }
            .home {
              position: relative;
            }
          }
        `}
      </style>
    </div>
  );
}
