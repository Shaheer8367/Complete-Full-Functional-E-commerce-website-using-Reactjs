import React from "react";

const SectionTitle = ({ title, mb = "mb-0", textAlign = "text-left" }) => {
  return (
    <div className={`w-full ${mb} ${textAlign}`}>
      <h3 className="text-3xl text-[#272343]  font-semibold font-inter capitalize">
        {title}
      </h3>
    </div>
  );
};

export default SectionTitle;
