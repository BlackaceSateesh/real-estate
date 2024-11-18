import { Nav, Tab } from "react-bootstrap";
import { AiOutlineShop } from "react-icons/ai";
import { IoDiamondOutline, IoLocationOutline } from "react-icons/io5";
import { PiSunBold } from "react-icons/pi";
import "../../styles/aboutSection/AboutSection.css";
import tab1 from "../../assets/panel/tab1.png";
import icon1 from "../../assets/facilities/icon1.png";
import icon2 from "../../assets/facilities/icon2.png";
import icon3 from "../../assets/facilities/icon3.png";
import icon4 from "../../assets/facilities/icon4.png";
import icon5 from "../../assets/facilities/icon5.png";
import icon6 from "../../assets/facilities/icon6.png";
import icon7 from "../../assets/facilities/icon7.png";
import icon8 from "../../assets/facilities/icon8.png";
import AboutContent from "./AboutContent";

const AboutSection = () => {
  const tabPanel = [
    {
      name: "PROJECT COMPLEX",
      icon: <IoLocationOutline />,
      data: [
        {
          heading: "Make Your Realty Dreams a Reality",
          subHeading:
            "Lorem ipsum proin gravida nibh vel velit auctor aliollicitudin sed odio sit amet nibh vulputate",
          details: [
            "Lorem ipsum proin gravida nibh vel velit auctor aliollicitudin, lorem quis bibendum auctor nisi elit consequat ipsum, nec sagittis. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris consequat auctor eu in elit.",
          ],
          img: tab1,
        },
      ],
    },
    {
      name: "PROJECT PARK",
      icon: <PiSunBold />,
      data: [
        {
          heading: "Make Your Realty Dreams a Reality",
          subHeading:
            "Lorem ipsum proin gravida nibh vel velit auctor aliollicitudin sed odio sit amet nibh vulputate",
          details: [
            "Lorem ipsum proin gravida nibh vel velit auctor aliollicitudin, lorem quis bibendum auctor nisi elit consequat ipsum, nec sagittis. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris consequat auctor eu in elit.",
          ],
          img: tab1,
        },
      ],
    },
    {
      name: "PROJECT GALLERY",
      icon: <AiOutlineShop />,
      data: [
        {
          heading: "Make Your Realty Dreams a Reality",
          subHeading:
            "Lorem ipsum proin gravida nibh vel velit auctor aliollicitudin sed odio sit amet nibh vulputate",
          details: [
            "Lorem ipsum proin gravida nibh vel velit auctor aliollicitudin, lorem quis bibendum auctor nisi elit consequat ipsum, nec sagittis. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris consequat auctor eu in elit.",
          ],
          img: tab1,
        },
      ],
    },
    {
      name: "PROJECT VILLA",
      icon: <IoDiamondOutline />,
      data: [
        {
          heading: "Make Your Realty Dreams a Reality",
          subHeading:
            "Lorem ipsum proin gravida nibh vel velit auctor aliollicitudin sed odio sit amet nibh vulputate",
          details: [
            "Lorem ipsum proin gravida nibh vel velit auctor aliollicitudin, lorem quis bibendum auctor nisi elit consequat ipsum, nec sagittis. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris consequat auctor eu in elit.",
          ],
          img: tab1,
        },
      ],
    },
  ];
  const facilities = [
    {
      icon: icon1,
      name: "Lux Appliances",
      desc: "Lorem ipsum proin vel velit auctor aliolli citudin",
    },
    {
      icon: icon2,
      name: "Fast WI-FI",
      desc: "Lorem ipsum proin vel velit auctor aliolli citudin",
    },
    {
      icon: icon3,
      name: "Swimming Pool",
      desc: "Lorem ipsum proin vel velit auctor aliolli citudin",
    },
    {
      icon: icon4,
      name: "Parking Place",
      desc: "Lorem ipsum proin vel velit auctor aliolli citudin",
    },
    {
      icon: icon5,
      name: "Gym & Fitness",
      desc: "Lorem ipsum proin vel velit auctor aliolli citudin",
    },
    {
      icon: icon6,
      name: "Outdoor Space",
      desc: "Lorem ipsum proin vel velit auctor aliolli citudin",
    },
    {
      icon: icon7,
      name: "Fireplace",
      desc: "Lorem ipsum proin vel velit auctor aliolli citudin",
    },
    {
      icon: icon8,
      name: "Elevator",
      desc: "Lorem ipsum proin vel velit auctor aliolli citudin",
    },
  ];
  return (
    <>
      <div className="AboutSection">
        <div className="section-inner">
          <h4 className="big-heading">Find the project you love</h4>

          <Tab.Container
            id="left-tabs-example"
            className={"about-tab"}
            defaultActiveKey={tabPanel?.[0]?.name?.replaceAll(" ", "_")}
          >
            <div className="tab-panel">
              <Nav variant="pills" className="panel-wrapper">
                {tabPanel?.map((e, i) => {
                  return (
                    <Nav.Item key={`panel${i}`}>
                      <Nav.Link eventKey={e?.name?.replaceAll(" ", "_")}>
                        {e?.icon} {e?.name}
                      </Nav.Link>
                    </Nav.Item>
                  );
                })}
              </Nav>
            </div>
            <div className="tab-content">
              <Tab.Content>
                {tabPanel?.map((e, i) => {
                  return (
                    <Tab.Pane
                      key={`content${i}`}
                      eventKey={e?.name?.replaceAll(" ", "_")}
                    >
                      <AboutContent data={e?.data} />
                    </Tab.Pane>
                  );
                })}
              </Tab.Content>
            </div>
          </Tab.Container>

          <div className="facilities">
            {facilities?.map((e, i) => {
              return (
                <div key={`fac${i}`} className="fac-card">
                  <div className="icon">
                    <img src={e?.icon} alt="" />
                  </div>
                  <h1>{e?.name}</h1>
                  <p className="para">{e?.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
