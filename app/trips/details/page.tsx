import Image from "next/image";
import React from "react";
import { TRIPDAY } from "@/constant";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Button from "@/components/Button";

const TripDetails = () => {
  const tabContent = ["Tab 1", "Tab 2", "Tab 3"];

  return (
    <section className="max-container padding-container py-32">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="lg:bold-44 bold-28  pb-2 text-amber-900">
          Popular Destinations
        </h1>
        <p className="text-amber-950 pb-10 tracking-tight text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing
        </p>
      </div>
      <div className="flex flex-col gap-8 xl:flex-row  pb-24">
        {/* LEFT */}
        <div className="flex flex-1 flex-col  text-wrap xl:items-start">
          <Tabs>
            <TabList className="pb-3 flex  justify-between px-3 w-full">
              {/* Map over the tabContent array */}
              {tabContent.map((tab, index) => (
                <Tab className="pr-8" key={index}>
                  <div
                    className="flexCenter gap-2 border-2 rounded-full border-amber-900 hover:border-amber-950 bg-amber-900 px-8 py-3.5 text-white hover:bold-16 hover:text-amber-950 transition-all hover:bg-white "
                    /* className= "flexCenter gap-2 border-2 rounded-full border-amber-900 hover:border-amber-950 bg-amber-900 px-8 py-3 text-white transition-all hover:bg-amber-950 "  */
                  >
                    <div className="whitespace-nowrap cursor-pointer text-sm">
                      {tab}
                    </div>
                  </div>
                </Tab>
              ))}
            </TabList>
            <TabPanels className="py-8">
              <TabPanel>
                <TabPanel>
                  {TRIPDAY[0].map((trip, index) => (
                    <div key={index}>
                      <h1>{trip.days}</h1>
                      <p>{trip.details}</p>
                    </div>
                  ))}
                </TabPanel>
              </TabPanel>
              <TabPanel>
                <iframe
                  src="https://www.google.com/maps/d/embed?mid=1dSeOzM2YSbCVON6pqMFE1oDFABuVjAU0&hl=en_US&ehbc=2E312F"
                  className="w-full h-[450px] rounded-2xl"
                ></iframe>
              </TabPanel>
              <TabPanel>
                <p>tree!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>

        {/* RIGHT */}
        <div className="flex flex-1  gap-5">
          <div>
            <Image
              src="/sahara-7.jpg"
              alt="about"
              height={444}
              width={333}
              style={{ width: "100%", height: "85%" }}
              className="w-auto  rounded-lg border  hover:border-amber-800 mt-10 hover:scale-105  transition-all ease-in-out duration-300 cursor-pointer "
            />
          </div>
          <div>
            <Image
              src="/chegaga-1.jpg"
              alt="about"
              height={444}
              width={333}
              style={{ width: "100%", height: "85%" }}
              className="w-auto rounded-lg border hover:border-amber-800 mb-10 hover:scale-105  transition-all ease-in-out duration-300 cursor-pointer "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TripDetails;
