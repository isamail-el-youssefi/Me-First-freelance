import React from "react";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <section>
      <div className="relative h-[100vh] w-full z-10 pb-12">
{/*         <Image
          src="/oasis3.jpg"
          alt="about"
          height={3000}
          width={4200}
          style={{ width: "100%", height: "100%" }}
          className="absolute top-0 left-0 object-cover w-full h-full"
        /> */}
        <Image
          src="/contact1.jpg"
          alt="about"
          height={1260}
          width={1920}
          style={{ width: "100%", height: "100%" }}
          className="absolute top-0 left-0 object-cover w-full h-full"
        />
        <div className=" flex flex-col justify-center items-center padding-container relative top-[38%] md:top-[34%]  z-10">
          <span className="bold-32 sm:bold-32 lg:bold-64 text-white capitalize px-5 sm:px-20 text-center ">
            CONTACT ME.
          </span>
          <Link href={"#Contact"}>
            <Image
              src="/down.png"
              alt="Down arrow"
              height={55}
              width={55}
              className=" hover:scale-105 duration-300 transition-all ease-in  mt-2 w-[45px] h-[45px] lg:w-[55px] lg:h-[55px] "
            />
          </Link>
        </div>
      </div>
      <div id="Contact" className="max-container padding-container pt-24 pb-">
        <h4 className="bold-28 md:bold-32 capitalize  px-1 pb-16 text-amber-900 text-center leading-10 lg:px-40 3xl:px-96 ">
          I would be delighted to address any inquiries you may have
        </h4>
        <div className="grid sm:grid-flow-col  justify-evenly pb-4">
          <div className="flex flex-col items-center pb-10 ">
            <Image
              src="/phone.png"
              alt="phone"
              height={64}
              width={64}
              style={{ width: "45%", height: "45%" }}
            />
            <span className="pb-3"></span>

            <p className="text-amber-950  tra text-2xl pb-2 px-3">Call me at</p>
            <div>NUMBER</div>
          </div>
          <div className="flex flex-col items-center pb-10 ">
            <Image
              src="/whatsapp.png"
              alt="whatsapp"
              height={64}
              width={64}
              style={{ width: "45%", height: "45%" }}
            />
            <span className="pb-3"></span>
            <p className="text-amber-950  tracking-tight text-2xl pb-2 px-3 ">
              Text me at
            </p>
            <div>NUMBER</div>
          </div>
          <div className="flex flex-col items-center pb-10  ">
            <Image
              src="/email.png"
              alt="phone"
              height={64}
              width={64}
              style={{ width: "45%", height: "45%" }}
            />
            <span className="pb-3"></span>
            <p className="text-amber-950  tracking-tight text-2xl pb-2 ">
              Email me at
            </p>
            <div>NUMBER</div>
          </div>
        </div>
        <div>
          <iframe
            className="rounded-2xl"
            width="100%"
            height="350"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%25&amp;height=350&amp;hl=en&amp;q=zagora+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
