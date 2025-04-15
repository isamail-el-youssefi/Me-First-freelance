'use client'
import { useParams } from 'next/navigation';
import TripDetails2 from '../../../../components/TripDetails2';
import { TRIPDAY } from '@/constant';

// Package information mapping with day-specific images
const packageInfo = {
  '1': {
    heading: "Desert Adventure - Erg Chegaga",
    days: 0, // Index to TRIPDAY array
    // Default carousel images (for backward compatibility)
    carousel1: "/test1.jpg",
    carousel2: "/desert1.jpg",
    carousel3: "/desert2.jpg",
    map: "https://www.google.com/maps/embed?pb=!1m40!1m12!1m3!1d882223.3784190571!2d-7.400403060972773!3d30.26030761642388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m25!3e0!4m5!1s0xdbc36ea58680e95%3A0x75e9e9fb616de232!2sZagora!3m2!1d30.3428747!2d-5.8377713!4m5!1s0xdb085ba09b910a7%3A0xd45c630570045821!2sTaliouine!3m2!1d30.5323297!2d-7.9243144999999995!4m5!1s0xdbdcdadaabfdf03%3A0x82addcb39e23d4e2!2sTamegroute!3m2!1d30.2638799!2d-5.6799816!4m5!1s0xdbe62978e766f85%3A0xf9f632f826725240!2sMhamid!3m2!1d29.8257743!2d-5.7234007!5e0!3m2!1sfr!2sma!4v1744712629290!5m2!1sfr!2sma",
    // Day-specific images
    dayImages: {
      day1: ["/111.jpg", "/111.jpg", "/111.jpg"],
      day2: ["/222.jpg", "/222.jpg", "/222.jpg"],
      day3: ["/333.jpg", "/333.jpg", "/333.jpg"]
    }
  },
  '2': {
    heading: "Oasis Explorer - Fint Oasis",
    days: 1, // Index to TRIPDAY array
    carousel1: "/test2.jpg",
    carousel2: "/oasis1.jpg",
    carousel3: "/oasis2.jpg",
    map: "https://www.google.com/maps/d/embed?mid=1dSeOzM2YSbCVON6pqMFE1oDFABuVjAU0&hl=en_US&ehbc=2E312F",
    // Day-specific images
    dayImages: {
      day1: ["/oasis/day1-1.jpg", "/oasis/day1-2.jpg", "/oasis/day1-3.jpg"],
      day2: ["/oasis/day2-1.jpg", "/oasis/day2-2.jpg", "/oasis/day2-3.jpg"],
      day3: ["/oasis/day3-1.jpg", "/oasis/day3-2.jpg", "/oasis/day3-3.jpg"]
    }
  },
  '3': {
    heading: "Historical Journey - Ait Ben Haddou",
    days: 2, // Index to TRIPDAY array
    carousel1: "/test3.jpg",
    carousel2: "/kasbah1.jpg",
    carousel3: "/kasbah2.jpg",
    map: "https://www.google.com/maps/d/embed?mid=1dSeOzM2YSbCVON6pqMFE1oDFABuVjAU0&hl=en_US&ehbc=2E312F",
    // Day-specific images
    dayImages: {
      day1: ["/kasbah/day1-1.jpg", "/kasbah/day1-2.jpg", "/kasbah/day1-3.jpg"],
      day2: ["/kasbah/day2-1.jpg", "/kasbah/day2-2.jpg", "/kasbah/day2-3.jpg"],
      day3: ["/kasbah/day3-1.jpg", "/kasbah/day3-2.jpg", "/kasbah/day3-3.jpg"]
    }
  }
};

const TripDetailsPage = () => {
  const params = useParams();
  const id = params.id as string;
  
  // Default to package 1 if ID is not valid
  const packageData = packageInfo[id] || packageInfo['1'];
  
  return (
    <div>
      <TripDetails2
        Heading={packageData.heading}
        days={packageData.days}
        carousel1={packageData.carousel1}
        carousel2={packageData.carousel2}
        carousel3={packageData.carousel3}
        map={packageData.map}
        dayImages={packageData.dayImages}
      />
    </div>
  );
};

export default TripDetailsPage;