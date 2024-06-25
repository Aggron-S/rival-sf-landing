import {
  Navbar,
  Button,
  Card,
  Footer,
  // Constants
  bannerImg,
  latestNewsImg,
  intenseTeamBattlesImg,
  regularServerUpdatesImg, 
  inGameCashImg,
  faqsImg,
} from "../imports";

const Home = () => {
  return (
    <>
      {/* Banner */}
      <div
        className="relative bg-cover bg-no-repeat bg-pos w-full h-screen"
        style={{ backgroundImage: `url(${bannerImg})` }}>
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#020202] via-transparent to-[#020202]">
          <Navbar />
          
          {/* Banner Content */}
          <div className="flex flex-col items-center justify-center pt-[120px] gap-y-5">
            <h3 className="text-5xl">SOLDIER FRONT</h3>
            <p className="w-[460px] text-base text-center pb-2">
              The genuine military FPS game that enjoys the game by using the
              exclusive equipments and weapons of the special force by livening
              up the characteristics of the special force that is the finest of
              modern war.
            </p>
            <Button name="DOWNLOAD NOW" />
          </div>
        </div>
      </div>

      {/* LATEST NEWS */}
      <div
        className="relative bg-cover bg-no-repeat w-full h-screen"
        style={{ backgroundImage: `url(${latestNewsImg})` }}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#020202] via-transparent to-[#020202]">
          <h3 className="text-[50px]">LATEST NEWS</h3>
          <Card />
        </div>
      </div>


      {/* INTENSE TEAM BATTLES */}
      <div
        className="bg-cover bg-no-repeat w-full h-screen"
        style={{ backgroundImage: `url(${intenseTeamBattlesImg})` }}>


      </div>

      {/* REGULAR SERVER UPDATES */}
      <div
        className="bg-cover bg-no-repeat w-full h-screen"
        style={{ backgroundImage: `url(${regularServerUpdatesImg})` }}>


      </div>
      
      {/* IN GAME CASH */}
      <div
        className="bg-cover bg-no-repeat bg-center w-full h-screen"
        style={{ backgroundImage: `url(${inGameCashImg})` }}>


      </div>




      {/* FAQS */}
      <div
        className="relative bg-cover bg-no-repeat bg-pos w-full h-screen"
        style={{ backgroundImage: `url(${faqsImg})` }}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#020202] via-transparent to-[#020202]"></div>
      </div>

      <Footer/>
    </>
  );
};

export default Home;
