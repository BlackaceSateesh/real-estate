/* eslint-disable react/prop-types */
const AboutContent = ({ data }) => {
    const content = data[0];
  return (
    <>
      <div className="AboutContent sm-flex-column">
        <div className="left sm-w-100">
          <h1 className="heading2">{content?.heading}</h1>
          <h1 className="subHeading">{content?.subHeading}</h1>
          {content?.details?.map((e, i) => {
            return (
              <p key={`abCont${i}`} className="para">
                {e}
              </p>
            );
          })}
        </div>
        <div className="right sm-w-100">
            <img src={content?.img} alt="" />
        </div>
      </div>
    </>
  );
};

export default AboutContent;
