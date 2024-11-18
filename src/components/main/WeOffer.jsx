import img1 from "../../assets/weOffer/img1.png";
import img2 from "../../assets/weOffer/img2.png";
import img3 from "../../assets/weOffer/img3.png";
import img4 from "../../assets/weOffer/img4.png";
import img5 from "../../assets/weOffer/img5.png";
import img6 from "../../assets/weOffer/img6.png";
import rightIcon from "../../assets/weOffer/rightIcon.png";
import "../../styles/main/WeOffer.css";
import BigButton from "../UI/BigButton";
const WeOffer = () => {
  const data = [
    {
      img: img1,
      title: "The One",
      desc: "Lorem lorem lorem lorem lorem lorem",
    },
    {
      img: img2,
      title: "Lumia",
      desc: "Lorem lorem lorem lorem lorem lorem",
    },
    {
      img: img3,
      title: "Park View",
      desc: "Lorem lorem lorem lorem lorem lorem",
    },
    {
      img: img4,
      title: "Q1 District",
      desc: "Lorem lorem lorem lorem lorem lorem",
    },
    {
      img: img5,
      title: "Woods",
      desc: "Lorem lorem lorem lorem lorem lorem",
    },
    {
      img: img6,
      title: "Floren",
      desc: "Lorem lorem lorem lorem lorem lorem",
    },
  ];
  return (
    <>
      <div className="WeOffer">
        <div className="inner">
          <div className="top">
            <h4 className="big-heading">We Offer</h4>
            <span className="ylwTag">
              A unified and concrete-solid creative vision is what brings all
              our projects together
            </span>
          </div>
          <div className="inner-wrapper">
            {data?.map((e, i) => {
              return (
                <div key={`offer${i}`} className="offerCard">
                  <div className="main-img">
                    <img src={e?.img} alt="" />
                  </div>
                  <div className="content">
                    <div className="card-top">
                      <h6>{e?.title}</h6>
                      <img src={rightIcon} alt="" />
                    </div>
                    <div className="card-btm">
                      <span>{e?.desc}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="section-inner">
            <div className="left">
              <h6 className="heading">
                Find the perfect apartment & start searching now
              </h6>
              <div className="input-wrapper">
                <input type="text" placeholder="Enter a key word here _" />
              </div>
            </div>
            <BigButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default WeOffer;
