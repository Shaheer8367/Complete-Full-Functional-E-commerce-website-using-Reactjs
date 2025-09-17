import React from "react";
import { Percent, Truck,Clock3 ,ShieldCheck } from "lucide-react";

const Delivery = () => {
  return (
    <div className="lg:container mx-auto shadow-md p-7 rounded-2xl bg-white ">
      {/* Grid with 3 columns */}
      <div className="grid grid-cols-4 gap-6">
        
        {/* 1st Item */}
        <div className="delivery_wrapper">
          <div className="flex items-center gap-4">
            <p><Percent size="3rem" /></p>
            <div>
              <h4 className="text-base text-[#272343] capitalize font-inter font-medium mb-2.5">
                Discounts
              </h4>
              <p className="text-sm text-[#9a9caa] font-inter font-normal">
                every week new sales
              </p>
            </div>
          </div>
        </div>

        {/* 2nd Item (moved left) */}
        <div className="delivery_wrapper -ml-10">
          <div className="flex items-center gap-4">
            <p><Truck size="3rem" /></p>
            <div>
              <h4 className="text-base text-[#272343] capitalize font-inter font-medium mb-2.5">
                Free delivery
              </h4>
              <p className="text-sm text-[#9a9caa] font-inter font-normal">
                100% free for all orders over $50
              </p>
            </div>
          </div>
        </div>

        {/* 3rd Item */}
        <div className="delivery_wrapper -ml-1">
          <div className="flex items-center gap-4">
            <p><Clock3  size="3rem" /></p>
            <div>
              <h4 className="text-base text-[#272343] capitalize font-inter font-medium mb-2.5">
                Great Support 24/7
              </h4>
              <p className="text-sm text-[#9a9caa] font-inter font-normal">
                we care youy experiences
              </p>
            </div>
          </div>
        </div>

        {/* 4rd Item */}
             <div className="delivery_wrapper ">
          <div className="flex items-center gap-4">
            <p><ShieldCheck  size="3rem" /></p>
            <div>
              <h4 className="text-base text-[#272343] capitalize font-inter font-medium mb-2.5">
                Secure Payment
              </h4>
              <p className="text-sm text-[#9a9caa] font-inter font-normal">
                100% Secure Payment Methods
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Delivery;
