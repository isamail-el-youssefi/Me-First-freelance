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
          heading="3 Days Marrakech Zagora"
          text="simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          width={1920}
          height={1280}
          btnType="button"
          btnTitle="MORE DETAILS"
          link="/trips/details"
        />
        <TripPackages
          iamgeSrc="/test2.jpg"
          iamgeAlt="sahara"
          heading="3 Days Marrakech Zagora"
          text="simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          width={500}
          height={300}
          btnType="button"
          btnTitle="MORE DETAILS"
          link="/trips/details"
        />
        <TripPackages
          iamgeSrc="/test3.jpg"
          iamgeAlt="sahara"
          heading="3 Days Marrakech Zagora"
          text="simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          width={500}
          height={300}
          btnType="button"
          btnTitle="MORE DETAILS"
          link="/trips/details"
        />
      </div>
    </section>
  );
};

export default Packages;
