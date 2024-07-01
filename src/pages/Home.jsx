import { useState, useEffect } from "react";
import {
  AccordionComponent,
  Button,
  Card,
  Footer,
  Navbar,
  SliderComponent,

  // Constants
  bannerImg,
  latestNewsImg,
  intenseTeamBattlesImg,
  regularServerUpdatesImg, 
  inGameCashImg,
  faqsImg,
  newsImg,
  newsImg2,

  // Mobile
  faqsMobileImg,
  latestNewsMobileImg,
  intenseTeamBattlesMobileImg,
  regularServerUpdatesMobileImg,
  inGameCashMobileImg,

  // Description
  intenseTeamBattlesDescription,
  regularServerUpdatesDescription,

  // Logo
  soldierFrontLogo,

  // Misc
  downloadLink,
  purchaseLink,
} from "../imports";
import latestNewsData from "../data/latest-news.json";

const Home = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);    // Cleanup function
  }, []);   // Empty dependency array means this effect runs only once on mount and cleans up on unmount

  const handleShownImage = section => {
    let backgroundImageUrl = ''; 

    if (typeof section !== 'string') {
      section = section.toString();
    }

    switch (section) {
      case "latest-news":
        backgroundImageUrl = isSmallScreen ? latestNewsMobileImg : latestNewsImg;
        break;
      
      case "team-battles":
        backgroundImageUrl = isSmallScreen ? intenseTeamBattlesMobileImg : intenseTeamBattlesImg;
        break;
      
      case "regular-updates":
        backgroundImageUrl = isSmallScreen ? regularServerUpdatesMobileImg : regularServerUpdatesImg;
        break;
      
      case "in-game-cash":
        backgroundImageUrl = isSmallScreen ? inGameCashMobileImg : inGameCashImg;
        break;

      case "faqs":
        backgroundImageUrl = isSmallScreen ? faqsMobileImg : faqsImg;
        break;

      default:
        break;
    }

    return backgroundImageUrl;
  }

  return (
    <>
      {/* Banner */}
      <div
        className="bg-cover bg-no-repeat sm:bg-top w-full h-screen"
        style={{ backgroundImage: `url(${handleShownImage("team-battles")})` }}>

        <Navbar />

        {/* Banner Content */}
        <div className="flex flex-col items-center justify-center pt-12 gap-y-1">
          <img className="w-auto" src={soldierFrontLogo} alt="Soldier Front Logo" />
          <h2>SOLDIER FRONT</h2>
          <p className="max-w-[340px] sm:max-w-[460px] text-center pb-2">
            The genuine military FPS game that enjoys the game by using the
            exclusive equipments and weapons of the special force by livening
            up the characteristics of the special force that is the finest of
            modern war.
          </p>
          <Button name="DOWNLOAD NOW" link={downloadLink} />
        </div>
      </div>

      {/* LATEST NEWS */}
      <div
        className="bg-cover bg-no-repeat w-full h-screen"
        style={{ backgroundImage: `url(${handleShownImage("regular-updates")})` }}>
        
        <div className="flex flex-col justify-start gap-y-10 pt-16 sm:pt-10 h-screen">
          <h2 className="pl-5">LATEST NEWS</h2>

          {/* Scrollable Cards */}
          <div className="flex justify-center items-center">
            <SliderComponent>
              {latestNewsData['latest-news'].map((item, index) => (
                <Card
                  key={index} 
                  imgUrl={item.image} 
                  header={item.header}
                  description={item.description}
                />
              ))}
            </SliderComponent>
          </div>
        </div>
      </div>

      {/* INTENSE TEAM BATTLES */}
      {/* <div
        className="bg-cover bg-no-repeat sm:bg-top w-full h-screen"
        style={{ backgroundImage: `url(${handleShownImage("team-battles")})` }}>
        
        <div className="flex flex-col justify-center pl-5 h-screen">
          <div className="flex flex-col justify-center">

            <h1 className="leading-snug pb-10 max-w-[370px] sm:max-w-[460px]">INTENSE TEAM BATTLES</h1>
            <p className="max-w-[320px] sm:max-w-[380px]">
              {intenseTeamBattlesDescription}
            </p>
          </div>
        </div>
      </div> */}

      {/* REGULAR SERVER UPDATES */}
      {/* <div
        className="bg-cover bg-no-repeat w-full h-screen"
        style={{ backgroundImage: `url(${handleShownImage("regular-updates")})` }}>

        <div className="flex flex-col justify-center sm:items-end pl-5 sm:pr-5 h-screen">
          <h1 className="leading-snug pt-12 sm:pt-0 sm:text-right pb-10 max-w-[370px] sm:max-w-[460px]">REGULAR SERVER UPDATES</h1>
          <p className="max-w-[320px] sm:max-w-[380px] sm:text-right">
            {regularServerUpdatesDescription}
          </p>
        </div>
      </div> */}
      
      {/* IN GAME CASH */}
      <div
        className="bg-cover bg-no-repeat bg-center w-full h-screen"
        style={{ backgroundImage: `url(${handleShownImage("in-game-cash")})` }}>
        
        <div className="flex flex-col justify-center items-center h-screen">
          <h2 className="pt-16 pb-5 px-2">NEED IN-GAME CASH?</h2>
          <p className="max-w-[350px] sm:max-w-[420px] text-base sm:text-lg text-center pb-10">
            You can now top up CASH in SF Reborn with multiple supported payment
            methods around the world!
          </p>
          <Button name="PURCHASE" link={purchaseLink} />
        </div>
      </div>

      {/* FAQS */}
      <div
        className="bg-cover bg-no-repeat w-full h-full sm:h-screen"
        style={{ backgroundImage: `url(${handleShownImage("faqs")})` }}>

        <div className="flex justify-center items-center">
          <h1 className="pt-16 pb-10 sm:pt-28">FAQS</h1>
        </div>
        
        <div className="grid grid-cols-1 gap-x-12 px-2 pb-20 sm:grid-cols-2 sm:pb-0 sm:px-14">
          <div className="flex flex-col">
            {latestNewsData['faqs-left'].map((item, index) => (
              <AccordionComponent
                key={index}
                header={item.header}
                content={item.description}
              />
            ))}
          </div>

          <div className="flex flex-col">
            {latestNewsData['faqs-right'].map((item, index) => (
              <AccordionComponent
                key={index}
                header={item.header}
                content={item.description}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
};

export default Home;