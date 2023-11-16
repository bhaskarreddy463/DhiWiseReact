import React from "react";

import { Img, Text } from "components";

const WhatsinthisPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-whyte items-center justify-end mx-auto pt-24 md:px-10 px-24 sm:px-5 w-full">
        <div className="flex flex-col md:gap-10 gap-[72px] justify-end max-w-[1002px] mx-auto w-full">
          <div className="flex md:flex-col flex-row gap-[17px] items-start justify-start mr-[135px] w-[87%] md:w-full">
            <Text
              className="leading-[150.00%] text-5xl sm:text-[38px] md:text-[44px] text-black-900 tracking-[-0.91px] w-[83%] sm:w-full"
              size="txtWhyteRegular48"
            >
              Check out the examples below. They’re for you to hack up,
              replicate, and make your own.
            </Text>
            <Img
              className="h-[252px] md:mt-0 mt-[90px]"
              src="images/img_vector133.svg"
              alt="vector133"
            />
          </div>
          <div className="flex sm:flex-col flex-row sm:gap-12 items-start justify-between ml-1.5 md:ml-[0] w-full">
            <Img
              className="h-[436px] md:h-auto object-cover rounded"
              src="images/img_image1.png"
              alt="imageOne"
            />
            <Img
              className="h-[213px] md:h-auto object-cover rounded"
              src="images/img_image2.png"
              alt="imageTwo"
            />
            <Img
              className="h-[227px] md:h-auto object-cover rounded"
              src="images/img_image3.png"
              alt="imageThree"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatsinthisPage;
