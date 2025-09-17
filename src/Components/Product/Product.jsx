import React, { useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { ShoppingCart } from "lucide-react";

const Product = () => {
  const [active, setActive] = useState({ id: 0, product: "all" });
  const [hovered, setHovered] = useState(null);

  const productTitle = [
    { id: 0, title: "All", product: "all" },
    { id: 1, title: "Newest", product: "newest" },
    { id: 2, title: "Trending", product: "trending" },
    { id: 3, title: "Best Seller", product: "best seller" },
  ];
   
 const products = [
    {
      title: "library stool",
      status: "New",
      price: "$120",
      image: "/src/assets/products/product_1.png",
      currentPrice: "$120",
      product: "newest",
    },
    {
      title: "library stool chair",
      status: "Sales",
      price: "$120",
      image: "/src/assets/products/product_2.png",
       product: "newest",
    },
    {
      title: "library stool",
      status: "New",
      price: "$120",
      image: "/src/assets/products/product_3.png",
      currentPrice: "$120",
      product: "newest",
    },
    {
      title: "library stool chair",
      status: "Sales",
      price: "$120",
      image: "/src/assets/products/product_4.png",
       product: "newest",
    },
     {
      title: "library stool",
      status: "New",
      price: "$120",
      image: "/src/assets/products/product_5.png",
      currentPrice: "$120",
      product: "trending",
    },
     {
      title: "library stool",
      status: "New",
      price: "$120",
      image: "/src/assets/products/product_6.png",
      currentPrice: "$120",
      product: "trending",
    },
     {
      title: "library stool",
      status: "New",
      price: "$120",
      image: "/src/assets/products/product_7.png",
      currentPrice: "$120",
      product: "trending",
    },
     {
      title: "library stool",
      status: "New",
      price: "$120",
      image: "/src/assets/products/product_8.png",
      currentPrice: "$120",
      product: "trending",
    },
    {
      title: "library stool chair",
      status: "Sales",
      price: "$120",
      image: "/src/assets/products/product_1.png",
       product: "best seller",
    },
    {
      title: "library stool",
      status: "New",
      price: "$120",
      image: "/src/assets/products/product_2.png",
      currentPrice: "$120",
       product: "best seller",
    },
    {
      title: "library stool chair",
      status: "Sales",
      price: "$120",
      image: "/src/assets/products/product_3.png",
        product: "best seller",
    },
     {
      title: "library stool chair",
      status: "Sales",
      price: "$120",
      image: "/src/assets/products/product_5.png",
        product: "best seller",
    },


    {
      title: "library stool",
      status: "New",
      price: "$120",
      image: "/src/assets/products/product_6.png",
      currentPrice: "$120",
       product: "featured",
    },
    {
      title: "library stool chair",
      status: "Sales",
      price: "$120",
      image: "/src/assets/products/product_7.png",
        product: "featured",
    },
     {
      title: "library stool chair",
      status: "Sales",
      price: "$120",
      image: "/src/assets/products/product_8.png",
        product: "featured",
    },
      {
      title: "library stool chair",
      status: "Sales",
      price: "$120",
      image: "/src/assets/products/product_1.png",
        product: "featured",
    },

     {
      title: "library stool chair",
      status: "Sales",
      price: "$120",
      image: "/src/assets/products/product_2.png",
        product: "all",
    },
     {
      title: "library stool chair",
      status: "Sales",
      price: "$120",
      image: "/src/assets/products/product_3.png",
        product: "all",
    },
      {
      title: "library stool chair",
      status: "Sales",
      price: "$120",
      image: "/src/assets/products/product_4.png",
        product: "all",
    },

     {
      title: "library stool chair",
      status: "Sales",
      price: "$120",
      image: "/src/assets/products/product_5.png",
        product: "all",
    },
     {
      title: "library stool chair",
      status: "Sales",
      price: "$120",
      image: "/src/assets/products/product_6.png",
        product: "all",
    },
    {
      title: "library stool chair",
      status: "Sales",
      price: "$120",
      image: "/src/assets/products/product_7.png",
        product: "all",
    },
    {
      title: "library stool chair",
      status: "Sales",
      price: "$120",
      image: "/src/assets/products/product_8.png",
        product: "all",
    },
    {
      title: "library stool chair",
      status: "Sales",
      price: "$120",
      image: "/src/assets/products/product_1.png",
        product: "all",
    },
    

   
  ];    

const productFilter = products.filter(product => product.product === active?.product );
console.log(productFilter);

  return (
    <div className="lg:container mx-auto">
      <div className="w-full flex-col flex items-center justify-center">
        <SectionTitle title="Our Product" textAlign="text-center" mb="mb-5" />

        <div className="flex items-center justify-center gap-6 mb-10">
          {productTitle.map((item) => (
            <button
              key={item.id}
              onClick={() =>
                setActive({
                  id: item.id,
                  product: item.product,
                })
              }
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
              className={`text-base uppercase font-inter cursor-pointer transition-colors duration-150 ${
                active.id === item.id
                  ? "text-black font-extrabold"            // active = full black (strong)
                  : hovered === item.id
                  ? "text-[#272343] font-semibold"        // hovered (not active) = low black
                  : "text-[#9a9caa] font-normal"          // inactive = gray
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-4 items-center gap-6">
              {
                   productFilter.map((product, index) => (
                     <div key={index} className="p-4">
                   <div className="feature_image mb-4 relative">
                    <img className="w-full max-h-[312px] rounded-lg object-cover" src={product?.image} alt={product.title}/>
                           {
                            product?.status && (
                               <div className="absolute top-4 left-4 bg-[#007580] text-white px-2 py-2 rounded-lg">
                            <button className="text-sm  font-inter font-normal">{product?.status}</button>
                            </div>
                            )
                           }
                   </div>
                     <div className="feature_content ">
                        <div className="flex items-center justify-between ">
                             <h4 className="text-base text-[#007580] capitalize font-inter font-normal 
                             mb-4">{product?.title}</h4>
                             <span className="bg-[#007580] h-[44px] w-[44px] rounded-lg 
                             flex items-center justify-center"><ShoppingCart size='1.5rem' color='#fff'/></span>
                        </div>
                         <p    className="text-xl flex items-center gap-2 text-[#272343] font-inter font-semibold ">
                            {product?.price} 
                            {
                                product?.currentPrice && (
                                    <span className="text-sm text-[#9a9caa] font-inter font-normal" >{product?.currentPrice}</span>
                                )
                            }

                         </p>

                     </div>

                </div>
                   ))
                   
              }
      </div>
    </div>
  );
};

export default Product;
