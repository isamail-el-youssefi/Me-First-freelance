"use client";
import { useParams } from "next/navigation";
import { useTranslation } from "react-i18next";
import TripDetails2 from "../../../../components/TripDetails2";
import { TRIPDAY } from "@/constant";

// Define types for better type safety
interface PricingTier {
  persons: number;
  price: string;
}

interface DayImages {
  day1: string[];
  day2: string[];
  day3: string[];
  [key: string]: string[]; // For any additional days
}

interface PackageData {
  heading: string;
  pricing: PricingTier[];
  keyStops: string; // Changed from string[] to string for translation key
  days: number;
  carousel1: string;
  carousel2: string;
  carousel3: string;
  map: string;
  dayImages: DayImages;
}

// Add index signature to the packageInfo object
interface PackageInfo {
  [key: string]: PackageData;
}

// Package information mapping with day-specific images
const packageInfo: PackageInfo = {
  "1": {
    heading: "tripDetails.trip1.heading",
    pricing: [
      { persons: 1, price: "100$" },
      { persons: 2, price: "200$" },
      { persons: 3, price: "300$" },
    ],
    keyStops: "tripDetails.trip1.keyStops",
    days: 0,
    carousel1: "/test1.jpg",
    carousel2: "/desert1.jpg",
    carousel3: "/desert2.jpg",
    map: "https://www.google.com/maps/embed?pb=!1m40!1m12!1m3!1d882223.3784190571!2d-7.400403060972773!3d30.26030761642388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m25!3e0!4m5!1s0xdbc36ea58680e95%3A0x75e9e9fb616de232!2sZagora!3m2!1d30.3428747!2d-5.8377713!4m5!1s0xdb085ba09b910a7%3A0xd45c630570045821!2sTaliouine!3m2!1d30.5323297!2d-7.9243144999999995!4m5!1s0xdbdcdadaabfdf03%3A0x82addcb39e23d4e2!2sTamegroute!3m2!1d30.2638799!2d-5.6799816!4m5!1s0xdbe62978e766f85%3A0xf9f632f826725240!2sMhamid!3m2!1d29.8257743!2d-5.7234007!5e0!3m2!1sfr!2sma!4v1744712629290!5m2!1sfr!2sma",
    dayImages: {
      day1: [
        "/3jp/day1/1d1.jpg",
        "/3jp/day1/1d2.jpg",
        "/3jp/day1/1d3.jpg",
        "/3jp/day1/1d4.jpg",
        "/3jp/day1/1d5.jpg",
        "/3jp/day1/1d6.jpg",
        "/3jp/day1/1d7.jpg",
        "/3jp/day1/1d8.jpg",
        "/3jp/day1/1d9.jpg",
        "/3jp/day1/1d10.jpg",
        "/3jp/day1/1d11.jpg",
        "/3jp/day1/1d12.jpg",
        "/3jp/day1/1d14.jpg",
      ],
      day2: [
        "/3jp/day2/1.jpg",
        "/3jp/day2/2.jpg",
        "/3jp/day2/3.jpg",
        "/3jp/day2/4.jpg",
        "/3jp/day2/5.jpg",
        "/3jp/day2/6.jpg",
        "/3jp/day2/7.jpg",
        "/3jp/day2/8.jpg",
        "/3jp/day2/9.jpg",
        "/3jp/day2/10.jpg",
        "/3jp/day2/11.jpg",
        "/3jp/day2/12.jpg",
        "/3jp/day2/14.jpg",
      ],
      day3: [
        "/3jp/day3/1.jpg",
        "/3jp/day3/2.jpg",
        "/3jp/day3/3.jpg",
        "/3jp/day3/4.jpg",
        "/3jp/day3/5.jpg",
        "/3jp/day3/6.jpg",
        "/3jp/day3/7.jpg",
      ],
    },
  },
  "2": {
    heading: "tripDetails.trip2.heading",
    pricing: [
      { persons: 1, price: "100$" },
      { persons: 2, price: "200$" },
      { persons: 3, price: "300$" },
    ],
    keyStops: "tripDetails.trip2.keyStops",
    days: 1,
    carousel1: "/test2.jpg",
    carousel2: "/oasis1.jpg",
    carousel3: "/oasis2.jpg",
    map: "https://www.google.com/maps/d/embed?mid=1dSeOzM2YSbCVON6pqMFE1oDFABuVjAU0&hl=en_US&ehbc=2E312F",
    dayImages: {
      day1: [
        "/3jp/day1/1d1.jpg",
        "/3jp/day1/1d2.jpg",
        "/3jp/day1/1d3.jpg",
        "/3jp/day1/1d4.jpg",
        "/3jp/day1/1d5.jpg",
        "/3jp/day1/1d6.jpg",
        "/3jp/day1/1d7.jpg",
        "/3jp/day1/1d8.jpg",
        "/3jp/day1/1d9.jpg",
        "/3jp/day1/1d10.jpg",
        "/3jp/day1/1d11.jpg",
        "/3jp/day1/1d12.jpg",
        "/3jp/day1/1d14.jpg",
      ],
      day2: [
        "/3jp/day2/25.jpg",
        "/3jp/day2/26.jpg",
        "/3jp/day2/27.jpg",
        "/3jp/day2/28.jpg",
        "/3jp/day2/29.jpg",
        "/3jp/day2/1.jpg",
        "/3jp/day2/2.jpg",
        "/3jp/day2/3.jpg",
        "/3jp/day2/4.jpg",
        "/3jp/day2/5.jpg",
        "/3jp/day2/6.jpg",
        "/3jp/day2/7.jpg",
        "/3jp/day2/8.jpg",
        "/3jp/day2/9.jpg",
        "/3jp/day2/10.jpg",
        "/3jp/day2/11.jpg",
        "/3jp/day2/12.jpg",
        "/3jp/day2/14.jpg",
        "/3jp/day2/15.jpg",
        "/3jp/day2/16.jpg",
        "/3jp/day2/17.jpg",
        "/3jp/day2/18.jpg",
        "/3jp/day2/19.jpg",
        "/3jp/day2/20.jpg",
        "/3jp/day2/21.jpg",
        "/3jp/day2/22.jpg",
        "/3jp/day2/23.jpg",
        "/3jp/day2/24.jpg",
      ],
      day3: [
        "/3jp/day3/1.jpg",
        "/3jp/day3/2.jpg",
        "/3jp/day3/3.jpg",
        "/3jp/day3/4.jpg",
        "/3jp/day3/5.jpg",
        "/3jp/day3/6.jpg",
        "/3jp/day3/7.jpg",
      ],
    },
  },
  "3": {
    heading: "tripDetails.trip3.heading",
    pricing: [
      { persons: 1, price: "100$" },
      { persons: 2, price: "200$" },
      { persons: 3, price: "300$" },
    ],
    keyStops: "tripDetails.trip3.keyStops",
    days: 2,
    carousel1: "/test3.jpg",
    carousel2: "/kasbah1.jpg",
    carousel3: "/kasbah2.jpg",
    map: "https://www.google.com/maps/embed?pb=!1m76!1m12!1m3!1d2179308.580457014!2d-8.041271658848718!3d30.91468365565008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m61!3e0!4m5!1s0xdafee8d96179e51%3A0x5950b6534f87adb8!2sMarrakech!3m2!1d31.622522399999998!2d-7.989825799999999!4m5!1s0xdbad1b4f4eec3db%3A0xc8f42823faa70485!2sTelouet!3m2!1d31.288832799999998!2d-7.239665899999999!4m5!1s0xdbae06120411439%3A0x4d090f64a0ec123a!2sA%C3%AFt%20Ben%20Haddou!3m2!1d31.047043!2d-7.1318996!4m5!1s0xda3328c8a8c64bf%3A0x257d57d5120009c0!2sGorges%20du%20Dad%C3%A8s!3m2!1d31.4532146!2d-5.9675869!4m5!1s0xda2ee4ca063e53b%3A0x572beafbbe5f9c7a!2sAgoudal!3m2!1d32.0136829!2d-5.485646!4m5!1s0xdbd333073ecf085%3A0xa44fdd883982eb80!2sTodgha%20Gorges!3m2!1d31.5219851!2d-5.5273977!4m5!1s0xdbce13812474325%3A0xf0c05a2ca46b1680!2sCaf%C3%A9%20%26%20Restaurant%20Auberge%20Tiza%2C%20Tizi%20n%2C%20tazazerte!3m2!1d31.112658999999997!2d-5.777202!4m5!1s0xdbc36ea58680e95%3A0x75e9e9fb616de232!2sZagora!3m2!1d30.3428747!2d-5.8377713!4m5!1s0xdbdcdadaabfdf03%3A0x82addcb39e23d4e2!2sTamegroute!3m2!1d30.2638799!2d-5.6799816!4m5!1s0xdbe62978e766f85%3A0xf9f632f826725240!2sMhamid!3m2!1d29.8257743!2d-5.7234007!5e0!3m2!1sen!2sma!4v1749228542026!5m2!1sen!2sma&zoom=8",
    dayImages: {
      day1: ["/kasbah/day1-1.jpg", "/kasbah/day1-2.jpg", "/kasbah/day1-3.jpg"],
      day2: ["/kasbah/day2-1.jpg", "/kasbah/day2-2.jpg", "/kasbah/day2-3.jpg"],
      day3: ["/kasbah/day3-1.jpg", "/kasbah/day3-2.jpg", "/kasbah/day3-3.jpg"],
    },
  },
  "4": {
    heading: "tripDetails.trip4.heading",
    pricing: [
      { persons: 1, price: "100$" },
      { persons: 2, price: "200$" },
      { persons: 3, price: "300$" },
    ],
    keyStops: "tripDetails.trip4.keyStops",
    days: 3,
    carousel1: "/test2.jpg",
    carousel2: "/oasis1.jpg",
    carousel3: "/oasis2.jpg",
    map: "https://www.google.com/maps/d/embed?mid=1dSeOzM2YSbCVON6pqMFE1oDFABuVjAU0&hl=en_US&ehbc=2E312F",
    dayImages: {
      day1: ["/3jp/day1/1d1.jpg"],
      day2: ["/3jp/day2/25.jpg"],
      day3: [],
    },
  },
};

const TripDetailsPage = () => {
  const params = useParams();
  const id = params.id as string;
  const { t } = useTranslation("Homepage");

  // Default to package 1 if ID is not valid
  const packageData = packageInfo[id] || packageInfo["1"];

  return (
    <div>
      <TripDetails2
        Heading={t(packageData.heading)}
        pricing={packageData.pricing}
        days={packageData.days}
        carousel1={packageData.carousel1}
        carousel2={packageData.carousel2}
        carousel3={packageData.carousel3}
        map={packageData.map}
        dayImages={packageData.dayImages}
        keyStops={t(packageData.keyStops, { returnObjects: true }) as string[]}
        tripId={id}
      />
    </div>
  );
};

export default TripDetailsPage;
