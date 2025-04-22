import Nav from "./Nav";
import Bottom from "./Bottom";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <Nav />

      <div className="w-full overflow-hidden">
        {/* Banner */}
        <img
          className="w-full"
          src="https://sg.trtconcept.com/cdn/shop/files/Main_banner_ccb24f3b-0a8b-4841-af28-5c978efdc0b3.jpg?v=1740557901&width=2000"
          alt=""
        />
        {/* Women & Men Row */}
        <div className="flex flex-row w-full mt-0.5 overflow-hidden">
          
        <Link to="/Pages/Women" className="w-1/2">
          <img
            className=" border-2 border-amber-50 rounded-md"
            src="https://sg.trtconcept.com/cdn/shop/files/Main_Page_Women.jpg?v=1740562712&width=2000"
            alt="Women"
          />
          </Link>
          <Link to="/Pages/Mens" className="w-1/2">
            <img
              className="w-full border-2 border-amber-50 rounded-md"
              src="https://sg.trtconcept.com/cdn/shop/files/Main_Page_Men.jpg?v=1740562712&width=2000"
              alt="Men"
            />
          </Link>
        </div>

        {/* Kids & Accessories Row */}
        <div className="flex flex-wrap mt-0.5 w-full overflow-hidden">
          {/* Kids */}
          <div className="w-1/2 relative border-2 border-white rounded-md overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://sg.trtconcept.com/cdn/shop/files/Main_Page_Kids.jpg?v=1740562712&width=2000"
              alt="Kids"
            />
           
          </div>

          {/* Accessories */}
          <div className="w-1/2 border-2 border-white rounded-md overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://sg.trtconcept.com/cdn/shop/files/Main_Page_Accessories.jpg?v=1740562712&width=2000"
              alt="Accessories"
            />
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="relative mt-1">
          <img
            className=""
            src="https://sg.trtconcept.com/cdn/shop/files/Copy_of_2880x1200px.png?v=1731984447&width=2000"
            alt=""
          />

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white flex justify-center items-center flex-col gap-6">
            <h1>About Us</h1>
            <h1 className="text-4xl text-center">
              We are passionate about minimizing our environmental impact while
              delivering quality apparels that stand the test of time. Whether
              you&lsquo;re dressing for everyday moments or special occasions,
              our pieces are designed to be versatile, allowing you to express
              your unique style and flair.
            </h1>
            <button className=" border-2 border-white w-30 h-10 rounded-md">
              Learn More
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center bg-[#efeeee] ">
          <img
            className="w-1/2"
            src="https://sg.trtconcept.com/cdn/shop/files/desktop.png?v=1725264112&width=2000"
            alt=""
          />
          <div className="w-1/2 pl-24 pr-24 flex flex-col gap-10 ">
            <h1 className="text-gray-500"> Sustainability Efforts</h1>
            <h1 className="text-4xl  font-normal">
              Our dedication to sustainability goes hand in hand with our
              passion for timeless design. Our mission is to create timeless
              pieces that transcend trends, celebrating lasting fashion while
              taking conscious steps to reduce fabric waste.
            </h1>
            <button className="rounded-md border-2 w-40 h-12">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <Bottom />
    </>
  );
};

export default Hero;
