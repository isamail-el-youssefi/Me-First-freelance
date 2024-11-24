import Image from "next/image";
import React from "react";
import { TRIPDAY } from "@/constant";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const page = () => {
  const tabContent = ["Tab 1", "Tab 2", "Tab 3"];
  return (
    <section className="max-container padding-container py-32">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="lg:bold-44 bold-28  pb-2 text-amber-900">
          Popular Destinations
        </h1>
      </div>
      <div className="flex flex-col gap-8 xl:flex-row  pb-24">
        {/* LEFT */}

        <Tabs className="flex flex-1 flex-col  text-wrap xl:items-start">
          <TabList className="pb-3 flex  justify-between px-3 ">
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
                    <h1>{trip.d}</h1>
                    <p>{trip.details}</p>
                  </div>
                ))}
              </TabPanel>
            </TabPanel>
            <TabPanel>
              <iframe
                src="https://www.google.com/maps/d/embed?mid=1dSeOzM2YSbCVON6pqMFE1oDFABuVjAU0&hl=en_US&ehbc=2E312F"
                className="w-full h-96 rounded-2xl"
              ></iframe>
            </TabPanel>
            <TabPanel>
              <p>tree!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>

        {/* RIGHT */}
        <div className="flex flex-1  gap-5">
          <h1>kh</h1>
        </div>
      </div>
    </section>
  );
};

export default page;
