import Nav from "../Components/Nav";
import Bottom from "../Components/Bottom";

const Kids = () => {
  const Women = [
    {
      id: "1",
      uri: "https://sg.trtconcept.com/cdn/shop/files/Kids_dresses.jpg?v=1740563001&width=2000",
      type: "DRESSES",
    },
    {
      id: "2",
      uri: "https://sg.trtconcept.com/cdn/shop/files/Kids_Tees.jpg?v=1740563001&width=2000",
      type: "TEES",
    },
    {
      id: "3",
      uri: "https://sg.trtconcept.com/cdn/shop/files/Kids_Shirts.jpg?v=1740563001&width=2000",
      type: "SHIRTS",
    },
    {
      id: "4",
      uri: "https://sg.trtconcept.com/cdn/shop/files/Kids_Bottoms.jpg?v=1740563000&width=2000",
      type: "BOTTOM",
    },
  ];

  return (
    <>
      <Nav />
      <div className="flex flex-col gap-1 cursor-pointer">
        {/* Banner Images */}
        <div>
          <img
            src="https://sg.trtconcept.com/cdn/shop/files/Main_banner_6a4ea4fb-ecea-4724-9adf-6c7f1cb1bc31.jpg?v=1742438649&width=2000"
            alt=""
          />
          <img
            className="mt-1"
            src="https://sg.trtconcept.com/cdn/shop/files/Kids_banner.jpg?v=1740557901&width=2000"
            alt=""
          />
          <img
            className="mt-1"
            src="https://sg.trtconcept.com/cdn/shop/files/Kids_web_banner.jpg?v=1737631085&width=2000"
            alt=""
          />
        </div>

        {/* Women Items Grid */}
        <div className="grid grid-cols-2 gap-1 ">
          {Women.map((Womens) => (
            <div key={Womens.id} className="relative">
              <img className="w-full h-auto drop-shadow-lg" src={Womens.uri} alt={Womens.type} />
              <div className="absolute bottom-0 w-full">
                <div className="text-sm flex items-center pl-10
                  hover:bg-[#F4CF81] hover:text-black
                  cursor-pointer font-semibold text-white w-full h-16 ">
                  {Womens.type}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Bottom />
    </>
  );
};

export default Kids;
