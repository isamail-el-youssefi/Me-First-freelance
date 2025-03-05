import TripPackages from "./TripPackages";

const Packages = () => {
  return (
    <section className="max-container padding-container py-16">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="bold-44  pb-2 text-amber-900">Popular Destinations</h1>
        <p className="text-amber-950 pb-10 tracking-tight text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 content-between gap-6 ">
        <TripPackages
          iamgeSrc="/test1.jpg"
          iamgeAlt="sahara"
          heading="Desert Adventure"
          text="Experience the majestic Sahara Desert with our 3-day journey to Erg Chegaga, one of Morocco's largest dune fields. Camp under the stars, ride camels, and immerse yourself in nomadic culture in this unforgettable desert experience."
          width={1920}
          height={1280}
          btnType="button"
          btnTitle="MORE DETAILS"
          link="/trips/1" // Dynamic ID for package 1
        />
        <TripPackages
          iamgeSrc="/test2.jpg"
          iamgeAlt="oasis"
          heading="Oasis Explorer"
          text="Discover the hidden paradise of Oasis Fint near Ouarzazate. This 3-day tour lets you experience traditional oasis life, explore palm groves, and learn about desert agriculture while staying in authentic accommodations."
          width={500}
          height={300}
          btnType="button"
          btnTitle="MORE DETAILS"
          link="/trips/2" // Dynamic ID for package 2
        />
        <TripPackages
          iamgeSrc="/test3.jpg"
          iamgeAlt="kasbah"
          heading="Historical Journey"
          text="Visit the UNESCO World Heritage site of Ait Ben Haddou and explore Morocco's rich history on this 3-day tour. See famous movie locations, visit ancient kasbahs, and travel through stunning mountain scenery."
          width={500}
          height={300}
          btnType="button"
          btnTitle="MORE DETAILS"
          link="/trips/3" // Dynamic ID for package 3
        />
      </div>
    </section>
  );
};

export default Packages;
