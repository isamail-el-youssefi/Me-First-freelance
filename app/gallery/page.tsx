import Image from "next/image";
import React from "react";

const page = () => {
  const images = [
    { src: "/111.jpg", width: 667, height: 1000 },
    { src: "/222.jpg", width: 1000, height: 681 },
    { src: "/333.jpg", width: 1000, height: 750 },
    { src: "/444.jpg", width: 1000, height: 709 },
    { src: "/555.jpg", width: 800, height: 1000 },
    { src: "/666.jpg", width: 750, height: 1000 },
    { src: "/999.jpg", width: 1000, height: 664 },
    { src: "/888.jpg", width: 800, height: 1000 },
    { src: "/777.jpg", width: 758, height: 1000 },

    { src: "/1111.jpg", width: 1000, height: 656 },
    { src: "/2222.jpg", width: 800, height: 1000 },
    { src: "/3333.jpg", width: 1000, height: 750 },
    { src: "/4444.jpg", width: 667, height: 1000 },
    { src: "/5555.jpg", width: 1000, height: 667 },
    { src: "/6666.jpg", width: 1000, height: 663 },
    { src: "/7777.jpg", width: 1000, height: 750 },
    { src: "/8888.jpg", width: 1000, height: 667 },
    { src: "/9999.jpg", width: 1000, height: 980 },

    { src: "/10001.jpg", width: 1000, height: 639 },
    { src: "/10002.jpg", width: 1000, height: 667 },
    { src: "/10003.jpg", width: 1000, height: 748 },
    { src: "/10004.jpg", width: 1000, height: 665 },
    { src: "/10005.jpg", width: 1000, height: 692 },
    { src: "/10006.jpg", width: 1000, height: 677 },
    { src: "/10007.jpg", width: 681, height: 1000 },
    { src: "/10008.jpg", width: 1000, height: 667 },
    { src: "/10009.jpg", width: 1000, height: 708 },
    { src: "/10010.jpg", width: 1000, height: 674 },
    { src: "/10011.jpg", width: 622, height: 1000 },
    { src: "/10012.jpg", width: 1000, height: 640 },
    { src: "/10013.jpg", width: 1000, height: 669 },
  ];
  return (
    <div className="max-container padding-container lg:pt-40 pt-36">
      <div className="gap-4 lg:gap-5 columns-2 md:columns-3  space-y-4">
        {images.map((image, index) => (
          <div key={index} className="">
            <div className="w-full h-full overflow-hidden relative">
              <Image
                src={image.src}
                alt="about"
                width={image.width}
                height={image.height}
                className="rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
