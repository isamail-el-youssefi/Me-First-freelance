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
      <div id="Contact" className="max-container padding-container pt-24 pb-6">
        <h4 className="bold-22 md:bold-32 capitalize  px-1 pb-16 md:pb-20 text-amber-900 text-center leading-10 lg:px-40 3xl:px-96 ">
          I would be delighted to address any inquiries you may have
        </h4>
        <div className="grid sm:grid-flow-col  justify-around pb-4 md:pb-8">
          <div className="flex flex-col items-center pb-14 ">
            <Image
              src="/phone.png"
              alt="phone"
              height={64}
              width={64}
              style={{ width: "25%", height: "30%" }}
            />
            <span className="mb-7"></span>

            <p className="text-amber-800  tra text-2xl pb-2 x-3">Call me at</p>
            <div>+212 6677345712</div>
          </div>
          <div className="flex flex-col items-center pb-14  ">
            <Image
              src="/email.png"
              alt="phone"
              height={64}
              width={64}
              style={{ width: "25%", height: "30%" }}
            />
            <span className="mb-7"></span>
            <p className="text-amber-800  tracking-tight text-2xl pb-1 ">
              Email me at
            </p>
            <div>loveroffsahara@gmail.com</div>
          </div>
          <div className="flex flex-col items-center pb-14 ">
            <Image
              src="/whatsapp.png"
              alt="whatsapp"
              height={64}
              width={64}
              style={{ width: "25%", height: "30%" }}
            />
            <span className="mb-7"></span>
            <p className="text-amber-800  tracking-tight text-2xl pb-2 mx-3 ">
              Text me at
            </p>
            <div
              className=" cursor-pointer flexCenter gap-2 border-2 rounded-full border-amber-800 hover:border-amber-800 bg-amber-800 px-8 py-2.5 text-white font-semibold hover:text-amber-800 transition-all duration-300 ease-out hover:bg-white "
              /* className= "flexCenter gap-2 border-2 rounded-full border-amber-900 hover:border-amber-950 bg-amber-900 px-8 py-3 text-white transition-all hover:bg-amber-950 "  */
            >
              <div className="whitespace-nowrap  text-sm">Whatsapp</div>
            </div>
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
