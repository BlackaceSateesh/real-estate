/* eslint-disable react/prop-types */
const TownshipContent = ({ data }) => {
  const content = data?.[0];
  return (
    <>
      <div className="TownshipContent">
        <div className="left">
          <h4 className="heading2">
            Taj Township: <span>{content?.heading}</span>{" "}
          </h4>
          <h1 className="subHeading">{content?.subHeading}</h1>
          {content?.details?.map((e, i) => {
            return (
              <p key={`para${i}`} className="para">
                {e}
              </p>
            );
          })}
          <h1 className="ylwTag">{content?.tagline}</h1>
          <button>Learn More</button>
        </div>
        <div className="right">
          <img src={content?.img} alt="" />
        </div>
      </div>
    </>
  );
};

export default TownshipContent;
