// Define the type for your props
interface TripDataProps {
  title: string;
  detail: string;
}

// Use the defined type for props
const DestinationData: React.FC<TripDataProps> = (props) => {
  return (
    <div className="flex flex-1 flex-col justify-center items-center text-wrap xl:items-start">
      <h1 className="bold-20 md:bold-28 capitalize pb-4 text-amber-900">
        {props.title}
      </h1>
      <p className="text-amber-950 text-md lg:text-lg  tracking-tight leading-8 xl:leading-10 text-justify ">
        {props.detail}
      </p>
    </div>
  );
};

export default DestinationData;
