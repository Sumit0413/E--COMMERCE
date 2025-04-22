

const Bottom = () => {
    const dataa =[
        {id:"1" ,url:"https://sg.trtconcept.com/cdn/shop/files/icon-30-Days-Exchange.svg?v=1725285441&width=2000", head:"Doorstep Delivery", dicp:"Free shipping within Singapore with no minimum purchase"},
        {id:"2" ,url:"https://sg.trtconcept.com/cdn/shop/files/icon-30-Days-Exchange_de85b0b3-4aab-42f3-8708-9187080de4e2.svg?v=1725285507&width=2000",head:"30 Days Exchange",dicp:"Exchange at any of our retail stores within 30 days from date of order placement"},
        {id:"3" ,url:"https://sg.trtconcept.com/cdn/shop/files/icon-Consciously-Crafted.svg?v=1725285441&width=2000",head:"Consciously Crafted",dicp:"Designed with you and the planet in mind"},
    ];



  return (
    <>
    <div className="flex justify-center gap-42 pt-10 pb-10  items-center border-b-1 border-gray-500 ">

     {dataa.map((data)=>{
        return(
            
            <div className="flex flex-col justify-center items-center w-96 rounded-md h-64   "  key={data.id}>
            <img src={data.url} alt=" Image data "/>
           <h1 className="text-2xl">{data.head}</h1>
           <h1 className="text-center text-md ">{data.dicp}</h1>
           </div>
            
        )
     })}

    </div>


    <footer className=" text-gray-800 px-1 py-5">
      <div className="flex flex-col md:flex-row flex-wrap justify-between gap-1 pr-30 pl-37">
        

        {/* Shop Section */}
        <div className="flex flex-col gap-2 ">
          <h2 className="text-lg font-semibold mb-2">Shop</h2>
          <p>Women</p>
          <p>Men</p>
          <p>Kids</p>
          <p>Accessories</p>
          <p>Gift Card</p>
        </div>

        {/* About Section */}
        <div className="flex flex-col gap-2 ">
          <h2 className="text-lg font-semibold mb-2">About</h2>
          <p>About Us</p>
          <p>Stores</p>
          <p>Sustainability Efforts</p>
          <p>Promotions</p>
          <p>Careers</p>
        </div>

        {/* Support Section */}
        <div className="flex flex-col gap-2 ">
          <h2 className="text-lg font-semibold mb-2">Support</h2>
          <p>FAQs</p>
          <p>Contact Us</p>
          <h3 className="font-medium mt-4">Got a question?</h3>
          <div className="flex items-center gap-2">
            <img src="https://sg.trtconcept.com/cdn/shop/files/icon-phone.svg?v=1725351563&width=2000" alt="Phone" className="w-5 h-5" />
            <span>(+65) 6361 0058</span>
          </div>
          <div className="flex items-center gap-2">
            <img src="https://sg.trtconcept.com/cdn/shop/files/icon-email.svg?v=1725351563&width=2000" alt="Email" className="w-5 h-5" />
            <span>hello@trtconcept.com</span>
          </div>
        </div>

        

        {/* Newsletter Section */}
        <div className="flex flex-col gap-3 min-w-[250px]">
          <h2 className="text-lg font-semibold">Get $5 off when you sign up</h2>
          <p className="text-sm">Receive the latest updates on our new releases and more.</p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 border border-gray-400 rounded w-full sm:w-auto"
            />
            <button className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800">
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-xs text-gray-500 mt-10">
        © {new Date().getFullYear()} TRT Concept. All rights reserved.
      </div>
    </footer>
    </>
  )
}

export default Bottom