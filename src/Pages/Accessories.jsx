import Nav from "../Components/Nav"
import { Link } from "react-router-dom"
import Bottom from "../Components/Bottom"

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

    const Hat=[
        {
            id:1,
            uri:"https://sg.trtconcept.com/cdn/shop/files/HA70100KHAKI.jpg?v=1739872003&width=2000",
            name:"Canva Bucket Hat",
            Price:"$22.9"
        },
        {
            id:2,
            uri:"https://sg.trtconcept.com/cdn/shop/files/HA70100NAVY.jpg?v=1739871995&width=2000",
            name:"Canva Bucket Hat",
            Price:"$22.9"
        },
        {
            id:3,
            uri:"https://sg.trtconcept.com/cdn/shop/files/HA70100BLACK.jpg?v=1739871988&width=2000",
            name:"Canva Bucket Hat",
            Price:"$22.8"
        },
        {
            id:4,
            uri:"https://sg.trtconcept.com/cdn/shop/files/HA70100DUSTYBLUE1.jpg?v=1739872011&width=2000",
            name:"Canva Bucket Hat",
            Price:"$22.9"
        },
    ];

    const Pillo=[
        {
            id:1,
            uri:"https://sg.trtconcept.com/cdn/shop/files/SC30105_YELLOW.jpg?v=1739865338&width=2000",
            name:"Canva Bucket Hat",
            Price:"$22.9"
        },
        {
            id:2,
            uri:"https://sg.trtconcept.com/cdn/shop/files/SC30103_GREEN.jpg?v=1739864956&width=2000",
            name:"Canva Bucket Hat",
            Price:"$22.9"
        },
        {
            id:3,
            uri:"https://sg.trtconcept.com/cdn/shop/files/SC30103_BLUE.jpg?v=1739864955&width=2000",
            name:"Canva Bucket Hat",
            Price:"$22.9"
        },
        {
            id:4,
            uri:"https://sg.trtconcept.com/cdn/shop/files/SC30105_BLACK.jpg?v=1739865338&width=2000",
            name:"Canva Bucket Hat",
            Price:"$22.9"
        },
        
    ];

    const Scarf=[
        {
            id:1,
            uri:"https://sg.trtconcept.com/cdn/shop/files/SC30089-COPPER_eb69acf9-d372-4478-ae0e-903a4173f75d.jpg?v=1739867231&width=2000",
            name:"Canva Bucket Hat",
            Price:"$22.9"
        },
        {
            id:2,
            uri:"https://sg.trtconcept.com/cdn/shop/files/SC30089-DUSTY-MAUVE_39d53745-99bc-4cde-a49a-5eb7e8436293.jpg?v=1739867244&width=2000",
            name:"Canva Bucket Hat",
            Price:"$22.9"
        },
        {
            id:3,
            uri:"https://sg.trtconcept.com/cdn/shop/files/SC30089-COPPER_eb69acf9-d372-4478-ae0e-903a4173f75d.jpg?v=1739867231&width=2000",
            name:"Canva Bucket Hat",
            Price:"$22.9"
        },
        {
            id:4,
            uri:"https://sg.trtconcept.com/cdn/shop/files/SC30089-DARK-TEAL_7b727628-83be-472c-8fc7-12c99b38fdd3.jpg?v=1739867238&width=2000",
            name:"Canva Bucket Hat",
            Price:"$22.9"
        },
        
    ];

    const Btm =[
        {
            id:1,
            uri:"https://sg.trtconcept.com/cdn/shop/files/720x720px_1.png?v=1731984465&width=2000",

        },
        {
            id:1,
            uri:"https://sg.trtconcept.com/cdn/shop/files/720x720px_4.png?v=1731984466&width=2000",

        },
        {
            id:1,
            uri:"https://sg.trtconcept.com/cdn/shop/files/720x720px_3.png?v=1731984467&width=2000",

        },
    ]

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

   <div  className="flex justify-center items-center gap-1 pl-0.5 pr-0.5">


    {Bags1.map((Bag11)=>{
        return(
        <div key={Bag11.id}>
        <img src={Bag11.uri} alt="" />
        <h1 className="font-sans text-lg pl-10">{Bag11.name}</h1>
        <h2 className="text-gray-600 mb-20 pl-10 pt-3 text-xl">{Bag11.Price}</h2>
        </div>
        )
    })}

   </div>

   <div  className="flex justify-center items-center gap-1 pl-0.5 pr-0.5">


    {Hat.map((Hats)=>{
        return(
        <div key={Hats.id}>
        <img src={Hats.uri} alt="" />
        <h1  className="font-sans text-lg pl-10" >{Hats.name}</h1>
        <h2 className="text-gray-600 mb-20 pl-10 pt-3 text-xl">{Hats.Price}</h2>
        </div>
        )
    })}
        
   </div>

   <div  className="flex justify-center items-center gap-1 pl-0.5 pr-0.5">


{Pillo.map((Pillos)=>{
    return(
    <div key={Pillos.id}>
    <img src={Pillos.uri} alt="" />
    <h1  className="font-sans text-lg pl-10">{Pillos.name}</h1>
    <h2 className="text-gray-600 mb-20 pl-10 pt-3 text-xl">{Pillos.Price}</h2>
    </div>
    )
})}
    
</div>


        
   <div  className="flex justify-center items-center gap-1 pl-0.5 pr-0.5">


{Scarf.map((Scarfs)=>{
    return(
    <div key={Scarfs.id}>
    <img src={Scarfs.uri} alt="" />
    <h1  className="font-sans text-lg pl-10">{Scarfs.name}</h1>
    <h2 className="text-gray-600 mb-20 pl-10 pt-3 text-xl">{Scarfs.Price}</h2>
    </div>
    )
})}
    
</div>
   

<div  className="flex justify-center items-center gap-1 mt-5 pl-0.5 pr-0.5">


{Btm.map((Btms)=>{
    return(
    <div key={Btms.id}>
    <img src={Btms.uri} alt="" />
    </div>
    )
})}
    
</div>

   <Bottom />
   </>
  )
}

export default Accessories