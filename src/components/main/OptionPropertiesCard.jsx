/* eslint-disable react/prop-types */
const OptionPropertiesCard = ({ data, count }) => {
  return (
    <>
      <div className="OptionPropertiesCard">
            <span>{`0${count+1}`}</span>
        <div className="imgBox">
          <img src={data?.img} alt="" />
        </div>
        <div className="content">
          <h6>{data?.title}</h6>
          <p>{data?.desc}</p>
        </div>
      </div>
    </>
  );
};

export default OptionPropertiesCard;
