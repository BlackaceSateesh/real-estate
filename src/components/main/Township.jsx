import { Nav, Tab } from "react-bootstrap";
import { AiOutlineShop } from "react-icons/ai";
import township from "../../assets/township1.png";
import tajlogo from "../../assets/tajlogo.png";
import TownshipContent from "./TownshipContent";
import '../../styles/main/Township.css'

const Township = () => {
  const tabPanel = [
    {
      name: "THE EMERALB",
      icon: <AiOutlineShop />,
      data: [
        {
          heading: "Crafted Exclusively for Your Lifestyle",
          subHeading: "HERE YOU DON'T JUST ENTER... YOU ARRIVE",
          tagline:
            "Experience the epitome of luxury at Taj Township. Discover your dream villa today.",
          details: [
            "Welcome to Taj Township, where luxury finds its ultimate expression. Every detail of these lavish villas has been meticulously designed to envelop you in an ambiance of unparalleled comfort and sophistication.",
            "From the moment you step into your new home, you'll be surrounded by the opulence you've always dreamed of. These villas are not just residences; they are a sanctuary of elegance, built to match your unique tastes and desires. With every corner radiating warmth and grandeur, you'll feel as if life itself has been tailored just for you.",
            "Life at Taj Township offers more than just a home; it offers a lifestyle where every day feels like a celebration. So, go ahead, indulge a little more than usual—after all, with such unparalleled richness at your fingertips, who wouldn't?",
          ],
          img: township,
        },
      ],
    },
    {
      name: "THE SAPPHIRE",
      icon: <AiOutlineShop />,
      data: [
        {
          heading: "Crafted Exclusively for Your Lifestyle",
          subHeading: "HERE YOU DON'T JUST ENTER... YOU ARRIVE",
          tagline:
            "Experience the epitome of luxury at Taj Township. Discover your dream villa today.",
          details: [
            "Welcome to Taj Township, where luxury finds its ultimate expression. Every detail of these lavish villas has been meticulously designed to envelop you in an ambiance of unparalleled comfort and sophistication.",
            "From the moment you step into your new home, you'll be surrounded by the opulence you've always dreamed of. These villas are not just residences; they are a sanctuary of elegance, built to match your unique tastes and desires. With every corner radiating warmth and grandeur, you'll feel as if life itself has been tailored just for you.",
            "Life at Taj Township offers more than just a home; it offers a lifestyle where every day feels like a celebration. So, go ahead, indulge a little more than usual—after all, with such unparalleled richness at your fingertips, who wouldn't?",
          ],
          img: township,
        },
      ],
    },
    {
      name: "THE RUBY",
      icon: <AiOutlineShop />,
      data: [
        {
          heading: "Crafted Exclusively for Your Lifestyle",
          subHeading: "HERE YOU DON'T JUST ENTER... YOU ARRIVE",
          tagline:
            "Experience the epitome of luxury at Taj Township. Discover your dream villa today.",
          details: [
            "Welcome to Taj Township, where luxury finds its ultimate expression. Every detail of these lavish villas has been meticulously designed to envelop you in an ambiance of unparalleled comfort and sophistication.",
            "From the moment you step into your new home, you'll be surrounded by the opulence you've always dreamed of. These villas are not just residences; they are a sanctuary of elegance, built to match your unique tastes and desires. With every corner radiating warmth and grandeur, you'll feel as if life itself has been tailored just for you.",
            "Life at Taj Township offers more than just a home; it offers a lifestyle where every day feels like a celebration. So, go ahead, indulge a little more than usual—after all, with such unparalleled richness at your fingertips, who wouldn't?",
          ],
          img: township,
        },
      ],
    },
    {
      name: "THE PEARL",
      icon: <AiOutlineShop />,
      data: [
        {
          heading: "Crafted Exclusively for Your Lifestyle",
          subHeading: "HERE YOU DON'T JUST ENTER... YOU ARRIVE",
          tagline:
            "Experience the epitome of luxury at Taj Township. Discover your dream villa today.",
          details: [
            "Welcome to Taj Township, where luxury finds its ultimate expression. Every detail of these lavish villas has been meticulously designed to envelop you in an ambiance of unparalleled comfort and sophistication.",
            "From the moment you step into your new home, you'll be surrounded by the opulence you've always dreamed of. These villas are not just residences; they are a sanctuary of elegance, built to match your unique tastes and desires. With every corner radiating warmth and grandeur, you'll feel as if life itself has been tailored just for you.",
            "Life at Taj Township offers more than just a home; it offers a lifestyle where every day feels like a celebration. So, go ahead, indulge a little more than usual—after all, with such unparalleled richness at your fingertips, who wouldn't?",
          ],
          img: township,
        },
      ],
    },
  ];
  return (
    <>
      <div className="Township">
        <div className="inner">
          <Tab.Container
            id="left-tabs-example"
            className={"about-tab"}
            defaultActiveKey={tabPanel?.[0]?.name?.replaceAll(" ", "_")}
          >
            <div className="tab-panel">
              <div className="head">
                <img src={tajlogo} alt="" />
              </div>
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
                      <TownshipContent data={e?.data} />
                    </Tab.Pane>
                  );
                })}
              </Tab.Content>
            </div>
          </Tab.Container>
        </div>
      </div>
    </>
  );
};

export default Township;
