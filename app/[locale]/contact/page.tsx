import React from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

const Contact = () => {
  return (
    <section className="bg-amber-50">
      <div className="relative h-[100vh] w-full z-10 pb-12">
        <Image
          src="/contact1.jpg"
          alt="about"
          height={1260}
          width={1920}
          style={{ width: "100%", height: "100%" }}
          className="absolute top-0 left-0 object-cover w-full h-full"
        />
        <div className="flex flex-col justify-center items-center padding-container relative top-[38%] md:top-[34%] z-10">
          <span className="bold-32 sm:bold-32 lg:bold-64 text-white capitalize px-5 sm:px-20 text-center">
            CONTACT ME.
          </span>
          <Link href={"#Contact"}>
            <Image
              src="/down.png"
              alt="Down arrow"
              height={55}
              width={55}
              className="hover:scale-105 duration-300 transition-all ease-in mt-2 w-[45px] h-[45px] lg:w-[55px] lg:h-[55px]"
            />
          </Link>
        </div>
      </div>

      <AnimatedSection>
        <div
          id="Contact"
          className="max-container padding-container bg-amber-50"
        >
          <div className=" py-20 px-4 md:px-8 lg:px-12 rounded-lg">
            <h2 className="text-5xl font-bold mb-6 text-amber-900">
              Contact us
            </h2>

            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div className="md:w-3/5 lg:w-1/2 mb-16 md:mb-0">
                <p className="text-amber-950 text-lg mb-12 max-w-xl">
                  We're here to help and answer any questions you might have. We
                  look forward to hearing from you!
                </p>

                <div className="space-y-8">
                  <div className="flex items-center">
                    <div className="w-8 h-8 mr-4 text-amber-950">
                      <Image
                        src="/email.png"
                        alt="email"
                        height={32}
                        width={32}
                      />
                    </div>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="mailto:loveroffsahara@gmail.com"
                      className="text-amber-950 hover:underline text-lg font-medium"
                    >
                      loveroffsahara@gmail.com
                    </a>
                  </div>

                  <div className="flex items-center">
                    <div className="w-8 h-8 mr-4 text-amber-950">
                      <Image
                        src="/phone.png"
                        alt="phone"
                        height={32}
                        width={32}
                      />
                    </div>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="tel:+212 6677345712"
                      className="text-amber-950 hover:underline text-lg font-medium"
                    >
                      +212 6677345712
                    </a>
                  </div>

                  <div className="flex items-center">
                    <div className="w-8 h-8 mr-4 text-amber-950">
                      <Image
                        src="/whatsapp.png"
                        alt="whatsapp"
                        height={32}
                        width={32}
                      />
                    </div>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://wa.me/212661842609"
                      className="px-6 py-2 bg-amber-50 text-amber-950 border-[3px] border-amber-900 rounded-xl hover:bg-amber-800 hover:border-amber-800 hover:text-amber-50 transition-colors text-base font-medium"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              <div className="md:w-2/5 lg:w-1/3">
                {/* Placeholder for your custom vector/illustration */}
                <div className="h-96 w-full relative rounded-lg overflow-hidden">
                  <Image
                    src="/camel2.png"
                    alt="Camel illustration"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 mb-16">
            <iframe
              className="rounded-2xl"
              width="100%"
              height="350"
              src="https://maps.google.com/maps?width=100%25&amp;height=350&amp;hl=en&amp;q=zagora+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Contact;
