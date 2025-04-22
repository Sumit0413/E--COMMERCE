import Nav from "../Components/Nav";
import Bottom from "../Components/Bottom"

const Mens = () => {

  const NewArrivals =[
    {uri:"https://sg.trtconcept.com/cdn/shop/files/MB900430W_MID-TONE_DENIM-1_copy.jpg?v=1742551092&width=2000", id:"1" , name:"",Price:""},
    {uri:"https://sg.trtconcept.com/cdn/shop/files/MB900409W_DEEP_PERIWINKLE-1_copy.jpg?v=1741083297&width=2000", id:"2" , name:"",Price:""},
    {uri:"https://sg.trtconcept.com/cdn/shop/files/MB900409W_GRAY_GREEN-1_copy.jpg?v=1741083315&width=2000", id:"3" , name:"",Price:""},
    {uri:"https://sg.trtconcept.com/cdn/shop/files/MJK900413W_GRAY_GREEN-2_copy.jpg?v=1741081124&width=2000", id:"4" , name:"",Price:""},
    {uri:"https://sg.trtconcept.com/cdn/shop/files/MPS900411W_DEEP_PERIWINKLE-4.jpg?v=1741080095&width=2000", id:"5" , name:"",Price:""},
    {uri:"https://sg.trtconcept.com/cdn/shop/files/MPS900411W_GRAY_GREEN-1.jpg?v=1741080125&width=2000", id:"6" , name:"",Price:""},
    {uri:"https://sg.trtconcept.com/cdn/shop/files/MPS900411W_GRAY_GREEN-1.jpg?v=1741080125&width=2000", id:"7" , name:"",Price:""},
    {uri:"https://sg.trtconcept.com/cdn/shop/files/MK900429S_CHARCOAL-1_copy.jpg?v=1740535692&width=2000", id:"8" , name:"",Price:""},
    {uri:"https://sg.trtconcept.com/cdn/shop/files/MB900433W_BLACK-2_copy.jpg?v=1740535666&width=2000", id:"9" , name:"",Price:""},
    {uri:"https://sg.trtconcept.com/cdn/shop/files/MBL900434Y_CREAM-1_copy.jpg?v=1740535652&width=2000", id:"10" , name:"",Price:""},
    {uri:"https://sg.trtconcept.com/cdn/shop/files/MBL900434Y_BLACK-2_copy.jpg?v=1740535639&width=2000", id:"11" , name:"",Price:""},
    {uri:"https://sg.trtconcept.com/cdn/shop/files/MPL900427L_DENIM-2.jpg?v=1740535625&width=2000", id:"" , name:"12",Price:""},
    {uri:"https://sg.trtconcept.com/cdn/shop/files/MB900367W_BLACK-2_copy.jpg?v=1739872387&width=2000", id:"13" , name:"",Price:""},
    {uri:"https://sg.trtconcept.com/cdn/shop/files/MT900396D_HEATHER_GREY-1_copy.jpg?v=1738654213&width=2000", id:"14" , name:"",Price:""}, 
    {uri:"https://sg.trtconcept.com/cdn/shop/files/MT900396D_NAVY-1_copy.jpg?v=1738654213&width=2000", id:"15" , name:"",Price:""},
    {uri:"https://sg.trtconcept.com/cdn/shop/files/MPS900397D_NAVY-2.jpg?v=1738653605&width=2000", id:"16" , name:"",Price:""},
    {uri:"https://sg.trtconcept.com/cdn/shop/files/MPS900397D_LIGHT_GREY-2.jpg?v=1738653676&width=2000", id:"17" , name:"",Price:""},
    {uri:"https://sg.trtconcept.com/cdn/shop/files/MB900417Y_KHAKI-1_copy.jpg?v=1739420527&width=2000", id:"18" , name:"",Price:""},
    {uri:"https://sg.trtconcept.com/cdn/shop/files/MPL900394W_KHAKI.jpg?v=1737599539&width=2000", id:"19" , name:"",Price:""},
    {uri:"https://sg.trtconcept.com/cdn/shop/files/MPL900394W_BLACK.jpg?v=1737599529&width=2000", id:"20" , name:"",Price:""},
    
  ]
  return (
    <>
    <Nav />
      <div className="flex flex-col gap-1 cursor-pointer">
      <div>
        <img src="https://sg.trtconcept.com/cdn/shop/files/Main_Banner_web_32e71b26-d2b6-4982-8064-5afc3b6558a7.jpg?v=1741832677&width=2000" alt="" />
      </div>
      <div>
        <img src="https://sg.trtconcept.com/cdn/shop/files/Mens_banner.jpg?v=1740557901&width=2000" alt="" />
      </div>
      <div>
        <img src="https://sg.trtconcept.com/cdn/shop/files/Men_web_banner.jpg?v=1737631085&width=2000" alt="" />
      </div>
      <div className="flex justify-center items-center">
        <img className="w-1/2 border-2 border-white" src="https://sg.trtconcept.com/cdn/shop/files/Men_Shirts.jpg?v=1740563001&width=2000" alt="" />
        <img className="w-1/2 border-2 border-white" src="https://sg.trtconcept.com/cdn/shop/files/Men_Tees.jpg?v=1740563001&width=2000" alt="" />
      </div>

      <div className="flex justify-center items-center">
        <img className="w-1/2 border-2 border-white" src="https://sg.trtconcept.com/cdn/shop/files/Men_Bottoms.jpg?v=1740563001&width=2000" alt="" />
        <img className="w-1/2 border-2 border-white" src="https://sg.trtconcept.com/cdn/shop/files/Men_Denims.jpg?v=1740563001&width=2000" alt="" />
      </div>
      </div>


        <div className="flex gap-5 p-10">
          <h1 className="text-2xl">New Arrival</h1>
          <h1 className="text-2xl">BestSeller</h1>
        </div>

        <div className="h-96 w-72 bg-pink-600">

        </div>
      <Bottom />
    </>
   
  );
};

export default Mens;