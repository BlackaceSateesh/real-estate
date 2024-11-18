import "../../styles/optionProperties/OptionProperties.css";
import img1 from "../../assets/properties/img1.png";
import img2 from "../../assets/properties/img2.png";
import img3 from "../../assets/properties/img3.png";
import img4 from "../../assets/properties/img4.png";
import OptionPropertiesCard from "./OptionPropertiesCard";
const OptionProperties = () => {
  const data = [
    {
      img: img1,
      title: "A Block",
      desc: "A-1 to A-15 - Farmhouse plots A-16 to A-32 - Luxury Villas",
    },
    {
      img: img2,
      title: "B Block",
      desc: "B-1 to B-15 - Farmhouse plots A-16 to A-32 - Luxury Villas",
    },
    {
      img: img4,
      title: "C Block",
      desc: "C-1 to C-15 - Farmhouse plots A-16 to A-32 - Luxury Villas",
    },
    {
      img: img3,
      title: "D Block",
      desc: "D-1 to D-15 - Farmhouse plots A-16 to A-32 - Luxury Villas",
    },
  ];
  return (
    <>
      <div className="OptionProperties">
        <div className="section-inner">
          <h4 className="big-heading blck">
            Welcome to our options of properties premium multiple{" "}
          </h4>
          <div className="inner-wrapper">
            {data?.map((e, i) => {
              return <OptionPropertiesCard count={i} key={`option${i}`} data={e} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default OptionProperties;
