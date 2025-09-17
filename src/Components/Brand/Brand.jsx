import React from "react";

const Brand = () => {
const brands =[
    {
        id:1,
        img:"/public/assets/brands/brand_1.png"
    },
    {
        id:2,
        img:"/public/assets/brands/brand_2.png"
    },
    {
        id:3,
        img:"/public/assets/brands/brand_3.png"
    },
    {   
        id:4,
        img:"/public/assets/brands/brand_4.png"
    },
    {   
        id:5,
        img:"/public/assets/brands/brand_5.png"
    },
    {   
        id:6,   
        img:"/public/assets/brands/brand_6.png"
    },
    {       
        id:7,   
        img:"/public/assets/brands/brand_7.png"
    },


]

  return (
    <div className="lg:container mx-auto ">
      <div className="grid grid-cols-7  items-center justify-center gap-5">
          {
            brands?.map(brand=>(
                <div key={brand?.id} className="brand_item ">
                    <img className="w-auto h-auto" src={brand?.img} alt="brand" />
                </div>
            ))
          }
      </div>
    </div>
  );
}
export default Brand;