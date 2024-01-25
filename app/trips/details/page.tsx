import Image from "next/image";
import React from "react";
import { TRIPS , TRIPDAY} from "@/constant";
import DestinationData from "@/components/DestinationData";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const TripDetails = () => {
  return (
    <section className="max-container padding-container py-32">
      <div className="flex flex-col justify-center items-center text-center">
        {/*         <h1 className="lg:bold-44 bold-28  pb-2 text-amber-900">Popular Destinations</h1>
        <p className="text-amber-950 pb-10 tracking-tight text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing
        </p> */}
      </div>
      <div className="flex flex-col gap-8 xl:flex-row pb-24">
        {/* LEFT */}

        <DestinationData
          title={TRIPS.length > 0 ? TRIPS[0].place : "Default Title"}
          detail={TRIPS.length > 0 ? TRIPS[0].details : "Default Title"}
        />

        
        <Tabs >
          <TabList>
            <Tab>Tab 1</Tab>
            <Tab>Tab 2</Tab>
            <Tab>Tab 3</Tab>
            <Tab>Tab 4</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>tree!</p>
            </TabPanel>
            <TabPanel>
              <p>four!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>

        {/* RIGHT */}
        <div className="flex flex-2 xl:flex-2 gap-5">
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
