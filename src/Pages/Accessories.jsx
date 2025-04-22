import Nav from "../Components/Nav"
import { Link } from "react-router-dom"

const Accessories = () => {
    const Bags1=[

        {
            id:1,
            uri:"https://sg.trtconcept.com/cdn/shop/files/BA10188_COCOA_1.jpg?v=1739957171&width=2000",
            name:"Canvas Bucket Bag - Cocoa",
            Price:"$49"
        },
        {
            id:1,
            uri:"https://sg.trtconcept.com/cdn/shop/files/BA10188_BLACK.jpg?v=1739957171&width=2000",
            name:"Canvas Bucket Bag - Black",
            Price:"$49"
        },
        {
            id:1,
            uri:"https://sg.trtconcept.com/cdn/shop/files/BA10187_BLACK.jpg?v=1739956707&width=2000",
            name:"Top Handel Bag - Black",
            Price:"$49"
        },
        {
            id:1,
            uri:"https://sg.trtconcept.com/cdn/shop/files/BA10187_COCOA_1.jpg?v=1739956707&width=2000",
            name:"Top Handel Bag - Cocoa",
            Price:"$49"
        },


    ];

  return (
   <>
   <div>
    <Nav />
    <div className="flex pl-6 pt-3 gap-2 items-center">
        <Link to="/">
        <h1 className="text-gray-400 cursor-pointer text-md">
            Home /
        </h1>
        </Link>
        <h1 className="text-lg">
            Accessories
        </h1>
    </div>
    <h1 className="border-b-1 border-gray-300 p-12 text-4xl">ACCESSORIES</h1>
   </div>

   <div  className="flex justify-center items-center gap-2 pl-1 pr-1">
    {Bags1.map((Bag11)=>{
        return(
                <div key={Bag11.id}>
        <img src={Bag11.uri} alt="" />
        <h1>{Bag11.name}</h1>
        <h2>{Bag11.Price}</h2>
        </div>
        )
    })}
   
   </div>
   </>
  )
}

export default Accessories