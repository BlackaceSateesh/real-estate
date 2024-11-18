import ButtonMain from "../UI/ButtonMain";
import left from "../../assets/masterpiece/left.png";
import right from "../../assets/masterpiece/right.png";
import center from "../../assets/masterpiece/center.png";
import centerLeft1 from "../../assets/masterpiece/centerLeft1.png";
import centerLeft2 from "../../assets/masterpiece/centerLeft2.png";
import centerRight1 from "../../assets/masterpiece/centerRight1.png";
import centerRight2 from "../../assets/masterpiece/centerRight2.png";
import "../../styles/main/Masterpiece.css";
const Masterpiece = () => {
  return (
    <>
      <div className="Masterpiece">
        <div className="section-inner">
          <h4 className="big-heading">Towards Creating a Masterpiece</h4>
          <p className="para">
            All the elements get together to create a perfect ambience, and a
            lifestyle that evokes richness and an understated elegance. The team
            of architects have followed the below mentioned design philosophy to
            conceive Taj Township.
          </p>
          <ButtonMain name={"Explore"} />
          <div className="inner-wrapper">
            <div className="imgCardName">
              <span>Exclusive gifts. Insider access. Special events.</span>
              <div className="cardImg">
                <img src={left} alt="" />
              </div>
            </div>
            <div className="center">
              <div className="cardImg2">
                <div className="cardImg">
                  <img src={centerLeft1} alt="" />
                </div>
                <div className="cardImg">
                  <img src={centerLeft2} alt="" />
                </div>
              </div>
              <div className="centerImg">
                <img src={center} alt="" />
              </div>
              <div className="cardImg2">
                <div className="cardImg">
                  <img src={centerRight1} alt="" />
                </div>
                <div className="cardImg">
                  <img src={centerRight2} alt="" />
                </div>
              </div>
            </div>
            <div className="imgCardName">
              <div className="cardImg">
                <img src={right} alt="" />
              </div>
              <span>ExcBeauty Nature Culture</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Masterpiece;
