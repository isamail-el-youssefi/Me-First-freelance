'use client'
import TripDetails2 from '../../../../components/TripDetails2';

const page = () => {
  return (
    <div>
      <TripDetails2
        Heading="Zagora to Marrakech"
        days={0}
        carousel1="/square1.jpg"
        carousel2="/square1.jpg"
        carousel3="/square1.jpg"
        map="https://www.google.com/maps/d/embed?mid=1dSeOzM2YSbCVON6pqMFE1oDFABuVjAU0&hl=en_US&ehbc=2E312F"
      />
    </div>
  );
};

export default page;
