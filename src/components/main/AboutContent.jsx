/* eslint-disable react/prop-types */
const AboutContent = ({ data }) => {
    const content = data[0];
  return (
    <>
      <div className="AboutContent">
        <div className="left">
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
        <div className="right">
            <img src={content?.img} alt="" />
        </div>
      </div>
    </>
  );
};

export default AboutContent;
